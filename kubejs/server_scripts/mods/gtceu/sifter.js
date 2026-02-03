ServerEvents.recipes(event => {
  //ULV
  event.shaped(`gtceu:ulv_sifter`, [
    `CEC`,
    `DAD`,
    `BEB`
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable(`single`),
    D: global.ULV.Piston,
    E: `exdeorum:string_mesh`,
  }
  );
  function sifting(input, fluid, output, time, circuit, id, eu) {
    event.recipes.gtceu.sifter(`gtfte:` + id)
      .itemInputs(input).circuit(circuit)
      .inputFluids(fluid)
      .itemOutputs(output)
      .duration(time)
      .EUt(eu);
  }

  sifting(`2x minecraft:sand`, `minecraft:water 1000`, [`4x gtceu:impure_cassiterite_sand_dust`, `8x gtceu:impure_redstone_dust`, `2x gtceu:impure_sphalerite_dust`, `4x gtceu:impure_sulfur_dust`, `gtceu:crushed_emerald_ore`, `gtceu:raw_diamond`], 200, 1, `gravel_sifting`, GTValues.VA[GTValues.ULV])
  sifting(`2x minecraft:gravel`, `minecraft:water 1000`, [`2x gtceu:crushed_copper_ore`, `2x gtceu:crushed_iron_ore`, `2x gtceu:crushed_gold_ore`, `2x gtceu:crushed_lead_ore`, `4x gtceu:raw_coal`, `gtceu:raw_sapphire`], 200, 1, `sand_sifting`, GTValues.VA[GTValues.ULV])

  event.recipes.gtceu.sifter(`gtfte:gravel_sifting_fixed`)
    .itemInputs(`minecraft:gravel`).circuit(2)
    .itemOutputs([`minecraft:flint`])
    .chancedOutput(`minecraft:flint`, 9000, 0)
    .chancedOutput(`minecraft:flint`, 8000, 0)
    .chancedOutput(`minecraft:flint`, 6000, 0)
    .chancedOutput(`minecraft:flint`, 3333, 0)
    .chancedOutput(`minecraft:flint`, 2500, 0)
    .duration(100)
    .EUt(GTValues.VH[GTValues.LV]);
})  