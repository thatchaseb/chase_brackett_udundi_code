<script>
import Modal from "./Modal.vue";

export default {
  name: "DiscoverModal",
  components: {
    Modal,
  },
  data: () => ({
    isModalOpen: false,
    isDetailsShown: true,
    fadeInDetails: false,
    fadeOutDetails: false,
    fadeOutModal: false,
  }),
  methods: {
    onMoreDetailsClick() {
      this.isModalOpen = true;
      this.fadeInAnimation = true;
      setTimeout(() => {
        this.isDetailsShown = false;
      }, 500);
    },
    onMoreDetailsClose() {
      this.isDetailsShown = true;
      setTimeout(() => {
        this.isModalOpen = false;
      }, 500);
    },
  },
};
</script>

<template>
  <div class="ml-20 text-white">
    <!--Header Container-->
    <div class="font-didot absolute bottom-[330px] md:bottom-[250px]">
      <div class="relative">
        <span
          v-if="isDetailsShown == true"
          class="animate-fade-in text-7xl md:text-[160px] xl:text-[224px]"
          >Explore</span
        >
        <span class="absolute bottom-[-80px] left-0">
          <div class="relative">
            <div
              v-if="isModalOpen == false"
              @click="onMoreDetailsClick()"
              class="absolute bottom-2 cursor-pointer p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 xl:w-12"
                viewBox="0 0 43 43"
              >
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M29.295 22.139h-6.833v7.17h-1.934v-7.17h-6.833v-1.815h6.833v-7.11h1.934v7.11h6.833zM21.5 0C9.626 0 0 9.626 0 21.5S9.626 43 21.5 43 43 33.374 43 21.5A21.5 21.5 0 0 0 21.5 0z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <span
              v-if="isDetailsShown == true"
              @click="onMoreDetailsClick()"
              class="text-md animate-fade-in absolute bottom-[10px] left-12 grid cursor-pointer content-center whitespace-nowrap p-2 md:text-lg xl:text-2xl"
              >More Details</span
            >
            <div class="absolute relative">
              <div
                class="absolute bottom-[0px] left-[0px]"
                v-if="isModalOpen == true"
              >
                <Modal @close-modal-clicked="onMoreDetailsClose()" />
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>

    <!--Detail Button Container-->
    <div class="absolute top-[766px]">
      <!--Detail Button-->
    </div>
  </div>
</template>
