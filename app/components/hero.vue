<template>
    <div class="relative min-h-[80vh] flex items-center justify-center pb-12 pt-20 overflow-hidden bg-[#0b0f1a]">
        <div class="absolute inset-0 hero-pattern opacity-40"></div>
        <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-container/10 blur-[120px] rounded-full"></div>
        <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                <span class="text-xs font-label font-bold text-primary-fixed uppercase tracking-widest">Revenue Cloud Specialists</span>
            </div>
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-headline font-extrabold text-white tracking-tighter leading-[1.1] mb-6">
                Salesforce consulting &amp; <span class="text-primary-container">development partner</span>
            </h1>
            <p class="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8 font-body">
                Complete Salesforce implementation with structured CRM architecture, seamless integrations, and automation built around your actual workflows.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button class="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-headline font-bold text-base shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                Schedule a Consultation
                </button>
                <button class="w-full sm:w-auto px-6 py-3 bg-white/5 text-white rounded-full font-headline font-bold text-base backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                View Services
                </button>
            </div>
            <ClientShowcaseDark />
            <!-- 
            <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
                <div class="flex flex-col items-center gap-2">
                    <span class="text-2xl font-headline font-black text-white">100+</span>
                    <span class="text-xs font-label uppercase text-slate-500">Deployments</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-2xl font-headline font-black text-white">12+</span>
                    <span class="text-xs font-label uppercase text-slate-500">Years Exp</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-2xl font-headline font-black text-white">98%</span>
                    <span class="text-xs font-label uppercase text-slate-500">Retention</span>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <span class="text-2xl font-headline font-black text-white">5.0</span>
                    <span class="text-xs font-label uppercase text-slate-500">AppExchange</span>
                </div>
            </div>
             -->
        </div>
    </div>
</template>