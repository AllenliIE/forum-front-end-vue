<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <UserProfileCard
          :user="user"
          :isCurrentUser="currentUser.id === user.id"
          :initial-is-followed="isFollowed"
        />

        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :followings="followings" />
            <br />
            <UserFollowersCard :followers="followers" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :comments="comments" />
            <br />
            <UserFavoritedRestaurantsCard :favRestaurants="favRestaurants" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";

import usersAPI from "./../apis/users";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: null,
        name: "",
        email: "",
        image: "",
        commentsLength: 0,
        favRestaurantsLength: 0,
        followingsLength: 0,
        followersLength: 0,
      },
      comments: [],
      favRestaurants: [],
      followings: [],
      followers: [],
      isFollowed: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, status, statusText } = await usersAPI.get({ userId });

        if (status === "error") {
          throw new Error(statusText);
        }

        const { profile, isFollowed } = data;
        const {
          id,
          name,
          email,
          image,
          Comments: comments,
          FavoritedRestaurants: favRestaurants,
          Followings: followings,
          Followers: followers,
        } = profile;

        this.user = {
          ...this.user,
          id,
          name,
          email,
          image,
          commentsLength: comments.length,
          favRestaurantsLength: favRestaurants.length,
          followingsLength: followings.length,
          followersLength: followers.length,
        };
        this.comments = comments;
        this.favRestaurants = favRestaurants;
        this.followings = followings;
        this.followers = followers;
        this.isFollowed = isFollowed;
        // console.log(data)
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
