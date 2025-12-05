<template>
  <div class="event-grid">

    <div
      v-for="event in filteredEvents"
      :key="event.id"
      class="event-card"
    >
      <router-link :to="`/events/${event.id}`" class="event-link">

        <div class="event-poster"></div>

        <h2 class="event-title">
          {{ event.shortDescription }}
        </h2>

        <div class="event-meta">
          {{ event.date }}
        </div>
        <div class="event-meta">
          {{ event.location }}
        </div>
      </router-link>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { db } from "@/firebase.js";
import { collection, onSnapshot } from "firebase/firestore";

interface Props {
  selectedDate?: string | null;
  selectedGroup?: string | null;
  selectedPlace?: string | null;
}

const props = defineProps<Props>();

// Store events loaded from Firebase
const eventList = ref<any[]>([]);

// Fetch Firestore events in real time
onMounted(() => {
  onSnapshot(collection(db, "events"), (snapshot) => {
    eventList.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });
});

// Filtering based on dropdowns
const filteredEvents = computed(() =>
  eventList.value.filter(event => {
    const matchDate = props.selectedDate
      ? event.dateISO === props.selectedDate
      : true;

    const matchGroup = props.selectedGroup
      ? event.group === props.selectedGroup
      : true;

    const matchPlace = props.selectedPlace
      ? event.place === props.selectedPlace
      : true;

    return matchDate && matchGroup && matchPlace;
  })
);
</script>


<style scoped>
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

.event-meta {
  font-size: 0.875rem;
  color: #555;
}
</style>
