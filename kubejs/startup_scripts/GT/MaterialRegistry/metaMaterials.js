const MaterialTypeList = [
    [`ingot`, TagPrefix.ingot, `tagprefix.ingot`],
    [`plate`, TagPrefix.plate, `tagprefix.plate`],
    [`rod`, TagPrefix.rod, `tagprefix.rod`],
    [`bolt`, TagPrefix.bolt, `tagprefix.bolt`],
    [`screw`, TagPrefix.screw, `tagprefix.screw`],
    [`double_plate`, TagPrefix.plateDouble, `tagprefix.double_plate`],
    [`gear`, TagPrefix.gear, `tagprefix.gear`],
    [`small_gear`, TagPrefix.gearSmall, `tagprefix.small_gear`],
    [`ring`, TagPrefix.ring, `tagprefix.ring`],
    [`dust`, TagPrefix.dust, `tagprefix.dust`],
    [`nugget`, TagPrefix.nugget, `tagprefix.nugget`],
    [`foil`, TagPrefix.foil, `tagprefix.foil`]
]


function FormatMaterialItemName(Prefix,Material) {
    let p = Component.translatable(Prefix).getString().replace(`%s`, Component.translatable(Material).getString())
    console.log(`Converted ${Prefix} to ${p}, ${Material}`)
    return p
};
// Hello you fellow code digger! Welcome to so called "Meta materials" that I made to fix my issue with shaders on items, feel free to use, but PLEASE mention puff_official as a contributor and GTFTE as an inspiration.
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
        MaterialTypeList.forEach(([MaterialType, MaterialPrefix, PrefixTranslation]) => {
            console.log("gtceu:item/material_sets/" + IconSet + "/" + MaterialType)
            register.create(`gtceu:${Material}_${MaterialType}`)
                .modelJson(JsonIO.read(`kubejs/assets/gtceu/models/item/material_sets/${IconSet}/${MaterialType}.json`))
                .translationKey(`material.gtceu.infinity`)
        })
    });
    GTCEuStartupEvents.materialModification(event => {
        for (const [MaterialType, MaterialPrefix, PrefixTranslation] of MaterialTypeList) {
            MaterialPrefix.setIgnored(GTMaterialRegistry.getMaterial(Material));
        };
    });
    StartupEvents.postInit(event => {
        for (const [MaterialType, MaterialPrefix, PrefixTranslation] of MaterialTypeList) {
            MaterialPrefix.setIgnored(GTMaterialRegistry.getMaterial(Material), `gtceu:${Material}_${MaterialType}`);
        };
    });
};
GenerateMetaMaterialJSON(`infinity`, `material.gtceu.infinity`, `infinity`)
//GenerateMetaMaterialJSON(`eternal_matrix`, `material.gtceu.eternal_matrix`, `eternal_matrix`)