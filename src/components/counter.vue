<template>
  <div class="box1">
    <p id="p_appli"><span class="material-icons"> schedule </span>COUNTER</p>
    <div class="counter">
      {{ $store.state.counterMU.counter }}
    </div>
    <div>
      <center>
        {{ $store.state.counterMU.counter }}
        <sup>2</sup>
        {{ $store.getters.counterSquared }}
      </center>
    </div>
    <div id="thecounter">
      <div class="buttons">
        <button @click="$store.dispatch('decreaseCounter')">-</button>
        <button @click="$store.dispatch('increaseCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.counter {
  text-align: center;
  font-size: 5rem;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
}
.buttons button {
  font-size: 2rem;
  display: block;
  border: 1px solid lightgray;
  width: 5em;
  height: 5em;
}
.buttons button:hover {
  background: cornflowerblue;
  transition: ease-in;
  transition: 1s;
}
</style>
