<template>
  <div>
    <div class="box1">{{ cores }} <br /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cores: [],
    };
  },
  mounted: function () {
    let logicalProcessors = window.navigator.hardwareConcurrency;

    this.cores = logicalProcessors;

    console.log(logicalProcessors, networkInformation);
  },
};
</script>
