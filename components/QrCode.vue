<template>
  <div class="flex flex-col gap-3 bg-white p-4 rounded-3xl">
    <div class="flex justify-between">
      <h3 class="lg:text-2xl text-lg font-bold">QR Code</h3>
      <div class="flex gap-1">
        <button class="px-2">
          <img src="~/assets/images/eye.svg" alt="eye" />
        </button>
        <button class="px-2">
          <img src="~/assets/images/send-square.svg" alt="eye" />
        </button>
        <button class="px-2">
          <img src="~/assets/images/document-download.svg" alt="eye" />
        </button>
        <button @click="isOpen = !isOpen" class="px-2 flex lg:hidden">
          {{ isOpen ? "▼" : "▲" }}
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-3 lg:!flex" :class="{ '!hidden': !isOpen }">
      <div class="flex items-center gap-2 rounded-[18px] p-4 bg-accent-20">
        <img src="~/assets/images/document-download-orange.svg" alt="eye" />
        <p class="text-gray-100 text-xs">
          Download the QR code or share it with your friends.
        </p>
      </div>
      <div class="bg-primary-gradient p-4 rounded-[25px]">
        <div class="p-4 bg-white flex items-center flex-col rounded-[18px]">
          <img src="~/assets/images/logo.svg" alt="logo" />
          <h2 class="lg:text-2xl text-lg font-bold">Hala Ahmed</h2>
          <img src="~/assets/images/World-Static.png" alt="" />
          <p class="text-sm text-gray-100">Follow Us on Mazaady</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false);
</script>
