import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { SubscribersService } from '../subscribers/subscribers.service';
import { MapperDto } from './dto/mapper.dto';
import { MappersController } from './mappers.controller';
import { MappersService } from './mappers.service';

describe('Publishers Controller', () => {
    let mappersController: MappersController;
    let mappersService: MappersService;
    let subscribersService: SubscribersService;

    const date = new Date();

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [MappersController],
            providers: [
                {
                    provide: MappersService,
                    useValue: {
                        findAll: jest.fn(),
                        create: jest.fn((arg: MapperDto) => ({
                            id: 'New',
                            createdAt: date,
                            ...arg,
                        })),
                        count: jest.fn(),
                        getById: jest.fn(),
                        update: jest.fn(),
                        delete: jest.fn(),
                        mapPayloadToFormat: jest.fn(),
                    },
                },
                {
                    provide: SubscribersService,
                    useValue: {
                        removeAllSubscriptionsWithMapper: jest.fn(),
                    },
                },
            ],
        }).compile();
        mappersController = module.get<MappersController>(MappersController);
        mappersService = module.get<MappersService>(MappersService);
        subscribersService = module.get<SubscribersService>(SubscribersService);
    });

    it('should create a new Mapper', async () => {
        const spyOn = jest.spyOn(mappersService, 'create');
        await mappersController.create({ name: '', format: {}, sample: {} });
        expect(spyOn).toBeCalledTimes(1);
    });

    it('should get all Publishers', async () => {
        const spyOn = jest.spyOn(mappersService, 'findAll');
        await mappersController.findAll();
        expect(spyOn).toBeCalledTimes(1);
    });

    it('should get a Publisher', async () => {
        const spyOn = jest.spyOn(mappersService, 'getById');
        try {
            await mappersController.findById('invalid');
        } catch (e) {
            expect(e).toBeInstanceOf(NotFoundException);
            expect(spyOn).toBeCalledTimes(0);
        }
        await mappersController.findById('605f1bb2650c2d4d134d04c2');
        expect(spyOn).toBeCalledTimes(1);
    });

    it('should update a Publisher', async () => {
        const spyOn = jest.spyOn(mappersService, 'update');
        await mappersController.update('publisherId', {
            name: '',
            format: {},
            sample: {},
        });
        expect(spyOn).toBeCalledTimes(1);
    });

    it('should delete a Publisher', async () => {
        const spyOnDelete = jest.spyOn(mappersService, 'delete');
        const spyOnRemoveSubscriptions = jest.spyOn(
            subscribersService,
            'removeAllSubscriptionsWithMapper',
        );
        await mappersController.delete('invalid');
        expect(spyOnRemoveSubscriptions).toBeCalledTimes(0);
        expect(spyOnDelete).toBeCalledTimes(0);
        await mappersController.delete('605f1bb2650c2d4d134d04c2');
        expect(spyOnDelete).toBeCalledTimes(1);
        expect(spyOnRemoveSubscriptions).toBeCalledTimes(1);
    });
});
