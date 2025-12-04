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
  padding:  40px 50px;
  width: screen;
  color: var(--text-light);
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 40px;
}

.contact-section {
  width: 55%;
}

.footer-title {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 50px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 15px;
}

.input-box {
  width: 100%;
  padding: 12px;
  background: white;
  border: 3px dashed var(--color-primary);
  border-radius: 8px;
}

.text-area {
  width: 100%;
  height: 120px;
  background: white;
  border: 3px dashed var(--color-primary);
  border-radius: 8px;
  padding: 12px;
  resize: none;
}

.social-section {
  flex: 1;
  text-align: center;
  align-items: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.icon-box {
  width: 60px;
  height: 60px;
  background: var(--color-primary-accent);
  border-radius: 8px;
}
</style>
