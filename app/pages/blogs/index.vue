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
)
</script>
<template>
    <div class="px-8">
        <div class="max-w-5xl mx-auto pt-16 pb-10 text-center lg:text-left">
            <h1 class="text-4xl md:text-6xl font-black font-headline tracking-tighter text-blue-900 mb-2">
                Technical <span class="text-gradient">Insights</span>
            </h1>
            <p class="text-md md:text-lg text-on-surface-variant max-w-2xl font-body leading-relaxed">
                Strategic deep-dives into Salesforce architecture, cloud scalability, and enterprise technology.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto pb-20">
            <div v-for="blog in blogsContent" :key="blog.id" class="group cursor-pointer flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
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
</template>