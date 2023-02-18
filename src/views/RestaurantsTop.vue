<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <!-- 人氣餐廳 RestaurantsTop-->
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.favoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.prevent.stop="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.prevent.stop="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurantsTop();
  },
  methods: {
    fetchRestaurantsTop() {
      this.restaurants = dummyData.restaurants.map((restaurant) => {
        return {
          id: restaurant.id,
          name: restaurant.name,
          image: restaurant.image,
          favoriteCount: restaurant.FavoriteCount,
          isFavorited: restaurant.isFavorited,
        };
      });
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants
        .map((restaurant) => {
          if (restaurantId !== restaurant.id) {
            return restaurant;
          } else {
            return {
              ...restaurant,
              isFavorited: true,
              favoriteCount: restaurant.favoriteCount + 1,
            };
          }
        })
        .sort((a, b) => b.favoriteCount - a.favoriteCount);
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurantId !== restaurant.id) {
          return restaurant;
        } else {
          return {
            ...restaurant,
            isFavorited: false,
            favoriteCount: restaurant.favoriteCount - 1,
          };
        }
      });
    },
  },
};

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Gilbert Streich",
      tel: "307.846.6051 x2956",
      address: "911 Piper Courts",
      opening_hours: "08:00",
      description: "et voluptate aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.412776950719984",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Emanuel Kirlin",
      tel: "427.797.1107 x279",
      address: "8881 Shana Pines",
      opening_hours: "08:00",
      description: "dolorum dolore ratione",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.30020064381768",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Nora Legros",
      tel: "(435) 884-6796",
      address: "705 Pagac Row",
      opening_hours: "08:00",
      description: "Odio fuga aut et sed qui dicta ut. Necessitatibus ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.04848668198487",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Kennith Frami",
      tel: "562.291.1881 x3687",
      address: "6893 Bogan Walks",
      opening_hours: "08:00",
      description: "Officiis quia aut ut a sunt. Quod tenetur ex quis ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.6133996856338",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Jordy O'Keefe",
      tel: "962.321.9300",
      address: "7974 Olaf Road",
      opening_hours: "08:00",
      description: "Consectetur porro et corrupti ea assumenda.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.362922578967453",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Jermain Corkery",
      tel: "1-878-243-6709 x24145",
      address: "99014 Dario Burg",
      opening_hours: "08:00",
      description: "Vero libero enim impedit ut consequuntur porro qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.505735539789075",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Darby Balistreri",
      tel: "444.452.5631",
      address: "30220 Nicolas Lock",
      opening_hours: "08:00",
      description: "Dolor nesciunt ut. Natus in ipsam. Sed consequatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.537993256310108",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Sabrina Hoeger",
      tel: "204.614.9789 x3706",
      address: "693 Zelma Mountain",
      opening_hours: "08:00",
      description: "Accusantium asperiores aut exercitationem dicta op",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.63983367383609",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Mr. Kelsi Yost",
      tel: "(336) 926-7736 x1805",
      address: "125 DuBuque Lights",
      opening_hours: "08:00",
      description: "sed similique quam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.686855235139744",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Cody Oberbrunner",
      tel: "1-426-165-0153",
      address: "698 Tyrique Street",
      opening_hours: "08:00",
      description: "Nostrum quod accusantium.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=0.5533492564221199",
      viewCounts: 0,
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};
</script>
