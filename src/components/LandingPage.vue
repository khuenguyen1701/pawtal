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
import { ref, computed, onMounted } from "vue";
import EventList from "@/components/EventList.vue";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import type { EventItem } from "@/type/Events";

const selectedDate = ref<string | null>(null);
const selectedGroup = ref<string | null>(null);
const selectedPlace = ref<string | null>(null);
const events = ref<EventItem[]>([]);

onMounted(() => {
  const q = query(collection(db, "events"), orderBy("createdAt", "desc"));

  onSnapshot(q, (snapshot) => {
    events.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as EventItem[];
  });
});
</script>

<style scoped>
.landing-wrapper {
  width: screen;
  min-height: 100vh;
}

.hero-banner {
  width: screen;
  height: 15rem;
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
  padding: 2px 40px;
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

.page-title {
  text-align: center;
  font-family: var(--font-serif);
  font-size: 1.875rem;
  font-weight: 700;
  margin: 1.5rem 0;
}

.eventlist-wrapper {
  padding: 1rem 0rem;
}
</style>
