<template>
  <nav
    class="flex-row mx-auto top-0 absolute z-50 w-full h-18 items-center justify-center mx-2 my-3 rounded bg-gradient-to-r from-[#A30F1D] to-[#986300]"
  >
    <div
      class="flex flex-row mx-auto my-auto items-center justify-between p-3 m-4 w-[80%]"
    >
      <div class="flex flex-row w-full h-full items-center gap-x-3 ml-4">
        <div class="rounded-full">
          <img
            class="rounded-full w-[4rem] h-[4rem]"
            src="../assets/img/african_landing_page.jpeg"
            alt="..."
          />
        </div>
        <p
          class="text-sm font-bold leading-relaxed inline-block mr-4 mt-4 py-2 whitespace-nowrap sentencecase text-white"
        >
          <span class="text-xl">O</span> p e n <span class="text-xl">S</span> o
          u r c e <span class="text-xl">A</span> f r i c a
        </p>
      </div>
    </div>
    <div
      class="flex flex-row mx-auto lg:flex flex-grow bg-white lg:bg-transparent lg:shadow-none"
    >
      <button
        class="bg-white text-gray-800 active:bg-gray-100 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:bg-[#A30F1D] hover:text-white outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
        type="button"
        style="transition: all 0.15s ease 0s"
      >
        <i
          class="fas fa-arrow-alt-circle-down font-bold text-xl hover:text-white"
        ></i>
        Join Our OpenSource Team.
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
