ServerEvents.recipes(event => {
event.recipes.gtceu.gas_turbine("gtfte:mana_fused_lpg")
        .inputFluids("gtceu:mana_fused_lpg 12")
        .duration(300)
        .perTick(true)
        .EUt(-32);
})