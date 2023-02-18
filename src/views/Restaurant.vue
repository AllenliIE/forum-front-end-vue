<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments" />
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
const dummyRestData = {
  restaurant: {
    id: 1,
    name: "August Kessler",
    tel: "285-581-0038 x71798",
    address: "211 Rice Summit",
    opening_hours: "08:00",
    description: "Sunt sed rerum.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=95.49818555287808",
    viewCounts: 1,
    createdAt: "2023-02-13T06:01:00.000Z",
    updatedAt: "2023-02-17T14:37:31.337Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 101,
        text: "Quos beatae ipsum omnis qui.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$p1OFcLPNAJHszWk1bbisJ.aDlXcTOsRbTketo7lsH59g7.g7KALgu",
          isAdmin: false,
          image: null,
          createdAt: "2023-02-13T06:01:00.000Z",
          updatedAt: "2023-02-13T06:01:00.000Z",
        },
      },
      {
        id: 51,
        text: "Veniam quas similique nemo ullam recusandae ut dolorem molestiae.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$Rnp5uMYJ2ZLNES6HvRbQ7e8gfZRKUQ35luBAL5Sauj.QdLdBK6mf6",
          isAdmin: true,
          image: null,
          createdAt: "2023-02-13T06:01:00.000Z",
          updatedAt: "2023-02-13T06:01:00.000Z",
        },
      },
      {
        id: 1,
        text: "Et quisquam perferendis possimus sed.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$p1OFcLPNAJHszWk1bbisJ.aDlXcTOsRbTketo7lsH59g7.g7KALgu",
          isAdmin: false,
          image: null,
          createdAt: "2023-02-13T06:01:00.000Z",
          updatedAt: "2023-02-13T06:01:00.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
};

import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantComments from "../components/RestaurantComments";

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyRestData.restaurant.id,
        name: dummyRestData.restaurant.name,
        categoryName: dummyRestData.restaurant.Category.name,
        image: dummyRestData.restaurant.image,
        openingHours: dummyRestData.restaurant.opening_hours,
        tel: dummyRestData.restaurant.tel,
        address: dummyRestData.restaurant.address,
        description: dummyRestData.restaurant.description,
        isFavorited: dummyRestData.isFavorited,
        isLiked: dummyRestData.isLiked,
      };

      this.restaurantComments = dummyRestData.restaurant.Comments;
    },
  },
};
</script>
