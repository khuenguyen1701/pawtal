<template>
  <div class="eventpage-wrapper">
    <div class="event-bg"></div>

    <div class="event-content-wrapper">
      <div class="breadcrumb" v-if="event">
        <router-link to="/home" class="breadcrumb-link">Home</router-link>

        <span class="breadcrumb-separator"> ></span>

        <router-link to="/events" class="breadcrumb-link">Events</router-link>

        <span class="breadcrumb-separator"> ></span>

        <span class="breadcrumb-current">{{ event.date }}</span>

        <div class="breadcrumb-sub">
          {{event.title}} in {{ event.place }}, at {{ event.time }}!
        </div>
      </div>

      <div v-else class="loading-message">Loading event…</div>

      <div v-if="event" class="eventpage-layout">
        <div class="event-sidebar">

          <div class="image-wrapper">
            <img
              :src="event.imageURL"
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
                {{ event.date }}
              </div>

              <button class="bookmark-button">
                <i class="fa-regular fa-bookmark"></i>
              </button>
            </div>

            <p><b>Department:</b> {{ event.group }}</p>
            <p><b>Building:</b> {{ event.place }}</p>
          </div>

          <button class="interest-button">
            <i class="fa-solid fa-star button-icon"></i>
            I'm Interested
          </button>
        </div>

        <div class="event-main">
          <h1 class="event-title">{{ event.title }}</h1>

          <p class="event-host">
            Hosted by <span>{{ event.group }}</span>
          </p>

          <h2 class="event-details-label">Event Details:</h2>

          <p class="event-description">
            {{ event.longDescription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

const imageLoaded = ref(false);
const event = ref<any>(null);

const route = useRoute();

onMounted(async () => {
  const docRef = doc(db, "events", route.params.id as string);
  const snapshot = await getDoc(docRef);
  
  if (snapshot.exists()) {
    event.value = { id: snapshot.id, ...snapshot.data() };
  }
});
</script>

<style scoped>
.eventpage-wrapper {
  position: relative;
  background: var(--color-background);
  min-height: 100vh;
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

.event-content-wrapper {
  position: relative;
  z-index: 2;
}

.loading-message {
  padding: 3rem 8rem;
  font-size: 1.2rem;
  font-weight: 600;
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
}

.breadcrumb-link:hover {
  opacity: 0.6;
}

.breadcrumb-separator {
  margin: 0 4px;
}

.breadcrumb-current {
  font-weight: 600;
}

.breadcrumb-sub {
  font-size: 12px;
  margin-top: 4px;
}

.eventpage-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  padding: 40px 8rem;
  gap: 32px;
}

.event-sidebar {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  margin-top: 30px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 12%);
}

.image-wrapper {
  position: relative;
  width: 100%;
}

.event-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
}

.image-skeleton {
  width: 100%;
  height: 220px;
  background: #e0e0e0;
  margin-bottom: 16px;
  position: relative;
}


.event-meta {
  font-size: 14px;
  margin-bottom: 16px;
}

.event-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.event-meta-date {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}

.bookmark-button {
  background: transparent;
  border: none;
  cursor: pointer;
}

.bookmark-button:hover {
  background: #eee;
}

.interest-button {
  width: 100%;
  padding: 12px;
  background: var(--color-primary);
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
}

.interest-button:hover {
  background: var(--color-primary-accent);
}

.event-main {
  z-index: 3;
}

.event-title {
  font-family: var(--font-serif);
  font-size: 40px;
  font-weight: 700;
  margin-bottom:20px;
}

.event-host span {
  font-weight: 600;
}

.event-details-label {
  font-family: var(--font-serif);
  margin-top: 45px;
  font-size: 24px;
  font-weight: 600;
}

.event-description {
  margin-top: 16px;
  line-height: 1.7;
}
</style>
