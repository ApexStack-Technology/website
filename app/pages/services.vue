<template>
<section class="relative overflow-hidden min-h-[520px] flex items-center py-10 pt-20 px-6 lg:px-8 max-w-6xl mx-auto">

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">

    <!-- Left -->
    <div class="lg:col-span-7 space-y-4">

      <div class="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wide">
        Premier Consulting
      </div>

      <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold text-on-background leading-[1.1] tracking-tight max-w-xl">
        From Setup to 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
          Scale,
        </span> Done Right
      </h1>

      <p class="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-md">
        Scalable, data-driven Salesforce systems designed for growth and efficiency.
      </p>

      <div class="flex flex-wrap gap-2 pt-3">
        <button class="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm shadow hover:shadow-md transition-all duration-200">
          View Expertise
        </button>
        <button class="bg-surface-container-high text-on-surface px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-surface-container-highest transition-colors">
          Case Studies
        </button>
      </div>

    </div>

    <!-- Right -->
    <div class="lg:col-span-5 relative flex items-center justify-center">

      <div class="relative w-full h-full max-h-[420px] rounded-lg overflow-hidden shadow-xl">
        <img class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKg19UJqO0ReyNYvA1oVnb0JW3c1-TAuruiwsQiF4UuPfxOBUVFLx3J03Xz9R3h3Nnagl70IqQsApIIqsfSzF3MrugMAajQ7Ax3Fby5mHLoxNzVDEQ1TZSWVPGCASbKdi0xkcUjHyPZMrvtCRmZ0NSC3vdRNusQqADwDhhkOC7spkOBXilHnpkT7PEJW67Q7vdl1-XO4vKygSCjsqY-yDxXZxAo9BOZCsSxxK8iw2Rh-QXrc0dpDEwhcx4daBixIvMH8TzEHo0fn8"/>

        <div class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>

        <div class="absolute bottom-5 left-5 right-5 p-3.5 rounded-md bg-white/80 backdrop-blur-md border border-white/30 shadow-md">
          <p class="text-[10px] text-on-surface-variant mb-1">Metric</p>
          <p class="text-sm font-semibold text-on-surface">+142% Efficiency</p>
        </div>
      </div>

      <div class="absolute -top-8 -right-8 w-36 h-36 bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
      <div class="absolute -bottom-8 -left-8 w-28 h-28 bg-tertiary-container/10 rounded-full blur-3xl -z-10"></div>

    </div>

  </div>

</section>
<section class="max-w-6xl mx-auto px-4 py-20">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

    <!-- Implementation -->
    <div class="md:col-span-2 bg-surface-container-lowest p-6 rounded-lg shadow-md border border-outline-variant/10 group hover:shadow-lg transition-all duration-300">
      <div class="flex flex-col h-full justify-between">
        <div>
          <div class="w-10 h-10 bg-primary-fixed rounded-full flex items-center justify-center mb-4">
            <span class="material-symbols-outlined text-primary text-xl">rocket_launch</span>
          </div>
          <h3 class="text-lg font-bold text-on-surface mb-2">Implementation</h3>
          <p class="text-on-surface-variant text-sm leading-relaxed mb-4">
            End-to-end Salesforce setups tailored to your business.
          </p>
        </div>
      </div>
    </div>

    <!-- Consulting -->
    <div class="bg-primary p-6 rounded-lg shadow-md text-on-primary flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
          <span class="material-symbols-outlined text-white text-xl">lightbulb</span>
        </div>
        <h3 class="text-lg font-bold mb-2">Consulting</h3>
        <p class="text-blue-100/80 text-sm">Strategic advisory to maximize ROI.</p>
      </div>
    </div>

    <!-- Small Cards -->
    <div class="bg-surface-container-low p-5 rounded-lg">
      <span class="material-symbols-outlined text-primary mb-3 text-xl">code</span>
      <h3 class="text-sm font-bold mb-1">Custom Dev</h3>
      <p class="text-xs text-on-surface-variant">Apex & LWC extensions.</p>
    </div>

    <div class="bg-surface-container-low p-5 rounded-lg">
      <span class="material-symbols-outlined text-primary mb-3 text-xl">app_shortcut</span>
      <h3 class="text-sm font-bold mb-1">App Dev</h3>
      <p class="text-xs text-on-surface-variant">Custom apps & products.</p>
    </div>

    <div class="bg-surface-container-low p-5 rounded-lg">
      <span class="material-symbols-outlined text-primary mb-3 text-xl">hub</span>
      <h3 class="text-sm font-bold mb-1">Integration</h3>
      <p class="text-xs text-on-surface-variant">API & system connectivity.</p>
    </div>

    <!-- Design -->
    <div class="bg-tertiary-fixed p-6 rounded-lg flex flex-col">
      <div>
        <div class="w-10 h-10 bg-on-tertiary-fixed-variant rounded-full flex items-center justify-center mb-4">
          <span class="material-symbols-outlined text-tertiary-fixed text-xl">palette</span>
        </div>
        <h3 class="text-lg font-bold text-on-tertiary-fixed mb-2">Design</h3>
        <p class="text-xs text-on-tertiary-fixed-variant/80">UI/UX for Salesforce apps.</p>
      </div>
    </div>

    <!-- Managed -->
    <div class="bg-surface-container-lowest p-6 rounded-lg shadow-md border border-outline-variant/10 grid gap-4">
      
      <div>
        <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 bg-secondary-fixed rounded-lg flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-sm">support_agent</span>
            </div>
            <h3 class="text-sm font-bold">Managed</h3>
            </div>
            <p class="text-xs text-on-surface-variant mb-4">
            Continuous platform support.
            </p>

        <div class="flex items-center gap-2 mb-3 pt-3 border-t border-outline-variant/20">
            <div class="w-8 h-8 bg-secondary-fixed rounded-lg flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-sm">help</span>
            </div>
            <h3 class="text-sm font-bold">Support</h3>
            </div>
            <p class="text-xs text-on-surface-variant">
            On-demand troubleshooting.
            </p>
        </div>

    </div>

    <!-- Security -->
    <div class="bg-surface-container-low p-5 rounded-lg">
      <span class="material-symbols-outlined text-green-600 mb-3 text-xl">verified_user</span>
      <h3 class="text-sm font-bold mb-1">Security</h3>
      <p class="text-xs text-on-surface-variant">Compliance and audit checks.</p>
    </div>

  </div>
</section>
 
</template>