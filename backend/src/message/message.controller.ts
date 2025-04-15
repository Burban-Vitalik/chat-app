import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post()
  create(@Body() body: { content: string; senderId: string; roomId: string }) {
    return this.messageService.create(body);
  }

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: { content?: string; isBlocked?: boolean },
  ) {
    return this.messageService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.messageService.delete(id);
  }
}
