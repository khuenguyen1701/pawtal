<template>
  <div class="role-container">
    <div class="role-card">
      <h1 class="title">CHOOSE YOUR ROLE</h1>

      <div class="roles">
        <button class="role-btn" @click="chooseRole('student')">
          STUDENT
        </button>

        <button class="role-btn" @click="chooseRole('faculty')">
          FACULTY<br />ORGANIZATION
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { auth, db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();

const chooseRole = async (role) => {
  const user = auth.currentUser;
  if (!user) return;

  // Save role in Firestore
  await setDoc(doc(db, "users", user.uid), { role });

  // Redirect based on role
  if (role === "student") router.push("/home");
  else router.push("/managepage");
};
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
}

.role-btn:hover {
  transform: scale(1.05);
}
</style>
