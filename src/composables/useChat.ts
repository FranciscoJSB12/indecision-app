import { ref } from 'vue';
import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getUserResponse = async (): Promise<YesNoResponse> => {
    const resp = await fetch('https://yesno.wtf/api');

    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  const sendMessage = async (text: string): Promise<void> => {
    messages.value.push({
      id: new Date().getTime(),
      message: text,
      isMine: true,
    });

    if (!text.endsWith('?')) return;

    await sleep(1.5);

    const { answer, image } = await getUserResponse();

    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      isMine: false,
      image: image,
    });
  };

  return {
    messages,
    sendMessage,
  };
};
