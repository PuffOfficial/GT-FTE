ServerEvents.recipes(event => {
event.recipes.gtceu.fermenter("gtfte:glycerol").circuit(1)
        .inputFluids("gtceu:biomass 360")
        .outputFluids("gtceu:glycerol 100")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV]);
})