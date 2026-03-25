<template>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div class="relative bg-primary rounded-[3rem] p-8 sm:p-12 md:p-20 lg:p-28 overflow-hidden text-center shadow-2xl shadow-blue-900/40">
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

            <div class="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>
            <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/30 blur-[120px] rounded-full"></div>
            <div class="relative z-10 flex flex-col items-center">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-headline font-bold tracking-widest uppercase mb-10">
                    Strategic Excellence
                </div>
                <h2 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white mb-6 sm:mb-8 tracking-tighter leading-tight max-w-3xl">
                    {{ ctaCurrentHeadline.line1 }} <br class="hidden md:block"/><span class="text-blue-200">{{ ctaCurrentHeadline.line2 }}</span>
                </h2>
                <p class="text-blue-100/70 text-base sm:text-lg md:text-xl max-w-lg mb-10 sm:mb-14 font-body leading-relaxed">
                    {{ ctaCurrentHeadline.description }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                    <a href="/contact">
                        <button class="w-full sm:w-auto cursor-pointer bg-white text-primary px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-headline font-bold text-base sm:text-lg shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 sm:gap-3">
                            Book a Call <span class="material-symbols-outlined font-bold">arrow_forward</span>
                        </button>
                    </a>
                    <a href="/case-studies">
                        <button class="w-full sm:w-auto cursor-pointer bg-white/10 backdrop-blur-lg text-white border border-white/30 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-headline font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                            View Case Studies <span class="material-symbols-outlined">description</span>
                        </button>
                    </a>
                </div>
                <div class="mt-10 sm:mt-16 flex items-center gap-4 sm:gap-8 opacity-40">
                    <span class="text-white/60 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">Trusted By Enterprises Worldwide</span>
                </div>
            </div>
        </div>
    </section>


</template>
<script setup>

    import { ref } from 'vue'

    const ctaHeadlines = [
      {
        line1: 'Engineer Salesforce for Scale and Precision',
        line2: '',
        description: 'Build a system that aligns data, workflows, and growth into a single high-performance architecture.'
      },
      {
        line1: 'Turn Salesforce Into a Competitive Advantage',
        line2: '',
        description: 'Eliminate fragmentation. Create a unified, scalable ecosystem designed for long-term execution.'
      },
      {
        line1: 'Design a Salesforce System That Actually Performs',
        line2: '',
        description: 'Move beyond standard setups with architecture built for complexity, speed, and control.'
      },
      {
        line1: 'Stop Managing Salesforce. Start Engineering It.',
        line2: '',
        description: 'Replace patchwork solutions with a cohesive system built for performance and scale.'
      }
    ]

    const ctaCurrentHeadline = ref(
        ctaHeadlines[Math.floor(Math.random() * ctaHeadlines.length)]
    )

</script>