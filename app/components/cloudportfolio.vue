<template>

    <div class="relative overflow-hidden max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="mt-5 text-center mx-auto">
            <div class="text-center">
                <span class="inline-block px-3 py-1 rounded-full bg-blue-50 text-[9px] font-bold text-[#0052FF] uppercase tracking-widest mb-2">Cloud Portfolio</span>
                <h2 class="block font-extrabold text-2xl md:text-3xl lg:text-4xl">
                    Explore Salesforce in a Whole New Way 
                </h2>
            </div>
            <div class="mt-2 max-w-md text-center mx-auto text-gray-600">
                <p>See how different Salesforce platforms support sales, service, marketing, and data across your operations.</p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 sm:px-3 lg:px-4 pt-12 pb-5">

            <div class="product-grid-card group bg-[#E8F5E9]/40 rounded-[2.5rem] border border-[#4CAF50]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#4CAF50] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#4CAF50]/20">
                        <span class="material-symbols-outlined text-xl">account_tree</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">Revenue Cloud Advanced</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Manage the full revenue lifecycle with advanced pricing, quoting, and subscription workflows.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#4CAF50]/10 p-4 mini-ui-shadow">
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between items-center">
                                <span class="text-[8px] font-bold text-[#4CAF50]/40">LIFECYCLE</span>
                                <span class="px-1.5 py-0.5 rounded-full bg-[#4CAF50] text-white text-[7px] font-bold uppercase">Active</span>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="w-full h-1 bg-[#4CAF50] rounded-full"></div>
                                <div class="w-1/2 h-1 bg-[#4CAF50]/10 rounded-full"></div>
                            </div>
                            <p class="text-[9px] font-bold text-black/80">Renewal Ready</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-grid-card group bg-[#E0F2F1]/40 rounded-[2.5rem] border border-[#009688]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#009688] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#009688]/20">
                        <span class="material-symbols-outlined text-xl">payments</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">Revenue Cloud Billing</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Automate invoicing and subscription billing tied directly to Salesforce revenue data.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#009688]/10 p-4 mini-ui-shadow">
                        <table class="w-full">
                            <tbody>
                                <tr class="border-b border-[#009688]/10">
                                    <td class="py-1 text-[8px] font-bold text-[#009688]/40">INV#</td>
                                    <td class="py-1 text-[8px] font-bold text-[#009688]/40 text-right">AMOUNT</td>
                                </tr>
                                <tr>
                                    <td class="py-1 text-[9px] font-bold text-black/80">#8821</td>
                                    <td class="py-1 text-[9px] font-bold text-black/80 text-right">$1,250</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-2 h-5 w-full bg-[#009688] rounded-lg text-[8px] text-white flex items-center justify-center font-bold">Process Invoice</div>
                    </div>
                </div>
            </div>

            <div class="product-grid-card group bg-[#F1F8E9]/40 rounded-[2.5rem] border border-[#8BC34A]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#8BC34A] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#8BC34A]/20">
                        <span class="material-symbols-outlined text-xl">receipt_long</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">Revenue CPQ</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Configure complex products, generate accurate quotes, and automate pricing approvals.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#8BC34A]/10 p-4 mini-ui-shadow">
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-[8px] font-bold text-[#8BC34A]/50 mb-0.5 uppercase tracking-tighter">Quote Total</p>
                                <p class="text-sm font-black text-black/80">$12,450</p>
                            </div>
                            <div class="text-[7px] font-bold text-white bg-[#8BC34A] px-2 py-0.5 rounded-full shadow-sm">APPROVED</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-grid-card group bg-[#FFF3E0]/40 rounded-[2.5rem] border border-[#FF9800]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#FF9800] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#FF9800]/20">
                        <span class="material-symbols-outlined text-xl">description</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">CLM</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Create, manage, and track contracts from negotiation through approval and renewal.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#FF9800]/10 p-4 mini-ui-shadow">
                        <div class="flex gap-3">
                            <div class="w-8 h-10 bg-white border border-[#FF9800]/10 rounded-md p-1.5 flex flex-col gap-1">
                                <div class="h-0.5 w-4 bg-[#FF9800]/40 rounded-full"></div>
                                <div class="h-0.5 w-5 bg-[#FF9800]/20 rounded-full"></div>
                                <div class="h-0.5 w-3 bg-[#FF9800]/20 rounded-full"></div>
                            </div>
                            <div class="flex-1 space-y-2 mt-1">
                                <div class="h-1.5 w-full bg-[#FF9800]/10 rounded-full overflow-hidden">
                                    <div class="h-full bg-[#FF9800] w-2/3"></div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-[7px] font-bold text-[#FF9800]">Reviewing...</span>
                                    <span class="material-symbols-outlined text-[10px] text-black/20">history</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-grid-card group bg-[#E1F5FE]/40 rounded-[2.5rem] border border-[#03A9F4]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#03A9F4] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#03A9F4]/20">
                        <span class="material-symbols-outlined text-xl">database</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">Data Cloud</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Unify customer data from multiple systems into real-time profiles for activation.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#03A9F4]/10 p-4 mini-ui-shadow text-center">
                        <div class="flex justify-center -space-x-2 mb-3">
                            <div class="w-7 h-7 rounded-full bg-[#03A9F4] border-2 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">A</div>
                            <div class="w-7 h-7 rounded-full bg-[#0288D1] border-2 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">B</div>
                            <div class="w-7 h-7 rounded-full bg-[#01579B] border-2 border-white shadow-sm flex items-center justify-center text-[10px] text-white font-bold">C</div>
                        </div>
                        <p class="text-[8px] font-bold text-[#03A9F4] tracking-widest uppercase">Profile Unified</p>
                    </div>
                </div>
            </div>

            <div class="product-grid-card group bg-[#F3E5F5]/40 rounded-[2.5rem] border border-[#9C27B0]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#9C27B0] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#9C27B0]/20">
                        <span class="material-symbols-outlined text-xl">auto_awesome</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">AgentForce</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Deploy AI agents that automate tasks and deliver intelligent responses across workflows.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#9C27B0]/10 p-4 mini-ui-shadow">
                        <div class="space-y-2">
                            <div class="flex justify-end">
                                <div class="bg-white px-2 py-1 rounded-lg border border-[#9C27B0]/10 text-[8px] text-black/60">Summarize lead?</div>
                            </div>
                            <div class="flex items-start gap-1.5">
                                <div class="w-4 h-4 rounded-full bg-[#9C27B0] flex items-center justify-center shadow-sm"><span class="material-symbols-outlined text-[10px] text-white">psychology</span></div>
                                <div class="bg-[#F3E5F5] p-2 rounded-lg text-[8px] text-[#9C27B0] flex-1 font-semibold leading-tight">Lead is high intent with Q4 budget...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!--
            <div class="product-grid-card group bg-[#E3F2FD]/40 rounded-[2.5rem] border border-[#00A1E0]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#00A1E0] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#00A1E0]/20">
                        <span class="material-symbols-outlined text-xl">trending_up</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">Sales Cloud</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Manage leads, opportunities, pipelines, and forecasting to run and scale your sales operations.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#00A1E0]/10 p-4 mini-ui-shadow">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between border-b border-[#00A1E0]/10 pb-2">
                                <span class="text-[9px] font-bold text-[#00A1E0]/40 uppercase tracking-widest">Pipeline</span>
                                <span class="text-[9px] font-bold text-[#00A1E0]">$4.2M</span>
                            </div>
                            <div class="flex gap-1 items-end h-8">
                                <div class="flex-1 bg-[#00A1E0]/20 h-1/2 rounded-t-sm"></div>
                                <div class="flex-1 bg-[#00A1E0]/30 h-2/3 rounded-t-sm"></div>
                                <div class="flex-1 bg-[#00A1E0]/40 h-full rounded-t-sm"></div>
                                <div class="flex-1 bg-[#00A1E0] h-4/5 rounded-t-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-grid-card group bg-[#E0F7FA]/40 rounded-[2.5rem] border border-[#00BCD4]/5 overflow-hidden flex flex-col h-full min-h-[440px]" style="min-height: auto;">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#00BCD4] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#00BCD4]/20">
                        <span class="material-symbols-outlined text-xl">support_agent</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">Service Cloud</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-3">Customer support, case management, contact center operations, and service workflows.</p>
                </div>
                <div class="px-8 pb-8 pt-2">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#00BCD4]/10 p-4 mini-ui-shadow">
                        <div class="space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="text-[8px] font-bold text-[#00BCD4]/50 uppercase">Case #4412</span>
                                <span class="px-1.5 py-0.5 rounded-full bg-[#00BCD4] text-white text-[7px] font-bold uppercase">In Progress</span>
                            </div>
                            <div class="h-1.5 w-full bg-[#00BCD4]/10 rounded-full overflow-hidden">
                                <div class="h-full bg-[#00BCD4] w-3/4"></div>
                            </div>
                            <div class="flex items-center gap-2">
                                <div class="w-4 h-4 rounded-full bg-gray-200"></div>
                                <div class="h-1 w-12 bg-black/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="product-grid-card group bg-[#E8EAF6]/40 rounded-[2.5rem] border border-[#3F51B5]/5 overflow-hidden flex flex-col h-full">
                <div class="p-8 pb-0">
                    <div class="w-11 h-11 rounded-2xl bg-[#3F51B5] flex items-center justify-center text-white mb-6 shadow-lg shadow-[#3F51B5]/20">
                        <span class="material-symbols-outlined text-xl">groups</span>
                    </div>
                    <h4 class="text-lg font-bold mb-2">Experience Cloud</h4>
                    <p class="text-[13px] text-black/60 leading-relaxed font-medium mb-6">Build customer and partner portals that provide secure access to data, support, and collaboration tools.</p>
                </div>
                <div class="mt-auto px-8 pb-8">
                    <div class="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#3F51B5]/10 p-4 mini-ui-shadow">
                        <div class="flex items-center gap-2 mb-3">
                            <div class="w-6 h-6 rounded-full bg-[#3F51B5]/10 flex items-center justify-center"><span class="material-symbols-outlined text-[10px] text-[#3F51B5]">person</span></div>
                            <div class="h-1.5 w-16 bg-[#3F51B5]/10 rounded-full"></div>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="h-6 bg-white/40 rounded border border-[#3F51B5]/5 flex items-center px-2">
                                <div class="h-1 w-full bg-[#3F51B5]/10 rounded-full"></div>
                            </div>
                            <div class="h-6 bg-white/40 rounded border border-[#3F51B5]/5 flex items-center px-2">
                                <div class="h-1 w-full bg-[#3F51B5]/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
-->
        </div>
    </div>

</template>