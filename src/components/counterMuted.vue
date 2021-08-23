<template>
  <div class="box1">
    <p id="p_appli">COUNTER MUTATIONS</p>
    <div>Counter: {{ counter }}</div>
    <button @click="increment">PRESS MU !</button>
  </div>
</template>

<script>
import { GET_COUNTER, SET_COUNTER } from "@/mutations/mutations-type";
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      increment: SET_COUNTER,
    }),
  },
  computed: {
    ...mapGetters({
      counter: GET_COUNTER,
    }),
  },
};
</script>
