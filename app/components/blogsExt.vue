<script setup>
import { computed } from 'vue'
const { data: blogs } = await useAsyncData(
  'blogs',
  () => queryCollection('blogs').all(),
  { default: () => [] }
)

const blogsContent = computed(() =>
  blogs.value
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
)
</script>
<template>
    <section class="py-16 px-4 bg-surface">
        <div class="max-w-5xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div class="max-w-xl">
                    <span class="text-primary font-label font-bold tracking-widest uppercase text-xs">
                    Technical Insights
                    </span>
                    <h2 class="text-2xl md:text-3xl font-headline font-extrabold text-on-surface tracking-tight mt-2">
                        Salesforce architecture, cloud scalability, enterprise tech insights.
                    </h2>
                </div>
                <a href="/blogs">
                    <button class="px-5 py-2 cursor-pointer rounded-full border border-outline-variant text-on-surface text-xs font-headline font-bold hover:bg-surface-container-high transition-colors">
                        View All
                    </button>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto pb-20">
            <div v-for="blog in blogsContent.value" :key="blog.id" class="group cursor-pointer flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <a :href="`/blogs/${blog.title.replace(/\s+/g, '-').toLowerCase()}`">
                    <div class="h-40 overflow-hidden relative">
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" :src="blog.cover || 'https://via.placeholder.com/400x200'" />
                        <div class="absolute top-2 left-2">
                            <span class="bg-surface px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase">{{ blog.tags?.[0] || 'General' }}</span>
                        </div>
                    </div>
                    <div class="p-5 flex flex-col flex-1">
                        <div class="text-xs text-on-surface-variant mb-2">
                            {{ blog.date ? new Date(blog.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'No date' }}
                        </div>
                        <h3 class="text-sm font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{{ blog.title }}</h3>
                        <p class="text-on-surface-variant text-xs line-clamp-2">{{ blog.description || 'No description available.' }}</p>
                    </div>
                </a>
            </div>
        </div>
        </div>
    </section>
</template>