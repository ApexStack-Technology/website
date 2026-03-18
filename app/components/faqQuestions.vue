<template>
    <div class="max-w-2xl mx-auto">
        <div v-for="(item, i) in faqs" :key="i" class="px-4">
            <div :class="['transition-all p-4 rounded-xl hover:bg-gray-100 mb-2', openIndex === i ? 'bg-gray-100' : 'bg-white']">
                <button @click="toggle(i)" :class="['group inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition focus:outline-none cursor-pointer', openIndex === i ? 'text-blue-700' : 'hover:text-blue-700']">
                    {{ item.q }}
                    <svg :class="['block shrink-0 w-5 h-5 transition-transform duration-300', openIndex === i ? 'rotate-180 text-blue-700' : 'group-hover:text-blue-700']" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
                <div :class="['w-full overflow-hidden transition-all duration-300', openIndex === i ? 'max-h-[500px] mt-2 opacity-100' : 'max-h-0 opacity-0']">
                    <p class="text-sm">{{ item.a }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    
    const faqs = [
      { q: 'Can I cancel at anytime?', a: 'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.' },
      { q: 'Do you offer refunds?', a: 'Refunds are processed based on our policy. Please check the refund section for details.' },
      { q: 'Is there customer support?', a: 'Yes, 24/7 customer support is available via chat and email.' }
    ]
    
    const openIndex = ref(null)
    
    const toggle = (i) => {
      openIndex.value = openIndex.value === i ? null : i
    }
</script>