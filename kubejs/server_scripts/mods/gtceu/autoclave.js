ServerEvents.recipes(event => {
event.recipes.gtceu.autoclave('gtfte:artificial_amethyst')
      .itemInputs(['4x gtceu:silicon_dioxide_dust']).notConsumable('gtceu:potassium_carbonate_dust')
      .inputFluids('gtceu:iron_iii_chloride 4000')
      .itemOutputs('gtceu:artificial_amethyst_gem')
      .outputFluids('gtceu:chlorine 3000')
      .duration(2400)
      .EUt(GTValues.VA[GTValues.MV]);

event.recipes.gtceu.autoclave('gtfte:artificial_amethyst_2')
      .itemInputs(['4x gtceu:silicon_dioxide_dust']).chancedInput('gtceu:artificial_amethyst_gem', 100, 0)
      .inputFluids('gtceu:iron_iii_chloride 4000')
      .itemOutputs('1x gtceu:artificial_amethyst_gem')
      .outputFluids('gtceu:chlorine 3000')
      .duration(600)
      .EUt(GTValues.VA[GTValues.MV]);
})