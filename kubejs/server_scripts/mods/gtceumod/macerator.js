ServerEvents.recipes(event => {
//ULV
event.shaped('gtceu:ulv_macerator', [
    'BCF', 
    'EED',
    'AAE'  
  ], {
    A: global.ULV.Circuit,
    B: global.ULV.Piston,
    C: global.ULV.Motor,
    D: global.ULV.Hull,
    E: global.ULV.Cable("single"),
    F: "minecraft:diamond"
  }
);
})