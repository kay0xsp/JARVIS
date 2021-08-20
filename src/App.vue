<template>
  <v-app grey lighten-2>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/nav";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
.theme--light.v-application {
  background-color: rgb(243, 242, 242) !important;
}

#p_appli {
  font-size: 2em;
  padding: 1em;
  font-weight: bold;
  text-align: left;
  color: #4169e1;
}

#p_appli span {
  padding: 0 1em 0 0;
}
</style>
