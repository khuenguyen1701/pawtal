<template>
  <div class="create-wrapper">

    <h1 class="page-title">Create New Event</h1>

    <div class="form-card">

      <form class="event-form">

        <div class="form-grid">

          <div class="form-group">
            <label>Event Title</label>
            <input type="text" v-model="title" class="input-field" placeholder="Enter event name" />
          </div>

          <div class="form-group">
            <label>Short Description</label>
            <input type="text" v-model="shortDescription" class="input-field" placeholder="Shown on event card" />
          </div>

          <div class="form-group full-width">
            <label>Long Description</label>
            <textarea v-model="longDescription" class="textarea-field" placeholder="Full event details..."></textarea>
          </div>

          <div class="form-group">
            <label>Date</label>
            <input type="date" v-model="date" class="input-field" />
          </div>

          <div class="form-group">
            <label>Time</label>
            <input type="time" v-model="time" class="input-field" />
          </div>

          <div class="form-group">
            <label>Location (Building)</label>
            <select v-model="location" class="input-field">
              <option disabled value="">Select a building</option>
              <option v-for="place in places" :key="place">{{ place }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>Department / Club</label>
            <select v-model="group" class="input-field">
              <option disabled value="">Select group</option>
              <option v-for="dept in departments" :key="dept">{{ dept }}</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label>Poster Image</label>
            <input type="file" @change="handlePosterUpload" class="input-field" />
            </div>


        </div>

        <<div class="form-actions">
            <button type="button" class="cancel-btn">Cancel</button>
            <button type="button" class="create-btn" @click="createEvent">Create Event</button>
        </div>


      </form>

    </div>

  </div>
</template>

<script setup lang="ts">
import { db, storage } from "@/firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref } from "vue";

const posterFile = ref<File | null>(null);

const handlePosterUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  posterFile.value = target.files?.[0] || null;
};

const createEvent = async () => {
  let imageURL = "";

  if (posterFile.value) {
    const fileRef = storageRef(storage, `eventPosters/${posterFile.value.name}`);
    await uploadBytes(fileRef, posterFile.value);
    imageURL = await getDownloadURL(fileRef);
  }

  const eventData = {
    title: title.value,
    shortDescription: shortDescription.value,
    longDescription: longDescription.value,
    date: date.value,
    dateISO: date.value,
    time: time.value,
    place: location.value,
    group: group.value,
    imageURL,
    createdBy: "orgID123",
    createdAt: Timestamp.now()
  };

  await addDoc(collection(db, "events"), eventData);
  alert("Event created!");
};
</script>


<style scoped>
.create-wrapper {
  width: screen;
  padding: 2rem 8rem;
}

.page-title {
  font-family: var(--font-serif);
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

.form-card {
  background: white;
  padding: 2rem 3rem 2rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 5px 12px rgb(0 0 0 / 10%);
}

.event-form {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 25px
}

.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  width: 100%;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  font-family: var(--font-san);
  box-sizing: border-box;
}


.textarea-field {
  height: 150px;
  resize: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 2rem;
}

.cancel-btn {
  background: #ddd;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
}

.create-btn {
  background: var(--color-primary);
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
}

.create-btn:hover {
  background: var(--color-primary-accent);
}
</style>
