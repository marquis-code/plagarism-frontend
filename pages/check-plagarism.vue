<template>
  <main
    class="lg:flex justify-between items-start gap-x-10 space-y-10 md:space-y-0 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:mt-32 mb-10 md:mb-0"
  >
    <div class="md:w-6/12 space-y-10">
      <img
        src="@/assets/img/animae2.png"
        alt=""
        class="lg:h-56 w-full object-cover object-center"
      />
      <div>
        <button
          class="text-gray-800 px-6 py-3 font-bold text-sm rounded-full border-2 border-gray-700"
        >
          #1 for students
        </button>
      </div>
      <div>
        <h1 class="text-4xl lg:text-6xl font-bold text-gray-700 max-w-lg">
          Plagiarism Checker
        </h1>
      </div>
      <div>
        <p class="text-sm lg:text-lg text-gray-700 max-w-lg">
          Plagiarism Checker detects Plagiarism in your text, checks grammar and
          checks for other writing issues
        </p>
      </div>
    </div>
    <div class="md:w-6/12 space-y-8">
      <p class="font-medium">
        Please fill the form below to check your document for errors and
        plagiarism.
      </p>
      <div class="w-full space-y-3">
        <label class="text-sm font-bold text-gray-500 tracking-wide"
          >Document Title</label
        >
        <input
          type="text"
          placeholder="Enter document title"
          class="w-full bg-gray-50 rounded-full px-4 py-3 outline-none border border-gray-200"
        />
      </div>
      <div class="w-full space-y-3">
        <label class="text-sm font-bold text-gray-500 tracking-wide"
          >Author</label
        >
        <input
          type="text"
          placeholder="Enter document author"
          class="w-full bg-gray-50 rounded-full px-4 py-3 outline-none border border-gray-200"
        />
      </div>
      <div class="grid grid-cols-1 space-y-3">
        <label class="text-sm font-bold text-gray-500 tracking-wide"
          >Attach Document</label
        >
        <div class="flex items-center justify-center w-full">
          <label
            class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
          >
            <div
              class="h-full w-full text-center flex flex-col items-center justify-center items-center"
            >
              <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                <img
                  class="has-mask h-36 object-center"
                  src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                  alt="freepik image"
                />
              </div>
              <p class="pointer-none text-gray-500">
                <span class="text-sm">Drag and drop</span> files here <br />
                or
                <a href="" id="" class="text-blue-600 hover:underline"
                  >select a file</a
                >
                from your computer
              </p>
            </div>
            <input type="file" class="hidden" />
          </label>
        </div>
      </div>
      <div class="w-full">
        <button class="bg-black text-white text-sm py-3 w-full rounded-full">
          Proceed
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
