<template>
  <main>
    <NavigationBar />
    <Nuxt />
    <footer-section />
    <CookieAlert @click="closeModal" :isOpen="isOpen" />
  </main>
</template>
<script>
import CookieAlert from "@/components/CookieAlert.vue";
export default {
  components: {
    CookieAlert,
  },
  data() {
    return {
      isOpen: true,
    };
  },
  mounted() {
    console.log(process.browser, "here");
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
}
</style>
