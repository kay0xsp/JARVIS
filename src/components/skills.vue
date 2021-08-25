<template>
  <div>
    <div id="#liste" class="box1">
      <p id="p_appli"><span class="material-icons"> build </span>{{ name }}</p>
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter your Skills" v-model="theskill" />

        {{ theskill }}
      </form>

      <ul id="app_liste">
        <transition-group name="list" enter-active-class="animate__animated animate__bounceInDown">
          <li v-for="(data, index) in skills" :key="data" class="liapp">
            {{ index }} | {{ data }}
            <i class="fas fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
      <p v-if="skills.length >= 1" id="monkey">Only one skill?</p>
      <p v-else-if="skills.length >= 2" id="monkey">More than one skill I SEE</p>
      <p v-else id="monkey">You have no skills?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "liste",
  data() {
    return {
      theskill: "",
      name: "YOUR SKILLS",
      skills: ["Vue.js", "PHP", "JAVA", "CSS3", "C#"],
    };
  },
  methods: {
    addSkill() {
      this.skills.push(this.theskill);
      this.theskill = "";
    },
    remove(id) {
      this.skills.splice(id, 1);
    },
  },
  props: {
    msg2: String,
  },
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

v-app {
  background-color: black !important;
}

.box1 {
  width: 450px;
  display: block;
  min-height: 450px;
  margin: 1em;
  background-color: white;
  border-radius: 0.25rem;

  box-shadow: 0 1px 1px rgba(211, 211, 211, 0.12), 0 2px 2px rgba(223, 223, 223, 0.12),
    0 4px 4px rgba(221, 221, 221, 0.12), 0 8px 8px rgba(221, 221, 221, 0.12),
    0 16px 16px rgba(196, 196, 196, 0.12);
}

#monkey {
  padding: 1em 0 1em 2em !important;
  font-size: 1em;
  display: block;
  border-left: 5px solid indigo;
}

#app_liste {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

input {
  width: 415px;
  display: block;
  padding: 2rem 2rem;
  overflow: hidden;
  margin: 1em;

  border: 1px solid rgb(196, 196, 196) !important;
}

#appli {
  max-width: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}

#liste {
  background-color: white;
}

.box1 li {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

h2 {
  font-size: 3rem;
  padding: 0;
}

.liapp {
  font-size: 1.5rem;
  display: block;
  padding: 0.5em 2rem;
  margin: 1px;
}
p {
  padding-top: 10rem;
  font-size: 3rem;
}
</style>
