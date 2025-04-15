import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ChatParticipantService } from './chat-participant.service';
import { ChatParticipantController } from './chat-participant.controller';

@Module({
  controllers: [ChatParticipantController],
  providers: [ChatParticipantService, PrismaService],
})
export class ChatParticipantModule {}
