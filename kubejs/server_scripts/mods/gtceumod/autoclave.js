ServerEvents.recipes(event => {
event.recipes.gtceu.autoclave('gtfte:artificial_amethyst')
      .itemInputs(['4x gtceu:silicon_dioxide_dust', '2x gtceu:potassium_carbonate_dust'])
      .inputFluids('gtceu:iron_iii_chloride 200')
      .itemOutputs('gtceu:artificial_amethyst_gem')
      .outputFluids('gtceu:chlorine 150')
      .duration(2400)
      .EUt(256);
})