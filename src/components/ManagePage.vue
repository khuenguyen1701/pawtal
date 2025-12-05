<template>
  <div class="org-page">

    <!-- HEADER CARD: CLUB INFO -->
    <section class="club-header">
      <div class="club-avatar"></div>

      <div class="club-info">
        <h2 class="club-name">[Club’s Name]</h2>
        <p>Contact: [Phone number]</p>
        <p>Email: [Club’s email]</p>
      </div>
    </section>

    <!-- SECTION TITLE -->
    <div class="section-title yellow">
      Organization Shortcuts
    </div>

    <!-- UPCOMING EVENTS SECTION -->
    <section class="upcoming-events">
      <h3>Upcoming Events</h3>

      <!-- Top empty horizontal block (from screenshot) -->
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

    <!-- MANAGEMENT SECTION TITLE -->
    <div class="section-title yellow">
      Organization Management
    </div>

    <!-- MANAGEMENT MAIN AREA -->
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
        <h3>Upcoming Tasks</h3>
        <ul>
          <li>Dec 1: Spring Budget Opens</li>
          <li>Jan 4: Spring Budget Closes</li>
          <li>Jan 26: First Day of Classes</li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script setup>
</script>

<style scoped>
.org-page {
  font-family: "Inter", sans-serif;
  background: #faf6e8;
  padding-bottom: 60px;
}

/* CLUB HEADER */
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

/* MANAGEMENT SECTION */
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
</style>
