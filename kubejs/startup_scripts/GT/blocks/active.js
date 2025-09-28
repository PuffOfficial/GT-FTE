StartupEvents.registry('block', event => {
    event.create("simple_ventilation", 'gtceu:active')
        .simple("kubejs:block/active/ventilation/simple_ventilation")
        .soundType("metal")
        .displayName("Simple Ventilation")
        .hardness(2.0)
        .resistance(2)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:mineable/wrenches')

    event.create('wrought_iron_firebox', 'gtceu:active')
        .firebox(
            'kubejs:block/casings/solid_wrought_iron/solid_wrought_iron_casing',
            'kubejs:block/casings/solid_wrought_iron/firebox',
            'kubejs:block/casings/solid_wrought_iron/solid_wrought_iron_casing')
        .displayName('Wrought Iron Firebox')
        .soundType('metal')
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
})