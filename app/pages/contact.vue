<script setup lang="ts">
    import ContactForm from '~/components/contactForm.vue';    
</script>
<template>
    <div class="max-w-4xl mx-auto">
        <div class="max-w-2xl mx-auto py-10">
            <div class="text-center">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-4xl">
                    Contact us
                </h1>
                <p class="mt-1 text-gray-500">
                    We'd love to talk about how we can help you.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-20">
            <div class="border border-gray-300 rounded-xl">
                <ContactForm />
            </div>
            <div class="divide-y divide-card-divider divide-gray-300">

                <div class=" flex gap-x-7 py-6">
                    <svg class="shrink-0 size-6 mt-1.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
                    <div class="grow">
                        <h3 class="font-semibold text-foreground">Resources</h3>
                        <p class="mt-1 text-sm text-muted-foreground-1">Explore guides for Salesforce development and setup.</p>
                        <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-muted-foreground-2 hover:text-primary-hover focus:outline-hidden focus:text-primary-focus" href="/resources">
                            Explore Resources
                            <svg class="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="flex gap-x-7 py-6">
                    <svg class="shrink-0 size-6 mt-1.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                    <div class="grow">
                        <h3 class="font-semibold text-foreground">Services</h3>
                        <p class="mt-1 text-sm text-muted-foreground-1">We’re here to help with any Salesforce setup, customization, or support.</p>
                        <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-muted-foreground-2 hover:text-primary-hover focus:outline-hidden focus:text-primary-focus" href="/services">
                            Our Services
                            <svg class="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="flex gap-x-7 py-6">
                    <svg class="shrink-0 size-6 mt-1.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
                    <div class="grow">
                        <h3 class="font-semibold text-foreground">FAQ</h3>
                        <p class="mt-1 text-sm text-muted-foreground-1">Search our FAQ for answers to anything you might ask.</p>
                        <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-muted-foreground-2 hover:text-primary-hover focus:outline-hidden focus:text-primary-focus" href="/faq">
                            Visit FAQ
                            <svg class="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class=" flex gap-x-7 py-6">
                    <svg class="shrink-0 size-6 mt-1.5 text-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
                    <div class="grow">
                        <h3 class="font-semibold text-foreground">Contact us by email</h3>
                        <p class="mt-1 text-sm text-muted-foreground-1">If you wish to write us an email instead please use</p>
                        <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-muted-foreground-2 hover:text-primary-hover focus:outline-hidden focus:text-primary-focus">
                            srimathi[at]apexstacktech[dot]com
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>