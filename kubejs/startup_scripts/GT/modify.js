const Map = Java.loadClass("java.util.Map")

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
GTRecipeTypes.SIFTER_RECIPES.setMaxIOSize(2, 6, 1, 0)
GTRecipeTypes.SCANNER_RECIPES.setMaxIOSize(3, 1, 1, 0)
})