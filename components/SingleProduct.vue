<template>
  <div class="flex justify-between px-2 relative">
    <div class="flex gap-2">
      <div
        class="relative rounded-[15px] lg:rounded-[28px] overflow-hidden lg:w-[145px] lg:h-[127px] w-[87px] h-[72px]"
      >
        <img
          src="~/assets/images/product.jpg"
          alt="product"
          class="lg:w-[145px] lg:h-[127px] w-[87px] h-[72px] object-cover"
        />
        <span
          class="absolute bottom-0 right-0 bg-primary-100 text-[8px] lg:text-xs rounded-tl-full lg:px-6 lg:py-2 px-3 py-1 text-white"
          :class="{ '!bg-accent-100': product.isHot }"
          >{{ product.isHot ? "Hot sale" : "Live Action" }}</span
        >
      </div>
      <div class="flex flex-col gap-2 justify-center">
        <p class="text-[12px] lg:text-lg text-gray-100">
          {{ product.name }}
        </p>
        <p class="text-[12px] lg:text-lg text-gray-40">
          starting price
          <span class="text-[12px] lg:text-2xl text-gray-100 font-bold"
            >1000 EGP</span
          >
        </p>
        <div class="flex gap-2 flex-col lg:flex-row lg:items-center">
          <span class="text-[12px] lg:text-lg text-gray-40">Lot Starts In</span>
          <div class="flex gap-2 items-center">
            <button
              class="lg:w-[105px] w-[57px] py-1 bg-accent-20 text-accent-100 text-[8px] lg:text-sm rounded-3xl"
            >
              <span class="text-[12px] lg:text-xl">2</span> Days
            </button>
            <button
              class="lg:w-[105px] w-[57px] py-1 bg-accent-20 text-accent-100 text-[8px] lg:text-sm rounded-3xl"
            >
              <span class="text-[12px] lg:text-xl">10</span> Hours
            </button>
            <button
              class="lg:w-[105px] w-[57px] py-1 bg-accent-20 text-accent-100 text-[8px] lg:text-sm rounded-3xl"
            >
              <span class="text-[12px] lg:text-xl">50</span> Minutes
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="flex p-1 absolute lg:left-0 left-4 lg:top-0 top-2 lg:relative bg-white lg:p-0 lg:bg-transparent rounded-full"
      @click="isLiked = !isLiked"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        class="lg:w-6 lg:h-6 w-[14px] h-[14px]"
        :class="{ 'fill-primary-100': isLiked }"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z"
          stroke="#292D32"
          :class="{ 'stroke-0': isLiked }"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object },
});
const isLiked = ref(false);
</script>

<style lang="scss" scoped></style>
