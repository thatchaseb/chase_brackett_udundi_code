<script>
import DiscoverModal from "./DiscoverModal.vue";

export default {
  name: "Hero",
  components: {
    DiscoverModal,
  },
  data: () => ({}),
  async mounted() {},
};
</script>

<template>
  <!--Main Grid-->
  <div
    class="relative grid h-[680px] grid-cols-12 sm:h-[800px] md:h-[900px] xl:h-[1024px]"
  >
    <!--Rose Background Grid-->
    <div
      class="col-span-2 grid grid-cols-12 content-center bg-brand sm:col-span-3 md:col-span-4"
    >
      <!--Col Span Spacer-->
      <div class="col-span-2"></div>

      <!--Modal Container-->
      <div class="z-20 col-span-8">
        <DiscoverModal />
      </div>
    </div>

    <!--Tree Background-->
    <img
      src="../assets/Coding-Challenge-Image.jpg"
      class="absolute -z-20 col-span-11 h-[680px] w-full object-cover object-right sm:h-[800px] md:h-[900px] xl:h-[1024px]"
      alt="Orange Trees"
    />

    <!--Social Icons Grid-->
    <div class="z-0 col-span-10 grid grid-cols-12 sm:col-span-9 md:col-span-8">
      <!--Col Span Spacer-->
      <div class="col-span-11"></div>

      <!--Social Icons Container-->
      <div class="col-span-1 m-4 place-self-end text-white">
        <!--Icon Container-->
        <div class="mx-2 my-4 md:mx-4 md:my-6 xl:mx-6 xl:my-8">
          <!--Facebook SVG-->
          <a href="https://www.chasebrackett.com/coding">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 transform cursor-pointer drop-shadow-md transition duration-300 hover:scale-125 md:w-12 xl:w-14"
              viewBox="0 0 68 67"
            >
              <g>
                <g>
                  <path
                    fill="#fff"
                    d="M37.294 33.712c0 4.547-.004 8.945.034 13.355 0 1.892-.038 3.781 0 5.674.015.769-.286 1.031-1.06 1.031a169.463 169.463 0 0 0-6.574 0c-.894.018-1.127-.318-1.127-1.146.034-5.97 0-11.935.034-17.9 0-.858-.233-1.165-1.127-1.05-.75.05-1.503.057-2.254.022-.541.007-.808-.185-.808-.78.027-1.86.027-3.721 0-5.582-.008-.584.214-.783.785-.783.842.022 1.687-.037 2.52.022.68.048.888-.166.888-.835 0-1.797-.03-3.604.139-5.393.368-3.944 3.328-6.617 7.352-6.764 2.16-.07 4.32-.085 6.477-.156.781-.025 1.063.263 1.04 1.035-.049 1.653-.067 3.308 0 4.96.038.903-.338 1.11-1.157 1.062-.894-.06-1.8-.026-2.697 0-1.744.059-2.367.632-2.495 2.336-.068.968-.034 1.944-.068 2.916-.022.61.275.74.83.74 1.534 0 3.063.021 4.595 0 .665-.008.898.22.82.897a146.208 146.208 0 0 0-.542 5.545c-.048.624-.334.794-.916.794h-4.689zM35.001.014C16.217-.516.553 14.045.014 32.54c-.539 18.494 14.25 33.917 33.034 34.448 19.492.5 35.06-15.014 34.95-33.452C68.09 15.265 53.198.502 35.002.014z"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>

        <!--Icon Container-->
        <div class="mx-2 my-4 md:mx-4 md:my-6 xl:mx-6 xl:my-8">
          <!--Instagram SVG-->
          <a href="https://www.chasebrackett.com/coding">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 transform cursor-pointer drop-shadow-md transition duration-500 hover:scale-125 md:w-12 xl:w-14"
              viewBox="0 0 73 74"
            >
              <g>
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M42.617 24.948a2.686 2.686 0 0 1 .59-2.92 2.667 2.667 0 0 1 2.917-.569 2.68 2.68 0 0 1 1.638 2.487 2.706 2.706 0 0 1-2.68 2.665 2.673 2.673 0 0 1-2.465-1.663zM24.128 39.07a10.675 10.675 0 0 1 2.318-11.623 10.636 10.636 0 0 1 11.611-2.297 10.663 10.663 0 0 1 6.558 9.867c-.03 5.873-4.784 10.623-10.648 10.641-4.308 0-8.192-2.6-9.839-6.588zm26.425-15.786c-1.102-3.31-3.974-5.28-7.541-5.284H24.987a8.848 8.848 0 0 0-2.688.412c-3.288 1.103-5.279 3.956-5.286 7.5-.017 6.058-.017 12.113 0 18.165a7.65 7.65 0 0 0 3.258 6.471 7.767 7.767 0 0 0 4.735 1.45h17.951a8.165 8.165 0 0 0 2.773-.416c3.27-1.166 5.257-3.983 5.26-7.534 0-6.042.022-12.083 0-18.124a8.634 8.634 0 0 0-.437-2.64z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#fff"
                      d="M55.292 45.274c-.026.147-.041.297-.078.443-.281 1.096-.414 2.251-.876 3.28-2.07 4.546-5.628 6.981-10.575 7.049-6.168.09-12.339.026-18.51.019A10.948 10.948 0 0 1 18.697 54c-3.305-2.393-4.962-5.684-4.973-9.8-.017-6.153-.017-12.304 0-18.455-.008-.795.067-1.588.222-2.367 1.032-4.78 3.897-7.83 8.541-9.143.607-.173 1.246-.233 1.849-.35h20.3c.425.072.857.117 1.275.21 4.71 1.078 7.732 3.97 9.022 8.694.17.615.23 1.26.34 1.876zM34.504 1C20.954.998 8.738 9.281 3.552 21.986c-5.186 12.704-2.321 27.329 7.26 37.053 9.58 9.725 23.989 12.635 36.507 7.372C59.838 61.15 68 48.751 68 35 68 16.224 53.004 1.002 34.504 1z"
                    />
                  </g>
                  <g>
                    <path
                      fill="#fff"
                      d="M34 28a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
