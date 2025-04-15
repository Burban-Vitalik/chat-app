import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { ChatParticipantModule } from './chatParticipant/chat-participant.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    ChatModule,
    MessageModule,
    ChatParticipantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
