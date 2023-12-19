<template>
  <main
    class="lg:flex justify-between items-start gap-x-10 space-y-10 md:space-y-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:mt-32 mb-10 pb-20 lg:pb-0 md:mb-0"
  >
    <div class="md:w-6/12 space-y-6 lg:space-y-10">
      <img
        src="@/assets/img/animae2.png"
        alt=""
        class="lg:h-56 w-full object-cover object-center pt-10"
      />
      <div>
        <button
          class="text-gray-50 px-6 py-3 font-bold text-sm rounded-full border-2 border-gray-700"
        >
          #1 for students
        </button>
      </div>
      <div>
        <h1 class="text-4xl lg:text-6xl font-bold text-gray-50 max-w-lg">
          Plagiarism Checker
        </h1>
      </div>
      <div>
        <p class="text-sm lg:text-lg text-gray-50 max-w-lg">
          Plagiarism Checker detects Plagiarism in your text, checks grammar and
          checks for other writing issues
        </p>
      </div>
    </div>
    <form
      v-if="!report"
      class="md:w-6/12 space-y-8 shadow-md border !border-gray-800 rounded-lg p-3 lg:p-6"
      @submit.prevent="checkForPlagarism"
    >
      <p class="font-medium text-gray-50 text-sm lg:text-base">
        Please fill the form below to check your document for errors and
        plagiarism.
      </p>
      <div class="w-full space-y-3">
        <label class="text-sm font-bold text-gray-500 tracking-wide"
          >Document Title</label
        >
        <input
          type="text"
          v-model="form.title"
          placeholder="Enter document title"
          class="w-full bg-gray-50 text-sm lg:text-base rounded-md px-2 py-3 outline-none border border-gray-200"
        />
      </div>
      <div class="w-full space-y-3">
        <label class="text-sm font-bold text-gray-500 tracking-wide"
          >Author</label
        >
        <input
          type="text"
          v-model="form.author"
          placeholder="Enter document author"
          class="w-full bg-gray-50 text-sm lg:text-base rounded-md px-2 py-3 outline-none border border-gray-200"
        />
      </div>
      <div class="w-full space-y-3">
        <label class="text-sm font-bold text-gray-500 tracking-wide"
          >Write up</label
        >
        <small class="text-sm text-red-500"
          >(please ensure 25,000 word limit)</small
        >
        <textarea
          v-model="form.body"
          cols="6"
          rows="6"
          class="w-full bg-gray-50 resize-none rounded-md px-4 py-3 outline-none border border-gray-200"
        />
      </div>
      <div class="w-full text-white">
        <button
          :disabled="!isFormEmpty"
          :class="[!isFormEmpty ? 'cursor-not-allowed opacity-25' : '']"
          class="bg-black disabled:cursor-not-allowed disabled:opacity-25 text-white text-sm py-3 w-full rounded-md"
        >
          {{ processing ? "processing..." : " Proceed" }}
        </button>
      </div>
    </form>
    <div v-else class="md:w-6/12 space-y-8 rounded-md bg-white shadow-md p-6">
      <h1 class="font-bold text-gray-800 text-lg">Plagarism Result preview</h1>
      <div class="text-gray-800 space-y-1">
        <p class="font-bold text-gray-900">Title:</p>
        <p>{{ form.title }}</p>
      </div>
      <div class="text-gray-800 space-y-1">
        <p class="font-bold text-gray-900">Author:</p>
        <p>{{ form.author }}</p>
      </div>
      <div class="text-sm text-gray-800 space-y-1">
        <p class="font-bold text-gray-900">Content:</p>
        <p>{{ form.body }}</p>
      </div>
      <div v-for="(itm, idx) in plagReport.sources" :key="idx">
        <div class="space-y-1">
          <p class="font-bold text-gray-900">Content Url:</p>
          <p>{{ itm?.link }}</p>
        </div>
        <div class="space-y-1">
          <p class="font-bold text-gray-900">Content Url:</p>
          <p>{{ itm?.percent }}%</p>
        </div>
      </div>
      <div class="text-gray-50 space-y-2">
        <p class="font-bold text-gray-900">Overall Plagarism percentage:</p>
        <p>{{ plagReport?.plagPercent }}%</p>
      </div>
      <div class="text-gray-50 space-y-2">
        <p class="font-bold text-gray-900">Uniqueness:</p>
        <p>{{ plagReport?.uniquePercent }}%</p>
      </div>
      <div class="flex justify-end items-end">
        <nuxt-link
          to="/dashboard/history"
          class="font-medium bg-black text-white px-3 py-2 text-sm"
          >View history</nuxt-link
        >
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      processing: false,
      plagReport: null,
      report: false,
      form: {
        title: "",
        author: "",
        body: "",
      },
    };
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.author && this.form.body && this.form.title);
    },
  },
  methods: {
    checkForPlagarism() {
      this.processing = true;
      let payload = {
        title: this.form.title,
        author: this.form.author,
        payload: this.form.body,
      };
      const token = JSON.parse(localStorage.getItem("user")).token;
      const config = {
        headers: {
          // "content-type": "application/x-www-form-urlencoded",
          authorization: "Bearer " + token,
        },
      };
      this.$axios
        .post(
          "https://plagarism-backend.onrender.com/api/user/check-article-plagarism",
          payload,
          config
        )
        .then((resp) => {
          this.plagReport = resp?.data?.result;
          this.report = true;
          this.$toastr.s("Plagarism was successfully checked");
        })
        .catch((error) => {
          if (error.response) {
            this.$toastr.error(error.response.data.errorMessage);
            this.processing = false;
          } else if (error.request) {
            this.processing = false;
          } else {
            console.log("Error", error.message);
            this.processing = false;
          }
        })
        .finally(() => {
          this.processing = false;
        });
    },
  },
};
</script>

<style></style>
