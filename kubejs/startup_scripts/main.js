Platform.mods.kubejs.name = `GT: Flatter Than Ever`
Platform.mods.cobblefordays.name = `GregTech`
const Boules = [
    [`nether_imbued`, `Nether-Imbued`], [`mana_doped`, `Mana-Doped`]
]
const Datas = [
    [`zombie`, `minecraft:item/rotten_flesh`],
    [`skeleton`, `minecraft:item/bone`],
    [`enderman`, `minecraft:item/ender_pearl`],
    [`creeper`, `minecraft:item/gunpowder`],
    [`blaze`, `minecraft:item/blaze_powder`],
    [`spider`, `minecraft:item/string`]
]
global.FuelRods = [
    [`celestite`, `#A4C639`, Component.translatable(`material.gtceu.celestite`)],
    [`plutonium_241`, `#ff4c4c`, Component.translatable(`material.gtceu.plutonium`)],
    [`uranium`, `#1d891d`, Component.translatable(`material.gtceu.uranium`)],
    [`uranium_235`, `#42df42`, Component.translatable(`material.gtceu.uranium_235`)],
    [`uranium_236`, `#04a604`, Component.translatable(`material.gtceu.uranium_236`)],
    [`thorium`, `#25411b`, Component.translatable(`material.gtceu.thorium`)],

    [`naquadria`, `#68c868`, Component.translatable(`material.gtceu.naquadria`)]
]
global.Universal = [
    [`ulv`, `#bdb2a2`],
    [`lv`, `#ffa663`],
    [`mv`, `#54fcfc`],
    [`hv`, `#fca800`],
    [`ev`, `#a800a8`],
    [`iv`, `#5454fc`],
    [`luv`, `#ff9cff`],
    [`zpm`, `#fc5454`],
    [`uv`, `#00a8a8`],
    [`uhv`, `#a80000`],
    [`uev`, `#54fc54`],
    [`uiv`, `#00a800`],
    [`uxv`, `#fff765`],
    [`opv`, `#2600ff`]
]
let ULVCraftingComponents = [`robot_arm`, `conveyor_module`, `electric_motor`, `electric_pump`, `electric_piston`]

global.Casings = [
    [`vanadium_steel`, `metal`, `pickaxe`, `Reconstruction-Proof Vanadium Steel Casing`],
    [`solid_wrought_iron`, `metal`, `pickaxe`, `Solid Wrought Iron Casing`],
    [`radiation_resistant`, `metal`, `pickaxe`, `Radiation Resistant Casing`],
    [`hss_plated_nocturium`, `metal`, `pickaxe`, `HSS-E Plated Nocturium Casing`],
    [`etbf`, `metal`, `pickaxe`, `E.T.B.F. Casing`],
    [`corruption_proof`, `metal`, `pickaxe`, `Corruption-Proof Casing`],
    [`stainless_evaporation`, `metal`, `pickaxe`, `Stainless Evaporation Casing`],
    [`wood`, `wood`, `axe`, `Wood Casing`],
    [`manasteel_plated_livingrock`, `metal`, `pickaxe`, `Manasteel Plated Livingrock Bricks`],
    [`terrasteel_plated_livingwood`, `wood`, `axe`, `Terrasteel Plated Livingwood Planks`]
]

let BuildingBlock = [
    `invert_bitt`
]

