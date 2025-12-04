<template>
  <div class="event-grid">

    <div
      v-for="event in filteredEvents"
      :key="event.id"
      class="event-card"
    >
      <router-link :to="`/events/${event.id}`" class="event-link">
        
        <!-- Poster -->
        <div class="event-poster"></div>

        <!-- Title -->
        <h2 class="event-title">
          {{ event.shortDescription }}
        </h2>

        <!-- Meta -->
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
import { computed } from "vue";
import { events } from "@/data/Events";

interface Props {
  selectedDate?: string | null;
  selectedGroup?: string | null;
  selectedPlace?: string | null;
}

const props = defineProps<Props>();

const filteredEvents = computed(() =>
  events.filter(event => {
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
/* GRID WRAPPER */
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

/* EVENT CARD */
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

/* LINK RESET */
.event-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* EVENT POSTER */
.event-poster {
  background: var(--color-primary);
  height: 140px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
}

/* TITLE */
.event-title {
  font-family: var(--font-san);
  font-weight: 600;
  font-size: 1.125rem; /* ~ text-lg */
  line-height: 1.25;
  margin-bottom: 8px;
  color: var(--text-dark);
}

/* META */
.event-meta {
  font-size: 0.875rem;
  color: #555;
}
</style>
