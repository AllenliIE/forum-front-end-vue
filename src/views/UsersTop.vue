<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <!-- 美食達人 UsersTopCard-->
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img :src="user.image | emptyImage" width="140px" height="140px" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="unfollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="follow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";
export default {
  name: "UsersTop",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsersTop();
  },
  methods: {
    fetchUsersTop() {
      this.users = dummyUserTop.users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        };
      });
    },
    follow(userId) {
      this.users = this.users.map((user) => {
        if (userId !== user.id) {
          return user;
        } else {
          return {
            ...user,
            followerCount: user.followerCount + 1,
            isFollowed: true,
          };
        }
      });
    },
    unfollow(userId) {
      this.users = this.users.map((user) => {
        if (userId !== user.id) {
          return user;
        } else {
          return {
            ...user,
            followerCount: user.followerCount - 1,
            isFollowed: false,
          };
        }
      });
    },
  },
};

const dummyUserTop = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$Rnp5uMYJ2ZLNES6HvRbQ7e8gfZRKUQ35luBAL5Sauj.QdLdBK6mf6",
      isAdmin: true,
      image: "https://picsum.photos/id/237/200/300",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$nKPEOtWgSi1bYjQE4QEw/eoVjss9P/62Mul9U2XEgRx9UCVPSBFHO",
      isAdmin: false,
      image: "https://picsum.photos/id/238/200/300",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$p1OFcLPNAJHszWk1bbisJ.aDlXcTOsRbTketo7lsH59g7.g7KALgu",
      isAdmin: false,
      image: "https://picsum.photos/id/239/200/300",
      createdAt: "2023-02-13T06:01:00.000Z",
      updatedAt: "2023-02-13T06:01:00.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};
</script>
