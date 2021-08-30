<template>
  <div>
    <p id="p_appli"><span class="material-icons"> air </span>{{ name }}</p>
    <div class="box2 weather">
      <p>
        <strong>{{ letemp.name }}</strong>
      </p>
      <p><b> Latitude </b> {{ letemp.coord.lat }}</p>
      <p><b>Longitude</b> {{ letemp.coord.lon }}</p>
      <p><b>Humidity</b> {{ letemp.main.humidity }}</p>
      <p><b>temperature</b> {{ letemp.main.temp }}</p>
      <p><b> Wind pressure</b> {{ letemp.main.pressure }}</p>
      <p><b> Wind speed</b> {{ letemp.wind.speed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Weather",
      letemp: [],
    };
  },
  mounted() {
    Vue.axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Toulouse&appid=0fa4169136870153fc2ff2fa2c127231"
      )
      .then((resp) => {
        this.letemp = resp.data;
        console.warn(resp.data);
      });
  },
};
</script>

<style>
.weather {
  padding: 4em !important;
}
.weather p strong {
  font-size: 2em;
}
.weather p {
  display: flex;
  justify-content: space-between;
  padding: 0.3em 0;
  margin: 0 !important;
  text-align: initial;
}
</style>
