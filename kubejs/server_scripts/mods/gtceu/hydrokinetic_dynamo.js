ServerEvents.recipes(event => {
event.recipes.gtceu.hydrokinetic_dynamo(`gtfte:water`)//.circuit(1)
        .chancedOutput(`gtceu:tiny_ash_dust`, 100, 0)
        .inputFluids(`minecraft:water 1000`)
        .duration(10)
        .perTick(true)
        .EUt(-8);
})