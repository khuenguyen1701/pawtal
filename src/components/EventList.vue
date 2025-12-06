<template>
  <div class="event-list-wrapper">
    <h2 class="page-title">{{ titleForTab }}</h2>
    <div class="filters">
      <MultiSelect
        v-model="selectedGroups"
        :options="departments"
        label="Filter by Group"
      />

      <MultiSelect
        v-model="selectedPlaces"
        :options="places"
        label="Filter by Place"
      />
    </div>
    <div class="event-grid">
      <div
        v-for="event in filteredEvents"
        :key="event.id"
        class="event-card"
      >
        <router-link :to="`/events/${event.id}`" class="event-link">
          <div class="event-poster"></div>

          <h2 class="event-title">{{ event.title }}</h2>
          <p class="event-description">{{ event.shortDescription }}</p>

          <div class="event-meta">{{ event.date }}</div>
          <div class="event-meta">{{ event.place }}</div>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { db } from "@/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";

import MultiSelect from "@/components/MultiSelect.vue";
import { departments } from "@/data/Departments";
import { places } from "@/data/Places";

interface Props {
  selectedDate?: string | null;
}

const props = defineProps<Props>();
const eventList = ref<any[]>([]);
const selectedGroups = ref<string[]>([]);
const selectedPlaces = ref<string[]>([]);
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

onMounted(() => {
  onSnapshot(collection(db, "events"), (snapshot) => {
    eventList.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });
});

const filteredEvents = computed(() =>
  eventList.value.filter(event => {

    const matchDate = props.selectedDate
      ? event.dateISO === props.selectedDate
      : true;

    const matchGroup = selectedGroups.value.length
      ? selectedGroups.value.includes(event.group)
      : true;

    const matchPlace = selectedPlaces.value.length
      ? selectedPlaces.value.includes(event.place)
      : true;

    return matchDate && matchGroup && matchPlace;
  })
);
</script>

<style scoped>
.event-list-wrapper {
  min-height: max-content;
  padding: 2rem 8rem;
  margin-bottom: 3rem;
}

.filters {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}

.page-title {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1.875rem;
  font-weight: 700;
  margin: 1.5rem 0;
}

.event-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

@media (min-width: 640px) {
  .event-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .event-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.event-card {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 16px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
  transition: transform 0.2s ease;
}

.event-card:hover {
  transform: scale(1.02);
}

.event-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.event-poster {
  background: var(--color-primary);
  height: 140px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
}

.event-title {
  font-family: var(--font-san);
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.25;
  margin-bottom: 8px;
  color: var(--text-dark);
}

.event-description {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.event-meta {
  font-size: 0.875rem;
  color: #555;
}
</style>
