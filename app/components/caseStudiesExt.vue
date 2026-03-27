<script setup>
import { computed } from 'vue'

const { data: caseStudies, error, status } = await useAsyncData(
  'caseStudies',
  () => queryCollection('caseStudies').all(),
  { default: () => [] }
)

const caseStudiesContent = computed(() =>
  (caseStudies.value ?? [])
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
)
</script>

<style>
.glass-card {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>

<template>
    <!-- TEMP DEBUG -->
    <pre class="text-white text-xs p-4 bg-red-900">
status: {{ status }}
error: {{ JSON.stringify(error) }}
data: {{ JSON.stringify(caseStudies) }}
    </pre>

    <section class="py-16 px-4 bg-on-background relative overflow-hidden">
        <div class="max-w-5xl mx-auto relative z-10">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div class="max-w-xl">
                    <span class="text-primary-fixed font-label font-bold tracking-widest uppercase text-xs">
                    Success Stories
                    </span>
                    <h2 class="text-2xl md:text-3xl font-headline font-extrabold text-white tracking-tight mt-2">
                        Proven outcomes at scale.
                    </h2>
                </div>
                <a href="/case-studies">
                    <button class="cursor-pointer px-5 py-2 rounded-full border border-white/20 text-white text-xs font-headline font-bold hover:bg-white/10 transition-colors">
                        All Case Studies
                    </button>
                </a>
            </div>
            <div v-if="caseStudiesContent.length" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="caseStudy in caseStudiesContent" :key="caseStudy.id" class="bg-slate-800 cursor-pointer rounded-lg overflow-hidden flex flex-col group transition-all duration-500 hover:translate-y-[-8px] hover:border-blue-500/30">
                    <a :href="`/case-studies/${caseStudy.title.replace(/\s+/g, '-').toLowerCase()}`">
                        <div class="aspect-video relative overflow-hidden">
                            <img class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100" data-alt="Modern financial data dashboard with glowing blue metrics" :src="caseStudy.cover || 'https://via.placeholder.com/400x200'"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <div class="flex gap-2 mb-4">
                                <span class="text-[10px] uppercase tracking-widest font-bold text-blue-400 px-2 py-1 bg-blue-600/10 rounded">{{ caseStudy.meta.tags?.[0] || 'General' }}</span>
                            </div>
                            <h3 class="text-2xl font-bold font-headline mb-4 text-white group-hover:text-blue-500 transition-colors">{{ caseStudy.title }}</h3>
                            <p class="text-slate-400 mb-8 font-body leading-relaxed text-sm">{{ caseStudy.description || 'No description available.' }}</p>
                            <div class="mt-auto flex items-end justify-between border-t border-white/5 pt-6">
                                <div>
                                    <span class="block text-3xl font-bold text-white font-headline">{{ caseStudy.meta.benefitScale || 'No benefit scale available.' }}</span>
                                    <span class="text-xs uppercase tracking-widest text-slate-500 font-bold">{{ caseStudy.meta.benefitName || 'No benefit name available.' }}</span>
                                </div>
                                <div class="w-10 h-10 flex items-center justify-center transition-all duration-300">
                                    <span class="material-symbols-outlined text-white text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-500 transition-transform">arrow_outward</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>