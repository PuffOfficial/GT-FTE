// Priority: 999
const $SteamMulti = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine');
const $CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine");
const $WorkableMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.WorkableMultiblockMachine");


const $ICoilType = Java.loadClass("com.gregtechceu.gtceu.api.block.ICoilType");
const $LocalizationUtils = Java.loadClass("com.lowdragmc.lowdraglib.utils.LocalizationUtils");
const $I18n = Java.loadClass("net.minecraft.client.resources.language.I18n");

const $RecipeModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifier");
const $GTRecipe = Java.loadClass("com.gregtechceu.gtceu.api.recipe.GTRecipe");
const $MetaMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.MetaMachine");
const $RecipeHelper = Java.loadClass("com.gregtechceu.gtceu.api.recipe.RecipeHelper");
const $IMultiController = Java.loadClass("com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController")

const $ParallelLogic = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.ParallelLogic");
const $ContentModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.content.ContentModifier");

const $FormattingUtil = Java.loadClass("com.gregtechceu.gtceu.utils.FormattingUtil");
const $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting");
const $Style = Java.loadClass("net.minecraft.network.chat.Style");

const $GTMemoizer = Java.loadClass("com.gregtechceu.gtceu.utils.memoization.GTMemoizer");

//Alchemy Temperature Logic
function AlchemyOverclock(machine, recipe) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL


    if (!(machine instanceof $CoilWorkableElectricMultiblockMachine )) {
        return $RecipeModifier.nullWrongType($CoilWorkableElectricMultiblockMachine, machine);
    } else {
        const coilMachine = machine;

        let AlchemyCrucibleTemp = coilMachine.getCoilType().getCoilTemperature()+(75*Math.max(0, coilMachine.getTier() - GTValues.MV))
        
        if (!recipe || !recipe.data) {console.log("Looks like data is NULL!"); return ModifierFunction.NULL;}
        let minRecipeTemp = recipe.data.getInt("min_temp")
        let maxRecipeTemp = recipe.data.getInt("max_temp")

            if (!(minRecipeTemp < AlchemyCrucibleTemp) || !(maxRecipeTemp > AlchemyCrucibleTemp)) {
                return ModifierFunction.NULL
            }

            if ($RecipeHelper.getRecipeEUtTier(recipe) > coilMachine.getTier()) {
                return ModifierFunction.NULL
            }
    }
    return ModifierFunction.IDENTITY
}
//Comb Centrifuge Logic

//ULV Parallel Logic, but has issue with the programmed circuit recipes <= NEEDS TO BE FIXED (Feel free to you use it)
function ULVParallel(machine, recipe, parallelAmount) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    if (machine instanceof $IMultiController && machine.isFormed()){

    let eut = recipe.getInputEUt().getTotalEU();
    let parallels = $ParallelLogic.getParallelAmount(machine,recipe,parallelAmount)
    let eutMultiplier = (eut * 0.8888 * parallelAmount <= 32) ? (0.8888 * parallelAmount) : (32.0 / eut)

    console.log(`Running ${recipe.getId()} with ${parallels}/${parallelAmount} parallels, at ${eutMultiplier}x EU multiplier`)

    return ModifierFunction.builder()
        .modifyAllContents($ContentModifier.multiplier(parallels))
        .durationMultiplier(1.5)
//        .eutMultiplier(eutMultiplier)
        .parallels(parallels)
        .build();
    }
    return ModifierFunction.IDENTITY
}
//Default, but has issue with the programmed circuit recipes <= NEEDS TO BE FIXED (Feel free to you use it)
function DefaultParallel(machine, recipe, parallelAmount) {
    if (!(machine instanceof $MetaMachine)) return ModifierFunction.NULL
    if (!(recipe instanceof $GTRecipe)) return ModifierFunction.NULL

    if (machine instanceof $IMultiController && machine.isFormed()){

    let parallels = $ParallelLogic.getParallelAmount(machine,recipe,parallelAmount)

    console.log(`Running ${recipe.getId()} with ${parallels}/${parallelAmount} parallels`)

    return ModifierFunction.builder()
        .modifyAllContents($ContentModifier.multiplier(parallels))
        .parallels(parallels)
        .build();
    }
    return ModifierFunction.IDENTITY
}
//Custom Cleanrooms types
const $CleanroomType = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CleanroomType")
const ionizingCleanroom = new $CleanroomType("ionizing", "gtfte.ionizing_cleanroom")
//Custom partAbilities
const $PartAbility = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.PartAbility");
const PRIMITIVE_MAINTENANCE = new $PartAbility("primitive_maintenance")

