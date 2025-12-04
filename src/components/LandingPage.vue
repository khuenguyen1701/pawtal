<template>
  <div class="landing-wrapper">

    <div class="hero-banner">
      <div class="hero-date-picker">
        <h3 class="hero-label">Select a date</h3>
        <input
          type="date"
          v-model="selectedDate"
          class="hero-input"
        />
      </div>
    </div>

    <div class="tabs-container">
      <button class="tab-button" @click="activeTab = 'featured'">Featured Event</button>
      <button class="tab-button" @click="activeTab = 'today'">Today's Event</button>
      <button class="tab-button" @click="activeTab = 'byDate'">Events By Date</button>
      <button class="tab-button" @click="activeTab = 'groups'">Groups</button>
      <button class="tab-button" @click="activeTab = 'places'">Places</button>
    </div>

    <h2 class="page-title">
      {{ titleForTab }}
    </h2>

    <div class="eventlist-wrapper">
      <EventList
        :selectedDate="selectedDate"
        :selectedGroup="selectedGroup"
        :selectedPlace="selectedPlace"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import EventList from "@/components/EventList.vue";

const selectedDate = ref<string | null>(null);
const selectedGroup = ref<string | null>(null);
const selectedPlace = ref<string | null>(null);

const activeTab = ref("today");

const titleForTab = computed(() => {
  switch (activeTab.value) {
    case "featured": return "Featured Event";
    case "byDate": return "Events By Date";
    case "groups": return "Events by Group";
    case "places": return "Events by Place";
    default: return "Today's Event";
  }
});
</script>

<style scoped>
.landing-wrapper {
  width: 100%;
  min-height: 100vh;
}

.hero-banner {
  width: screen;
  height: 12rem;
  background: #d1d1d1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8rem;
}

.hero-date-picker {
  text-align: right;
}

.hero-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.hero-input {
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 6px;
}

.tabs-container {
  background: #fff7cc;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.tab-button {
  background: transparent;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
}

.tab-button:hover {
  text-decoration: underline;
}

.page-title {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1.875rem;
  font-weight: 700;
  margin: 1.5rem 0;
}

.eventlist-wrapper {
  padding: 1rem 8rem 5rem;
}
</style>
