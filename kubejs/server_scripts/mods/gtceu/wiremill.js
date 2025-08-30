ServerEvents.recipes(event => {
//ULV
event.shaped('gtceu:ulv_wiremill', [
    'DCD', 
    'BAB',
    'DCD'  
  ], {
    A: global.ULV.Hull,
    B: global.ULV.Circuit,
    C: global.ULV.Cable("single"),
    D: global.ULV.Motor,
  }
);
})