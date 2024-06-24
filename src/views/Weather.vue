<!-- src/views/Weather.vue -->
<template>
  <div class="weather-background">
    <div class="weather-container">
      <h1>Weather Widget</h1>

      <div class="input-container">
        <q-input color="teal" outlined v-model="city" label="Kota">
          <template v-slot:append @keyup.enter="fetchWeather">
            <q-avatar>
              <img src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-cloud-blue-cute-cartoon-png-image_9062466.png" />
            </q-avatar>
            <q-btn color="primary" @click="fetchWeather" label="Cari" />
          </template>
        </q-input>
      </div>

      <div class="weather-info" v-if="weather">
        <p>Location: {{ weather.name }}</p>
        <p>Temperature: {{ weather.main.temp }} °C</p>
        <p>Weather: {{ weather.weather[0].description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",
  data() {
    return {
      city: "", // Default city
      weather: null,
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city) return;
      try {
        const apiKey = "d5ab084885614f61214d0f84ea3ed977"; // Replace with your API key
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`
        );
        this.weather = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.weather-background {
  background-image: url('https://eng.uir.ac.id/wp-content/uploads/2022/10/Gambar3.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Full height */
  display: flex;
  justify-content: center; /* Center the container horizontally */
  align-items: center; /* Center the container vertically */
}

.weather-container {
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  border-radius: 8px; /* Rounded corners */
  padding: 40px 60px; /* Padding with more space on sides */
  max-width: 800px; /* Increased max-width for wider content */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow */
  text-align: center; /* Center the text */
}

.input-container {
  margin-bottom: 20px; /* Space between input and weather info */
}

.weather-info {
  margin-top: 20px; /* Space above weather info */
  background-color: #fff; /* White background for contrast */
  border-radius: 8px; /* Rounded corners */
  padding: 15px; /* Padding inside the weather info box */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow */
}

input {
  margin-right: 10px;
  padding: 5px;
}

button {
  padding: 5px 10px;
}

h1 {
  text-align: center;
}
</style>
