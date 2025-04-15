import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  create(data: { content: string; senderId: string; roomId: string }) {
    return this.prisma.message.create({ data });
  }

  findAll() {
    return this.prisma.message.findMany({
      include: { sender: true, room: true },
    });
  }

  findOne(id: string) {
    return this.prisma.message.findUnique({
      where: { id },
      include: { sender: true, room: true },
    });
  }

  update(id: string, data: { content?: string; isBlocked?: boolean }) {
    return this.prisma.message.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.message.delete({
      where: { id },
    });
  }
}
