<template>
  <div class="card mb-3">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> Followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <img
          :src="following.image | emptyImage"
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
  name: "UserFollowingsCard",
  mixins: [emptyImageFilter],
  props: {
    followings: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
