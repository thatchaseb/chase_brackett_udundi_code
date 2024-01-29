<script setup>
import DiscoverModal from "./DiscoverModal.vue";
import SocialIcon from "./SocialIcon.vue";
</script>

<template>
  <!--Main Grid-->
  <div class="grid h-[40rem] grid-cols-12">
    <!--Rose Background Grid-->
    <div class="col-span-4 grid grid-cols-12 content-center bg-rose-950">
      <!--Col Span Spacer-->
      <div class="col-span-6"></div>

      <!--Modal Container-->
      <div class="col-span-6">
        <DiscoverModal />
      </div>
    </div>

    <!--Tree Background Grid-->
    <div class="col-span-8 grid grid-cols-12 place-content-end bg-blue-400">
      <!--Col Span Spacer-->
      <div class="col-span-10"></div>

      <!--Social Container-->
      <div class="col-span-2">
        <SocialIcon />
        <SocialIcon />
      </div>
    </div>
  </div>
</template>
