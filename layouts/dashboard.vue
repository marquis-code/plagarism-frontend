<template>
  <main>
    <section class="app lg:flex bg-gray-900">
      <div class="w-2/12 hidden lg:block"><UserDashboardSidebar /></div>
      <div class="lg:hidden flex justify-between items-center p-3">
        <div>
          <nuxt-link
            class="text-white flex items-center gap-x-2 no-underline font-bold text-lg"
            to="/"
          >
            <span class="sr-only">Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 24 24"
              fill="#ffffff"
            >
              <path
                d="M1.16 16.86c.05 0 .1-.04.1-.1l.27-2.1-.27-2.16c0-.05-.05-.1-.1-.1s-.1.05-.1.1l-.24 2.16.24 2.1c0 .06.05.1.1.1zm-.89-.8c.05 0 .09-.04.1-.09l.2-1.31-.2-1.33c-.01-.06-.05-.1-.1-.1s-.09.04-.1.1L0 14.66l.18 1.31c0 .05.04.1.1.1zm1.95-3.96c0-.07-.06-.12-.12-.12s-.11.05-.12.12l-.22 2.56.22 2.46c0 .07.06.12.12.12s.11-.05.12-.11l.26-2.47-.26-2.56zm.83 5.24c.08 0 .14-.06.14-.14l.24-2.54-.24-2.63c0-.08-.06-.14-.14-.14a.14.14 0 0 0-.14.14l-.21 2.63.21 2.54c0 .08.07.14.14.14zm.96.04c.09 0 .16-.07.16-.16l.23-2.56-.23-2.44c0-.09-.07-.16-.16-.16a.16.16 0 0 0-.16.16l-.2 2.44.2 2.56c0 .1.07.16.16.16zm1.36-2.72l-.21-3.96c0-.1-.09-.18-.18-.18-.1 0-.18.07-.19.18l-.18 3.96.18 2.56c.01.1.09.18.19.18s.17-.08.18-.18l.21-2.56zm.58 2.75c.1 0 .2-.09.2-.2l.2-2.55-.2-4.87a.2.2 0 0 0-.2-.2.2.2 0 0 0-.2.2l-.18 4.87.18 2.55c0 .11.1.2.2.2zm.98-8.25c-.12 0-.22.1-.22.22l-.16 5.28.16 2.52c0 .13.1.22.22.22s.22-.1.22-.22l.19-2.52-.19-5.28c0-.12-.1-.22-.22-.22zm1 8.25c.12 0 .23-.1.23-.24l.17-2.5-.17-5.46a.24.24 0 0 0-.24-.25c-.13 0-.24.11-.24.25l-.15 5.45.15 2.5c0 .14.1.25.24.25zm.99 0c.14 0 .26-.12.26-.27l.16-2.48-.16-5.32a.26.26 0 0 0-.26-.26.26.26 0 0 0-.27.26l-.13 5.32.13 2.48c0 .15.12.27.27.27zm1.43-2.75l-.14-5.12a.29.29 0 0 0-.29-.28.29.29 0 0 0-.28.28l-.13 5.12.13 2.47a.28.28 0 0 0 .57 0l.14-2.47zm.59 2.76a.3.3 0 0 0 .3-.3l.13-2.46-.13-6.1a.3.3 0 0 0-.3-.3.3.3 0 0 0-.3.3l-.12 6.1.11 2.45c0 .17.14.3.3.3zm1-9.73a.33.33 0 0 0-.32.33l-.14 6.64.14 2.42c0 .17.15.32.32.32.18 0 .33-.15.33-.32l.14-2.42-.14-6.64a.33.33 0 0 0-.33-.33zm.93 9.73h8.18a2.95 2.95 0 1 0-1.14-5.67 5.2 5.2 0 0 0-7.08-4.4c-.22.09-.28.18-.28.35v9.37c0 .18.14.33.32.35z"
              />
            </svg>
            Plagvic.io
          </nuxt-link>
        </div>
        <div>
          <button v-b-toggle.sidebar-backdrop>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-10/12">
        <Nuxt />
      </div>
    </section>
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      no-header
      no-footer
      shadow
      backdrop
    >
      <template #default="{ hide }">
        <div class="relative">
          <div class="lg:hidden flex justify-between items-center p-3">
            <div>
              <nuxt-link
                class="text-gray-900 flex items-center gap-x-2 no-underline font-bold text-lg"
                to="/"
              >
                <span class="sr-only">Home</span>
                <img src="@/assets/icons/logo.svg" alt="" class="h-10 w-10" />
                Plagvic.io
              </nuxt-link>
            </div>
            <div>
              <button @click="hide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <div class="space-y-4 p-3">
            <nuxt-link
              v-for="(itm, idx) in urlData"
              :key="idx"
              :to="itm.url"
              :class="[
                $route.fullPath == itm.url ? 'bg-green-600' : 'bg-gray-700',
              ]"
              class="flex items-center w-full px-5 py-3 rounded-lg no-underline transition-colors text-white duration-200 gap-x-2 focus:outline-none"
            >
              <div class="text-left rtl:text-right">
                {{ itm.name }}
              </div>
            </nuxt-link>
          </div>
          <div class="flex justify-center items-center">
            <div class="p-3 absolute -bottom-72 left-0 w-full">
              <div
                class="flex items-center justify-between bg-red-100 px-3 py-2 rounded-md"
              >
                <p class="mt-2 font-bold text-gray-800">
                  {{ user?.user?.username }}
                </p>
                <div class="bg-red-400 rounded-full p-2 flex justify-center items-center">
                  <button class="" @click="handleLogout">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="M10 3H6a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4M16 17l5-5-5-5M19.8 12H9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-sidebar>
  </main>
</template>
<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";
import UserDashboardSidebar from "@/components/UserDashboardSidebar.vue";
export default {
  components: {
    UserDashboardSidebar,
  },
  data() {
    return {
      user: {},
      urlData: [
        {
          url: "/dashboard",
          name: "Plagarism Check",
          pathName: "dashbaord",
        },
        {
          url: "/dashboard/history",
          name: "History",
          pathName: "history",
        },
        {
          url: "/dashboard/profile",
          name: "Profile",
          pathName: "profile",
        },
      ],
    };
  },
  methods: {
    handleLogout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      }).then((result) => {
        if (result.value) {
          localStorage.removeItem("user");
          this.$router.push("/");
        } else {
          this.$swal("Cancelled", "You're still logged in!", "info");
        }
      });
    },
  },
  mounted() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
      return;
    } else {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  },
};
</script>

<style>
.app {
  font-family: "Oxygen", sans-serif;
}
</style>
