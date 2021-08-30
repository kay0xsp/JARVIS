<template>
  <div class="mainBox">
    <div class="box3">
      <sidebar-media />
    </div>
    <div class="bigBox">
      <div class="mypp">DASHBOARD</div>
      <div id="mini_block">
        <datep />
        <ip />
        <networks />
        <battery />
      </div>
      <div id="home_block">
        <weather />
        <mymap />
        <todo />
        <employees />

        <addUser />
      </div>
    </div>
  </div>
</template>

<script>
import addUser from "../components/addUser.vue";
import battery from "../components/battery.vue";
import networks from "../components/network.vue";
import specs from "../components/specs.vue";
import weather from "../components/weather.vue";
import calendar from "../components/calendar.vue";
import sidebarMedia from "../components/socialMedia.vue";
import Mymap from "../components/map.vue";
import datep from "../components/date.vue";
import ip from "../components/ip_adress.vue";
import todo from "../components/todo.vue";
import liste from "../components/todo.vue";
import employees from "../components/employees.vue";

export default {
  name: "Home",
  components: {
    addUser,
    battery,
    networks,
    specs,
    weather,
    calendar,
    sidebarMedia,
    employees,
    Mymap,
    datep,
    ip,
    liste,
    todo,
  },
};
</script>

<style>
.mainBox {
  display: flex;
  justify-content: flex-start;
  height: 100%;
}
.bigBox {
  padding: 2em;
}

#mini_block {
  display: flex !important;
  justify-content: space-between;
}

.mypp {
  font-size: 1.8rem;
  padding: 0.6em 0 0 0.6em;
  text-align: left;
  color: #4169e1;
  font-weight: bold;
  font-family: "orbitron";
}

.mypp p {
  font-size: 0.5em;
  padding: 0;
}

#home_block {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.box2 {
  width: 500px;
  display: block;
  height: 100%;
  max-height: 540px;
  margin: 0 1em 1em 1em;
  background-color: #1f2940;
  border-radius: 0.25rem;
  padding: 1em;
  color: white;
  text-align: center;
}

.paragraphe {
  font-size: 1em;
  padding: 0.5em 2em;
  margin: 0;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .mainBox {
    flex-direction: column;
  }
  #home_block {
    flex-direction: column;
    justify-content: first baseline;
  }
  #mini_block {
    justify-content: space-evenly;
    margin: auto;
    max-width: 650px;
  }
  .mini_panel {
    margin: 0;
    border: 1px solid lightblue;
  }
  .box1 {
    width: 650px;
    margin: auto;
  }
  .box2 {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
