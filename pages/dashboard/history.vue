<template>
  <!-- component -->
  <body class="antialiased font-sans bg-gray-900">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight text-white">
            Plagiarism History
          </h2>
        </div>
        <div
          class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto lg:h-[800px] overflow-y-auto"
        >
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table
              class="min-w-full leading-normal"
              v-if="!loading && history.length"
            >
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Book Title
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Book Author
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Created at
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Plagiarism report
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(itm, idx) in history" :key="idx">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ itm.title }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ itm.author }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ itm.createdAt }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div
                      class="text-gray-900 whitespace-no-wrap"
                      v-for="(item, index) in itm.sources"
                      :key="index"
                    >
                      <p class="max-w-sm">
                        <a :href="item.link" class="">{{ item.link }}</a>
                      </p>
                      <p class="font-medium">{{ item.percent }}%</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="loading" class="mt-10 p-6 bg-gray-900">
              <loader-spinner class="w-full" />
            </div>
            <div
              class="flex justify-center items-center"
              v-if="!loading && !history.length"
            >
              <p class="font-bold text-lg">No report available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      history: [],
      loading: false,
    };
  },
  mounted() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
      return;
    } else {
      this.loadHistory();
    }
  },
  methods: {
    loadHistory() {
      this.loading = true;
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      const matric = JSON.parse(localStorage.getItem("user"))?.user?.matric;
      const encoded = btoa(matric);
      const config = {
        headers: {
          // "content-type": "application/x-www-form-urlencoded",
          authorization: "Bearer " + token,
        },
      };
      this.$axios
        .get(
          `https://plagarism-backend.onrender.com/api/user/plagarism-history/${encoded}`,
          config
        )
        .then((resp) => {
          this.history = resp?.data;
        })
        .catch((error) => {
          if (error.response) {
            this.$toastr.error(error.response.data.errorMessage);
            this.loading = false;
          } else if (error.request) {
            this.loading = false;
          } else {
            console.log("Error", error.message);
            this.loading = false;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
