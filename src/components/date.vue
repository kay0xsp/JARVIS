<template>
  <div class="mini_panel indigo p_white">
    <strong>TODAY:</strong> <br />
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
