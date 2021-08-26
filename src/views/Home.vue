<template>
  <div class="mainBox">
    <div class="box3">
      <sidebar-media />
    </div>
    <div class="bigBox">
      <div class="mypp">DASHBOARD</div>
      <div id="mini_block">
        <datep />
        <money />
        <money />
        <money />
      </div>
      <div id="home_block">
        <todo />
        <employees />
        <Mymap />
      </div>
    </div>
  </div>
</template>

<script>
import sidebarMedia from "../components/socialMedia.vue";
import Mymap from "../components/map.vue";
import counterMuted from "../components/counterMuted.vue";
import datep from "../components/date.vue";
import money from "../components/money.vue";
import todo from "../components/todo.vue";
import counter from "../components/counter.vue";
import liste from "../components/todo.vue";
import employees from "../components/employees.vue";

export default {
  name: "Home",
  components: {
    sidebarMedia,
    employees,
    Mymap,
    counterMuted,
    datep,
    money,
    liste,
    counter,
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
.box3 {
  display: block;
  width: 120px;
  height: 100%;
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
}

.box2 {
  width: 650px;
  display: block;
  min-height: 450px;
  margin: 0 1em 1em 1em;
  background-color: white;
  border-radius: 0.8rem;

  box-shadow: 0 1px 1px rgba(211, 211, 211, 0.12), 0 2px 2px rgba(223, 223, 223, 0.12),
    0 4px 4px rgba(221, 221, 221, 0.12), 0 8px 8px rgba(221, 221, 221, 0.12),
    0 16px 16px rgba(196, 196, 196, 0.12);
}

.paragraphe {
  font-size: 1em;
  padding: 0.5em 2em;
  margin: 0;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
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
}
</style>
