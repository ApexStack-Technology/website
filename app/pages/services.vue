<template>
  <section class="max-w-7xl mx-auto px-8 mb-20 md:mb-32 pt-8">
      <div class="relative overflow-hidden rounded-xl bg-surface-container-low p-12 md:p-24 flex flex-col items-center text-center">
          <div class="absolute inset-0 opacity-10 pointer-events-none">
              <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-container blur-[120px] rounded-full"></div>
              <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-container blur-[120px] rounded-full"></div>
          </div>
          <h1 class="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter max-w-4xl leading-[1.1] mb-8">
              Comprehensive Salesforce Services for Enterprises
          </h1>
          <p class="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              Custom implementations, integrations, and development services designed to align Salesforce with your business model and revenue goals.
          </p>
          <div class="flex flex-col md:flex-row gap-4">
              <a href="/expertise">
                <button class="bg-primary cursor-pointer text-on-primary px-10 py-4 rounded-xl font-headline font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                  Explore Our Expertise
                </button>
              </a>
              <a href="/case-studies">
                <button class="bg-surface-container-lowest cursor-pointer text-primary px-10 py-4 rounded-xl font-headline font-bold border border-outline-variant/30 hover:bg-white transition-colors">
                  View Case Studies
                </button>
              </a>
          </div>
      </div>
  </section>
  <section class="max-w-7xl mx-auto px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container-low p-8 md:p-12 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              <div class="flex flex-col md:flex-row gap-8 items-start">
                  <div class="flex-1">
                      <div class="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                          <span class="material-symbols-outlined text-primary text-3xl">account_tree</span>
                      </div>
                      <h3 class="text-3xl font-headline font-bold mb-4">Implementation</h3>
                      <p class="text-on-surface-variant leading-relaxed max-w-md">End-to-end setups tailored to specific business workflows. We go beyond out-of-the-box, crafting environments that mirror your unique operational DNA.</p>
                  </div>
              </div>
          </div>
          <div class="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm hover:shadow-xl transition-shadow">
              <div class="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
                  <span class="material-symbols-outlined text-tertiary">strategy</span>
              </div>
              <h3 class="text-2xl font-headline font-bold mb-3">Consulting</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">Strategic roadmap planning and process optimization. We align your tech stack with long-term revenue targets and organizational growth.</p>
          </div>
          <div class="md:col-span-4 bg-surface-container-low rounded-lg p-8 group">
              <div class="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <span class="material-symbols-outlined">code</span>
              </div>
              <h3 class="text-2xl font-headline font-bold mb-3">Custom Development</h3>
              <p class="text-on-surface-variant text-sm leading-relaxed">Bespoke Apex and LWC components built for performance. Clean, maintainable code that extends Salesforce's native capabilities.</p>
          </div>
          <div class="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden group">
              <div class="absolute top-0 right-0 p-4 opacity-20">
                  <span class="material-symbols-outlined" style="font-size: 8rem;">apps</span>
              </div>
              <div class="relative z-10">
                  <div class="w-12 h-12 bg-surface rounded-lg flex items-center justify-center mb-6 text-black">
                    <span class="material-symbols-outlined">app_spark</span>
                  </div>
                  <h3 class="text-2xl font-headline font-bold mb-3">App Development</h3>
                  <p class="text-on-primary/80 text-sm leading-relaxed mb-6">Transforming unique business needs into powerful AppExchange solutions for a global market.</p>
              </div>
          </div>
          <div class="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between">
              <div>
                  <div class="w-12 h-12 bg-on-surface/5 rounded-lg flex items-center justify-center mb-6">
                      <span class="material-symbols-outlined text-on-surface">hub</span>
                  </div>
                  <h3 class="text-2xl font-headline font-bold mb-3">Integration</h3>
                  <p class="text-on-surface-variant text-sm leading-relaxed">Connecting Salesforce to ERP, marketing stack, and legacy systems with seamless data orchestration.</p>
              </div>
          </div>
          <div class="md:col-span-6 glass-card rounded-lg p-10 border border-white/50 shadow-2xl shadow-blue-900/5">
              <div class="flex items-start gap-6">
                  <div class="shrink-0 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center">
                      <span class="material-symbols-outlined text-primary text-2xl" data-weight="fill" style="font-variation-settings: 'FILL' 1;">palette</span>
                  </div>
                  <div>
                      <h3 class="text-2xl font-headline font-bold mb-2">Design</h3>
                      <p class="text-on-surface-variant leading-relaxed">User-centric UX/UI design for complex enterprise workflows. We prioritize clarity and cognitive load reduction in every interface we build.</p>
                  </div>
              </div>
          </div>
        <div class="md:col-span-6 bg-surface-container-low rounded-xl p-10 flex items-center justify-between gap-8 group relative overflow-hidden">
              <div class="flex-1">
                  <h3 class="text-2xl font-headline font-bold mb-2">Managed Services</h3>
                  <p class="text-on-surface-variant leading-relaxed max-w-sm">Continuous improvement and proactive admin support to keep your ecosystem healthy and evolving.</p>
              </div>
            <div class="absolute right-6 bottom-6 w-24 h-24 bg-primary-container/10 rounded-full flex items-center justify-center">
                <span class="material-symbols-outlined text-primary" style="font-size: 3.5rem;">support_agent</span>
            </div>
          </div>
          <div class="md:col-span-6 bg-slate-900 text-white rounded-lg p-10 flex flex-col md:flex-row gap-8">
              <div class="flex-1">
                  <div class="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4">Critical Protection</div>
                  <h3 class="text-2xl font-headline font-bold mb-3">Security Review</h3>
                  <p class="text-slate-400 text-sm leading-relaxed">Rigorous auditing of permissions, code, and configurations. We ensure your data remains your most secure asset.</p>
              </div>
              <div class="md:w-1/3 h-32 md:h-auto rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                  <span class="material-symbols-outlined text-white/20" style="font-size: 7rem;">verified_user</span>
              </div>
          </div>
          <div class="md:col-span-6 bg-tertiary-fixed rounded-xl p-10 border border-tertiary/10 relative overflow-hidden">
              <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-tertiary-fixed-dim blur-3xl rounded-full"></div>
              <div class="relative z-10">
                  <h3 class="text-2xl font-headline font-bold text-on-tertiary-fixed mb-3">Salesforce Support</h3>
                  <p class="text-on-tertiary-fixed-variant leading-relaxed mb-6">Rapid-response technical support for troubleshooting and critical bug resolution. We act as your extended technical arm.</p>
                  <div class="flex items-center gap-4">
                      <span class="relative flex h-2.5 w-2.5">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span class="text-xs font-bold text-on-tertiary-fixed">Priority Support Available</span>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <Cta />
 
</template>