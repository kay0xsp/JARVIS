<template>
  <div class="sidebar_media boxy-shadow indigo">
    <h1>JARVIS 1.0</h1>
    <navbar />
    <ul>
      <a href="https://www.facebook.com/" target="blank"
        ><li><img src="../assets/facebook.png" alt="" /></li
      ></a>
      <a href="https://www.instagram.com/" target="blank"
        ><li><img src="../assets/instagram.png" alt="" /></li
      ></a>
      <a href="https://www.linkedin.com/" target="blank"
        ><li><img src="../assets/linkedin.png" alt="" /></li
      ></a>
      <a href="https://www.youtube.com/" target="blank"
        ><li><img src="../assets/youtube.png" alt="" /></li
      ></a>
    </ul>
  </div>
</template>

<script>
import navbar from "../components/nav.vue";
export default {
  components: {
    navbar,
  },
};
</script>

<style>
.sidebar_media h1 {
  color: white;
  font-family: "orbitron";
  font-size: 0.8em;
  font-weight: lighter;
  padding: 1em 0 0 0;
}
.sidebar_media {
  width: 120px;
  height: 100%;
  border-radius: 1em;
  margin: 0.25em;
}

.sidebar_media ul {
  padding: 0 !important;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.sidebar_media ul li {
  margin: auto;
  margin-top: 2.5em;
  text-align: center;
  border-radius: 0.5em;
  display: block;
  width: 30px;
  height: 30px;
}

.sidebar_media ul li img {
  width: 100%;
  background-blend-mode: difference;
  filter: invert(100%);
}
</style>
