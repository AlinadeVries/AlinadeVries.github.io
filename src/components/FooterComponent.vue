<script setup>
// Wir nutzen das aktuelle Jahr dynamisch, damit du es nie manuell ändern musst
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-status">
        <span class="status-dot"></span>
        <p>Pipeline Status: <span class="status-text">healthy & always developing</span></p>
      </div>

      <div class="footer-links">
        <RouterLink to="/legal">Legal Notice (Impressum)</RouterLink>
      </div>

      <p class="copyright">
        Made with ❤️ by <br>
        &copy; {{ currentYear }} Alina de Vries. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  margin-top: 60px;
  padding: 20px;
  font-family: 'Outfit', sans-serif;
}

.footer-inner {
  max-width: 650px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #2ca089;
  border-radius: 50%;
}

.status-text {
  font-weight: bold;
}

.footer-links {
  font-size: 12px;
}

.footer-links a {
  color: #999;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #2ca089;
}

.copyright {
  font-size: 12px;
  color: #999;
  margin: 0;
  text-align: center;

}
</style>