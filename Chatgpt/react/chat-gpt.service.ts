import { Injectable, HttpService } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatGPTService {
  private readonly chatGPTUrl: string = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  constructor(private httpService: HttpService) {}

  async sendMessage(prompt: string): Promise<any> {
    try {
      const response = await axios.post(
        this.chatGPTUrl,
        {
          model: "text-davinci-003", // o el modelo que desees usar
          prompt: prompt,
          max_tokens: 150,
        },
        {
          headers: {
            'Authorization': `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`,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      throw error;
    }
  }
}
