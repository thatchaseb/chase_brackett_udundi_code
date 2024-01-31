<script>
export default {
  name: "DiscoverModal",
  data: () => ({
    isModalOpen: false,
    isDetailsShown: true,

    fadeInDetails: false,
    expandModal: false,
    colapseModal: false,
  }),
  methods: {
    onMoreDetailsClick() {
      //Starting Details Fade-Out Animation and Modal Open Animation
      this.expandModal = true;

      //Rendering Modal
      this.isModalOpen = true;

      //Clean Up After Animations are over
      setTimeout(() => {
        this.expandModal = false;
        this.isDetailsShown = false;
      }, 580);
    },
    onMoreDetailsClose() {
      //Starting Colapse Modal Animation and Details Fade-In Animation
      this.colapseModal = true;
      this.fadeInDetails = true;

      //Rendering Details
      this.isDetailsShown = true;

      //Clean Up After Animations are over
      setTimeout(() => {
        this.isModalOpen = false;
        this.colapseModal = false;
        this.fadeInDetails = true;
      }, 580);
    },
  },
};
</script>

<template>
  <div class="ml-4 text-white sm:ml-8 md:ml-20">
    <!--Header Container-->
    <div class="absolute bottom-[130px] font-didot sm:bottom-[250px]">
      <!--Anchor-->
      <div class="relative">
        <!-- Discover Header -->
        <span
          v-if="isDetailsShown == true"
          class="text-7xl sm:text-9xl md:text-[160px] xl:text-[224px]"
          :class="{
            'animate-fade-in': fadeInDetails,
            'animate-fade-out-fast': expandModal,
          }"
        >
          Explore
        </span>

        <!--More Details & Modal-->
        <span class="absolute bottom-[-80px] left-0">
          <!--Anchor-->
          <div class="relative">
            <!--More Details Icon-->
            <div
              v-if="isModalOpen == false"
              @click="onMoreDetailsClick()"
              class="absolute bottom-2 cursor-pointer p-2"
              :class="{
                'animate-fade-out-fast': expandModal,
              }"
            >
              <!--More Details Icon SVG-->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 transform transition duration-500 hover:scale-125 xl:w-12"
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

            <!--More Details Text-->
            <span
              v-if="isDetailsShown == true"
              @click="onMoreDetailsClick()"
              class="text-md absolute bottom-[10px] left-12 grid cursor-pointer content-center whitespace-nowrap p-2 md:text-lg xl:bottom-4 xl:left-16 xl:text-2xl"
              :class="{
                'animate-fade-out-fast': expandModal,
                'animate-fade-in': fadeInDetails,
              }"
              >More Details</span
            >

            <!--Modal Container-->
            <div class="absolute relative">
              <div
                class="absolute bottom-0 left-[-80px] sm:left-0"
                v-if="isModalOpen == true"
              >
                <!--Animation Expander-->
                <div
                  class="z-40 scale-75 md:scale-90 xl:scale-100"
                  :class="{
                    'animate-expand-modal': expandModal,
                    'animate-colapse-modal': colapseModal,
                  }"
                >
                  <!--Modal Container-->
                  <div
                    class="animate-circle-border relative col-span-5 h-[690px] w-[580px] bg-white"
                    :class="{
                      'animate-expand-circle-border': expandModal,
                      'animate-colapse-circle-border': colapseModal,
                    }"
                  >
                    <!--Close Icon Container-->
                    <div class="absolute right-6 top-6 z-80">
                      <div
                        @click="onMoreDetailsClose()"
                        class="cursor-pointer rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                      >
                        <!--Close Icon SVG-->
                        <svg
                          class="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          ></path>
                        </svg>
                      </div>
                    </div>

                    <!--Modal Main Section-->
                    <div
                      class="animate-fade-in-slow px-8 pb-8 pt-20"
                      :class="{
                        'animate-fade-out-fast': colapseModal,
                      }"
                    >
                      <!--Modal Header-->
                      <div class="font-didot text-7xl text-brand">Explore</div>

                      <!--Modal Body Text-->
                      <div class="py-8 text-lg text-black">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                      </div>

                      <!--Modal Read More Button-->
                      <a href="https://www.chasebrackett.com/coding">
                        <button
                          class="transform bg-gradient-to-r from-brand to-yellow-800 px-14 py-3 text-sm tracking-wide text-white transition duration-500 hover:scale-110 hover:opacity-80"
                        >
                          READ MORE
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
