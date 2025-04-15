import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChatParticipantService {
  constructor(private prisma: PrismaService) {}

  async getParticipantsByRoomId(chatRoomId: string) {
    return this.prisma.chatParticipant.findMany({
      where: { chatRoomId },
      include: {
        user: true,
      },
    });
  }

  async addParticipant(chatRoomId: string, userId: string) {
    return this.prisma.chatParticipant.create({
      data: {
        chatRoomId,
        userId,
      },
    });
  }

  async removeParticipant(chatRoomId: string, userId: string) {
    return this.prisma.chatParticipant.delete({
      where: {
        chatRoomId_userId: {
          chatRoomId,
          userId,
        },
      },
    });
  }
}
