<template>
  <body class="bg-gray-900 lg:pl-10 lg:pt-10">
    <div class="p-3 lg:p-10">
      <h2 class="text-2xl font-semibold leading-tight text-white">
        User profile
      </h2>
    </div>
    <div class="flex flex-col bg-gray-900 p-3 lg:p-10">
      <div
        v-if="!loading"
        class="relative border border-gray-700 flex flex-col items-center rounded-[20px] lg:w-[700px] lg:max-w-[95%] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 w-full">
          <div
            class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 lg:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p class="text-sm text-gray-600">Username</p>
            <p class="text-base font-medium text-gray-600">
              {{ user?.username }}
            </p>
          </div>

          <div
            class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 lg:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p class="text-sm text-gray-600">Matric</p>
            <p class="text-base font-medium text-gray-600">
              {{ user?.matric }}
            </p>
          </div>

          <div
            class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 lg:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p class="text-sm text-gray-600">Email</p>
            <p class="text-base font-medium text-gray-600">{{ user?.email }}</p>
          </div>

          <div
            class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 lg:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p class="text-sm text-gray-600">UserId</p>
            <p class="text-base font-medium text-gray-600">
              {{ user?._id }}
            </p>
          </div>

          <div
            class="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 lg:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p class="text-sm text-gray-600">Role</p>
            <p class="text-base font-medium text-gray-600">{{ user?.role }}</p>
          </div>

          <div
            class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 lg:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p class="text-sm text-gray-600">CreatedAt</p>
            <p class="text-base font-medium text-gray-600">
              {{ user?.createdAt }}
            </p>
          </div>

          <div
            class="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 lg:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
          >
            <p class="text-sm text-gray-600">Plagiarism Count</p>
            <p class="text-base font-medium text-gray-600">
              {{ history.length }}
            </p>
          </div>
        </div>
      </div>
      <div v-else class="w-6/12 h-60 mt-20">
        <loader-spinner />
      </div>
    </div>
  </body>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      user: {},
      history: [],
      loading: false,
      processing: false,
    };
  },
  mounted() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
      return;
    } else {
      this.loadProfile();
      this.loadHistory();
    }
  },
  methods: {
    loadProfile() {
      this.loading = true;
      const token = JSON.parse(localStorage.getItem("user")).token;
      const id = JSON.parse(localStorage.getItem("user")).user._id;
      const config = {
        headers: {
          authorization: "Bearer " + token,
        },
      };
      this.$axios
        .get(
          `https://plagarism-backend.onrender.com/api/user/profile/${id}`,
          config
        )
        .then((resp) => {
          console.log(resp.data, "res");
          this.user = resp?.data;
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
    loadHistory() {
      this.processing = true;
      const token = JSON.parse(localStorage.getItem("user")).token;
      const matric = JSON.parse(localStorage.getItem("user")).user.matric;
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
