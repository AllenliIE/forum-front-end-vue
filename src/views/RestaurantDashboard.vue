<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    fetchRestaurant() {
      const { restaurant } = dummyData;
      const { id, name, Category, Comments, viewCounts } = restaurant;
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};

const dummyData = {
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
    updatedAt: "2023-02-17T14:37:31.000Z",
    CategoryId: 2,
    Category: {
      id: 2,
      name: "日本料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    Comments: [
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
    ],
  },
};
</script>
