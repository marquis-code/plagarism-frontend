<template>
  <div class="space-y-4">
    <label class="cursor-pointer text-sm font-bold flex items-center gap-x-2 text-gray-500 tracking-wide">
      <img src="@/assets/icons/pdf.svg" alt="" class="h-10 w-10" />
      <input @change="onFileChange" type="file" class="hidden" />
      Click to upload a file
    </label>
    <div class="w-full">
      <textarea v-if="extractedText" v-model="extractedText" cols="6" rows="6"
        class="w-full bg-gray-50 resize-none rounded-md px-3 py-3 outline-none border border-gray-200" />
    </div>
    <div class="flex justify-end items-end">
      <div class="pt-3">
        <button @click="saveEditing" v-if="isEditing"
          class="bg-green-500 px-4 py-2 rounded-md text-white text-sm">Save</button>
        <button @click="cancelEditing" v-if="isEditing"
          class="bg-gray-500 px-4 py-2 rounded-md text-white text-sm">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      extractedText: '',
      isLoading: false,
      isEditing: false,
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.handleFileUpload(file);
      }
    },
    handleFileUpload(file) {
      const reader = new FileReader();
      reader.onloadstart = () => {
        this.isLoading = true;
      };
      reader.onload = (event) => {
        this.extractedText = event.target.result;
        this.isLoading = false;
        this.isEditing = true;
        this.$emit('textExtracted', this.extractedText);
      };
      reader.onerror = () => {
        this.isLoading = false;
        Swal.fire('Error', 'File reading failed', 'error');
      };
      reader.readAsText(file);
    },
    saveEditing() {
      this.isEditing = false;
      Swal.fire('Success', 'Text saved successfully', 'success');
    },
    cancelEditing() {
      this.isEditing = false;
      Swal.fire('Cancelled', 'Editing cancelled', 'info');
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
