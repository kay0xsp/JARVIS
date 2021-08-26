<template>
  <v-app class="main">
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
body {
  background: transparent;
  font-family: "anonymousregular";
  padding: 0.1em;
}

.main {
  display: flex;
  justify-content: space-around;
}

.theme--light.v-application {
  background-color: rgb(243, 242, 242) !important;
}

#p_appli {
  font-size: 1.5em;
  padding: 1em 0 0 0.8em;
  margin: 0 !important;
  font-weight: lighter;
  text-align: left;
  color: #4169e1;
  font-family: "orbitron";
}

#p_appli span {
  padding: 0 0.5em 0 0;
}

@font-face {
  font-family: "orbitron";
  src: local("./assets/fontsrb/orbitron-medium.otf");
  src: url("./assets/fonts/orbitron-medium.otf?#iefix") format("embedded-opentype"),
    url("./assets/fonts/orbitron-medium.otf");

  font-weight: normal;
  font-style: normal;
}
</style>
