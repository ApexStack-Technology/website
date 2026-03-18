<template>

    <div class="bg-white p-8 rounded-2xl">
        <div id="client-precontact-form">
            <header>
                <h2 class="mb-8 text-xl font-semibold text-foreground">
                    Fill in the form
                </h2>
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