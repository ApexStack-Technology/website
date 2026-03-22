<template>
    <section class="py-32 px-8 bg-on-background relative overflow-hidden">
        <div class="max-w-4xl mx-auto relative z-10">
            <div class="text-center mb-16">
                <span class="text-primary-fixed font-label font-bold tracking-widest uppercase text-sm">
                Support &amp; Guidance
                </span>
                <h2 class="text-4xl font-headline font-extrabold text-white tracking-tight mt-4">
                    Frequently Asked Questions
                </h2>
            </div>
            <div class="space-y-4">
                <details 
                    v-for="(faq, index) in faqs" 
                    :key="index"
                    class="group bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
                    :open="index === 0"
                    >
                    <summary class="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/[0.05] transition-colors">
                        <h3 class="text-lg font-headline font-bold text-white">
                            {{ faq.question }}
                        </h3>
                        <span class="material-symbols-outlined text-primary-fixed transition-transform group-open:rotate-180">
                        expand_more
                        </span>
                    </summary>
                    <div class="p-6 pt-0 border-t border-white/5 text-slate-400 leading-relaxed">
                        {{ faq.answer }}
                    </div>
                </details>
            </div>
        </div>
    </section>
</template>
<script setup>
    const faqs = [
      {
        question: "How long does a typical Revenue Cloud implementation take?",
        answer: "Timelines vary based on complexity, but a standard implementation typically ranges from 12 to 24 weeks. We follow a phased approach to ensure you start seeing ROI as early as the 8-week mark through a Minimum Viable Product (MVP) rollout."
      },
      {
        question: "Which Salesforce editions do you support?",
        answer: "We primarily work with Enterprise and Unlimited editions, as these provide the API access and advanced automation features necessary for high-scale architectural work. We also specialize in Industry Clouds (Financial Services, Health, Manufacturing)."
      },
      {
        question: "Do you provide post-implementation support?",
        answer: "Yes, we offer managed services packages (ApexCare) that include ongoing platform optimization, feature updates, and technical support to ensure your Salesforce investment continues to scale with your business."
      },
      {
        question: "How do you handle data security and compliance?",
        answer: "Security is built into our architecture by design. We implement granular Sharing Rules, Shield Encryption where required, and ensure all integrations follow OAuth 2.0 protocols to maintain SOC2 and GDPR compliance."
      }
    ]
    
</script>