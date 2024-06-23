<template>
  <q-layout view="hHh lpR fFf" style="background-image: url('https://eng.uir.ac.id/wp-content/uploads/2022/10/Gambar3.png'); background-size: cover; background-position: center;">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Ujian Akhir Semester (Praktikum) </q-toolbar-title>
        <nav>
          <div class="dropdown">
            <button class="dropbtn">Assignments</button>
            <div class="dropdown-content">
              <q-item clickable v-ripple @click="handleLinkClick('https://syahrul-project-cv.netlify.app/')">
                <q-item-section>TUGAS 1</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://syahrulllle.netlify.app/')">
                <q-item-section>TUGAS 2</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://syhrulprakpbk.netlify.app/')">
                <q-item-section>TUGAS 3</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://syahrultugas4pbk.netlify.app/')">
                <q-item-section>TUGAS 4</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://syahrulpbk5tugas.netlify.app/')">
                <q-item-section>TUGAS 5</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://syahrulprak6pbk.netlify.app/')">
                <q-item-section>TUGAS 6</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="handleLinkClick('https://syahrultugas7pbk.netlify.app/')">
                <q-item-section>TUGAS 7</q-item-section>
              </q-item>
            </div>
          </div>
        </nav>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <konten />
    </q-page-container>

    <q-footer class="footer-class" elevated>
      <q-toolbar class="glossy">
        <q-toolbar-title>
          <q-item clickable v-ripple @click="openMultipleLinks(['https://www.instagram.com/syhrull.e?igsh=MXN0d2JsYjA3cm5xbg=='])">
            <q-item-section>SYAHRUL RAMADHAN</q-item-section>
            <q-avatar>
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="Avatar" />
          </q-avatar>
          </q-item>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import konten from './components/Container.vue';

function handleLinkClick(url) {
  window.open(url, '_blank');
}

function openMultipleLinks(links) {
  links.forEach(link => {
    window.open(link, '_blank');
  });
}
</script>

<style scoped>
/* Tambahkan styling untuk dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #232ae0;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropbtn {
  background-color: blue;
  color: white;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
