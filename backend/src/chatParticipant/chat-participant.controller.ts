import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { ChatParticipantService } from './chat-participant.service';

@Controller('chats/:roomId/participants')
export class ChatParticipantController {
  constructor(
    private readonly chatParticipantService: ChatParticipantService,
  ) {}

  @Get()
  async getParticipants(@Param('roomId') roomId: string) {
    return this.chatParticipantService.getParticipantsByRoomId(roomId);
  }

  @Post()
  async addParticipant(
    @Param('roomId') roomId: string,
    @Body('userId') userId: string,
  ) {
    return this.chatParticipantService.addParticipant(roomId, userId);
  }

  @Delete()
  async removeParticipant(
    @Param('roomId') roomId: string,
    @Body('userId') userId: string,
  ) {
    return this.chatParticipantService.removeParticipant(roomId, userId);
  }
}
