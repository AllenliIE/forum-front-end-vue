<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> Followers (追隨者)
    </div>
    <div class="card-body">
      <router-link to="#" v-for="follower in followers" :key="follower.id">
        <img
          :src="follower.image | emptyImage"
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
  name: "UserFollowersCard",
  mixins: [emptyImageFilter],
  props: {
    followers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
