<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="user.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favRestaurantsLength }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <template v-if="isCurrentUser">
              <router-link :to="{ name: 'user-edit', params: { id: user.id } }">
                <button type="submit" class="btn btn-primary">edit</button>
              </router-link>
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
                @click.prevent.stop="unfollow(user.id)"
                type="button"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.prevent.stop="follow(user.id)"
                class="btn btn-primary"
              >
                追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "../utils/helpers";
import { emptyImageFilter } from "./../utils/mixins";
export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    };
  },
  watch: {
    initialIsFollowed(newValue) {
      this.isFollowed = {
        ...this.isFollowed,
        ...newValue,
      };
    },
  },
  /* eslint-disable */
  methods: {
    async follow(userId) {
      try {
        const { data, status, statusText } = await usersAPI.following({
          userId,
        });
        if (status === "error") {
          throw new Error(statusText);
        }
        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "",
        });
      }
    },
    async unfollow(userId) {
      try {
        const { data, status, statusText } = await usersAPI.unfollowing({
          userId,
        });
        if (status === "error") {
          throw new Error(statusText);
        }
        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "",
        });
      }
    },
  },
};
</script>
