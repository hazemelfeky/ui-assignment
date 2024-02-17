<script setup>
const drawer = ref(false);
</script>
<template>
  <div class="bg-white py-3">
    <div class="container flex justify-between">
      <div class="flex lg:gap-10 gap-2">
        <button class="lg:hidden" @click="drawer = true">
          <img src="~/assets/images/menu.svg" alt="notification" />
        </button>
        <img src="~/assets/images/logo.svg" alt="logo" />
        <ul class="gap-10 list-none p-0 items-center hidden lg:flex">
          <li class="text-lg cursor-pointer text-primary-100 font-bold">
            Home
          </li>
          <li class="text-lg cursor-pointer">Blog</li>
          <li class="text-lg cursor-pointer">Gifts</li>
        </ul>
      </div>
      <div class="flex gap-6">
        <div class="flex items-center lg:gap-6 gap:2">
          <button class="lg:pr-6 px-2 lg:border-r border-x-accent-20">
            <img src="~/assets/images/search-normal.svg" alt="search" />
          </button>
          <button class="lg:pr-6 px-2 lg:border-r border-x-accent-20">
            <img src="~/assets/images/notification.svg" alt="notification" />
          </button>
          <button
            class="px-2 ml-2 lg:ml-0 bg-primary-gradient lg:w-10 lg:h-10 h-6 w-6 rounded-full"
          ></button>
        </div>
        <div class="hidden lg:flex gap-6">
          <button class="main-btn">
            <img src="~/assets/images/add-circle.svg" alt="add" />
            <span>Add New Product</span>
          </button>
          <button>
            <img src="~/assets/images/global.svg" alt="global" />
          </button>
          <button class="text-lg font-bold">EN</button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="fixed h-full inset-0 w-full bg-black opacity-40 hidden z-20"
    :class="{ '!block': drawer }"
    @click="drawer = false"
  ></div>
  <div
    class="fixed h-full w-[20rem] max-w-[90%] bg-primary-100 top-0 left-0 -translate-x-[20rem] z-30 transition-all flex flex-col justify-evenly items-center"
    :class="{ '!translate-x-0': drawer }"
  >
    <a class="text-lg cursor-pointer text-white">Home</a>
    <a class="text-lg cursor-pointer text-white">Blog</a>
    <a class="text-lg cursor-pointer text-white">Gifts</a>
  </div>
</template>

<style lang="scss" scoped></style>
