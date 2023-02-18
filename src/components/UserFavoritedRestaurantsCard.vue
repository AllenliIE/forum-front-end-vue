<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ favRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        to="#"
        v-for="favRestaurant in favRestaurants"
        :key="favRestaurant.id"
      >
        <img
          :src="favRestaurant.image"
          width="60"
          height="60"
          class="avatar mr-1 mb-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFavoritedRestaurantsCard",
  props: {
    favRestaurants: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
