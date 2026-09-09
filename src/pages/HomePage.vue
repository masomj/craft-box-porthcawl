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
        <BaseButton to="/meet-the-artists" size="lg">Meet Our Artists</BaseButton>
      </div>

      <div class="rounded-3xl overflow-hidden border border-border bg-surface-dark aspect-4/3">
        <img
          src="/shopfront.jpg"
          alt="The Craft Box Porthcawl shopfront"
          class="w-full h-full object-cover"
        />
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

    <section v-if="commissionArtists.length" class="bg-surface-dark border-b border-border">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          kicker="Made just for you"
          title="Commission a Piece"
          subtitle="Have something special in mind? Several of our resident artists take bespoke commissions — browse their work and get in touch directly."
          center
        />

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <router-link
            v-for="artist in commissionArtists"
            :key="artist.slug"
            :to="`/commissions/${artist.slug}`"
            class="bg-white rounded-2xl border border-border p-6 flex flex-col items-center text-center gap-3 no-underline hover:border-primary transition-colors"
          >
            <img
              v-if="artist.photo"
              :src="withBase(artist.photo)"
              :alt="`Portrait of ${artist.name}`"
              class="w-20 h-20 rounded-full object-cover"
            />
            <div
              v-else
              class="w-20 h-20 rounded-full bg-surface-dark flex items-center justify-center text-primary font-display text-3xl"
              aria-hidden="true"
            >
              {{ artist.name.charAt(0) }}
            </div>
            <div>
              <p class="font-bold text-primary">{{ artist.name }}</p>
              <p v-if="artist.studio" class="text-sm text-accent-dark font-semibold">{{ artist.studio }}</p>
            </div>
            <span class="text-sm font-semibold text-primary">Request a Commission &rarr;</span>
          </router-link>
        </div>

        <div class="text-center">
          <BaseButton to="/meet-the-artists" variant="secondary">See All Artists</BaseButton>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeading kicker="Find us" title="Visit The Craft Box" center />
      <div class="rounded-3xl overflow-hidden border border-border aspect-video max-w-3xl mx-auto">
        <LocationMap />
      </div>
      <p class="mt-4 text-text-secondary text-center">Hillsboro car park, Porthcawl</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '../components/shared/BaseButton.vue'
import SectionHeading from '../components/shared/SectionHeading.vue'
import LocationMap from '../components/shared/LocationMap.vue'
import { artists } from '../data/artists'
import { withBase } from '../utils/assetUrl'

// Data-driven, same as ArtistCard's CTA -- a newly-flagged artist appears
// here automatically, no template change needed.
const commissionArtists = computed(() => artists.filter((artist) => artist.hasCommissionPage))
</script>
