<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        :disabled="isProcessing"
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async handleSubmit() {
      // 使用者按下 Submit 按鈕之後，CreateComment 元件會向後端伺服器發送 POST 請求
      // TODO: 向 API 發送 POST 請求
      try {
        const text = this.text.trim();
        if (!text) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫任何評論！",
          });
          return;
        }
        this.isProcessing = true;
        const { data } = await restaurantsAPI.createComments({
          restaurantId: this.restaurantId,
          text: this.text,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // 伺服器新增 Comment 成功後，子元件要用 $emit 觸發一個事件，通知父元件資料的狀態改變
        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });

        this.text = ""; // 送出後，將表單內的資料清空

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法新增評論，請稍後再試！",
        });
      }
    },
  },
};
</script>
