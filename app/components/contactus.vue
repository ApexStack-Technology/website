<template>

    <section class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div class="bg-white p-8">
            <div id="client-precontact-form">
                <header class="mb-10">
                    <div class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-brand-salesforce" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                    </div>
                    <h2 class="block font-extrabold text-2xl md:text-3xl lg:text-4xl">
                        For Clients 
                    </h2>
                    <div class="mt-2 max-w-md text-gray-600">
                        <p>Ready to transform your business? Start your Salesforce journey with our expert implementation team.</p>
                    </div>
                </header>
                <div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="w-full">
                            <label for="client-name-input" class="block mb-1.5 text-sm font-medium text-foreground">Name</label>
                            <input id="client-name-input" class="py-2.5 sm:py-3 px-4 rounded-lg block w-full border border-gray-300 sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" name="client-name" type="text" placeholder="John Doe">
                            <p class="text-xs text-red-500 mt-1 hidden" id="client-name-error">Please enter a valid name.</p>
                        </div>
                        <div class="w-full">
                            <label for="client-phone-input" class="block mb-1.5 text-sm font-medium text-foreground">Phone</label>
                            <input id="client-phone-input" class="py-2.5 sm:py-3 px-4 rounded-lg block w-full border border-gray-300 sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" name="client-phone" type="tel" placeholder="+1(555)1234567">
                            <p class="text-xs text-red-500 mt-1 hidden" id="client-phone-error">Enter a valid phone number</p>
                        </div>
                    </div>
                    <div class="w-full mt-3">
                        <label for="client-email-input" class="block mb-1.5 text-sm font-medium text-foreground">Email</label>
                        <input id="client-email-input" class="py-2.5 sm:py-3 px-4 rounded-lg block w-full border border-gray-300 sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" name="client-email" type="email" placeholder="john@example.com">
                        <p class="text-xs text-red-500 mt-1 hidden" id="client-email-error">Enter a valid email address</p>
                    </div>
                    <div class="w-full mt-3">
                        <label for="client-company-input" class="block mb-1.5 text-sm font-medium text-foreground">Company</label>
                        <input id="client-company-input" class="py-2.5 sm:py-3 px-4 rounded-lg block w-full border border-gray-300 sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none" name="client-company" type="text" placeholder="Acme Inc">
                        <p class="text-xs text-red-500 mt-1 hidden" id="client-company-error">Enter a valid company name</p>
                    </div>
                    <div class="w-full mt-3">
                        <label for="client-project-input" class="block mb-1.5 text-sm font-medium text-foreground">Project Details</label>
                        <textarea id="client-project-input" class="py-2 px-3 sm:py-3 sm:px-4 block w-full bg-layer border border-gray-300 rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb" rows="3" name="client-project" placeholder="Tell us about your Salesforce goals"></textarea>
                        <p class="text-xs text-red-500 mt-1 hidden" id="client-project-error">Please enter project details.</p>
                    </div>
                </div>
                <button id="client-submit-btn" type="button" class="mt-3 w-full cursor-pointer inline-flex text-xs items-center justify-center text-white bg-blue-700 hover:bg-blue-800 border border-transparent focus:ring-2 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">
                    <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5V1.25V2H10.5V1.25V0.5H12V1.25V2H14H15.5V3.5V13.5C15.5 14.8807 14.3807 16 13 16H3C1.61929 16 0.5 14.8807 0.5 13.5V3.5V2H2H4V1.25V0.5H5.5ZM2 3.5H14V6H2V3.5ZM2 7.5V13.5C2 14.0523 2.44772 14.5 3 14.5H13C13.5523 14.5 14 14.0523 14 13.5V7.5H2Z" fill="currentColor" opacity="0.9"/>
                    </svg>
                    <span>Schedule a Consultation</span>
                </button>
                <p id="client-submit-error" class="text-xs text-red-500 mt-2 hidden">Something went wrong. Please try again.</p>
            </div>
            <div id="client-postcontact-form" class="hidden">
                <div class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-brand-salesforce" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                </div>
                <h2 class="block font-extrabold text-2xl md:text-3xl lg:text-4xl">
                    Thank you for <br>reaching out!
                </h2>
                <div class="mt-2 max-w-md text-gray-600">
                    <p>Our team will be in touch shortly to discuss your Salesforce implementation needs. We're excited to help you scale your operations.</p>
                </div>
            </div>
        </div>
        <div class="p-8">
            <header class="mb-10">
                <div class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>
                </div>
                <h2 class="block font-extrabold text-2xl md:text-3xl lg:text-4xl">
                    For Talent 
                </h2>
                <div class="mt-2 max-w-md text-gray-600">
                    <p>We're looking for passionate Salesforce architects and consultants to join our growing global team.</p>
                </div>
            </header>
            <div id="talent-culture">
                <div class="space-y-8 mb-12">
                    <div class="flex items-start">
                        <div class="flex-shrink-0 mt-2">
                            <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
                        </div>
                        <div class="ml-4">
                            <h3 class="font-bold text-slate-900">Remote-first culture</h3>
                            <p class="text-slate-500 text-sm">Work from anywhere in the world with a setup that supports your lifestyle.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 mt-2">
                            <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                        <div class="ml-4">
                            <h3 class="font-bold text-slate-900">Growth mindset</h3>
                            <p class="text-slate-500 text-sm">Continuous certification support and dedicated time for professional development.</p>
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="flex-shrink-0 mt-2">
                            <div class="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div class="ml-4">
                            <h3 class="font-bold text-slate-900">Premium compensation</h3>
                            <p class="text-slate-500 text-sm">Competitive salaries, comprehensive health benefits, and performance bonuses.</p>
                        </div>
                    </div>
                    <button id="talent-apply-btn" type="button" class="mt-3 w-full cursor-pointer inline-flex text-xs items-center justify-center text-white bg-blue-700 hover:bg-blue-800 border border-transparent focus:ring-2 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-md text-sm px-3 py-2 focus:outline-none">
                        <svg class="w-3.5 h-3.5 me-1.5 -ms-0.5" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.875C1.5 3.01104 3.01104 1.5 4.875 1.5C6.20018 1.5 7.34838 2.26364 7.901 3.37829C8.1902 3.96162 8.79547 4.5 9.60112 4.5H12.25C13.4926 4.5 14.5 5.50736 14.5 6.75C14.5 7.42688 14.202 8.03329 13.7276 8.44689L13.1622 8.93972L14.1479 10.0704L14.7133 9.57758C15.5006 8.89123 16 7.8785 16 6.75C16 4.67893 14.3211 3 12.25 3H9.60112C9.51183 3 9.35322 2.93049 9.2449 2.71201C8.44888 1.1064 6.79184 0 4.875 0C2.18261 0 0 2.18261 0 4.875V6.40385C0 7.69502 0.598275 8.84699 1.52982 9.59656L2.11415 10.0667L3.0545 8.89808L2.47018 8.42791C1.87727 7.95083 1.5 7.22166 1.5 6.40385V4.875ZM7.29289 7.39645C7.68342 7.00592 8.31658 7.00592 8.70711 7.39645L11.7803 10.4697L12.3107 11L11.25 12.0607L10.7197 11.5303L8.75 9.56066V15.25V16H7.25V15.25V9.56066L5.28033 11.5303L4.75 12.0607L3.68934 11L4.21967 10.4697L7.29289 7.39645Z" fill="currentColor"></path></svg>
                        <span>Apply</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        mounted() {
            const validInputClass = "py-2.5 sm:py-3 px-4 rounded-lg block w-full border border-gray-300 sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none";
            const invalidInputClass = "py-2.5 sm:py-3 px-4 rounded-lg block w-full border border-red-500 sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none";

            const clientNameInput = document.getElementById("client-name-input");
            const clientNameError = document.getElementById("client-name-error");
            const clientPhoneInput = document.getElementById("client-phone-input");
            const clientPhoneError = document.getElementById("client-phone-error");
            const clientEmailInput = document.getElementById("client-email-input");
            const clientEmailError = document.getElementById("client-email-error");
            const clientCompanyInput = document.getElementById("client-company-input");
            const clientCompanyError = document.getElementById("client-company-error");
            const clientProjectInput = document.getElementById("client-project-input");
            const clientProjectError = document.getElementById("client-project-error");
            const clientSubmitBtn = document.getElementById("client-submit-btn");
            const clientPreForm = document.getElementById("client-precontact-form");
            const clientPostForm = document.getElementById("client-postcontact-form");
            const clientSubmitError = document.getElementById("client-submit-error");

            if (!clientNameInput || !clientNameError || !clientPhoneInput || !clientPhoneError || !clientEmailInput || !clientEmailError || !clientCompanyInput || !clientCompanyError || !clientProjectInput || !clientProjectError || !clientSubmitBtn || !clientPreForm || !clientPostForm || !clientSubmitError) return;

            clientNameInput.classList = validInputClass;
            clientNameError.classList.add("hidden");

            clientNameInput.addEventListener("input", () => {
                if (clientNameInput.value.trim().length < 3) {
                    clientNameInput.className = invalidInputClass;
                    clientNameError.classList.remove("hidden");
                } else {
                    clientNameInput.classList = validInputClass;
                    clientNameError.classList.add("hidden");
                }
            });

            const phoneRegex = /^\+[1-9]\d{6,14}$/;

            clientPhoneInput.classList = validInputClass;
            clientPhoneError.classList.add("hidden");

            clientPhoneInput.addEventListener("input", () => {
                const value = clientPhoneInput.value.trim();

                if (!phoneRegex.test(value)) {
                    clientPhoneInput.className = invalidInputClass;
                    clientPhoneError.classList.remove("hidden");
                } else {
                    clientPhoneInput.className = validInputClass;
                    clientPhoneError.classList.add("hidden");
                }
            });

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            clientEmailInput.classList = validInputClass;
            clientEmailError.classList.add("hidden");

            clientEmailInput.addEventListener("input", () => {
                const value = clientEmailInput.value.trim();

                if (!emailRegex.test(value)) {
                    clientEmailInput.className = invalidInputClass;
                    clientEmailError.classList.remove("hidden");
                } else {
                    clientEmailInput.className = validInputClass;
                    clientEmailError.classList.add("hidden");
                }
            });

            clientCompanyInput.classList = validInputClass;
            clientCompanyError.classList.add("hidden");

            clientCompanyInput.addEventListener("input", () => {
                const value = clientCompanyInput.value.trim();

                if (value.length < 2) {
                    clientCompanyInput.className = invalidInputClass;
                    clientCompanyError.classList.remove("hidden");
                } else {
                    clientCompanyInput.className = validInputClass;
                    clientCompanyError.classList.add("hidden");
                }
            });

            clientProjectInput.classList = validInputClass;
            clientProjectError.classList.add("hidden");

            clientProjectInput.addEventListener("input", () => {
                const value = clientProjectInput.value.trim();

                if (value.length < 10) {
                    clientProjectInput.className = invalidInputClass;
                    clientProjectError.classList.remove("hidden");
                } else {
                    clientProjectInput.className = validInputClass;
                    clientProjectError.classList.add("hidden");
                }
            });
            clientSubmitBtn.addEventListener("click", () => {
                const nameValid = clientNameInput.value.trim().length >= 3;
                const phoneValid = phoneRegex.test(clientPhoneInput.value.trim());
                const emailValid = emailRegex.test(clientEmailInput.value.trim());
                const companyValid = clientCompanyInput.value.trim().length >= 2;
                const projectValid = clientProjectInput.value.trim().length >= 10;

                if (!nameValid) {
                    clientNameInput.className = invalidInputClass;
                    clientNameError.classList.remove("hidden");
                }

                if (!phoneValid) {
                    clientPhoneInput.className = invalidInputClass;
                    clientPhoneError.classList.remove("hidden");
                }

                if (!emailValid) {
                    clientEmailInput.className = invalidInputClass;
                    clientEmailError.classList.remove("hidden");
                }

                if (!companyValid) {
                    clientCompanyInput.className = invalidInputClass;
                    clientCompanyError.classList.remove("hidden");
                }

                if (!projectValid) {
                    clientProjectInput.className = invalidInputClass;
                    clientProjectError.classList.remove("hidden");
                }

                if (nameValid && phoneValid && emailValid && companyValid && projectValid) {
                    fetch("/api/clientcontact", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: clientNameInput.value.trim(),
                            phone: clientPhoneInput.value.trim(),
                            email: clientEmailInput.value.trim(),
                            company: clientCompanyInput.value.trim(),
                            project: clientProjectInput.value.trim()
                        })
                    })
                    .then((res) => {
                        if (!res.ok) throw new Error("Request failed");

                        clientNameInput.value = "";
                        clientPhoneInput.value = "";
                        clientEmailInput.value = "";
                        clientCompanyInput.value = "";
                        clientProjectInput.value = "";

                        clientPreForm.classList.add("hidden");
                        clientPostForm.classList.remove("hidden");
                    })
                    .catch(() => {
                        clientSubmitError.classList.remove("hidden");
                    });
                }
            });
        }
    }
</script>