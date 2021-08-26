<template>
  <div class="mini_panel">
    <h3>TODAY:</h3>
    {{ currentDate() }}
    <p id="date_p"></p>
  </div>
</template>

<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
      return date;
    },
  },
};
</script>
