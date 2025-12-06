<template>
  <div class="org-page">

    <section class="club-header">
      <div class="club-avatar"></div>

      <div class="club-info">
        <h2 class="club-name">{{ dept }}</h2>
        <p>Contact: {{ phone }}</p>
        <p>Email: {{ email }}</p>
      </div>
    </section>

    <div class="section-title yellow">
      Organization Shortcuts
    </div>

    <section class="upcoming-events">
      <h3>Upcoming Events</h3>

      <div class="events-bar"></div>

      <div class="events-grid">
        <!-- Event Card 1 -->
        <div class="event-card">
          <div class="event-image"></div>
          <h4>Exhibit NOW in GCPA from May 23 onward! Stop by to visit and learn more!</h4>
          <p class="event-date">Fri, Nov 28</p>
          <p class="event-location">Room A10, GCPA</p>
        </div>

        <!-- Event Card 2 -->
        <div class="event-card">
          <div class="event-image"></div>
          <h4>Exhibit NOW in GCPA from May 23 onward! Stop by to visit and learn more!</h4>
          <p class="event-date">Fri, Nov 28</p>
          <p class="event-location">Room A10, GCPA</p>
        </div>

        <!-- Event Card 3 -->
        <div class="event-card">
          <div class="event-image"></div>
          <h4>Exhibit NOW in GCPA from May 23 onward! Stop by to visit and learn more!</h4>
          <p class="event-date">Fri, Nov 28</p>
          <p class="event-location">Room A10, GCPA</p>
        </div>
      </div>
    </section>

    <div class="section-title yellow">
      Organization Management
    </div>

    <section class="management-section">
      <div class="side-menu">
        <button>About</button>
        <button>Roster</button>
        <button>Events</button>
        <button>Finance</button>
        <button>Documents</button>
        <button>Elections</button>
        <button>Gallery</button>
        <button>Forms</button>
      </div>

      <div class="tasks-box">
        <h3>INSTRUCTION</h3>
        <ul>
          <li>Click "Create Event"</li>
          <li>Enter your event info</li>
        </ul>
      </div>
      <div class="tasks-box">
        <h3>Upcoming Tasks</h3>
        <ul>
          <li>Dec 1: Spring Budget Opens</li>
          <li>Jan 4: Spring Budget Closes</li>
          <li>Jan 26: First Day of Classes</li>
        </ul>
      </div>
    </section>

   
    <button class="create-event-btn" @click="$router.push('/create-event')">
    Create Event
    </button>


  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { auth, db } from "../firebase.js"
import { doc, getDoc } from "firebase/firestore"

// These are what you display in your template
const dept = ref("")
const phone = ref("")
const email = ref("")

onMounted(async () => {
  const user = auth.currentUser
  if (!user) return
  
  // Load the user data from Firestore
  const userRef = doc(db, "users", user.uid)
  const snap = await getDoc(userRef)

  if (snap.exists()) {
    const data = snap.data()
    dept.value = data.department
    phone.value = data.phone
    email.value = data.email
  }
})
</script>

<style scoped>
.org-page {
  font-family: "Inter", sans-serif;
  background: #faf6e8;
  padding-bottom: 60px;
}

.club-header {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 30px;
  gap: 20px;
}

.club-avatar {
  width: 120px;
  height: 120px;
  background: #d9d9d9;
  border-radius: 50%;
}

.club-info p {
  margin: 4px 0;
}

.section-title {
  background: #f3d46b;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
}

/* UPCOMING EVENTS */
.upcoming-events {
  text-align: center;
  padding: 20px;
}

.events-bar {
  width: 60%;
  height: 40px;
  background: #eee;
  margin: 10px auto 30px;
  border-radius: 8px;
}

.events-grid {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}

.event-card {
  width: 250px;
  background: #fff;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.event-image {
  width: 100%;
  height: 140px;
  background: #f3d46b;
  border-radius: 8px;
  margin-bottom: 10px;
}

.event-date, .event-location {
  font-size: 12px;
  color: #555;
}

.management-section {
  display: flex;
  padding: 30px;
  gap: 30px;
  background: #faf6e8;
}

.side-menu {
  width: 200px;
  display: flex;
  flex-direction: column;
}

.side-menu button {
  width: 100%;
  padding: 12px;
  text-align: left;
  background: #f4d764;
  border: none;
  font-size: 16px;
  padding-left: 20px;
  margin-bottom: 4px;
}

.tasks-box {
  flex: 1;
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.tasks-box ul {
  margin-top: 15px;
}

.tasks-box li {
  margin-bottom: 12px;
  font-size: 16px;
}

.create-event-btn {
  display: block;
  margin: 40px auto;
  background: #f4d764;
  color: #000;
  border: none;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;
  width: fit-content;
}
.create-event-btn:hover {
  background: #e5c352;
}

</style>
