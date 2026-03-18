<script setup lang="ts">
    import Benefits from '~/components/benefits.vue';
    import Casestudiesfeature from '~/components/casestudiesfeature.vue';
    import Clientshowcase from '~/components/clientshowcase.vue';
    import Cloudportfolio from '~/components/cloudportfolio.vue';
</script>
<template>
    <div class="relative bg-white overflow-hidden flex items-center justify-center pt-20">

        <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-[800px] h-[375px] bg-gradient-to-br from-[#0176D3] via-[#1B96FF] to-[#78C3FB] opacity-60 blur-3xl rounded-full"></div>
        </div>

        <div class="relative overflow-hidden max-w-3xl mx-auto py-10">
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mt-5 text-center mx-auto">
                    <div class="bg-green-50 inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-green-50 mb-5 transition-transform hover:scale-105 cursor-default">
                        <span class="text-sm font-semibold text-green-500">Revenue Cloud Specialists</span>
                    </div>
                    <h1 class="block font-bold text-black text-4xl md:text-5xl lg:text-6xl">
                        Salesforce consulting & development ‍partner
                    </h1>
                </div>
                <div class="mt-2 max-w-xl text-center mx-auto">
                    <p>Complete Salesforce implementation with structured CRM architecture, seamless integrations, and automation built around your actual workflows.</p>
                </div>
                <div class="flex justify-center mt-5">
                    <button type="button" class="cursor-pointer inline-flex text-xs items-center text-white bg-blue-700 hover:bg-blue-800 border border-transparent focus:ring-2 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">
                        <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z" fill="currentColor" opacity="0.9"/>
                        </svg>
                        <span>Schedule a Consultation</span>
                    </button>
                </div>
                <clientshowcase />
            </div>
        </div>
    </div>
    <cloudportfolio />
    <blogfeature />
    <casestudiesfeature />
    <contactus />
</template>