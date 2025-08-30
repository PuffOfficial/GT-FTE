ServerEvents.recipes(event => {
//ULV
event.shaped('gtceu:ulv_polarizer', [
    'CDC', 
    'BAB',
    'CDC'  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Cable("single"),
    C: global.ULV.Wire("double"),
    D: 'gtceu:copper_rod',
  }
);
//Iron Rods
    event.recipes.gtceu.polarizer('gtfte:magnetic_iron_rod')
        .itemInputs('gtceu:iron_rod')
        .itemOutputs('gtceu:magnetic_iron_rod')
        .duration(160)
        .EUt(GTValues.VA[GTValues.ULV]);
})