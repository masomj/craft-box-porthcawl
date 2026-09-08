<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/40 z-50 md:hidden"
        aria-hidden="true"
        @click="$emit('close')"
      />
    </Transition>

    <Transition name="slide">
      <nav
        v-if="open"
        id="mobile-menu"
        class="fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] bg-white shadow-xl z-50 md:hidden flex flex-col"
        aria-label="Mobile navigation"
        @keydown.escape="$emit('close')"
      >
        <div class="flex items-center justify-between p-4 border-b border-border shrink-0">
          <span class="font-bold text-primary text-lg">Menu</span>
          <button
            ref="closeButtonRef"
            class="p-2 rounded-md text-text-secondary hover:text-primary hover:bg-surface transition-colors"
            aria-label="Close navigation menu"
            @click="$emit('close')"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-4">
          <ul class="flex flex-col gap-1 list-none m-0 p-0">
            <li v-for="entry in primaryNav" :key="entry.path">
              <router-link
                :to="entry.path"
                class="block px-4 py-3 rounded-md text-text-primary hover:text-primary hover:bg-surface transition-colors no-underline font-medium"
                active-class="text-primary bg-surface"
                @click="$emit('close')"
              >
                {{ entry.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="p-4 border-t border-border shrink-0">
          <router-link
            to="/meet-the-artists"
            class="block w-full text-center px-5 py-3 bg-accent hover:bg-accent-light text-white rounded-full no-underline font-semibold transition-colors"
            @click="$emit('close')"
          >
            Meet Our Artists
          </router-link>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { primaryNav } from '../../router'

defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()
void emit

const closeButtonRef = ref<HTMLButtonElement | null>(null)

watch(() => closeButtonRef.value, async (btn) => {
  if (btn) {
    await nextTick()
    btn.focus()
  }
})
</script>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.2s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .overlay-enter-active,
  .overlay-leave-active,
  .slide-enter-active,
  .slide-leave-active {
    transition: none;
  }
  .slide-enter-from,
  .slide-leave-to {
    transform: none;
  }
}
</style>
