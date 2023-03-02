<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button :disabled="isProcessing" type="submit" class="btn btn-primary">
        {{ isProcessing ? "處理中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
export default {
  name: "UserEdit",
  data() {
    return {
      user: {
        id: 0,
        name: "",
        image: "",
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      if (!this.user.id) return;
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
  methods: {
    fetchUser() {
      this.user = this.currentUser;
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (!files.length) return;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.user.image = imageURL;
    },
    async handleSubmit(e) {
      try {
        const text = this.user.name.trim();
        if (!text) {
          Toast.fire({
            icon: "warning",
            title: "請填寫名稱",
          });
          return;
        }
        const form = e.target;
        const formData = new FormData(form);

        this.isProcessing = true;

        const data = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
};
</script>
