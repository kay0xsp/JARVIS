<template>
  <div>
    <div id="calendar">
      <v-app id="inspire">
        <v-row class="fill-height">
          <v-col>
            <v-sheet height="600">
              <v-calendar
                ref="calendar"
                v-model="value"
                color="primary"
                type="4day"
                :events="events"
                :event-color="getEventColor"
                :event-ripple="false"
                @change="getEvents"
                @mousedown:event="startDrag"
                @mousedown:time="startTime"
                @mousemove:time="mouseMove"
                @mouseup:time="endDrag"
                @mouseleave.native="cancelDrag"
              >
                <template v-slot:event="{ event, timed, eventSummary }">
                  <div class="v-event-draggable" v-html="eventSummary()"></div>
                  <div v-if="timed" class="v-event-drag-bottom" @mousedown.stop="extendBottom(event)"></div>
                </template>
              </v-calendar>
            </v-sheet>
          </v-col>
        </v-row>
      </v-app>
    </div>
  </div>
</template>

<style>
#calendar {
  width: 1500px !important;
}

.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;
}
</style>
