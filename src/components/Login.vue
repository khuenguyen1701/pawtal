<template>
  <div class="login-container">

    <div class="signup-wrapper">
     
      <div class="titles">
          <h1 class="title">PAWTAL</h1>
          <h1 class="title">LOG IN</h1>
      </div>

      <div class="card">
          <form class="form" @submit.prevent="handleLogin">

              <label class="label">EMAIL</label>
              <input type="email" v-model="email" required />

              <label class="label">PASSWORD</label>
              <input type="password" v-model="password" required />

              <button class="login-btn">LOG IN</button>

             
              <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

              <p class="signup-text">
                Don't have an account? <a href="/signup">Sign up</a>
              </p>
              <p class="signup-text">
                <a href="/home">Go back</a>
              </p>
          </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const handleLogin = async () => {
  console.log("Attempting login with:", email.value, password.value)

  errorMessage.value = ''

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/home')
  } catch (err) {
    const code = err.code
    
    const notAccountErrors = [
      'auth/user-not-found',
      'auth/invalid-credential',
      'auth/invalid-login-credentials'
    ]

    if (notAccountErrors.includes(code)) {
      errorMessage.value = "Account not found. Redirecting to Sign Up..."

      setTimeout(() => {
        router.push({ name: 'SignUp' })
      }, 1500)

      return
    }

    if (code === 'auth/wrong-password') {
      errorMessage.value = "Incorrect password. Try again."
      return
    }

    if (code === 'auth/invalid-email') {
      errorMessage.value = "Please enter a valid email address."
      return
    }

    errorMessage.value = messages[code] || "Something went wrong. Please try again."
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

.signup-wrapper {
  width: 420px;
  display: flex; 
  flex-direction: column;
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
    margin-bottom: -20px;
}

.title {
  font-size: 40px;
  font-weight: 800;
  color: white;
  letter-spacing: 2px;
  font-family: 'Instrument Sans', sans-serif;
}

.label {
  font-family: 'Instrument Sans', sans-serif;
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

.error-message {
  color: black;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
