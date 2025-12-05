<template>
  <footer class="footer">
    <div class="footer-content">

      <div class="contact-section">
        <h2 class="footer-title">CONTACT US</h2>

        <div class="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name." class="input-box" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email." class="input-box" />
        </div>

        <div class="form-group">
          <label>Note</label>
          <textarea class="text-area" placeholder="We appreciate your feedback."></textarea>
        </div>
      </div>

      <div class="social-section">
        <h2 class="footer-title">CONNECT WITH US!</h2>

        <div class="social-icons">
          <div class="icon-box"></div>
          <div class="icon-box"></div>
          <div class="icon-box"></div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: var(--color-secondary);
  padding: 3rem 8rem 1rem; /* smaller height */
  height: wrap; /* <-- THIS sets it to 10% of viewport height */
  color: var(--text-light);
  display: flex;
  align-items: center; /* vertically center */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* ---------- CONTACT SECTION (COMPACT MODE) ---------- */

.contact-section {
  width: 55%;
}

.footer-title {
  font-size: 18px;       /* smaller */
  font-weight: 700;
  margin-bottom: 6px;    /* much smaller */
}

.form-group {
  margin-bottom: 6px;    /* reduced */
}

label {
  font-size: 12px;
  padding-bottom: 4px;
}

.input-box,
.text-area {
  width: 100%;
  padding: 6px;          /* smaller size */
  height: 24px;          /* shrink */
  background: white;
  border: 2px dashed var(--color-primary);
  border-radius: 6px;
}

.text-area {
  height: 40px;          /* shrink the note box */
  resize: none;
}

/* ---------- SOCIAL SECTION ---------- */

.social-section {
  flex: 1;
  text-align: right;
}

.social-icons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 6px;
}

.icon-box {
  width: 32px;
  height: 32px;
  background: var(--color-primary-accent);
  border-radius: 6px;
}

</style>
