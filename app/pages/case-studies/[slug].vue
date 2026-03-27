<script setup>
    import { h } from 'vue'
    const route = useRoute()
    
    let path = route.params.slug
    
    if (Array.isArray(path)) {
      path = path.join('/')
    } else if (typeof path !== 'string') {
      path = ''
    }
    
    const { data: caseStudies } = await useAsyncData('caseStudies', () =>
      queryCollection('caseStudies').all()
    )
    
    const caseStudiesContent = [...caseStudies.value].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );
    
    const content = caseStudiesContent.find((caseStudy) => {
      const slug = caseStudy.stem.split('/').pop()
      return slug === path
    })
    console.log(content)
    
    const resolveTag = (node) => {
      const tag = node[0]
    
      const map = {
        p: { tag: 'p', class: 'text-lg mb-4 text-slate-300' },
        h1: { tag: 'h1', class: 'text-4xl font-headline font-extrabold text-white mb-6' },
        h2: { tag: 'h2', class: 'text-3xl font-headline font-bold text-white pt-6 mb-4' },
        h3: { tag: 'h3', class: 'text-2xl font-headline font-semibold text-white pt-4 mb-3' },
        ul: { tag: 'ul', class: 'list-disc pl-6 mb-4 space-y-2 text-slate-300' },
        ol: { tag: 'ol', class: 'list-decimal pl-6 mb-4 space-y-2 text-slate-300' },
        li: { tag: 'li', class: 'text-slate-300' },
        strong: { tag: 'strong', class: 'font-semibold text-white' },
        br: { tag: 'br', class: 'text-slate-300' }
      }
    
      return map[tag] || { tag: 'div', class: '' }
    }
    
</script>
<template>
    <section class="py-16 px-4 bg-[#050810] relative overflow-hidden">
        <div class="max-w-5xl mx-auto relative overflow-hidden rounded-xl bg-[#0a0f1d] p-12 md:p-24 flex flex-col items-center text-center">
            <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <h1 class="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tight leading-tight mb-3">
                {{ content.title }}
            </h1>
            <div class="inline-flex items-center gap-2 px-6 py-2 mb-5 rounded-full bg-[#004ac6]/10 border border-[#004ac6]/30">
                <span class="text-2xl font-extrabold text-[#004ac6]">
                 {{ content.meta.benefitScale }} {{ content.meta.benefitName }}
                </span>
            </div>
            <div class="flex flex-wrap items-center gap-6 text-sm font-label text-on-surface-variant">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-lg text-slate-600" data-icon="calendar_today">calendar_today</span>
                    <span class="text-slate-600">{{ content.date ? new Date(content.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }) : 'No date' }}</span>
                </div>
            </div>
        </div>
    </section>
    <div class="bg-[#050810]">
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
    </div>
    <Cta />
</template>