<template>
  <div class="mini_panel">
    <strong>Box IP adress :</strong>
    <br />
    {{ list.ip }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: undefined,
    };
  },
  mounted() {
    Vue.axios
      .get(
        "https://api.ipify.org/?format=json&fbclid=IwAR0lTfAybZqJcUgPFjyUl9oH8pXpdCInjQPR5bE__FLYPkhqvnoDoB1rBkw"
      )
      .then((resp) => {
        this.list = resp.data;
        console.warn(resp.data);
      });
  },
};
</script>

<style>
.mini_panel {
  padding: 2em;
  margin: 0.5em;
  background: #1f2940;
  color: white;
  border-radius: 0.25rem;
  width: 100%;
  height: 120px;
}
.mini_panel strong {
  color: rgb(134, 134, 134);
}
</style>
