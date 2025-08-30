ServerEvents.recipes(event => {
//ULV
event.shaped('gtceu:ulv_sifter', [
    'CEC', 
    'DAD',
    'BEB'  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable("single"),
    D: global.ULV.Piston,
    E: "exdeorum:string_mesh",
  }
);
function sifting(input, fluid, output, time, circuit, id, eu) {
event.recipes.gtceu.sifter("gtfte:"+id)
        .itemInputs(input).circuit(circuit)
        .inputFluids(fluid)
        .itemOutputs(output)
        .duration(time)
        .EUt(eu);
}

sifting("1x minecraft:gravel", "minecraft:water 1000", ["2x gtceu:crushed_iron_ore", "2x gtceu:crushed_gold_ore", "2x gtceu:crushed_copper_ore", "gtceu:crushed_lead_ore", "gtceu:crushed_tin_ore", "gtceu:crushed_sphalerite_ore"], 100, 1, "gravel_to_basic", 7)
sifting("8x minecraft:gravel", "minecraft:water 1000", ["2x gtceu:raw_redstone", "4x gtceu:raw_coal", "gtceu:crushed_diamond_ore", "gtceu:crushed_emerald_ore", "4x gtceu:sapphire_gem", "8x gtceu:sulfur_dust"], 200, 2, "gravel_to_advanced", 7)
})  