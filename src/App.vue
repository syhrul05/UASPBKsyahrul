<template>
  <q-layout view="hHh lpR fFf" class="app-background">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>Ujian Akhir Semester (PBK)</q-toolbar-title>
        <q-btn-dropdown
          label="Tugas"
          color="primary"
          text-color="white"
          no-caps
        >
          <q-list>
            <q-item clickable v-ripple to="/assignment/1">
              <q-item-section>Tugas 1</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/2">
              <q-item-section>Tugas 2</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/3">
              <q-item-section>Tugas 3</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/4">
              <q-item-section>Tugas 4</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/5">
              <q-item-section>Tugas 5</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/6">
              <q-item-section>Tugas 6</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/7">
              <q-item-section>Tugas 7</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div id="app">
        <router-view />
      </div>
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <q-toolbar class="footer-content">
        <!-- Instagram Avatar and Button -->
        <q-btn
          flat
          dense
          color="white"
          class="footer-instagram-btn"
          @click="openInstagram"
          aria-label="Instagram Profile"
        >
          <q-avatar class="footer-avatar">
            <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-6.png" alt="Instagram Logo" />
          </q-avatar>
          <span class="footer-name">SYAHRUL RAMADHAN</span>
        </q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "App",
  methods: {
    openInstagram() {
      window.open('https://www.instagram.com/syhrull.e?igsh=MXN0d2JsYjA3cm5xbg==', '_blank');
    }
  }
};
</script>

<style scoped>
/* Background Image Style */
.app-background {
  background-image: url('https://eng.uir.ac.id/wp-content/uploads/2022/10/Gambar3.png');
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  min-height: 100vh; /* Ensure it covers the viewport */
}

.bg-primary {
  background-color: var(--q-primary); /* Using Quasar theme color */
}

.text-white {
  color: white;
}

.q-btn--primary {
  background-color: var(--q-primary);
  color: white;
}

.q-btn-dropdown__label {
  font-size: 16px;
}

.q-list .q-item {
  font-size: 16px;
  color: black;
}

.q-toolbar-title {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

/* Footer Styles */
.footer-content {
  display: flex;
  align-items: center;
  gap: 8px; /* Space between avatar and text */
}

.footer-instagram-btn {
  display: flex;
  align-items: center;
  gap: 8px; /* Space between avatar and text */
  text-decoration: none;
}

.footer-avatar {
  width: 24px;
  height: 24px;
}

.footer-name {
  text-decoration: underline;
  cursor: pointer;
}
</style>
