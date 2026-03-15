<template>
    <section class="py-32 bg-[#FAFAFA]" data-purpose="recent-insights" id="blog">
        <div class="max-w-5xl mx-auto px-6 lg:px-12">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div class="max-w-2xl">
                    <h2 class="text-xs font-bold tracking-[0.25em] uppercase text-[#0052FF] mb-6">Expert Perspectives</h2>
                    <h3 class="text-4xl md:text-5xl font-extrabold text-[#1A1A1A]">Recent Insights</h3>
                </div>
                <a class="inline-flex items-center text-sm font-bold text-black/60 hover:text-[#0052FF] transition-colors" href="#">
                    View all articles
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                </a>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <article class="blog-card flex flex-col bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden group">
                    <div class="aspect-[16/10] bg-[#F4F4F4] flex items-center justify-center relative overflow-hidden">
                        <span class="material-symbols-outlined text-black/10 !text-6xl transition-transform duration-700 group-hover:scale-110">schema</span>
                        <div class="absolute top-6 left-6">
                            <span class="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#0052FF] uppercase tracking-wider shadow-sm">Implementation</span>
                        </div>
                    </div>
                    <div class="p-8 flex flex-col flex-1">
                        <h4 class="text-xl font-bold mb-3 leading-snug group-hover:text-[#0052FF] transition-colors">Mastering the Migration: Legacy ERP to Salesforce</h4>
                        <p class="text-black/50 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">Learn the core strategies for maintaining data integrity during high-volume enterprise migrations.</p>
                        <div class="mt-auto">
                            <a class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-black/80 hover:text-[#0052FF] transition-colors" href="#">
                                Read more
                                <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article class="blog-card flex flex-col bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden group">
                    <div class="aspect-[16/10] bg-[#F4F4F4] flex items-center justify-center relative overflow-hidden">
                        <span class="material-symbols-outlined text-black/10 !text-6xl transition-transform duration-700 group-hover:scale-110">auto_awesome</span>
                        <div class="absolute top-6 left-6">
                            <span class="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#0052FF] uppercase tracking-wider shadow-sm">AI</span>
                        </div>
                    </div>
                    <div class="p-8 flex flex-col flex-1">
                        <h4 class="text-xl font-bold mb-3 leading-snug group-hover:text-[#0052FF] transition-colors">The Agentforce Era: Reimagining Customer Support</h4>
                        <p class="text-black/50 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">How autonomous AI agents are reducing case volume by 40% while increasing CSAT scores.</p>
                        <div class="mt-auto">
                            <a class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-black/80 hover:text-[#0052FF] transition-colors" href="#">
                                Read more
                                <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
                <article class="blog-card flex flex-col bg-white rounded-[2rem] border border-black/[0.03] overflow-hidden group">
                    <div class="aspect-[16/10] bg-[#F4F4F4] flex items-center justify-center relative overflow-hidden">
                        <span class="material-symbols-outlined text-black/10 !text-6xl transition-transform duration-700 group-hover:scale-110">rocket_launch</span>
                        <div class="absolute top-6 left-6">
                            <span class="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#0052FF] uppercase tracking-wider shadow-sm">Strategy</span>
                        </div>
                    </div>
                    <div class="p-8 flex flex-col flex-1">
                        <h4 class="text-xl font-bold mb-3 leading-snug group-hover:text-[#0052FF] transition-colors">Optimizing Revenue Lifecycle for SaaS Growth</h4>
                        <p class="text-black/50 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">Aligning Sales, Billing, and Renewals into a single unified source of truth for your finance teams.</p>
                        <div class="mt-auto">
                            <a class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-black/80 hover:text-[#0052FF] transition-colors" href="#">
                                Read more
                                <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>