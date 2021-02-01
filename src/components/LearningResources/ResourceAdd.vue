<template>
  <Basecard>
    <form @submit.prevent="onSubmitData">
      <div class="mb-3">
        <label for="labelforTitle" class="form-label">Title:</label>
        <input
          type="text"
          class="form-control"
          v-model="enteredData.title"
          id="labelforTitle"
        />
      </div>
      <div class="mb-3">
        <label for="labelForDescription" class="form-label">Description</label>
        <textarea
          rows="3"
          class="form-control"
          id="labelForDescription"
          v-model="enteredData.desc"
        />
      </div>
      <div class="mb-3">
        <label for="labelForLink" class="form-label">Link:</label>
        <input
          type="url"
          class="form-control"
          id="labelForLink"
          v-model="enteredData.link"
        />
      </div>

      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </Basecard>

  <teleport to="body">
    <Modal v-if="isModalOpen" @close="closeModal"> </Modal>
  </teleport>
</template>

<script>
import Basecard from "../BaseComps/Basecard.vue";
import Modal from "@/components/Modal";

export default {
  name: "ResourceAdd",
  components: { Basecard, Modal },
  data() {
    return {
      isModalOpen: false,
      enteredData: {
        title: "",
        desc: "",
        link: "",
      },
      newEntery: null,
    };
  },
  inject: ["addResource"],
  methods: {
    onSubmitData() {
      this.newEntery = {
        ...this.enteredData,
        id: new Date().toISOString(),
      };
      if (
        this.enteredData.title.trim() === "" ||
        this.enteredData.desc.trim() === "" ||
        this.enteredData.link.trim() === ""
      ) {
        this.isModalOpen = true;
        return;
      }

      this.addResource(this.newEntery);
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
