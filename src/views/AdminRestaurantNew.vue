<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm";

import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const { data } = await adminAPI.restaurants.create({
          formData,
        });

        if (data.status === "error") throw new Error(data.message);

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
      // 先用 console 確定資料有成功傳上來
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ": " + value);
      // }
    },
  },
};
</script>
