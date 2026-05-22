const MaterialTypeList = [
    [`ingot`, TagPrefix.ingot],
    [`plate`, TagPrefix.plate],
    [`rod`, TagPrefix.rod],
    [`bolt`, TagPrefix.bolt],
    [`screw`, TagPrefix.screw],
    [`double_plate`, TagPrefix.plateDouble],
    [`gear`, TagPrefix.gear],
    [`small_gear`, TagPrefix.gearSmall],
    [`ring`, TagPrefix.ring],
    [`dust`, TagPrefix.dust],
    [`nugget`, TagPrefix.nugget],
    [`foil`, TagPrefix.foil]
]

// Hello you fellow code digger! Welcome to so called "Meta materials" that I made to fix my issue with shaders on items, feel free to use, but PLEASE mention puff_official as a contributor and GTFTE as an inspiration.
function GenerateMetaMaterial(IconSet, Name, Material) {
    GTCEuStartupEvents.registry(`gtceu:material`, event => {
        event.create(Material)
            .ingot()
            .iconSet(IconSet)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_FRAME,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_RING
            )
            .element(GTElements.get(`infinity`));
    });
    StartupEvents.registry(`item`, register => {
        MaterialTypeList.forEach(([MaterialType, MaterialPrefix]) => {
            register.create(`gtceu:${Name}_${MaterialType}`).texture(`gtceu:item/material_sets/${IconSet}/${MaterialType}`);
        })
    });
    GTCEuStartupEvents.materialModification(event => {
        for (const [MaterialType, MaterialPrefix] of MaterialTypeList) {
            MaterialPrefix.setIgnored(GTMaterialRegistry.getMaterial(Material));
        };
    });
    StartupEvents.postInit(event => {
        for (const [MaterialType, MaterialPrefix] of MaterialTypeList) {
            MaterialPrefix.setIgnored(GTMaterialRegistry.getMaterial(Material), `gtceu:${Name}_${MaterialType}`);
        };
    });
};

function GenerateMetaMaterialJSON(IconSet, Name, Material) {
    console.log(`Generating meta material for ${Material}`);
    GTCEuStartupEvents.registry(`gtceu:material`, event => {
        event.create(Material)
            .ingot()
            .iconSet(IconSet)
            .flags(
                GTMaterialFlags.GENERATE_PLATE,
                GTMaterialFlags.GENERATE_ROD,
                GTMaterialFlags.GENERATE_GEAR,
                GTMaterialFlags.GENERATE_FRAME,
                GTMaterialFlags.GENERATE_SMALL_GEAR,
                GTMaterialFlags.GENERATE_BOLT_SCREW,
                GTMaterialFlags.GENERATE_RING
            )
            .element(GTElements.get(`infinity`));
    });
    StartupEvents.registry(`item`, register => {
        MaterialTypeList.forEach(([MaterialType, MaterialPrefix]) => {
            console.log("gtceu:item/material_sets/" + IconSet + "/" + MaterialType)
            register.create(`gtceu:${Name}_${MaterialType}`).modelJson(JsonIO.read(`kubejs/assets/gtceu/models/item/material_sets/${IconSet}/${MaterialType}.json`));
        })
    });
    GTCEuStartupEvents.materialModification(event => {
        for (const [MaterialType, MaterialPrefix] of MaterialTypeList) {
            MaterialPrefix.setIgnored(GTMaterialRegistry.getMaterial(Material));
        };
    });
    StartupEvents.postInit(event => {
        for (const [MaterialType, MaterialPrefix] of MaterialTypeList) {
            MaterialPrefix.setIgnored(GTMaterialRegistry.getMaterial(Material), `gtceu:${Name}_${MaterialType}`);
        };
    });
};

GenerateMetaMaterialJSON(`infinity`, `infinity`, `infinity`)
GenerateMetaMaterialJSON(`eternal_matrix`, `eternal_matrix`, `eternal_matrix`)