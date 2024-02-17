<template>
  <div class="flex flex-col gap-3 bg-white p-4 rounded-3xl">
    <div class="flex gap-1 lg:gap-3 flex-col">
      <div
        class="w-[80px] lg:w-[100px] h-[80px] lg:h-[100px] lg:rounded-3xl rounded-[20px] bg-primary-gradient"
      ></div>
      <h3 class="font-bold lg:text-2xl text-lg text-gray-100">Hala Ahmed</h3>
      <p class="text-sm text-gray-40">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </p>
    </div>
    <div class="flex gap-4">
      <div class="px-2 py-3 rounded-[18px] bg-accent-20 items-center flex-1">
        <div class="flex gap-2">
          <img src="~/assets/images/user-tick.svg" alt="" />
          <div>
            <p class="text-gray-100 text-sm font-bold">5</p>
            <p class="text-accent-100 text-xs">Following</p>
          </div>
        </div>
      </div>
      <div class="px-2 py-3 rounded-[18px] bg-accent-20 items-center flex-1">
        <div class="flex gap-2">
          <img src="~/assets/images/profile-2user.svg" alt="" />
          <div>
            <p class="text-gray-100 text-sm font-bold">20</p>
            <p class="text-accent-100 text-xs">Followers</p>
          </div>
        </div>
      </div>
      <div class="px-2 py-3 rounded-[18px] bg-accent-20 items-center flex-1">
        <div class="flex gap-2">
          <img src="~/assets/images/magic-star.svg" alt="" />
          <div>
            <p class="text-gray-100 text-sm font-bold">
              4.2<span class="mx-1 text-[10px] text-gray-40">( 15 )</span>
            </p>
            <p class="text-accent-100 text-xs">Rate</p>
          </div>
        </div>
      </div>
    </div>
    <button class="main-btn justify-center">Follow</button>
  </div>
</template>
