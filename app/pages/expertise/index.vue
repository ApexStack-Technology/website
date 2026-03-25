<template>
    <div class="grid lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto py-16 px-8 md:px-0">
        <div class="lg:col-span-6 z-10">
            <h1 class="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
                Engineering <span class="text-primary bg-clip-text">Revenue</span> and <span class="text-primary bg-clip-text">Data</span> Systems
            </h1>
            <p class="font-body text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                Architecting scalable systems that unify revenue operations, automate complex workflows, and enable real-time intelligence across your entire ecosystem
            </p>
            <div class="flex flex-wrap gap-4">
                <a href="/contact">
                    <button class="bg-gradient-to-br cursor-pointer from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
                        Start Transformation
                    </button>
                </a>
                <a href="/services">
                    <button class="glass-card cursor-pointer border border-white/50 text-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-white/60 transition-colors">
                        View Services
                        <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                    </button>
                </a>
            </div>
        </div>
        <div class="lg:col-span-6 relative hidden md:block">
            <div class="relative w-full aspect-square flex items-center justify-center">
                <div class="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
                <div class="relative w-full h-full grid grid-cols-2 grid-rows-2 gap-5">

                <!-- Card 1 -->
                <div class="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/40 shadow-xl transition duration-300 transform -rotate-2 hover:rotate-0">
                    <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                        <span class="material-symbols-outlined text-primary text-3xl">insights</span>
                    </div>
                    <div>
                        <div class="text-xs font-semibold text-primary tracking-wide uppercase mb-1">
                            Data & Insights
                        </div>
                        <div class="text-lg font-semibold text-on-surface leading-snug">
                            CRM Analytics, Dashboards & Forecasting
                        </div>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/40 shadow-xl transition duration-300 transform translate-y-3 rotate-2 hover:rotate-0">
                    <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                        <span class="material-symbols-outlined text-secondary text-3xl">hub</span>
                    </div>
                    <div>
                        <div class="text-xs font-semibold text-secondary tracking-wide uppercase mb-1">
                            Integration
                        </div>
                        <div class="text-lg font-semibold text-on-surface leading-snug">
                            API Integrations & System Connectivity
                        </div>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/40 shadow-xl transition duration-300 transform -translate-y-2 -rotate-1 hover:rotate-0">
                    <div class="w-12 h-12 bg-tertiary-container/20 rounded-xl flex items-center justify-center mb-5">
                        <span class="material-symbols-outlined text-tertiary text-3xl">encrypted</span>
                    </div>
                    <div>
                        <div class="text-xs font-semibold text-tertiary tracking-wide uppercase mb-1">
                            Security & Governance
                        </div>
                        <div class="text-lg font-semibold text-on-surface leading-snug">
                            Access Control, Compliance & Data Protection
                        </div>
                    </div>
                </div>

                <!-- Highlight Card -->
                <div class="p-6 rounded-2xl flex flex-col justify-between bg-gradient-to-br from-primary to-primary-container shadow-xl transition duration-300 transform -translate-y-1 rotate-1 hover:rotate-3">
                    <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
                        <span class="material-symbols-outlined text-white text-3xl">memory</span>
                    </div>
                    <div>
                        <div class="text-xs font-semibold text-on-primary/70 tracking-wide uppercase mb-1">
                            Implementation
                        </div>
                        <div class="text-lg font-semibold text-white leading-snug">
                            End-to-End Salesforce Delivery & Customization
                        </div>
                    </div>
                </div>

            </div>
                <div class="absolute -top-12 -right-12 w-48 h-48 bg-tertiary-container/10 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl mx-auto pb-20 px-8 md:px-0">
                <div class="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(19,27,46,0.04)] flex flex-col justify-between group hover:translate-y-[-2px] transition-all duration-300">
                    <div>
                        <div class="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                            <span class="material-symbols-outlined text-primary text-2xl" data-icon="settings_suggest">settings_suggest</span>
                        </div>
                        <h3 class="text-xl font-headline font-bold mb-4">Revenue Cloud (Advanced)</h3>
                        <p class="text-on-surface-variant text-sm leading-relaxed mb-4 max-w-xl">
                            Strategic multi-cloud architecture for global enterprises. We specialize in harmonizing complex global deployments across diverse market requirements and regulatory frameworks.
                        </p>
                    </div>
                    <a class="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                        Explore Specialization <span class="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
                <div class="md:col-span-4 bg-primary text-on-primary p-8 group rounded-xl shadow-xl flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300">
                    <div>
                        <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                            <span class="material-symbols-outlined text-white text-2xl" data-icon="smart_toy">smart_toy</span>
                        </div>
                        <h3 class="text-lg font-headline font-bold mb-4">AgentForce</h3>
                        <p class="text-blue-100 text-sm mb-4">
                            Deploy AI-driven autonomous agents to transform your customer service and sales velocity in real-time.
                        </p>
                    </div>
                    <a class="flex items-center gap-2 text-surface font-bold group-hover:gap-4 transition-all" href="#">
                        Learn AI Strategy <span class="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
                <div class="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl group shadow-[0_20px_40px_rgba(19,27,46,0.04)] hover:translate-y-[-2px] transition-all duration-300">
                    <div class="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-2xl flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-2xl" data-icon="receipt_long">receipt_long</span>
                    </div>
                    <h3 class="text-lg font-headline font-bold mb-4">Revenue Cloud (Billing)</h3>
                    <p class="text-on-surface-variant text-sm mb-4">
                        Subscription management and high-volume billing logic designed for scalability and financial integrity.
                    </p>
                    <a class="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                        Detailed View <span class="material-symbols-outlined">chevron_right</span>
                    </a>
                </div>
                <div class="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl group shadow-[0_20px_40px_rgba(19,27,46,0.04)] hover:translate-y-[-2px] transition-all duration-300">
                    <div class="w-12 h-12 bg-secondary-fixed text-on-secondary-fixed-variant rounded-2xl flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-2xl" data-icon="request_quote">request_quote</span>
                    </div>
                    <h3 class="text-lg font-headline font-bold mb-4">Revenue Cloud (CPQ)</h3>
                    <p class="text-on-surface-variant text-sm mb-4">
                        Quote-to-cash optimization and dynamic product configuration for complex sales cycles using Revenue Cloud CPQ automation tools.
                    </p>
                    <a class="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                        Detailed View <span class="material-symbols-outlined">chevron_right</span>
                    </a>
                </div>
                <div class="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl group shadow-[0_20px_40px_rgba(19,27,46,0.04)] hover:translate-y-[-2px] transition-all duration-300">
                    <div class="w-12 h-12 bg-surface-variant text-on-surface-variant rounded-2xl flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-2xl" data-icon="gavel">gavel</span>
                    </div>
                    <h3 class="text-lg font-headline font-bold mb-4">CLM</h3>
                    <p class="text-on-surface-variant text-sm mb-4">
                        Automated legal workflows and contract integrity to shorten the path from signature to revenue.
                    </p>
                    <a class="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                        Detailed View <span class="material-symbols-outlined">chevron_right</span>
                    </a>
                </div>
                <div class="md:col-span-12 bg-white p-8 rounded-xl shadow-[0_20px_40px_rgba(19,27,46,0.04)] flex flex-col md:flex-row items-center gap-6 hover:translate-y-[-2px] transition-all duration-300">
                    <div class="md:w-1/2">
                        <div class="inline-flex items-center gap-3 text-primary font-bold mb-6">
                            <span class="material-symbols-outlined" data-icon="database">database</span>
                            <span class="uppercase tracking-widest text-xs">Unification Engine</span>
                        </div>
                        <h3 class="text-2xl font-headline font-bold mb-6">Data Cloud</h3>
                        <p class="text-on-surface-variant text-sm leading-relaxed">
                            Real-time data harmonisation and customer profile unification. We turn fragmented data silos into a single source of truth for your entire ecosystem.
                        </p>
                    </div>
                    <div class="md:w-1/2 grid grid-cols-2 gap-4">
                        <div class="bg-surface-container-low p-6 rounded-lg">
                            <div class="text-primary font-black text-xl mb-1">360°</div>
                            <div class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Profile View</div>
                        </div>
                        <div class="bg-surface-container-low p-6 rounded-lg">
                            <div class="text-primary font-black text-xl mb-1">Real-time</div>
                            <div class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Processing</div>
                        </div>
                    </div>
                </div>
            </div>
            <Cta />

</template>