<template>
  <div>
    <p id="p_appli"><span class="material-icons"> location_on </span>{{ name }}</p>
    <div class="box2">
      <div style="height: 500px; width: 100%">
        <l-map
          v-if="showMap"
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 80%"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker :lat-lng="withPopup">
            <l-popup>
              <div @click="innerClick">
                I am a popup
                <p v-show="showParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed pretium nisl, ut
                  sagittis sapien. Sed vel sollicitudin nisi. Donec finibus semper metus id malesuada.
                </p>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
        <div class="map_text">
          <button id="find-me">Show my location {{ withPopup }}<br /></button><br />

          <a id="map-link" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { Icon } from "leaflet";

//ICONs
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      name: "Map",
      zoom: 13,
      center: [43, 1],
      withPopup: [43, 1],
      hello: ["SALUT", " MOUKAT"],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      showParagraph: false,
      mapOptions: {
        zoomSnap: 2.0,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
  },
  mounted: function () {
    // this.withPopup = [43, 1];
    // this.center = [43, 1];

    if (navigator.geolocation) {
      var self = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        self.position = position.coords;
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        document.getElementById("map-link").innerHTML = lat + " " + long;
      });
    }
  },
};
</script>

<style>
.map_text p {
  display: block;
  font-size: 1em;
  padding: 0;
  margin: 1.5em;
}
</style>
