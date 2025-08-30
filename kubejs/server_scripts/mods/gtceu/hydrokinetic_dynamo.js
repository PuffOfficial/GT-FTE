ServerEvents.recipes(event => {

event.shaped('gtceu:ulv_hydrokinetic_dynamo', [
    'FEF', 
    'BAB',
    'DCD'  
  ], { 
    A: global.ULV.Hull,      
    B: global.ULV.Motor,
    C: global.ULV.Pump,
    D: global.ULV.Cable("single"),
    E: 'gtceu:iron_rotor',
    F: '#forge:glass',
  }
)



event.recipes.gtceu.hydrokinetic_dynamo('gtfte:water')//.circuit(1)
        .chancedOutput(`gtceu:tiny_ash_dust`, 100, 0)
        .inputFluids('minecraft:water 1000')
        .duration(10)
        .perTick(true)
        .EUt(-8);
})