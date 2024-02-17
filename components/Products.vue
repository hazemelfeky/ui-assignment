<template>
  <div class="flex flex-col gap-4 bg-white p-4 rounded-3xl">
    <div class="flex justify-between">
      <div class="flex gap-2">
        <span
          class="text-sm text-center flex items-center justify-center w-[108px] h-[35px] rounded-[14px] border bg-accent-20 border-accent-100 text-accent-100"
          >Products</span
        >
        <span
          class="text-sm text-center flex items-center justify-center w-[108px] h-[35px] rounded-[14px] border border-gray-20 text-gray-100"
          >Articles</span
        >
        <span
          class="text-sm text-center flex items-center justify-center w-[108px] h-[35px] rounded-[14px] border border-gray-20 text-gray-100"
          >Reviews</span
        >
      </div>
      <button
        class="main-btn lg:relative lg:bottom-0 lg:right-0 fixed bottom-8 right-4"
      >
        <img src="~/assets/images/add-circle.svg" alt="add" />
        <span>Add Review</span>
      </button>
    </div>
    <div class="flex gap-1 items-center">
      <h2 class="text-2xl lg:text-[2rem] text-gray-100 font-bold">Products</h2>
      <span class="text-sm font-normal">( 12 )</span>
    </div>
    <div class="flex flex-col gap-8">
      <SingleProduct
        v-for="(product, index) in products"
        :keys="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    name: "Six-piece clothing set (blouse - pants - hat and ...",
    isHot: false,
  },
  { name: "Jeep Car, new, used for only one time", isHot: true },
  {
    name: "Six-piece clothing set (blouse - pants - hat and ...",
    isHot: false,
  },
  { name: "Jeep Car, new, used for only one time", isHot: false },
  {
    name: "Six-piece clothing set (blouse - pants - hat and ...",
    isHot: false,
  },
  { name: "Jeep Car, new, used for only one time", isHot: true },
];
</script>
