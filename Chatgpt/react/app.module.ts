// archivo app.module.ts <- registrar módulo en la app
import { Module } from '@nestjs/common';
import { ChatGPTModule } from './chat-gpt/chat-gpt.module';

@Module({
  imports: [ChatGPTModule],
})
export class AppModule {}
