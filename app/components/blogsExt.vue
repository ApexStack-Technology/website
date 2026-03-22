<template>
    <section class="py-16 px-4 bg-surface">
        <div class="max-w-5xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                <div class="max-w-xl">
                    <span class="text-primary font-label font-bold tracking-widest uppercase text-xs">
                    Knowledge Base
                    </span>
                    <h2 class="text-2xl md:text-3xl font-headline font-extrabold text-on-surface tracking-tight mt-2">
                        Latest Engineering Insights
                    </h2>
                </div>
                <button class="px-5 py-2 rounded-full border border-outline-variant text-on-surface text-xs font-headline font-bold hover:bg-surface-container-high transition-colors">
                View All
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Card -->
                <div class="group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="h-40 overflow-hidden relative">
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkfIXLDdLnIkF9zrRl7KTQ57QGUZCz3yXSygxuNoFmzdk-n0HBHKFSiJo0R3AO_qdxYwOPruC4294knt7r86S0jGnWZoobt19dhXhtHV6iQPqiSzZMFneR6JCy1UW6kqBdlKvuxr50whoc5FCLsWsoomHSw60fbEJTAWDfFyF462c_oUNMMsPfssgDVG5K1REnjgJbvZ7Dex1iV68XkuQ1ueJRj_LS1xHG5DvSh1gWTooBwr3vNya9-uVXkCoa9GlsvdztKz3EtUo" />
                        <div class="absolute top-2 left-2">
                            <span class="bg-primary px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase">
                            Strategy
                            </span>
                        </div>
                    </div>
                    <div class="p-5 flex flex-col flex-1">
                        <div class="text-xs text-on-surface-variant mb-2">March 12, 2024</div>
                        <h3 class="text-sm font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                            Scaling Revenue Cloud: 5 Pitfalls to Avoid
                        </h3>
                        <p class="text-on-surface-variant text-xs line-clamp-2 mb-4">
                            Key mistakes during CPQ transitions and how to avoid them.
                        </p>
                        <div class="mt-auto flex items-center gap-1 font-semibold text-primary text-xs">
                            Read <span class="material-symbols-outlined text-xs">arrow_forward</span>
                        </div>
                    </div>
                </div>
                <!-- Card -->
                <div class="group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="h-40 overflow-hidden relative">
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbmVzPaLY9b42Xw4oIH9EyVzvxxs0NBA10AZpCeAlkwbfBumhN2GQMSG2Lk9ZRRrWjiDszImBdeihxmh9JtlAqgkFZ7Id0ibk7ZGo06Zj4eiGyBX2vkQdjHK23ysPBqY0fJSVeqA1muSqLawrtSJqTe2npU8QoG6ZKrLXG6Uz9jgJDrykFEeCrGtA3E3FFsBtYnDG3LbbtlKgSb1aSBOl_n5SBF3f5VawYJenhKw7V00Y6WPBFxrUGMBs6oABDJyk-CCmNgT45YY" />
                        <div class="absolute top-2 left-2">
                            <span class="bg-primary px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase">
                            Engineering
                            </span>
                        </div>
                    </div>
                    <div class="p-5 flex flex-col flex-1">
                        <div class="text-xs text-on-surface-variant mb-2">March 05, 2024</div>
                        <h3 class="text-sm font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                            Guide to AgentForce Deployment
                        </h3>
                        <p class="text-on-surface-variant text-xs line-clamp-2 mb-4">
                            Security and reasoning behind autonomous AI agents.
                        </p>
                        <div class="mt-auto flex items-center gap-1 font-semibold text-primary text-xs">
                            Read <span class="material-symbols-outlined text-xs">arrow_forward</span>
                        </div>
                    </div>
                </div>
                <!-- Card -->
                <div class="group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div class="h-40 overflow-hidden relative">
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsvEVSz09JQUeKWMooqlt1_4I07Ppobz8Uw2NQ066qnPphwG2_RvskRCV2GUvGnNZMQ9CbZxMkQl0ZV-FQTsh_mpq79UoGGkjPvnY1U8fj_qcmeHHZ-rtHcJZ79AjW9QhnXdCsTCdZOqfQbtp3Ih3rxD4NLerWx-pJuO4n0xyjndaKzQYJtVlWazeGW0jGTTGmjekx5Q2yq6tkPeW3Fk75nd9Q8Wd8-8umZX_Q4HaHK59Ih3ZSTUupqhmvkFhrT4HtPk72AquO11U" />
                        <div class="absolute top-2 left-2">
                            <span class="bg-primary px-2 py-0.5 rounded-full text-[9px] font-bold text-white uppercase">
                            Success
                            </span>
                        </div>
                    </div>
                    <div class="p-5 flex flex-col flex-1">
                        <div class="text-xs text-on-surface-variant mb-2">Feb 28, 2024</div>
                        <h3 class="text-sm font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                            Unifying Customer Data
                        </h3>
                        <p class="text-on-surface-variant text-xs line-clamp-2 mb-4">
                            Consolidating data sources for real-time insights.
                        </p>
                        <div class="mt-auto flex items-center gap-1 font-semibold text-primary text-xs">
                            Read <span class="material-symbols-outlined text-xs">arrow_forward</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>