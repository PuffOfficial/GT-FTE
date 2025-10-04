ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_bath("gtfte:ancient_metal_solution")
        .itemInputs("8x gtceu:ancient_sand_dust")
        .inputFluids("gtceu:acidic_naquadria_solution 1000")
        .itemOutputs(["6x gtceu:quartz_sand_dust","3x gtceu:tiny_quartz_sand_dust"])
        .outputFluids("gtceu:ancient_metal_solution 1000")
        .duration(600)
        .EUt(GTValues.VA[GTValues.ZPM]);
    event.recipes.gtceu.electric_blast_furnace("gtfte:ancient_metal_mixture")
        .itemInputs("2x gtceu:phosphorus_dust")
        .blastFurnaceTemp(6500)
        .inputFluids("gtceu:ancient_metal_solution 500")
        .itemOutputs(["7x gtceu:phosphorus_pentoxide_dust", "3x gtceu:ancient_metal_mixture_dust", "3x gtceu:enriched_naquadah_nugget"])
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.fluid_filtering("gtfte:ancient_metal_mixture_filtering")
        .itemInputs("gtceu:ancient_metal_mixture_dust")
        .inputFluids("gtceu:ancient_metal_solution 500")
        .itemOutputs(["7x gtceu:phosphorus_pentoxide_dust", "3x gtceu:ancient_metal_mixture_dust", "3x gtceu:enriched_naquadah_nugget"])
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.electric_blast_furnace("gtfte:ancient_metal_mixture_filtering")
        .itemInputs("gtceu:ancient_metal_mixture_dust")
        .inputFluids("gtceu:ancient_metal_solution 500")
        .itemOutputs(["7x gtceu:phosphorus_pentoxide_dust", "3x gtceu:ancient_metal_mixture_dust", "3x gtceu:enriched_naquadah_nugget"])
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV]);
})