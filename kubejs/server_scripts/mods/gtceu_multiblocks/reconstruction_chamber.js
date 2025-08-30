let tiers = ['MV', 'HV','EV','IV','LuV',"ZPM","UV"]
ServerEvents.recipes(event => {
tiers.forEach(tier => {
event.shaped(`gtceu:${tier.toLowerCase()}_reconstruction_chamber`, [
    'AFA', 
    'BCB',
    'DED'  
  ], {
    A: 'gtceu:tempered_glass',   
    B: eval(`global.${tier}.Coil`),
    C: eval(`global.${tier}.Hull`),
    D: eval(`global.${tier}.Cable("single")`),
    E: eval(`global.${tier}.Circuit`),
    F: eval(`global.${tier}.RobotArm`),
  }
)})
event.recipes.gtceu.reconstructing('gtfte:certus_quartz')
        .itemInputs('minecraft:quartz')
        .itemOutputs('gtceu:certus_quartz_gem')
        .duration(100)
        .EUt(120);
event.recipes.gtceu.reconstructing('gtfte:netherrack')
        .itemInputs('minecraft:cobblestone').circuit(1)
        .itemOutputs('minecraft:netherrack')
        .duration(20)
        .EUt(128);
event.recipes.gtceu.reconstructing('gtfte:endstone')
        .itemInputs('minecraft:cobblestone').circuit(2)
        .itemOutputs('minecraft:end_stone')
        .duration(20)
        .EUt(512);

event.recipes.gtceu.reconstructing('gtfte:nether_air')
        .inputFluids('gtceu:air').circuit(1)
        .outputFluids('gtceu:nether_air')
        .duration(20)
        .EUt(128);
event.recipes.gtceu.reconstructing('gtfte:ender_air')
        .inputFluids('gtceu:air').circuit(2)
        .outputFluids('gtceu:ender_air')
        .duration(20)
        .EUt(512);
for (const [name, tint] of global.Universal){
event.recipes.gtceu.reconstructing(`gtfte:universal_${name}_circuit`)
        .itemInputs(`#gtceu:circuits/${name}`)
        .itemOutputs(`kubejs:universal_${name}_circuit`)
        .duration(100)
        .EUt(32);
}
})