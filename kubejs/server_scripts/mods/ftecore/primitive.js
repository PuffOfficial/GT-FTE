let conversionList = [
    [`kubejs:solid_wrought_iron_casing`, `ftecore:solid_wrought_iron_casing`],
    [`kubejs:wrought_iron_firebox`, `ftecore:wrought_iron_firebox`],

    [`gtceu:ulv_extractor`, `ftecore:ulv_extractor`],
    [`gtceu:ulv_assembler`, `ftecore:ulv_assembler`],
    [`gtceu:ulv_compressor`, `ftecore:ulv_compressor`],
    [`gtceu:ulv_electrolyzer`, `ftecore:ulv_electrolyzer`],
    [`gtceu:ulv_forge_hammer`, `ftecore:ulv_forge_hammer`],
    [`gtceu:ulv_macerator`, `ftecore:ulv_macerator`],
    [`gtceu:ulv_polarizer`, `ftecore:ulv_polarizer`],
    [`gtceu:ulv_sifter`, `ftecore:ulv_sifter`],
    [`gtceu:ulv_wiremill`, `ftecore:ulv_wiremill`],
    [`gtceu:ulv_arc_furnace`, `ftecore:ulv_arc_furnace`],

    [`gtceu:primitive_bender`, `ftecore:primitive_bender`],
    [`gtceu:primitive_electric_furnace`, `ftecore:primitive_electric_furnace`],
    [`gtceu:primitive_alloy_smelter`, `ftecore:primitive_alloy_smelter`],
]


ServerEvents.recipes(event => {
    conversionList.forEach(([item1, item2]) => {
        event.shapeless(item2, [
            item1,
        ]);
    });
    // MARK: Singleblocks
    //Assembler
    event.shaped(`ftecore:ulv_assembler`, [
        `EBE`,
        `DAD`,
        `CBC`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`single`),
        D: global.ULV.Conveyor,
        E: global.ULV.RobotArm,
    });
    //Compressor
    event.shaped(`ftecore:ulv_compressor`, [
        ` B `,
        `DAD`,
        `CBC`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`single`),
        D: global.ULV.Piston,
    });
    //Electrolyzer
    event.shaped(`ftecore:ulv_electrolyzer`, [
        `EDE`,
        `EAE`,
        `BCB`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`single`),
        D: `#forge:glass`,
        E: global.MV.Wire(`single`),
    });
    //Forge Hammer
    event.shaped(`ftecore:ulv_forge_hammer`, [
        `CDC`,
        `BAB`,
        `CEC`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`single`),
        D: global.ULV.Piston,
        E: `minecraft:iron_block`
    });
    //Macerator
    event.shaped(`ftecore:ulv_macerator`, [
        `BCF`,
        `EED`,
        `AAE`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Piston,
        C: global.ULV.Motor,
        D: global.ULV.Hull,
        E: global.ULV.Cable(`single`),
        F: `minecraft:diamond`
    });
    //Polarizer
    event.shaped(`ftecore:ulv_polarizer`, [
        `CDC`,
        `BAB`,
        `CDC`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Cable(`single`),
        C: global.ULV.Wire(`double`),
        D: `gtceu:copper_rod`,
    });
    //Sifter
    event.shaped(`ftecore:ulv_sifter`, [
        `CEC`,
        `DAD`,
        `BEB`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`single`),
        D: global.ULV.Piston,
        E: `exdeorum:string_mesh`,
    });
    //Wiremill
    event.shaped(`ftecore:ulv_wiremill`, [
        `DCD`,
        `BAB`,
        `DCD`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`single`),
        D: global.ULV.Motor,
    });
    //Arc Furnace
    event.shaped(`ftecore:ulv_arc_furnace`, [
        `CEC`,
        `BAB`,
        `DDD`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`quadruple`),
        D: `gtceu:iron_plate`,
        E: `gtceu:coal_dust`,
    });

    //Primitive Maintenance Hatch
    event.shaped(`ftecore:primitive_maintenance_hatch`, [
        `GFD`,
        `HBE`,
        `CAI`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Hull,
        C: global.ULV.Cable(`single`),
        D: global.tools.AnyWrench,
        E: global.tools.AnyScrewdriver,
        F: global.tools.AnyWireCutter,
        G: global.tools.AnyMallet,
        H: `gtceu:treated_wood_plate`,
        I: `gtceu:copper_small_fluid_pipe`,
    });

    // MARK: Multiblocks

    // Bender
    event.recipes.gtceu.assembler(`gtfte:pbf`)
        .itemInputs(`gtceu:firebricks`, `4x gtceu:andesite_alloy_frame`, `8x gtceu:wrought_iron_plate`)
        .inputFluids(`gtceu:glue 100`)
        .itemOutputs(`gtceu:primitive_blast_furnace`)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.ULV]);

    // Bender
    event.shaped(`ftecore:primitive_bender`, [
        `AFA`,
        `BDB`,
        `CEC`
    ], {
        A: global.ULV.Piston,
        B: global.ULV.Circuit,
        C: global.ULV.Motor,
        D: global.ULV.Hull,
        E: global.ULV.Cable(`single`),
        F: `gtceu:wrought_iron_plate`,
    });
    // Electric Furnace
    event.shaped(`ftecore:primitive_electric_furnace`, [
        `ADA`,
        `DBD`,
        `CDC`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Hull,
        C: global.ULV.Cable(`single`),
        D: global.ULV.Wire(`double`),
    });
    // Alloy Smelter
    event.shaped(`ftecore:primitive_alloy_smelter`, [
        `ABA`,
        `BDB`,
        `CBC`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Wire(`quadruple`),
        C: global.ULV.Cable(`single`),
        D: global.ULV.Hull,
    });
    // Large Compressor
    event.shaped(`ftecore:primitive_large_compressor`, [
        `AEA`,
        `BDB`,
        `CAC`
    ], {
        A: global.ULV.Circuit,
        B: global.ULV.Piston,
        C: global.ULV.Cable(`quadruple`),
        D: global.ULV.Hull,
        E: `gtceu:wrought_iron_plate`,
    });
});