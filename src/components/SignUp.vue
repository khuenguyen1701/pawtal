<template>
    <div class="login-container">
    
    <div class="signup-wrapper">
      <!-- TITLES -->
      <div class="titles">
          <h1 class="title">PAWTAL</h1>
          <h1 class="title">SIGN UP</h1>
      </div>

      <!-- SIGN-UP CARD -->
      <div class="card">
          <form class="form" @submit.prevent="handleSignUp">
              <label class="label">EMAIL</label>
              <input type="email" v-model="email" required/>    

              <label class="label">PASSWORD</label>
              <input type="password" v-model="password" required/>

              <label class="label">CONFIRM PASSWORD</label>
              <input type="password" v-model="confirmPassword" required/>

              <button class="login-btn">CREATE ACCOUNT</button>
              
              <!-- ERROR CATCH BlOCK -->
              <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

              <p class="signup-text">
                  <!-- Already have an account? <a href="/login">Log in</a> -->
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
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const router = useRouter()

// SIGN-UP HANDLE
const handleSignUp = async () => {
  console.log("Attempting signup with:", email.value, password.value)

  errorMessage.value = ''

  // check password
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match"
    return
  }

  try {
    // create account in Firebase
    await createUserWithEmailAndPassword(auth, email.value, password.value)

    router.push('/home')
  } catch (err) {
    const code = err.code;

    //account exists, redirect to login
    if (code === "auth/email-already-in-use") {
      errorMessage.value = "This email is already registered. Redirecting to login..."

      setTimeout(() => {
        router.push('/login')   
      }, 1500)

      return
    }

    const messages = {
      "auth/email-already-in-use": "This email is already registered. Try logging in!",
      "auth/ invalid-email": "Please enter a valid email address.",
      "auth/ weak-password": "Password must be at least 6 characters.",
      "auth/ missing-password": "Please enter a password.",
      "auth/ network-request-failed": "Network error. Please try again.",
      "auth/operation-not-allowed": "Email/password sign-in is disabled in Firebase."
    };

    errorMessage.value = messages[code] || "Something went wrong. Please try again.";
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

.error-message {
  color: black;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
