<template>
    <nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(19,27,46,0.06)]">
        <div class="max-w-8xl mx-auto px-8 py-4 flex justify-between items-center md:grid md:grid-cols-3">
            <a href="/">
                <div class="flex items-center md:gap-1 text-2xl font-black text-[#131b2e] tracking-tighter font-headline justify-start">
                    <svg class="h-10" viewBox="0 0 156 156" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(7 0)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M82.52 22.459C84.828 23.811 87.396 25.956 88.227 27.224C91.423 32.102 104.939 65.2 106.058 70.891C108.432 82.958 103.397 97.591 93.766 106.612C86.145 113.751 48.653 133.184 41.311 133.801C30.323 134.725 21 126.318 21 115.486C21 111.07 23.424 104.718 38.572 69.432C49.316 44.406 57.185 27.384 58.822 25.628C64.573 19.461 75.021 18.064 82.52 22.459ZM68.291 34.25C66.255 36.918 34 113.261 34 115.412C34 118.165 36.896 121 39.707 121C42.007 121 75.118 104.278 81.843 99.72C90.357 93.949 95.172 82.19 92.996 72.482C91.882 67.51 80.11 39.343 77.449 35.282C75.773 32.724 69.955 32.069 68.291 34.25ZM118.039 95.5C123.182 106.969 124.331 110.496 124.392 115.008C124.531 125.239 117.327 133.059 107.081 133.8C101.497 134.204 100.622 133.929 90.097 128.461C83.994 125.29 79 122.418 79 122.078C79 121.739 81.755 119.947 85.121 118.096L91.243 114.731L98.006 118.003C105.444 121.601 109.092 121.564 111.069 117.871C111.989 116.153 111.608 114.247 108.998 107.496L105.801 99.226L108.401 91.695C109.83 87.553 111 83.377 111 82.415C111 79.867 111.172 80.186 118.039 95.5Z" fill="black"/>
                        </g>
                    </svg>
                    <span class="hidden md:block">ApexStack Technology</span>
                </div>
            </a>

            <div class="hidden md:flex gap-8 items-center justify-center">
                <a class="font-headline font-semibold tracking-tight text-[#434655] hover:text-[#004ac6] transition-colors duration-300" href="/services">Services</a>
                <a class="font-headline font-semibold tracking-tight text-[#434655] hover:text-[#004ac6] transition-colors duration-300" href="/expertise">Expertise</a>
                <a class="font-headline font-semibold tracking-tight text-[#434655] hover:text-[#004ac6] transition-colors duration-300 whitespace-nowrap" href="/case-studies">Case Studies</a>
                <a class="font-headline font-semibold tracking-tight text-[#434655] hover:text-[#004ac6] transition-colors duration-300" href="/approach">Approach</a>
                <a class="font-headline font-semibold tracking-tight text-[#434655] hover:text-[#004ac6] transition-colors duration-300" href="/blogs">Blogs</a>
                <a class="font-headline font-semibold tracking-tight text-[#434655] hover:text-[#004ac6] transition-colors duration-300" href="/resources">Resources</a>
            </div>
            <!-- Right Side -->
            <div class="flex items-center gap-4 justify-end">
                <a href="/contact">
                    <button class="hidden cursor-pointer md:block bg-primary text-white px-6 py-2.5 rounded-full font-headline font-semibold text-sm hover:scale-95 duration-200 ease-in-out">
                        Contact Us
                    </button>
                </a>
                <!-- Mobile Menu Button -->
                <button @click="toggleMenu" class="md:hidden text-on-surface">
                <span class="material-symbols-outlined">
                {{ isOpen ? 'close' : 'menu' }}
                </span>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden px-8 py-6 flex flex-col gap-4 bg-white/90 backdrop-blur-xl">
            <a @click="closeMenu" class="font-headline font-semibold text-[#434655]" href="/services">Services</a>
            <a @click="closeMenu" class="font-headline font-semibold text-[#434655]" href="/expertise">Expertise</a>
            <a @click="closeMenu" class="font-headline font-semibold text-[#434655] whitespace-nowrap" href="/case-studies">Case Studies</a>
            <a @click="closeMenu" class="font-headline font-semibold text-[#434655]" href="/approach">Approach</a>
            <a @click="closeMenu" class="font-headline font-semibold text-[#434655]" href="/blogs">Blog</a>
            <a @click="closeMenu" class="font-headline font-semibold text-[#434655]" href="/resources">Resources</a>
            <a href="/contact">
                <button class="bg-primary text-white px-6 py-2.5 rounded-full font-headline font-semibold text-sm mt-2">
                    Contact Us
                </button>
            </a>
        </div>
    </nav>
</template>
<script setup>
    import { ref } from 'vue'
    
    const isOpen = ref(false)
    
    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }
    
    const closeMenu = () => {
      isOpen.value = false
    }
</script>