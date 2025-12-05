<template>
  <div class="eventpage-wrapper">
    <div class="event-bg"></div>

    <div class="event-content">
      <div class="breadcrumb">
        <router-link to="/home" class="breadcrumb-link">
          DePauw University
        </router-link>

        <span class="breadcrumb-separator"> ></span>

        <router-link to="/home" class="breadcrumb-link">
          Events
        </router-link>

        <span class="breadcrumb-separator"> ></span>

        <span class="breadcrumb-current">
          {{ event?.date }}
        </span>

        <div class="breadcrumb-sub">
          Exhibit NOW in {{ event?.location }}, from May 23 onward! Stop by to visit and learn more!
        </div>
      </div>

      <div class="eventpage-layout">
        <div class="event-sidebar">

          <div class="image-wrapper">
            <img
              :src="event?.image"
              alt="Event Poster"
              class="event-image"
              @load="imageLoaded = true"
              v-show="imageLoaded"
            />

            <div v-show="!imageLoaded" class="image-skeleton"></div>
          </div>

          <div class="event-meta">
           <div class="event-header-row">
            <div class="event-meta-date">
              <i class="fa-regular fa-calendar"></i>
              {{ event?.date }}
            </div>

            <button class="bookmark-button">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>



            <p>Department: {{ event?.group }}</p>
            <p>Building: {{ event?.place }}</p>
          </div>

          <button class="interest-button">
            <i class="fa-solid fa-star button-icon"></i>
            I'm Interested
          </button>

        </div>

        <div class="event-content">
          <p class="event-type">Exhibition</p>

          <h1 class="event-title">{{ event?.title }}</h1>

          <p class="event-host">
            Hosted by
            <span>{{ event?.group }}</span>
          </p>

          <h2 class="event-details-label">Event Details:</h2>

          <p class="event-description">
            {{ event?.longDescription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { events, type EventItem } from "@/data/Events";
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const imageLoaded = ref(false);
const route = useRoute();
const event = ref(null);

onMounted(async () => {
  const docRef = doc(db, "events", route.params.id as string);
  const snapshot = await getDoc(docRef);
  event.value = snapshot.data();
});
</script>

<style scoped>
.eventpage-wrapper {
  position: relative;
  background: var(--color-background);
  min-height: 100vh;
  z-index: 0;
}

.event-bg {
  position: absolute;
  top: 95px;
  left: 0;
  width: 100%;
  height: 25%;
  background: var(--color-primary);
  z-index: 1;
  pointer-events: none;

}

.event-content {
  position: relative;
  z-index: 2;
}

.breadcrumb {
  padding: 24px 32px 0 32px;
  font-size: 14px;
  color: #4a4a4a;
}
.breadcrumb-link {
  font-weight: 600;
  color: #333;
  text-decoration: none;
  transition: opacity 0.2s;
}

.breadcrumb-link:hover {
  opacity: 0.6;
}

.breadcrumb-separator {
  margin: 0 4px;
}

.breadcrumb-current {
  font-weight: 600;
  color: #333;
}


.breadcrumb-sub {
  font-size: 12px;
  margin-top: 4px;
}

.eventpage-layout {
  display: grid;
  grid-template-columns: 1fr;
  padding: 40px 8rem;
  gap: 32px;
}

@media (min-width: 1024px) {
  .eventpage-layout {
    grid-template-columns: 300px 1fr;
  }
}

.event-sidebar {
  background: white;
  padding: 16px;
  margin-top: 50px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);
}

.image-wrapper {
  position: relative;
  width: 100%;
}

.event-image {
  width: 100%;
  border-radius: 12px;
  display: block;
  margin-bottom: 16px;
}

.image-skeleton {
  width: 100%;
  height: 220px;
  background: #e0e0e0;
  overflow: hidden;
  margin-bottom: 16px;
  position: relative;
}

.image-skeleton::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e0e0e0 0%, #f5f5f5 50%, #e0e0e0 100%);
}

.event-meta {
  font-size: 14px;
  margin-bottom: 16px;
  color: #333;
}
.event-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.event-meta-date {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 14px;
}

.bookmark-button {
  padding: 6px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;
}

.bookmark-button:hover {
  background: #eee;
}


.interest-button {
  width: 100%;
  padding: 12px 0;
  background: var(--color-primary);
  color: black;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease, transform 0.15s ease;
}

.interest-button:hover {
  background: var(--color-primary-accent);
  transform: translateY(-2px);
}

.button-icon {
  font-size: 16px;
}

.bookmark-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

.bookmark-button {
  padding: 6px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;
}

.bookmark-button:hover {
  background: #eee;
}

.event-type {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
}

.event-title {
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 700;
  margin-top: 4px;
}

.event-host {
  margin-top: 8px;
  font-size: 14px;
}

.event-host span {
  font-weight: 600;
}

.event-details-label {
  margin-top: 32px;
  font-family: var(--font-serif);
  font-size: 24px;
  font-weight: 600;
}

.event-description {
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.7;
  white-space: pre-line;
}
</style>
