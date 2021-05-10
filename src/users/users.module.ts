import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsoleModule } from 'nestjs-console';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';

@Module({
    providers: [UsersService],
    exports: [UsersService],
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (config: ConfigService) => {
                console.log(config.get('DATABASE_URL'));
                return {
                    uri: 'mongodb://root:root@mongo:27017/admin',
                };
            },
            inject: [ConfigService],
        }),
        ConsoleModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
})
export class UsersModule {}
