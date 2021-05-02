import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsoleModule } from 'nestjs-console';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    ConsoleModule,
    MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
    ])
],
})
export class UsersModule {}
