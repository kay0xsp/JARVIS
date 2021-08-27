<template>
  <div class="mini_panel">
    <strong>BATTERY :</strong>
    <br />
    <p class="percent">50%</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      battery: [],
    };
  },
  mounted: function () {
    let percent = document.querySelector(".percent");
    navigator.getBattery().then(function (battery) {
      percent.innerHTML = battery.level * 100 + "%";
    });
  },
};
</script>
