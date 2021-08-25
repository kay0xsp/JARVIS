<template>
  <div class="box1">
    <table id="employees">
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Salary</td>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.employee_name }}</td>
        <td>{{ item.employee_age }} YO |</td>
        <td>{{ item.employee_salary }}| €NET</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      list: undefined,
    };
  },
  mounted() {
    Vue.axios.get("http://localhost:8080/").then((resp) => {
      this.list = resp.data.data;
      console.warn(resp.data.data);
    });
    // Vue.axios.get("http://dummy.restapiexample.com/api/v1/employees").then((resp) => {
    //   this.list = resp.data.data;
    //   console.warn(resp.data.data);
    // });
  },
};
</script>

<style>
#employees {
  display: flex;
  justify-content: space-evenly;
  display: block;
}
#employees tr {
  width: 100%;
}

#employees tr td {
  width: 100%;
  min-width: 100px;
  padding: 1em;
}
</style>
