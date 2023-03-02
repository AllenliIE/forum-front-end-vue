<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="favRestaurant in favRestaurants"
        :to="{ name: 'restaurant', params: { id: favRestaurant.id } }"
        :key="favRestaurant.id"
      >
        <img
          :src="favRestaurant.image | emptyImage"
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
  name: "UserFavoritedRestaurantsCard",
  mixins: [emptyImageFilter],
  props: {
    favRestaurants: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
