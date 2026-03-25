<template>
    <section class="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 class="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-6 leading-[1.1]">
            Transform Your Business with Salesforce Architecture
        </h1>
        <p class="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-medium leading-relaxed">
            Convert complexity into structured, high-performing systems that accelerate execution and long-term growth.
        </p>
    </section>
    <section class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        <div class="lg:col-span-5 space-y-10">
            <div class="p-10 rounded-xl bg-primary-container text-white relative overflow-hidden group">
                <div class="absolute inset-0 opacity-10" data-alt="Technical grid pattern with subtle dots on a deep blue background for a high-tech consultancy feel" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"></div>
                    <h3 class="font-headline text-3xl font-bold mb-4 relative z-10">Enterprise-Grade Salesforce Architecture</h3>
                    <p class="text-on-primary-container font-medium relative z-10 leading-relaxed mb-8">
                        Build a solid CRM foundation designed for scalability, flexibility, and seamless expansion as your business evolves.
                    </p>
                    <div class="flex items-center gap-4 relative z-10">
                        <div class="w-12 h-12 rounded-full bg-surface-container-lowest/20 flex items-center justify-center">
                            <span class="material-symbols-outlined text-white" data-icon="hub">hub</span>
                        </div>
                        <span class="font-semibold tracking-tight">Full-Stack Ecosystem Integration</span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-6">
                    <div class="p-8 rounded-lg bg-surface-container-low border-none">
                        <span class="material-symbols-outlined text-tertiary mb-4" data-icon="auto_awesome">auto_awesome</span>
                        <h4 class="font-headline font-bold text-on-surface mb-2">Experience-Driven Engineering</h4>
                        <p class="text-sm text-on-surface-variant">Deliver intuitive, high-performance Salesforce solutions focused on usability, adoption, and customer experience.</p>
                    </div>
                    <div class="p-8 rounded-lg bg-surface-container-low border-none">
                        <span class="material-symbols-outlined text-primary mb-4" data-icon="precision_manufacturing">precision_manufacturing</span>
                        <h4 class="font-headline font-bold text-on-surface mb-2">Data-Led Performance Optimization</h4>
                        <p class="text-sm text-on-surface-variant">Leverage data-driven strategies to optimize workflows, improve decision-making, and maximize ROI from Salesforce investments.</p>
                    </div>
                </div>
        </div>

        <div class="lg:col-span-7">
            <div class="glass-card rounded-xl p-8 md:p-12 shadow-2xl shadow-blue-900/5">
                <div class="space-y-8">
                    <div v-if="submitted.value" class="h-full flex flex-col items-center justify-center text-center py-16">
                        <div class="relative w-28 h-28 rounded-full flex items-center justify-center mb-10 bg-green-500/10 border border-green-500/20">
                            <span class="material-symbols-outlined text-green-500" style="font-size: 4rem;">check_circle</span>
                            <span class="absolute inset-0 rounded-full"></span>
                        </div>

                        <h3 class="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-4">
                            Submission Confirmed
                        </h3>

                        <p class="text-on-surface-variant text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            Your request has been received and is now queued for review. Expect a direct response within 72 hours.
                        </p>
                    </div>
                    <form v-if="!submitted.value" @submit.prevent="handleSubmit">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-2">
                                <label class="block font-label text-sm font-semibold text-on-surface-variant ml-1">Full Name</label>
                                <input v-model="form.fullName" type="text" placeholder="Johnathan Sterling" class="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline transition-all" />
                                <p v-if="errors.fullName" class="text-red-500 text-xs -mt-1">{{ errors.fullName }}</p>
                            </div>

                            <div class="space-y-2">
                                <label class="block font-label text-sm font-semibold text-on-surface-variant ml-1">Phone Number</label>
                                <input v-model="form.phone" type="tel" placeholder="+1 (555) 123-4567" class="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline transition-all" />
                                <p v-if="errors.phone" class="text-red-500 text-xs -mt-1">{{ errors.phone }}</p>
                            </div>

                            <div class="space-y-2">
                                <label class="block font-label text-sm font-semibold text-on-surface-variant ml-1">Business Email</label>
                                <input v-model="form.email" type="email" placeholder="j.sterling@enterprise.com" class="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline transition-all" />
                                <p v-if="errors.email" class="text-red-500 text-xs -mt-1">{{ errors.email }}</p>
                            </div>

                            <div class="space-y-2">
                                <label class="block font-label text-sm font-semibold text-on-surface-variant ml-1">Company Name</label>
                                <input v-model="form.company" type="text" placeholder="Sterling Enterprises" class="w-full bg-surface-container-low border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline transition-all" />
                                <p v-if="errors.company" class="text-red-500 text-xs -mt-1">{{ errors.company }}</p>
                            </div>
                        </div>

                        <div class="space-y-2 mt-8">
                            <label class="block font-label text-sm font-semibold text-on-surface-variant ml-1">Message</label>
                            <textarea v-model="form.message" rows="4" placeholder="Describe your technical vision..." class="w-full bg-surface-container-low border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary-container outline-none text-on-surface placeholder:text-outline transition-all resize-none"></textarea>
                            <p v-if="errors.message" class="text-red-500 text-xs -mt-2">{{ errors.message }}</p>
                        </div>
                        <button class="w-full cursor-pointer bg-primary-container text-white mt-10 py-5 rounded-xl font-headline font-bold text-lg tracking-tight hover:scale-[0.98] transition-transform shadow-xl shadow-blue-600/20" type="submit">
                            Initiate Consultation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Cta />
</template>

<script setup>
    import { reactive } from 'vue'

    const form = reactive({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: ''
    })

    const errors = reactive({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    message: ''
    })

    const submitted = reactive({ value: false })

    const validate = () => {
    let valid = true

    errors.fullName = form.fullName ? '' : 'Full name is required'
    errors.phone = /^[0-9+\-\s()]+$/.test(form.phone) ? '' : 'Valid phone required'
    errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Valid email required'
    errors.company = form.company ? '' : 'Company is required'
    errors.message = form.message.length >= 10 ? '' : 'Message must be at least 10 characters'

    Object.values(errors).forEach(e => {
        if (e) valid = false
    })

    return valid
    }

    const handleSubmit = async () => {
      if (!validate()) return

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...form })
        })

        if (!response.ok) {
          throw new Error('Request failed')
        }

        const data = await response.json()
        console.log('Success:', data)

        submitted.value = true

        form.fullName = ''
        form.phone = ''
        form.email = ''
        form.company = ''
        form.message = ''
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }
</script>