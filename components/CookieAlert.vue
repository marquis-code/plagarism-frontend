<template>
  <div
    v-if="isOpen"
    class="fixed bottom-0 left-0 lg:flex items-center p-4 bg-gray-100 shadow-sm justify-center w-full"
  >
    <div class="text-5xl pb-2 leading-none">🍪</div>
    <div class="lg:mx-8">
      <p>
        Can I use cookies for analytics? Read
        <nuxt-link class="text-link" to="/privacy-policy"
          >the privacy policy</nuxt-link
        >
        for more information.
      </p>
    </div>
    <div class="flex justify-center mt-4 lg:mt-0 gap-x-3">
      <button class="button ml-2 md:ml-0" @click="accept">Yes, sure</button>
      <button class="button md:ml-2" @click="deny">&times;</button>
    </div>
  </div>
</template>

<script>
import { bootstrap } from "vue-gtag";
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", false);
      }
    },
    accept() {
      if (process.browser) {
        localStorage.setItem("GDPR:accepted", true);
        this.isOpen = false;
        window.location.reload();
        // bootstrap().then((gtag) => {
        //   this.isOpen = false;
        //   this.$emit('close')
        //   // localStorage.setItem("GDPR:accepted", true);
        //   // window.location.reload();
        // });
      }
    },
  },
};
</script>

<style></style>
