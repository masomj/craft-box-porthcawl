<template>
  <iframe
    :src="MAP_SRC"
    title="Map showing The Craft Box Porthcawl's location"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    class="w-full h-full border-0"
  />
</template>

<script setup lang="ts">
// Coordinates match the location pinned on the live Wix site.
const MAP_SRC = 'https://www.google.com/maps?q=51.478968,-3.705163&z=16&output=embed'
</script>
