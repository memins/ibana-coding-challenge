<template>
  <div class="gif-search">
    <div class="search-bar">
      <input v-model="searchQuery" @keyup.enter="search" placeholder="Search GIFs" />
      <button @click="search">Search</button>
    </div>
    <div class="gif-grid">
      <div v-for="gif in gifs" :key="gif.id" class="gif-item">
        <img :src="gif.images.fixed_height.url" />
      </div>
    </div>
    <div class="pagination">
      <button :disabled="page === 0" @click="prevPage">Prev</button>
      <button :disabled="gifs.length < pageSize" @click="nextPage">Next</button>
    </div>
    <div v-if="loading" class="loading-indicator">
      <div class="spinner"></div>
      <div>Loading...</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      searchQuery: '',
      gifs: [],
      page: 0,
      pageSize: 15,
      loading: false
    }
  },
  methods: {
    async search() {
      this.page = 0
      await this.fetchGifs()
    },
    async fetchGifs() {
      this.loading = true
      const offset = this.page * this.pageSize
      const url = this.searchQuery
        ? `https://api.giphy.com/v1/gifs/search?q=${this.searchQuery}&offset=${offset}&limit=${this.pageSize}&api_key=e57rLMN9sv7yZbQ7tujAWlykpJB7YEQ1`
        : `https://api.giphy.com/v1/gifs/trending?offset=${offset}&limit=${this.pageSize}&api_key=e57rLMN9sv7yZbQ7tujAWlykpJB7YEQ1`
      const response = await axios.get(url)
      this.gifs = response.data.data
      this.loading = false
    },
    prevPage() {
      this.page--
      this.fetchGifs()
    },
    nextPage() {
      this.page++
      this.fetchGifs()
    }
  }
}
</script>

<style scoped>
.gif-search {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-bar {
  display: flex;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
}

.gif-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.gif-item {
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.gif-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007bff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
