ServerEvents.recipes(event => {
//ULV
event.shaped(`gtceu:ulv_polarizer`, [
    `CDC`, 
    `BAB`,
    `CDC`  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Cable(`single`),
    C: global.ULV.Wire(`double`),
    D: `gtceu:copper_rod`,
  }
);
//Iron Rods
    event.recipes.gtceu.polarizer(`gtfte:magnetic_iron_rod`)
        .itemInputs(`gtceu:iron_rod`)
        .itemOutputs(`gtceu:magnetic_iron_rod`)
        .duration(160)
        .EUt(GTValues.VA[GTValues.ULV]);
//Certus Quartz
    event.recipes.gtceu.polarizer(`gtfte:silicon_dioxide_polarizing`)
        .itemInputs(`gtceu:silicon_dioxide_dust`)
        .itemOutputs(`gtceu:certus_quartz_dust`)
        .duration(200)
        .EUt(GTValues.VA[GTValues.ULV]);
//Charged Certus Quartz
    event.recipes.gtceu.polarizer(`gtfte:charged_certus_quartz`)
        .itemInputs(`gtceu:certus_quartz_gem`)
        .itemOutputs(`gtceu:charged_certus_quartz_gem`)
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV]);
})