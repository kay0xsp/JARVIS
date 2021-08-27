<template>
  <div>
    <p id="p_appli"><span class="material-icons"> air </span>{{ name }}</p>
    <div class="box2">
      {{ list }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Weather",
      list: undefined,
    };
  },
  mounted() {
    Vue.axios
      .get("api.openweathermap.org/data/2.5/weather?q=London&appid=0fa4169136870153fc2ff2fa2c127231")
      .then((resp) => {
        this.list = resp.data;
        console.warn(resp.data);
      });
  },
};
</script>
