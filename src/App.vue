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
strong {
  text-transform: uppercase;
}
.p_white {
  color: white;
}
body {
  background: transparent;
  font-family: "anonymousregular";
}

.main {
  display: flex;
  justify-content: space-around;
  margin: 0 !important;
}

.theme--light.v-application {
  background-color: #141b2d !important;
}

#p_appli {
  font-size: 1.5em;
  padding: 1em 0 0 0.8em;
  margin: 0 !important;
  font-weight: lighter;
  text-align: left;
  color: #fff;
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
