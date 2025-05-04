<template>
  <div class="flex flex-col space-y-2">
    <div v-if="isMine" class="flex justify-end">
      <div class="bg-blue-200 text-black p-2 mb-2 rounded-lg max-w-xs ">
        {{ message }}
      </div>
    </div>
    <div v-else class="flex">
      <div class="bg-gray-300 text-black p-2 mb-2 rounded-lg max-w-xs">
        <span class="capitalize">{{ message }}</span>
        <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message: string;
  isMine: boolean;
  image?: string;
}

defineProps<Props>();
</script>
