<template>
  <div class="box2">
    <form @submit="postData" method="post">
      <input type="text" name="name" placeholder="Name" v-model="posts.emp_name" />
      <input type="text" name="phone" placeholder="phone" v-model="posts.emp_mobile_nos" />
      <button type="submit">POST</button>
    </form>
  </div>
</template>

<script>
axios.defaults.baseURL = "http://localhost:8080/company";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  name: "PostComment",
  data() {
    return {
      posts: {
        emp_name: null,
        emp_mobile_nos: null,
      },
    };
  },
  methods: {
    postData(e) {
      this.axios.post("http://localhost:8080/company/employees", this.posts).then(() => {
        console.warn(res);
      });
      e.preventDefault();
    },
  },
};
</script>
