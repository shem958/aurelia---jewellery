<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    
    <!-- Breadcrumb -->
    <nav class="flex items-center text-xs text-noir-500 uppercase tracking-widest mb-8 space-x-2">
      <NuxtLink to="/" class="hover:text-gold-700 transition-colors">Home</NuxtLink>
      <span>/</span>
      <span class="text-noir-900 font-medium">The Maison Heritage</span>
    </nav>

    <!-- Hero Title -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold block mb-2">
        Artisanal Integrity &bull; Since 2021
      </span>
      <h1 class="font-serif text-4xl sm:text-6xl text-noir-950 font-normal leading-tight">
        A Modern Renaissance in Haute Joaillerie
      </h1>
      <p class="text-sm sm:text-base text-noir-600 mt-4 leading-relaxed font-light">
        AURELIA was established on a radical, uncompromising belief: fine jewelry should embody eternal architectural grace without devastating the earth or clinging to opaque supply chains.
      </p>
    </div>

    <!-- Editorial Split Section 1: Ethical Goldsmithing -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
      <div class="lg:col-span-6 aspect-[4/3] bg-sand-200 overflow-hidden shadow-lg border border-sand-300">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
          alt="Artisan jeweler forging solid gold ring in workshop"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="lg:col-span-6 space-y-4 lg:pl-6">
        <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
          100% Recycled 18k Solid Gold & Platinum
        </span>
        <h2 class="font-serif text-3xl text-noir-950 font-normal">
          The Architecture of Permanence
        </h2>
        <p class="text-xs sm:text-sm text-noir-600 leading-relaxed">
          We never cast in hollow shells, vermeil, or brass flash plating. Every creation is forged solid from 750‰ recycled solid gold and 950‰ platinum refined in certified closed-loop European facilities.
        </p>
        <p class="text-xs sm:text-sm text-noir-600 leading-relaxed">
          Solid gold does not tarnish, discolor skin, or shed atomic weight over time. An AURELIA ring can be submerged in the sea, worn through decades of daily rituals, and handed down across family lineages with identical luster.
        </p>
      </div>
    </div>

    <!-- Editorial Split Section 2: Laboratory Gemology -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
      <div class="lg:col-span-6 space-y-4 lg:pr-6 order-2 lg:order-1">
        <span class="text-xs uppercase tracking-[0.25em] text-gold-700 font-semibold">
          Conflict-Free Diamond Science
        </span>
        <h2 class="font-serif text-3xl text-noir-950 font-normal">
          Purity Born of Sun and Pressure
        </h2>
        <p class="text-xs sm:text-sm text-noir-600 leading-relaxed">
          Our diamonds are atom-for-atom indistinguishable from earth-mined stones because they are real diamonds: pure carbon crystallized under extreme heat and pressure using renewable solar energy.
        </p>
        <p class="text-xs sm:text-sm text-noir-600 leading-relaxed">
          Rated D through F color and VVS clarity, our gems exhibit the fire, refractive dispersion, and Mohs 10 hardness celebrated for millennia—with zero environmental displacement, zero cartel price gouging, and 100% transparent provenance.
        </p>
      </div>
      <div class="lg:col-span-6 aspect-[4/3] bg-sand-200 overflow-hidden shadow-lg border border-sand-300 order-1 lg:order-2">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80"
          alt="Brilliant cut lab diamonds certified in atelier"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- The 4 Pillars Grid -->
    <div class="bg-sand-50 border border-sand-200 p-8 sm:p-12 mb-20">
      <div class="text-center max-w-xl mx-auto mb-10">
        <h3 class="font-serif text-2xl sm:text-3xl text-noir-950 font-normal">
          The Four Pillars of AURELIA
        </h3>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="space-y-2">
          <div class="text-gold-600 font-serif text-3xl font-light">01</div>
          <h4 class="font-serif text-lg font-semibold text-noir-950">Micro-Crafted</h4>
          <p class="text-xs text-noir-600 leading-relaxed">Every claw, bezel, and gallery is hand-polished under 40x stereoscopic magnification.</p>
        </div>
        <div class="space-y-2">
          <div class="text-gold-600 font-serif text-3xl font-light">02</div>
          <h4 class="font-serif text-lg font-semibold text-noir-950">Fair Trade & Recycled</h4>
          <p class="text-xs text-noir-600 leading-relaxed">Certified Responsible Jewellery Council (RJC) Chain-of-Custody compliance.</p>
        </div>
        <div class="space-y-2">
          <div class="text-gold-600 font-serif text-3xl font-light">03</div>
          <h4 class="font-serif text-lg font-semibold text-noir-950">Direct Atelier Pricing</h4>
          <p class="text-xs text-noir-600 leading-relaxed">We eliminate wholesale distributors, department store concessions, and exorbitant overhead.</p>
        </div>
        <div class="space-y-2">
          <div class="text-gold-600 font-serif text-3xl font-light">04</div>
          <h4 class="font-serif text-lg font-semibold text-noir-950">Heirloom Guarantee</h4>
          <p class="text-xs text-noir-600 leading-relaxed">Lifetime inspection, ultrasonic bath cleaning, and prong tuning for as long as you own the piece.</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center max-w-md mx-auto space-y-4">
      <h3 class="font-serif text-2xl text-noir-950 font-normal">Ready to Discover Your Heirloom?</h3>
      <NuxtLink
        to="/products"
        class="inline-block bg-noir-950 text-gold-100 px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors"
      >
        Explore The Collection
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Heritage & Sustainable Craftsmanship | AURELIA',
  description: 'Learn about AURELIA fine jewelry: ethical 18k recycled gold, certified lab diamonds, conflict-free provenance, and timeless Antwerp goldsmithing.',
  ogTitle: 'The Maison Story | AURELIA Fine Jewelry',
  ogDescription: 'Ethical fine jewelry forged in solid 18k gold and platinum. Read about our sustainability pledge and master craftsmanship.',
  ogImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80'
})
</script>
