<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ comments.length }}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link to="#" v-for="comment in comments" :key="comment.id">
        <img
          :src="comment.Restaurant.image | emptyImage"
          width="60"
          height="60"
          class="avatar mr-1 mb-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
export default {
  name: "UserCommentsCard",
  mixins: [emptyImageFilter],
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
