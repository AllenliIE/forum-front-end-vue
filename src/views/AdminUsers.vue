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

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
    toggleRole({ userId, isAdmin }) {
      this.users = this.users.map((user) => {
        if (userId === user.id) {
          return {
            ...user,
            isAdmin: !isAdmin,
          };
        }
        return user;
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$oRTst038U9ITl2Csj2KMde0S5/WVSi.RxxCcjxnPyfzHZceo4QJ4W",
      isAdmin: true,
      image: null,
      createdAt: "2022-08-01T03:06:33.000Z",
      updatedAt: "2022-08-01T03:06:33.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$Z0x.yF5BAKzPGwJjAymI9u0ogykem9wfv0uNJ58avWTlNseeFbPR6",
      isAdmin: false,
      image: null,
      createdAt: "2022-08-01T03:06:34.000Z",
      updatedAt: "2022-08-01T03:06:34.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$kxnI/c2D5FG1PZfWN4OH5O9eZOK6nm2A23r7wfIpddRK1LTW5ZVHy",
      isAdmin: false,
      image: null,
      createdAt: "2022-08-01T03:06:34.000Z",
      updatedAt: "2022-08-01T03:06:34.000Z",
    },
  ],
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
</script>
