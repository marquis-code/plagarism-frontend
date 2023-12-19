<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <nuxt-link
            class="text-teal-600 flex items-center gap-x-2 no-underline font-bold"
            to="/"
          >
            <span class="sr-only">Home</span>
            <img src="@/assets/icons/logo.svg" alt="" class="h-10 w-10" />
            Plagarism Checker
          </nuxt-link>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <nuxt-link
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline"
                  to="/login"
                >
                  About
                </nuxt-link>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline"
                  href="/"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline"
                  href="/"
                >
                  History
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline"
                  href="/"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline"
                  href="/"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline"
                  href="/"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="hidden sm:flex sm:gap-4" v-if="!isLoggedIn">
            <nuxt-link
              class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              to="/login"
            >
              Login
            </nuxt-link>

            <div class="hidden sm:flex">
              <nuxt-link
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                to="/signup"
              >
                Register
              </nuxt-link>
            </div>
          </div>
          <div class="hidden sm:gap-4 lg:flex items-center gap-x-3" v-else>
            <img src="@/assets/icons/avatar.svg" alt="" class="h-10 w-10" />
            <p class="text-gray-500 font-medium text-sm mt-3">
              {{ user?.username ?? "" }}
            </p>
          </div>

          <div class="block md:hidden">
            <button
              v-b-toggle.sidebar-backdrop
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <b-sidebar id="sidebar-backdrop" backdrop shadow no-header no-footer>
      <template #default="{ hide }">
        <div class="p-6 space-y-6">
          <div class="flex justify-between items-center">
            <nuxt-link
              class="text-teal-600 flex items-center gap-x-2 font-bold no-underline"
              to="/"
            >
              <span class="sr-only">Home</span>
              <img src="@/assets/icons/logo.svg" alt="" class="w-10" />
              Plagarism Checker
            </nuxt-link>
            <div @click="hide">
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
            </div>
          </div>
          <nav aria-label="Global">
            <ul class="text-sm space-y-3 ml-0 pl-0">
              <li
                class="border rounded-md w-full py-3 pl-4 hover:bg-black hover:text-white"
              >
                <nuxt-link
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline font-bold hover:text-white"
                  to="/login"
                >
                  Projects
                </nuxt-link>
              </li>
              <li
                class="border rounded-md w-full py-3 pl-4 hover:bg-black hover:text-white"
              >
                <nuxt-link
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline font-bold hover:text-white"
                  to="/login"
                >
                  History
                </nuxt-link>
              </li>
              <li
                class="border rounded-md w-full py-3 pl-4 hover:bg-black hover:text-white"
              >
                <nuxt-link
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline font-bold hover:text-white"
                  to="/signup"
                >
                  Sign up
                </nuxt-link>
              </li>

              <li
                class="border rounded-md w-full py-3 pl-4 hover:bg-black hover:text-white"
              >
                <nuxt-link
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline font-bold hover:text-white"
                  to="/login"
                >
                  Login
                </nuxt-link>
              </li>
              <!-- <div
                class="hidden sm:gap-4 lg:flex items-center gap-x-3"
                v-if="isLoggedIn"
              >
                <img src="@/assets/icons/avatar.svg" alt="" class="h-10 w-10" />
                <p class="text-gray-500 font-medium text-sm mt-3">
                  {{ user?.username ?? "" }}
                </p>
              </div> -->
            </ul>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user")) ?? {};
  },
  computed: {
    isLoggedIn() {
      return Object.keys(this.user).length > 0;
    },
  },
};
</script>
