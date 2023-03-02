<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              @click.prevent.stop="
                toggleRole({ userId: user.id, isAdmin: user.isAdmin })
              "
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import { mapState } from "vuex";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.adminUsers.get();
        this.users = data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "",
        });
      }
    },
    async toggleRole({ userId, isAdmin }) {
      try {
        const { data } = await adminAPI.adminUsers.update({
          userId,
          isAdmin: (!isAdmin).toString(), // 原本是 Boolean，要轉成 string 伺服器才會接受
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !isAdmin,
            };
          }
          return user;
        });
        console.log(data);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新會員角色，請稍後再試",
        });
      }
    },
  },
};
</script>
