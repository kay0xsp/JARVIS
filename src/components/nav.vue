<template>
  <div>
    <!-- The FACking Drawer (tiroir) / side menu-->
    <v-navigation-drawer v-model="drawer" mini-variant mini-variant-width="400" app temporary class="indigo">
      <!-- START OF LIST-->

      <v-list>
        <!-- FIRST TILE -->
        <v-list-tile>
          <router-link v-for="link in links" :key="link.text" class="router-link2" :to="link.route">
            <!-- FIRST element of TILE here is going to be an icon-->
            <v-list-tile-action>
              <span class="material-icons">
                {{ link.icon }}
              </span>
            </v-list-tile-action>
            <!-- CONTENT OF THE TILE-->
            <v-list-tile-content>
              <v-list-tile-title class="white--text">
                {{ link.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
        <!-- END OF THE TILE-->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="yo">
      <v-app-bar-nav-icon class="white logo-icon" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navigation",

  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "DASHBOARD", route: "/" },
        { icon: "info", text: "ABOUT", route: "/about" },
        { icon: "settings_input_component", text: "profile", route: "/profile" },
      ],
    };
  },
};
</script>

<style>
.yo {
  font-family: "orbitron";
  margin: 2em 0 0 2em !important;
  box-shadow: none !important;
  background: #1f2940 !important;
}

.router-link2 {
  text-decoration: none;
  color: white !important;
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
  padding: 1em;
  padding: 2rem;
}

.router-link2:hover {
  font-weight: bolder;
  background-color: black;
}
.router-link2 span {
  padding-right: 1em;
}

h1,
h2 {
  text-align: center;
}

#app {
  color: #2c3e50;
}

.router-link {
  text-decoration: none;
  padding: 2rem;
  display: block;
}

.router-link:hover {
  font-weight: bolder;
  background-color: black;
  color: white;
}
</style>
