<template>
  <div class="role-container">
    <div class="role-card">
      <h1 class="title">CHOOSE YOUR ROLE</h1>

      <div class="roles" v-if="!message">
        <button class="role-btn" @click="selectRole('student')">
          STUDENT
        </button>

        <button class="role-btn" @click="selectRole('faculty')">
          FACULTY / ORG
        </button>
      </div>

      <!-- SUCCESS MESSAGE -->
      <p v-if="message" class="success-msg">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { auth, db } from "../firebase.js"
import { doc, setDoc } from "firebase/firestore"
import { useRouter } from "vue-router"
import { currentUserRole } from "../firebase.js"

const router = useRouter()
const message = ref("")

const selectRole = async (role) => {
  const user = auth.currentUser
  if (!user) return

  // Save role in Firestore
  await setDoc(doc(db, "users", user.uid), { role })

  currentUserRole.value = role

  // Show success message with redirect notice
  message.value = `Successfully signed up as ${role.toUpperCase()} — redirecting...`

  // Redirect after delay
  setTimeout(() => {
  router.push("/home")
  }, 1500)

}
</script>

<style scoped>
.role-container {
  width: 100vw;
  height: 100vh;
  background: #f4d764;
  display: flex;
  justify-content: center;
  align-items: center;
}

.role-card {
  background: white;
  width: 600px;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
}

.title {
  font-size: 34px;
  font-weight: 900;
  margin-bottom: 40px;
}

.roles {
  display: flex;
  justify-content: space-between;
}

.role-btn {
  width: 240px;
  height: 120px;
  font-size: 24px;
  font-weight: 800;
  border-radius: 25px;
  background: black;
  color: white;
  cursor: pointer;
  border: none;
  transition: 0.25s ease;
}

.role-btn:hover {
  transform: scale(1.05);
  background: #222;
}

.success-msg {
  margin-top: 30px;
  font-size: 20px;
  color: green;
  font-weight: bold;
}
</style>
