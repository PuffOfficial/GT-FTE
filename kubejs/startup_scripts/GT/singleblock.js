const $MaintenanceHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.MaintenanceHatchPartMachine")
const $CleaningMaintenanceHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.CleaningMaintenanceHatchPartMachine")

const $GTMachineModelProperties = Java.loadClass("com.gregtechceu.gtceu.api.machine.property.GTMachineModelProperties")

const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine");


// CUSTOM RECIPE TYPES
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('hydrokinetic_dynamo')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(0, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    event.create('magmatic_dynamo')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(0, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MIXER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    event.create('mana_garden')
        .category('singleblock')
        .setEUIO('in')
        .setMaxIOSize(2, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    event.create('electric_mana_pool')
        .category('singleblock')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_EXTRACT, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)

    event.create('threed_printing')
        .category('singleblock')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)

})
//CUSTOM MACHINES


GTCEuStartupEvents.registry('gtceu:machine', event => {
    function RegisterSimpleSingleblock(ID, RecipeType, DisplayName, HullModel, Tiers) {
        event.create(ID, 'simple')
            .tiers(Tiers)
            .definition((tier, builder) => builder
                .langValue(GTValues.VLVH[tier] + ` ${DisplayName}`)
                .recipeTypes(RecipeType)
                .workableTieredHullModel(`gtceu:block/machines/${HullModel}`)
            );
    }
    function RegisterULVSingleblock(ID, RecipeType, DisplayName, HullModel, Tiers) {
        event.create(ID, 'simple')
            .tiers(Tiers)
            .definition((tier, builder) => builder
                .langValue(`§8` + GTValues.VLVH[tier] + ` ${DisplayName}`)
                .recipeTypes(RecipeType)
                .workableTieredHullModel(`gtceu:block/machines/${HullModel}`)
            );
    }

    RegisterULVSingleblock("assembler", "assembler", "Assembler", "assembler", GTValues.ULV)
    RegisterULVSingleblock("arc_furnace", "arc_furnace", "Arc Furnace", "arc_furnace", GTValues.ULV)
    RegisterULVSingleblock("wiremill", "wiremill", "Wiremill", "wiremill", GTValues.ULV)
    RegisterULVSingleblock("extractor", "extractor", "Extractor", "extractor", GTValues.ULV)
    RegisterULVSingleblock("polarizer", "polarizer", "Polarizer", "polarizer", GTValues.ULV)
    RegisterULVSingleblock("sifter", "sifter", "Sifter", "sifter", GTValues.ULV)
    RegisterULVSingleblock("compressor", "compressor", "Compressor", "compressor", GTValues.ULV)
    RegisterULVSingleblock("macerator", "macerator", "Macerator", "macerator", GTValues.ULV)
    RegisterULVSingleblock("electrolyzer", "electrolyzer", "Electrolyzer", "electrolyzer", GTValues.ULV)
    RegisterULVSingleblock("extruder", "extruder", "Extruder", "extruder", GTValues.ULV)

    RegisterSimpleSingleblock("electric_mana_garden", "mana_garden", "Mana Garden", "mana_garden", [GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM])
    RegisterSimpleSingleblock("3d_printer", "threed_printing", "3D Printer", "3d_printer", [GTValues.LV,GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV])
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("hydrokinetic_dynamo", 'generator')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => builder
            .langValue(GTValues.VLVH[tier] + ` Hydrokinetic Dynamo`)
            .recipeTypes("hydrokinetic_dynamo")
            .workableTieredHullModel(`gtceu:block/machines/water_wheel`)
        );
    event.create("magmatic_dynamo", 'generator')
        .tiers([GTValues.LV, GTValues.MV, GTValues.HV])
        .definition((tier, builder) => builder
            .langValue(GTValues.VLVH[tier] + ` Magmatic Dynamo`)
            .recipeTypes("magmatic_dynamo")
            .workableTieredHullModel(`gtceu:block/machines/magmatic_dynamo`)
        );


    event.create("ionizing_module", "custom")
        .machine((holder, tier) => {
            return new $CleaningMaintenanceHatchPartMachine(holder, CleanroomType.getByName("ionizing"))
        })
        .tiers(GTValues.ZPM)
        .definition((tier, builder) => builder
            .langValue(`Ionizing Module`)
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.MAINTENANCE)
            .modelProperty($GTMachineModelProperties.IS_FORMED)
            .workableTieredHullModel("kubejs:block/machines/ionizing_module")
        )

    event.create("primitive_maintenance_hatch", "custom")
        .machine((holder, tier) => {
            return new $MaintenanceHatchPartMachine(holder, false)
        })
        .tiers(GTValues.ULV)
        .definition((tier, builder) => builder
            .langValue(`Primitive Maintenance Hatch`)
            .modelProperty($GTMachineModelProperties.IS_FORMED)
            .modelProperty($GTMachineModelProperties.IS_TAPED)
            .rotationState(RotationState.ALL)
            .workableTieredHullModel("kubejs:block/machines/primitive_maintenance")
        )
})  