<template>
  <div>
    <p id="p_appli"><span class="material-icons"> reorder </span>{{ name }}</p>
    <div id="#liste" class="box1">
      <form @submit.prevent="addSkill" class="todolist">
        <input type="text" placeholder="ENTER TASK" v-model="theskill" />

        {{ theskill }}
      </form>

      <ul id="app_liste">
        <transition-group name="list" enter-active-class="animate__animated animate__bounceInDown">
          <li v-for="(data, index) in todo" :key="data" class="liapp boxy-shadow">
            {{ data }}
            <i class="fas fa-trash-alt" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "liste",
  data() {
    return {
      theskill: "",
      name: "Task List",
      todo: ["WORKOUT", "Groceries", "Take out the trash", "Learn vue", "call PE"],
    };
  },
  methods: {
    addSkill() {
      this.todo.push(this.theskill);
      this.theskill = "";
    },
    remove(id) {
      this.todo.splice(id, 1);
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
  margin: 0em 1em 1em 1em;

  border-radius: 0.5rem;
  padding: 1em;
}

.boxy-shadow {
  background-color: white;
  box-shadow: 0 1px 1px rgba(211, 211, 211, 0.12), 0 2px 2px rgba(223, 223, 223, 0.12),
    0 4px 4px rgba(221, 221, 221, 0.12), 0 8px 8px rgba(221, 221, 221, 0.12),
    0 16px 16px rgba(196, 196, 196, 0.12);
}

#app_liste {
  padding: 0;
  margin: 1em 0 0 0;
  list-style-type: none;
}

.todolist input {
  width: 100%;
  display: block;
  padding: 1rem 2rem;
  clear: both;
  border: 1px solid rgb(196, 196, 196) !important;
}

#appli {
  max-width: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
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
  font-size: 1.3rem;
  display: block;
  padding: 0.8em 2rem;
  margin: 10px 0;
  border-radius: 0.5em;
  text-transform: uppercase;
}
</style>