StartupEvents.registry(`item`, register => {
// MARK: Register (Items)
    register.create(`stone_spade`, `hoe`).tier(`stone`).maxDamage(67)

    register.create(`the_watch_of_times`).maxDamage(67)

    register.create(`stone_stick`)
    register.create(`stick_fragments`).texture(`kubejs:item/stick_fragments`)
    register.create(`simple_knitting_kit`).texture(`kubejs:item/knitting_kit`).maxDamage(`10`)
    register.create(`string_mesh_chunk`).texture(`kubejs:item/mesh_chunk`)

    register.create(`p_credit`).texture(`kubejs:item/p_credit`)

    register.create(`alfheim_runes`).texture(`kubejs:item/alfheim_runes`).maxStackSize(1)

    register.create(`ram_mainframe`).texture(`kubejs:item/components/ram_complex`).maxStackSize(4)
    register.create(`ram_stick`).texture(`kubejs:item/components/ram_stick`).maxStackSize(16)
    register.create(`gtceu:scrap_box`).texture(`kubejs:item/scrap_box`).maxStackSize(16)

    register.create(`gtceu:abydos_marker`).texture(`kubejs:item/markers/abydos_marker`).displayName(`Abydos`)
    register.create(`gtceu:rima_marker`).texture(`kubejs:item/markers/rima_marker`).displayName(`Rima`)
    register.create(`gtceu:cavum_tenebrae_marker`).texture(`kubejs:item/markers/cavum_tenebrae_marker`).displayName(`Cavum Tenebrae`)
    register.create(`gtceu:unitas_marker`).texture(`kubejs:item/markers/unitas_marker`).displayName(`Unitas`)
    register.create(`gtceu:chulak_marker`).texture(`kubejs:item/markers/chulak_marker`).displayName(`Chulak`)

    register.create(`stargate_coil`).texture(`kubejs:item/stargate/stargate_coil`)
    register.create(`stargate_chevron`).texture(`kubejs:item/stargate/stargate_chevron`)
    register.create(`stargate_computation_mainframe`).texture(`kubejs:item/stargate/stargate_computation_mainframe`).maxStackSize(1)
    register.create(`stargate_field_generator`).texture(`kubejs:item/stargate/stargate_field_generator`)
    register.create(`space_continuum_stabilizer`).texture(`kubejs:item/stargate/space_continuum_stabilizer`).displayName(`Space-time Continuum Stabilizer`)

    ULVCraftingComponents.forEach(Type => {
        register.create(`ulv_${Type}`).texture(`kubejs:item/components/ulv_` + Type).tooltip(Component.translatable(`gtfte.tooltip.ulv_сomponent`))
    })
    Datas.forEach(([name, texture]) => {
        register.create(`${name}_data`).textureJson({layer0: `kubejs:item/components/data/data_bg`, layer1: texture, layer2: `kubejs:item/components/data/data_template`})
    })
    for (const [name, tint] of global.Universal) {
        register.create(`universal_${name}_circuit`).textureJson({ layer0: `kubejs:item/circuits/universal/base`, layer1: `kubejs:item/circuits/universal/overlay` }).color(1, tint)
            .tooltip(Component.translatable(`gtfte.tooltip.universal_circuit`, name.toUpperCase()))
            .tag(`gtceu:circuits`)
            .tag(`gtceu:circuits/${name}`);
    }

    register.create(`gtceu:certus_chip`).tooltip(`§gCertus-Tier I Circuit`).texture(`kubejs:item/circuits/progression/certus/chip`).tag(`gtfte:circuits/me_1`)
    register.create(`gtceu:basic_certus_circuit`).tooltip(`§gCertus-Tier II Circuit`).texture(`kubejs:item/circuits/progression/certus/basic`).tag(`gtfte:circuits/me_2`)
    register.create(`gtceu:good_certus_circuit`).tooltip(`§gCertus-Tier III Circuit`).texture(`kubejs:item/circuits/progression/certus/good`).tag(`gtfte:circuits/me_3`)
    register.create(`gtceu:advanced_certus_circuit`).tooltip(`§gCertus-Tier IV Circuit`).texture(`kubejs:item/circuits/progression/certus/advanced`).tag(`gtfte:circuits/me_4`)

    register.create(`gtceu:fluix_chip`).tooltip(`§5Certus-Tier II Circuit`).texture(`kubejs:item/circuits/progression/fluix/chip`).tag(`gtfte:circuits/me_2`)
    register.create(`gtceu:basic_fluix_circuit`).tooltip(`§5Certus-Tier III Circuit`).texture(`kubejs:item/circuits/progression/fluix/basic`).tag(`gtfte:circuits/me_3`)
    register.create(`gtceu:advanced_fluix_circuit`).tooltip(`§5Certus-Tier IV Circuit`).texture(`kubejs:item/circuits/progression/fluix/advanced`).tag(`gtfte:circuits/me_4`)
    register.create(`gtceu:fluix_mainframe`).tooltip(`§5Certus-Tier V Circuit`).texture(`kubejs:item/circuits/progression/fluix/mainframe`).tag(`gtfte:circuits/me_5`)

    register.create(`gtceu:empty_fuel_rod`).texture(`kubejs:item/fuel/empty`)
    for (const [fuel, tint, display] of global.FuelRods) {
        register.create(`gtceu:${fuel}_fuel_rod`).textureJson({ layer0: `kubejs:item/fuel/empty`, layer1: `kubejs:item/fuel/overlay` }).color(1, tint).unstackable()
    }
    for (const [name, displayName] of Boules) {
        register.create(`${name}_boule`).texture(`kubejs:item/components/boule/${name}_boule`).tooltip(`§7Still Raw Circuit`).displayName(`${displayName} Boule`)
        register.create(`${name}_wafer`).texture(`kubejs:item/components/wafer/${name}_wafer`).displayName(`${displayName} Wafer`)
    }
})

