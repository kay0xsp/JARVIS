<template>
  <div>
    <p id="p_appli"><span class="material-icons"> groups </span>{{ name }}</p>
    <div class="box1 boxy-shadow">
      <table id="employees">
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.emp_name }}</td>
          <td>{{ item.emp_mobile_nos }}</td>
          <!-- <td>{{ item.emp_adress }}</td> -->
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      name: "Friends list",
      list: undefined,
    };
  },
  mounted() {
    Vue.axios.get("http://localhost:8080/company/employees").then((resp) => {
      this.list = resp.data;
      console.warn(resp.data);
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
  color: white;
}
#employees tr {
  border-radius: 0.25em;
  border: none;
  background: #1f2940;
}

#employees tr td {
  border-radius: 0.25em;
  width: 100%;
  min-width: 150px;
  padding: 1em;
}
</style>
