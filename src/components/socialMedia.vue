<template>
  <div class="sidebar_media">
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
  background: #1f2940;
  border-right: 1px solid black;
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

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .yo {
    padding: 1.5em 1.5em !important;
    margin: 0 !important;
    max-width: 100px;
  }
  .sidebar_media {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
  }
  .sidebar_media h1 {
    display: none;
  }
  .sidebar_media ul {
    width: 100%;
    margin: 0 0 0 2rem;
    flex-direction: row;
  }
  .sidebar_media ul li {
    margin: 2em 1.5em;
  }
}
</style>
