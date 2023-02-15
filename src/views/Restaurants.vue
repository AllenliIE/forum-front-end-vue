<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "August Kessler",
      tel: "285-581-0038 x71798",
      address: "211 Rice Summit",
      opening_hours: "08:00",
      description: "Sunt sed rerum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.49818555287808",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Eileen Runolfsson",
      tel: "858.998.6020",
      address: "24854 Russel River",
      opening_hours: "08:00",
      description: "amet tenetur laboriosam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=55.38273143737176",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Kailey Hyatt",
      tel: "083.747.2736 x69914",
      address: "567 Legros Lodge",
      opening_hours: "08:00",
      description: "Ut necessitatibus quasi minus iure inventore facil",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.262492328449824",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Coleman Carter",
      tel: "211-200-2234 x59622",
      address: "2386 Sonia Curve",
      opening_hours: "08:00",
      description: "Et et ut hic et ducimus.\nMagni consequatur sint in",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.29674847047667",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Chanelle Medhurst IV",
      tel: "756.861.8644 x601",
      address: "762 Smith Centers",
      opening_hours: "08:00",
      description: "aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.15714126536625",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Halle Kuhlman",
      tel: "887-241-5765 x5900",
      address: "399 Windler Valleys",
      opening_hours: "08:00",
      description: "Voluptatum nostrum quaerat nihil est molestiae dol",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.752585360064531",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Dolly Parker",
      tel: "1-278-135-4050",
      address: "353 Alden Ports",
      opening_hours: "08:00",
      description: "exercitationem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.35054215402931",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Ally Jakubowski",
      tel: "(689) 940-6808 x845",
      address: "8852 John Estates",
      opening_hours: "08:00",
      description: "aliquid",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.241460602444583",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Joel Von",
      tel: "229-693-4136 x58868",
      address: "3760 Aglae Glens",
      opening_hours: "08:00",
      description: "Non laboriosam perspiciatis dolor vitae cum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.35034648927381",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Louisa Ruecker",
      tel: "605.749.0547",
      address: "056 Stamm Place",
      opening_hours: "08:00",
      description: "Quia est recusandae.\nDoloremque et maxime est illu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=76.05166042162033",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2023-02-13T06:01:00.000Z",
        updatedAt: "2023-02-13T06:01:00.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
    },
  ],
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
  categoryId: "",
};

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
