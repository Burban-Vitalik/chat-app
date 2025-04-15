import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async createChat(@Body() createChatDto: { name: string }) {
    return this.chatService.createChat(createChatDto);
  }

  @Get()
  async findAllChats() {
    return this.chatService.findAllChats();
  }

  @Get(':id')
  async findChatById(@Param('id') id: string) {
    return this.chatService.findChatById(id);
  }

  @Put(':id')
  async updateChat(
    @Param('id') id: string,
    @Body() updateChatDto: { name: string },
  ) {
    return this.chatService.updateChat(id, updateChatDto.name);
  }

  @Delete(':id')
  async deleteChat(@Param('id') id: string) {
    return this.chatService.deleteChat(id);
  }
}
