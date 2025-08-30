ServerEvents.recipes(event => {
    // starts the altar recipe builder with an Iron Ingot as Catalyst
    event.recipes.summoningrituals.altar("gtceu:iron_rod")
    .input('16x gtceu:gold_plate')
    .input('8x gtceu:gold_rod')
    .input('16x minecraft:redstone')
    .input('3x minecraft:diamond')
    .sacrifice('cow')
    .sacrificeRegion(5, 2)
    .recipeTime(1200)
    .mobOutput('minecraft:blaze')
});