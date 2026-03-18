<template>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7 bg-transparent absolute">
        <nav class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
            
            <div class="lg:col-span-3 flex items-center">
                <a class="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Preline">
                    <h1>ApexStack Technology</h1>
                </a>
            </div>

            <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
                <a href="/contact"> 
                    <button type="button" class="w-full cursor-pointer inline-flex text-xs items-center justify-center text-white bg-blue-700 hover:bg-blue-800 border border-transparent focus:ring-2 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-2xl text-sm px-3 py-2 focus:outline-none">
                        <span>Contact Us</span>
                    </button>
                </a>

                <div class="lg:hidden">
                    <button type="button" @click="toggleMenu" class="size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl bg-layer text-layer-foreground hover:bg-layer-hover focus:outline-none">
                        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <line x1="3" x2="21" y1="6" y2="6"/>
                            <line x1="3" x2="21" y1="12" y2="12"/>
                            <line x1="3" x2="21" y1="18" y2="18"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div :class="[isOpen ? 'block' : 'hidden', 'basis-full grow lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6 lg:block']">
                <div class="flex flex-col gap-y-4 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-x-7 lg:mt-0">
                    <a class="text-foreground focus:outline-none text-sm hover:text-blue-700" href="/services">Services</a>
                    <a class="text-foreground focus:outline-none text-sm hover:text-blue-700" href="/expertise">Expertise</a>
                    <a class="text-foreground focus:outline-none text-sm hover:text-blue-700" href="/case-studies">Case Studies</a>
                    <a class="text-foreground focus:outline-none text-sm hover:text-blue-700" href="/approach">Approach</a>
                    <a class="text-foreground focus:outline-none text-sm hover:text-blue-700" href="/blog">Blog</a>
                    <a class="text-foreground focus:outline-none text-sm hover:text-blue-700" href="/resources">Resources</a>
                </div>
            </div>

        </nav>
    </header>

</template>