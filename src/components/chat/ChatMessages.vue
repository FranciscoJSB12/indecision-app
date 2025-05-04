<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(
  () => messages.length,
  async () => {
    await nextTick();

    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    });
  },
);
</script>
