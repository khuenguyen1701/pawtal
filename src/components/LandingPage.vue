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

    <div class="demo-create-event">
      <router-link to="/org/create-event" class="event-link">
        Create Event
      </router-link>
    </div>

    <div class="tabs-container">
      <button class="tab-button" @click="activeTab = 'featured'">Featured Event</button>
      <button class="tab-button" @click="activeTab = 'today'">Today's Event</button>
      <button class="tab-button" @click="activeTab = 'byDate'">Events By Date</button>
      <button class="tab-button" @click="activeTab = 'groups'">Groups</button>
      <button class="tab-button" @click="activeTab = 'places'">Places</button>
    </div>

    <h2 class="page-title">{{ titleForTab }}</h2>

    <div class="eventlist-wrapper">
      <EventList
        :events="events"
        :selectedDate="selectedDate"
        :selectedGroup="selectedGroup"
        :selectedPlace="selectedPlace"
      />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import EventList from "@/components/EventList.vue";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import type { EventItem } from "@/type/Events";

// FILTERS
const selectedDate = ref<string | null>(null);
const selectedGroup = ref<string | null>(null);
const selectedPlace = ref<string | null>(null);

// EVENT DATA from Firestore
const events = ref<EventItem[]>([]);

// LIVE FIRESTORE LISTENER
onMounted(() => {
  const q = query(collection(db, "events"), orderBy("createdAt", "desc"));

  onSnapshot(q, (snapshot) => {
    events.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as EventItem[];
  });
});

// TABS
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
  width: screen;
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

.demo-create-event {
  padding: 12px 40px;
}

.event-link {
  font-size: 18px;
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 700;
}

.event-link:hover {
  text-decoration: underline;
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
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
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
