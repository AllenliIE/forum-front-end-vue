import { apiHelper } from "./../utils/helpers";

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId });
    return apiHelper.get(`/restaurants?${searchParams.toString()}`);
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`);
  },
  getFeeds() {
    return apiHelper.get("/restaurants/feeds");
  },
  getTopRestaurants() {
    return apiHelper.get("/restaurants/top");
  },
  createComments(formData) {
    return apiHelper.post("/comments", { ...formData });
  },
  deleteComments({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`);
  },
  getDashboard({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}/dashboard`);
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null);
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`);
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null);
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`);
  },
};
