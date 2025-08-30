const Casings = [
    ["kubejs:solid_wrought_iron_casing", "wrought_iron", "andesite_alloy"],
    ["kubejs:hss_plated_nocturium_casing", "hsse", "nocturium"],
    ["kubejs:corruption_proof_casing", "titanium_noctium", "titanium_noctium"],
    ["kubejs:radiation_resistant_casing", "radiation_resistant_alloy", "tungsten_steel"],
    ["kubejs:stainless_evaporation_casing", "stainless_steel", "alchemical_bronze"],
    ["kubejs:etbf_casing", "titanium_tungsten_carbide", "polytetrafluoroethylene"]
]



ServerEvents.recipes(event => {
for (const [casing, plate, frame] of Casings) {
//Craftings
event.shaped(Item.of(casing, 2), [
    'PHP', 
    'PFP',
    'PWP'  
  ], { 
    F: `gtceu:${frame}_frame`,  
    P: `gtceu:${plate}_plate`,
    W: '#forge:tools/wrenches',
    H: '#forge:tools/hammers'
  }
).damageIngredient(['#forge:tools/wrenches', '#forge:tools/hammers'])

//Assembler
event.recipes.gtceu.assembler(`${casing}_assembler`)
      .itemInputs(`6x gtceu:${plate}_plate`, `gtceu:${frame}_frame`).circuit(6)
      .itemOutputs(`2x ${casing}`)
      .duration(50)
      .EUt(16)
}
// MARK: Voltage Casings
    event.recipes.gtceu.assembler('gtfte:luv_machine_casing')
        .itemInputs([
            "4x gtceu:double_thaumium_plate", 
            "4x gtceu:rhodium_plated_palladium_plate"])
        .circuit(8)
        .inputFluids("gtceu:machina 250")
        .itemOutputs('gtceu:luv_machine_casing')
        .duration(50)
        .EUt(GTValues.VA[GTValues.LV]);
})