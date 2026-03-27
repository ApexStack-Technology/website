<script setup>
    import { h } from 'vue'
    const route = useRoute()
    
    let path = route.params.slug
    
    if (Array.isArray(path)) {
      path = path.join('/')
    } else if (typeof path !== 'string') {
      path = ''
    }
    
    const { data: blogs } = await useAsyncData('blogs', () =>
      queryCollection('blogs').all()
    )
    
    const blogsContent = computed(() => {
        const data = blogs.value || []
        return data.slice().sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        )
    })
    
    const content = computed(() => {
      return blogsContent.value.find((blog) => {
        const slug = blog.stem.split('/').pop()
        return slug === path
      }) || {}
    })
    
    const resolveTag = (node) => {
      const tag = node[0]
    
      const map = {
        p: { tag: 'p', class: 'text-lg mb-4' },
        h1: { tag: 'h1', class: 'text-4xl font-headline font-extrabold text-primary mb-6' },
        h2: { tag: 'h2', class: 'text-3xl font-headline font-bold text-primary pt-6 mb-4' },
        h3: { tag: 'h3', class: 'text-2xl font-headline font-semibold text-primary pt-4 mb-3' },
        ul: { tag: 'ul', class: 'list-disc pl-6 mb-4 space-y-2' },
        ol: { tag: 'ol', class: 'list-decimal pl-6 mb-4 space-y-2' },
        li: { tag: 'li', class: '' },
        strong: { tag: 'strong', class: 'font-semibold' },
        br: { tag: 'br', class: '' }
      }
    
      return map[tag] || { tag: 'div', class: '' }
    }
    
</script>
<template>
    <div class="pt-16">
        <div class="max-w-5xl mx-auto px-6 pb-16">
            <div class="relative overflow-hidden rounded-xl bg-surface-container-low p-12 md:p-24 flex flex-col items-center text-center">
                <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <h1 class="text-4xl md:text-6xl font-headline font-extrabold text-primary tracking-tight leading-tight mb-8">
                    {{ content.title }}
                </h1>
                <div class="flex flex-wrap items-center gap-6 text-sm font-label text-on-surface-variant">
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-lg" data-icon="calendar_today">calendar_today</span>
                        <span>{{ content.date ? new Date(content.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'No date' }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <article class="max-w-3xl mx-auto px-6 pb-24">
        <div>
            <template v-for="(node, index) in content.meta.body" :key="index">
                <component
                    v-if="Array.isArray(node)"
                    :is="resolveTag(node).tag"
                    v-bind="{ ...node[1], class: resolveTag(node).class }"
                    >
                    <template v-if="node.length > 3">
                        <template v-for="(child, i) in node.slice(2)" :key="i">
                            <component
                                v-if="Array.isArray(child)"
                                :is="resolveTag(child).tag"
                                v-bind="{ ...child[1], class: resolveTag(child).class }"
                                >
                                <template v-if="child.length > 3">
                                    <template v-for="(c, j) in child.slice(2)" :key="j">
                                        <template v-if="Array.isArray(c)">
                                            <component
                                                :is="resolveTag(c).tag"
                                                v-bind="{ ...c[1], class: resolveTag(c).class }"
                                                >
                                                {{ c[2] }}
                                            </component>
                                        </template>
                                        <template v-else>
                                            {{ c }}
                                        </template>
                                    </template>
                                </template>
                                <template v-else>
                                    {{ child[2] }}
                                </template>
                            </component>
                        </template>
                    </template>
                    <template v-else>
                        {{ node[2] }}
                    </template>
                </component>
            </template>
        </div>
    </article>
    <Cta />
</template>