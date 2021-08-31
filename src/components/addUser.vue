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
      this.axios.post("http://localhost:8080/company/employees", this.posts).then((res) => {
        console.warn(res);
        e.preventDefault();
      });
      //   console.warn(this.posts);
      //   e.preventDefault();
    },
  },
};
</script>
