<template>
  <div>
    <div class="mypp">
      DASHBOARD
      <p>Welcome to the dashboard</p>
    </div>
    <div id="mini_block">
      <money />
      <money />
      <money />
      <money />
    </div>
    <div id="home_block">
      <liste />
      <skills />
      <counter />
    </div>
  </div>
</template>

<script>
import money from "../components/money.vue";
import skills from "../components/skills.vue";
import counter from "../components/counter.vue";
import liste from "../components/liste.vue";

export default {
  name: "Home",
  components: {
    money,
    liste,
    counter,
    skills,
  },
};
</script>

<style>
#mini_block {
  display: flex;
  justify-content: space-between;
}

.mypp {
  font-size: 2rem;
  padding: 0.6em 0 0 0.6em;
  text-align: left;
  color: #4169e1;
}

.mypp p {
  font-size: 0.5em;
  padding: 0;
}

#home_block {
  display: flex;
  justify-content: flex-start;
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
