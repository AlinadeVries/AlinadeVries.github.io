<template>
  <div class="legal-container">
    <section>
      <h1>Legal Notice (Impressum)</h1>
      <p>Information according to § 5 DDG:</p>
      
      <div class="address-box">
        <p><strong>{{ imprintName }}</strong></p>
        <p>{{ imprintStreet }}</p>
        <p>{{ imprintCity }}</p>
      </div>

      <h3>Contact</h3>
      <p>E-Mail: {{ imprintEmail }}</p>

      <h3>Responsible for content according to § 18 MStV</h3>
      <p>{{ imprintName }}</p>
    </section>

    <hr />

    <section>
      <h1>Privacy Policy</h1>
      <p><strong>General Information</strong></p>
      <p>I take the protection of your personal data very seriously. I treat your personal data confidentially and in accordance with the statutory data protection regulations (GDPR) and this privacy policy.</p>

      <h3>Data Collection on this Website</h3>
      <p>
        <strong>Cookies:</strong> This website does not use any tracking cookies or analytical tools. 
      </p>
      
      <p>
        <strong>Server Log Files:</strong> This website is hosted via GitHub Pages. When you visit this site, the provider (GitHub, Inc.) automatically collects and stores information in so-called server log files, which your browser transmits automatically. This typically includes:
      </p>
      <ul>
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Operating system used</li>
        <li>Referrer URL</li>
        <li>Time of the server request</li>
      </ul>
      <p>The basis for data processing is Art. 6 (1) (f) GDPR (Legitimate Interest), as this is technically necessary for the secure and stable operation of the website.</p>

      <h3>Your Rights</h3>
      <p>You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time free of charge. You also have a right to request the correction or deletion of this data.</p>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const decode = (b64) => {
  try {
    return b64 ? atob(b64) : 'Not provided'
  } catch (e) {
    return '[Decoding Error]'
  }
}

const imprintName = computed(() => decode(import.meta.env.VITE_IMPRINT_NAME))
const imprintStreet = computed(() => decode(import.meta.env.VITE_IMPRINT_STREET))
const imprintCity = computed(() => decode(import.meta.env.VITE_IMPRINT_CITY))
const imprintEmail = computed(() => decode(import.meta.env.VITE_IMPRINT_EMAIL))
</script>

<style scoped>
.legal-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.6;
  color: #1c1c1c;
  font-family: 'Outfit', sans-serif;
}

h1 { color: #1c1c1c; margin-top: 40px; }
h3 { margin-top: 25px; margin-bottom: 10px; }
.address-box { margin: 20px 0; padding-left: 10px; border-left: 2px solid #1c1c1c; }
hr { margin: 50px 0; border: 0; border-top: 1px solid #eee; }
ul { padding-left: 20px; }
</style>