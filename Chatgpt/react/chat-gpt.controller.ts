import { Module, HttpModule } from './chatgpt/react/app.module.ts';
import { ChatGPTService } from './chat-gpt.service';
import { ChatGPTController } from './chat-gpt.controller';

@Module({
  imports: [HttpModule],
  providers: [ChatGPTService],
  controllers: [ChatGPTController],
})
export class ChatGPTModule {}
