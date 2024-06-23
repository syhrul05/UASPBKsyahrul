<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const city = ref('');
const weather = ref(null);
const loading = ref(false);
const error = ref('');
const drawer = ref(false);

const apiKey = '31f105f1e51a5df845ce80fc9288418b'; // Replace with your API key

async function fetchWeather() {
  if (!city.value) {
    error.value = 'Silakan masukkan nama kota.';
    return;
  }

  loading.value = true;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`);
    if (response.data.cod === 404) {
      error.value = 'Kota tidak ditemukan. Harap masukkan nama kota yang valid.';
      weather.value = null;
    } else {
      weather.value = response.data;
      error.value = '';
    }
  } catch (err) {
    console.error("Terjadi kesalahan saat mengambil data cuaca: ", err);
    if (err.response) {
      error.value = `Tidak ada ramalan cuaca pada wilayah ${city.value}`;
    } else if (err.request) {
      error.value = 'Gagal terhubung ke server. Harap periksa koneksi internet Anda.';
    } else {
      error.value = 'Lagi bermasalah. Coba lagi nanti.';
    }
  } finally {
    loading.value = false;
    city.value = ''; // Mengosongkan input setelah permintaan selesai
  }
}

// Fungsi navigasi ke halaman lain atau membuka link di tab baru
function handleLinkClick(url, isExternal = true) {
  if (isExternal) {
    window.open(url, '_blank');
  } else {
    router.push(url);
  }
}

// Fungsi navigasi ke halaman utama
function navigateTo(route) {
  router.push(route);
}
</script>
<template>
  <q-page-container style="overflow: hidden;">
    <q-page class="q-pa-md" style="overflow: hidden;">
      <div class="weather-widget">
        <q-card>
          <q-card-section>
            <div class="text-h6">Cuaca</div>
            <div>
              <q-input v-model="city" label="Masukkan wilayah" dense outlined />
              <q-btn @click="fetchWeather" color="primary" label="Cek" class="q-mt-md" />
            </div>
            <div v-if="weather" class="weather-info q-mt-md">
              <div>{{ weather.name }}, {{ weather.sys.country }}</div>
              <div>{{ weather.weather[0].description }}</div>
              <div>{{ weather.main.temp }}°C temperature from {{ weather.main.temp_min }} to {{ weather.main.temp_max }} °C, wind {{ weather.wind.speed }} m/s, clouds {{ weather.clouds.all }}%, {{ weather.main.pressure }} hpa</div>
              <div>Geo coords [{{ weather.coord.lat }}, {{ weather.coord.lon }}]</div>
            </div>
            <div v-else-if="loading" class="q-mt-md">
              Loading...
            </div>
            <div v-else-if="error" class="q-mt-md">
              {{ error }}
            </div>
            <div v-else class="q-mt-md">
              Silakan masukkan nama kota.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </q-page-container>
</template>
