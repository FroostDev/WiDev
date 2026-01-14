<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';
import { RouterView, useRoute } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const closeMenu = () => {
    isMenuOpen.value = false;
}
</script>

<template>
  <button class="burger-menu" @click="toggleMenu" aria-label="Menu" :class="{ 'active': isMenuOpen }">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <div class="overlay" :class="{ 'active': isMenuOpen }" @click="closeMenu"></div>

  <Sidebar :class="{ 'mobile-open': isMenuOpen }" @click="closeMenu" />
  <RouterView />
</template>

<style scoped>
.burger-menu {
  display: none;
  position: fixed;
  z-index: 9999;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  padding: 0;
}

.burger-menu span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--textcolor);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
}

/* Animation to X */
.burger-menu.active span:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}

.burger-menu.active span:nth-child(2) {
  opacity: 0;
}

.burger-menu.active span:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

.overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 900;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }
  
  .overlay.active {
      display: block;
      opacity: 1;
      pointer-events: auto;
  }
}
</style>
