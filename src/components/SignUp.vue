<template>
    <div class="login-container">
    <!-- titles -->
    <div class="titles">
        <h1 class="title">PAWTAL</h1>
        <h1 class="title">SIGN UP</h1>
    </div>

    <!-- signup card -->
    <div class="card">
        <form class="form" @submit.prevent="handleSignUp">
            <label>EMAIL</label>
            <input type="email" v-model="email" required/>    

            <label>PASSWORD</label>
            <input type="password" v-model="password" required/>

            <label>CONFIRM PASSWORD</label>
            <input type="password" v-model="confirmPassword" required/>

            <button class="login-btn">CREATE ACCOUNT</button>

            <p class="signup-text">
                <!-- Already have an account? <a href="/login">Log in</a> -->
            </p>
            <p class="signup-text">
                <a href="/home">Go back</a>
            </p>
        </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const router = useRouter()

const handleSignUp = async () => {
  errorMessage.value = ''

  // check password
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match"
    return
  }

  try {
    // create account in Firebase
    await createUserWithEmailAndPassword(auth, email.value, password.value)

    // redirect home/login
    router.push('/')
  } catch (err) {
    errorMessage.value = err.message
  }
}
</script>


<style scoped>
.login-container {
  background-color: var(--color-secondary); 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;      
  justify-content: center;
  align-items: center;
}

.card {
  background: var(--color-primary-accent);
  width: 420px;
  padding: 40px 50px;
  border-radius: 20px;
  text-align: center;
}

.titles {
    width: 420px;
    display: flex;
    justify-content:space-between;
    margin-bottom: 20px; 
}

.title {
  font-size: 40px;
  margin-bottom: 5px;
  font-weight: 800;
  color: white;
  letter-spacing: 1px;
}

.highlight {
  color: var(--color-primary);
}

.form {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 12px;
}

label {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-secondary);
}

input {
  padding: 12px;
  border-radius: 10px;
  border: 2px solid var(--color-secondary);
  font-size: 16px;
  outline: none;
}

.login-btn {
  background: var(--color-secondary);
  color: white;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

.login-btn:hover {
  background: var(--color-secondary);
}

.signup-text {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: var(--primary);
}

.signup-text a {
  color: var(--color-secondary);
  font-weight: 700;
  text-decoration: underline;
}
</style>
