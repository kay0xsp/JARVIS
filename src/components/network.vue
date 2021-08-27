<template>
  <div class="mini_panel">
    <strong>Network :</strong>
    <br />
    RTT : {{ connection.rtt }} | Type : {{ connection.effectiveType }} | Donwlink : {{ connection.downlink }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      connection: [],
    };
  },
  mounted: function () {
    let networkInformation = navigator.connection;

    this.connection = networkInformation;
    console.log(networkInformation);
  },
};
</script>
