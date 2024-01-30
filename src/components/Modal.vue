<script>
export default {
  name: "Modal",
  data: () => ({}),
};
</script>

<template>
  <div class="animate-expand-modal z-40">
    <div
      class="animate-circle-border relative col-span-5 h-[690px] w-[580px] bg-white"
    >
      <div class="absolute right-6 top-6">
        <button
          @click="$emit('close-modal-clicked')"
          type="button"
          class="rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            ></path>
          </svg>
        </button>
      </div>

      <!--Modal Body-->
      <div class="animate-fade-in-slow px-8 pb-8 pt-20">
        <!--Modal Header-->
        <div class="text-brand font-didot text-5xl">Explore</div>

        <!--Modal Body Text-->
        <div class="text-md py-4 text-black">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur?
        </div>

        <!--Modal Read More Button-->
        <button
          class="from-brand bg-gradient-to-r to-yellow-800 px-14 py-3 text-sm tracking-wide text-white hover:opacity-80"
        >
          READ MORE
        </button>
      </div>
    </div>
  </div>
</template>
