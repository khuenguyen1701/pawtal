<template>
  <div class="info-container">
    <div class="info-card">
      <h1 class="title">SELECT YOUR DEPARTMENT</h1>

      <label class="label">DEPARTMENT</label>
      <select v-model="selectedDept" class="dropdown">
        <option disabled value="">-- Choose a Department --</option>
       <option v-for="org in organizers" :key="org">
        {{ org }}
        </option>
      </select>

      <label class="label">PHONE NUMBER</label>
      <input 
        v-model="phone"
        type="tel"
        class="input-box"
        placeholder="e.g. 317-555-1234"
      />

      <label class="label">EMAIL</label>
      <input 
        v-model="email"
        type="email"
        class="input-box"
        placeholder="yourname@depauw.edu"
      />

      <button 
        class="submit-btn" 
        :disabled="!isFormComplete"
        @click="submitInfo"
      >
        SUBMIT
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { organizers } from "../data/Organizers"
import { useRouter } from "vue-router"

import { auth, db } from "../firebase.js"
import { doc, setDoc } from "firebase/firestore"

const router = useRouter()

const selectedDept = ref("")
const phone = ref("")
const email = ref("")

const isFormComplete = computed(() => {
  return selectedDept.value && phone.value && email.value
})

const submitInfo = async () => {
  const user = auth.currentUser
  if (!user) return

  await setDoc(doc(db, "users", user.uid), {
    role: "faculty",
    department: selectedDept.value,
    phone: phone.value,
    email: email.value
  }, { merge: true })

  router.push("/home")
}
</script>

<style scoped>
.info-container {
  width: 100vw;
  height: 100vh;
  background: #f4d764; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-card {
  background: white;
  width: 650px;
  padding: 50px 45px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

.title {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 40px;
  font-family: 'Instrument Sans', sans-serif;
}

.label {
  font-size: 18px;
  font-weight: 700;
  display: block;
  text-align: left;
  margin-bottom: 10px;
  font-family: 'Instrument Sans', sans-serif;
}

.dropdown {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #ccc;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  margin-bottom: 35px;
  outline: none;
}

.dropdown:focus {
  border-color: black;
}

.submit-btn {
  width: 100%;
  padding: 18px;
  background: black;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;
}

.submit-btn:hover {
  transform: scale(1.03);
  background: #111;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input-box {
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #ccc;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  margin-bottom: 35px;
  outline: none;
}

.input-box:focus {
  border-color: black;
}

</style>