StartupEvents.registry(`block`, event => {
// MARK: Register (Blocks)
    for (const [Name, SoundType, Tool, Display] of global.Casings) {
        event.create(`${Name.toLowerCase()}_casing`)
            .soundType(`${SoundType}`)
            .textureAll(`kubejs:block/casings/${Name}/${Name}_casing`)
            .hardness(2)
            .resistance(0.5)
            .renderType(`cutout`)
            .notSolid()
            .requiresTool(false)
            .tagBlock(`minecraft:mineable/${Tool}`)
            .tagBlock(`forge:mineable/wrenches`)
            .displayName(Display)
    }
    BuildingBlock.forEach(block => {
        event.create(block)
            .soundType(`stone`)
            .hardness(2.0)
            .resistance(0.5)
            .requiresTool(false)
            .textureAll(`kubejs:block/building/${block}`)
            .tagBlock(`minecraft:mineable/pickaxe`)
            .tagBlock(`forge:mineable/wrenches`)
    })
    //HV mana amplifier
    event.create(`hv_mana_amplifier`)
        .soundType(`stone`)
        .displayName(`HV Mana Amplifier`)
        .hardness(2.0)
        .resistance(0.5)
        .requiresTool(true)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`forge:mineable/wrenches`)
    //EV alchemical construction
    event.create(`alchemical_construction`)
        .soundType(`deepslate`)
        .displayName(`Alchemical Construction`)
        .hardness(4.0)
        .resistance(1)
        .requiresTool(true)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`forge:mineable/wrenches`)
    //UHV alchemical construction
    event.create(`awakened_alchemical_construction`)
        .soundType(`deepslate`)
        .displayName(`Awakened Alchemical Construction`)
        .hardness(4.0)
        .resistance(1)
        .requiresTool(true)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`forge:mineable/wrenches`)
    //Fission Reactor Rod
    event.create(`fission_reactor_rod`, `gtceu:active`)
        .bloom(`kubejs:block/active/reactor/block`)
        .soundType(`metal`)
        .displayName(`Fission Reactor Rod`)
        .hardness(4.0)
        .resistance(2)
        .requiresTool(true)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`forge:mineable/wrenches`)
    //-----Active Blocks-----//
    event.create(`simple_ventilation`, `gtceu:active`)
        .simple(`kubejs:block/active/ventilation/simple_ventilation`)
        .soundType(`metal`)
        .displayName(`Simple Ventilation`)
        .hardness(2.0)
        .resistance(2)
        .requiresTool(true)
        .tagBlock(`minecraft:mineable/pickaxe`)
        .tagBlock(`forge:mineable/wrenches`)

    event.create(`wrought_iron_firebox`, `gtceu:active`)
        .firebox(
            `kubejs:block/casings/solid_wrought_iron/solid_wrought_iron_casing`,
            `kubejs:block/casings/solid_wrought_iron/firebox`,
            `kubejs:block/casings/solid_wrought_iron/solid_wrought_iron_casing`)
        .displayName(`Wrought Iron Firebox`)
        .soundType(`metal`)
        .resistance(6).hardness(5)
        .tagBlock(`mineable/pickaxe`)
        .tagBlock(`forge:mineable/wrench`)
        .requiresTool(true)
})

GTCEuStartupEvents.registry(`gtceu:tag_prefix`, event => {
// MARK: Register (GTM)
    event.create(`sandstone`, `ore`)
        .stateSupplier(() => Block.getBlock(`minecraft:sandstone`).defaultBlockState())
        .baseModelLocation(`minecraft:block/sandstone`)
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag(`minecraft:mineable/pickaxe`)
    event.create(`sulfur_sand`, `ore`)
        .stateSupplier(() => Block.getBlock(`sgjourney:sulfur_sand`).defaultBlockState())
        .baseModelLocation(`sgjourney:block/sulfur_sand`)
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
        .miningToolTag(`minecraft:mineable/shovel`)
})

const WorldGenLayers = Java.loadClass(`com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers`)
GTCEuStartupEvents.registry(`gtceu:world_gen_layer`, event => {
// MARK: World Gen Layers
    event.create(`abydos_stone`)
        .targets(`minecraft:stone`, `#minecraft:stone_ore_replaceables`)
        .dimensions(`sgjourney:abydos`)

    event.create(`abydos_sand`)
        .targets(`minecraft:sand`, `minecraft:sandstone`)
        .dimensions(`sgjourney:abydos`)

    event.create(`cavum_tenebrae_stone`)
        .targets(`minecraft:deepslate`, `#minecraft:stone_ore_replaceables`)
        .dimensions(`sgjourney:cavum_tenebrae`)

    event.create(`chulak_stone`)
        .targets(`minecraft:stone`, `#minecraft:stone_ore_replaceables`)
        .dimensions(`sgjourne:chulak`)

    event.create(`unitas_sand`)
        .targets(`sgjourney:sulfur_sand`, `#minecraft:stone_ore_replaceables`)
        .dimensions(`sgjourney:unitas`)
})

GTCEuStartupEvents.registry(`gtceu:dimension_marker`, event => {
// MARK: Dimension Markers
    event.create(`sgjourney:abydos`)
        .iconSupplier(() => Item.of(`gtceu:abydos_marker`).getItem())
        .tier(0)
    event.create(`sgjourney:cavum_tenebrae`)
        .iconSupplier(() => Item.of(`gtceu:cavum_tenebrae_marker`).getItem())
        .tier(0)
    event.create(`sgjourney:unitas`)
        .iconSupplier(() => Item.of(`gtceu:unitas_marker`).getItem())
        .tier(0)
    event.create(`sgjourney:rima`)
        .iconSupplier(() => Item.of(`gtceu:rima_marker`).getItem())
        .tier(0)
    event.create(`sgjourney:chulak`)
        .iconSupplier(() => Item.of(`gtceu:chulak_marker`).getItem())
        .tier(0)
})