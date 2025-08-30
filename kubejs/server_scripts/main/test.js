ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('gtfte:cleanroom_test_recipe')
        .itemInputs('minecraft:dirt')
        .itemOutputs('minecraft:diamond')
        .duration(50)
        .EUt(GTValues.VA[GTValues.LV])
        .cleanroom(CleanroomType.getByName("ionizing"));
})