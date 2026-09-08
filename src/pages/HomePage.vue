<template>
  <div>
    <section class="max-w-6xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16 sm:pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <img src="/logo.png" alt="The Craft Box Porthcawl" class="h-24 w-24 mb-6" />
        <h1 class="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-5">
          A cosy little haven of handmade creativity!
        </h1>
        <p class="text-lg text-text-secondary leading-relaxed mb-8">
          The Craft Box is a creative hub where art and community come together. Nestled in the
          heart of Porthcawl, it's a welcoming space for people of all ages to explore creativity
          through handmade crafts and local artwork. Whether you're looking for a unique gift, or
          fancy simply taking time to make something with your hands, The Craft Box is a place
          where creativity can flourish.
        </p>
        <BaseButton to="/about-us" size="lg">Join Our Community</BaseButton>
      </div>

      <div class="rounded-3xl overflow-hidden border border-border bg-surface-dark aspect-4/3 flex items-center justify-center">
        <p class="text-text-secondary text-sm px-8 text-center">
          Shopfront photo to come — see note to Mason about sourcing real photography for this
          spot.
        </p>
      </div>
    </section>

    <section class="bg-white border-y border-border">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <SectionHeading
          kicker="Our mission"
          title="Supporting Local Artists"
          subtitle="Providing a dedicated creative space for the Porthcawl community — a place where local makers can connect, share ideas, and showcase their work."
          center
        />
        <BaseButton to="/meet-the-artists" variant="secondary">Meet the Artists</BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '../components/shared/BaseButton.vue'
import SectionHeading from '../components/shared/SectionHeading.vue'
</script>
