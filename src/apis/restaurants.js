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
};
