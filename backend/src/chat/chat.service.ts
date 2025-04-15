import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createChat(createChatDto: { name: string }) {
    const { name } = createChatDto;

    const existingChat = await this.prisma.chatRoom.findUnique({
      where: { name },
    });

    if (existingChat) {
      throw new Error('Chat room with this name already exists');
    }

    const chat = await this.prisma.chatRoom.create({
      data: {
        name,
      },
    });

    return chat;
  }

  async findAllChats() {
    return this.prisma.chatRoom.findMany();
  }

  async findChatById(id: string) {
    return this.prisma.chatRoom.findUnique({
      where: { id },
    });
  }

  async updateChat(id: string, name: string) {
    return this.prisma.chatRoom.update({
      where: { id },
      data: { name },
    });
  }

  async deleteChat(id: string) {
    return this.prisma.chatRoom.delete({
      where: { id },
    });
  }
}
