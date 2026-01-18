ServerEvents.recipes(event => {
    //ULV
    event.shaped(`gtceu:ulv_arc_furnace`, [
        `CEC`,
        `BAB`,
        `DDD`
    ], {
        A: global.ULV.Hull,
        B: global.ULV.Circuit,
        C: global.ULV.Cable(`quadruple`),
        D: `gtceu:iron_plate`,
        E: `gtceu:coal_dust`,
    }
    );
    //Wrought Iron
    event.recipes.gtceu.arc_furnace(`gtfte:wrought_iron`)
        .itemInputs(`minecraft:iron_ingot`)
        .inputFluids(`gtceu:oxygen 56`)
        .itemOutputs(`gtceu:wrought_iron_ingot`)
        .duration(56)
        .EUt(GTValues.VA[GTValues.ULV]);
    event.recipes.gtceu.arc_furnace(`gtfte:glass`)
        .itemInputs(`minecraft:sand`)
        .inputFluids(`gtceu:oxygen 10`)
        .itemOutputs(`2x minecraft:glass`)
        .duration(20)
        .EUt(4);
    event.recipes.gtceu.arc_furnace(`gtfte:ceramic`)
        .itemInputs(`minecraft:clay_ball`)
        .itemOutputs(`gtceu:ceramic_ingot`)
        .duration(60)
        .EUt(GTValues.VA[GTValues.ULV]);
    event.recipes.gtceu.arc_furnace(`gtfte:realgar_dust`)
        .itemInputs(`gtceu:sapphire_gem`)
        .inputFluids(`gtceu:oxygen 56`)
        .itemOutputs(`gtceu:realgar_dust`)
        .duration(80)
        .EUt(14);
    event.recipes.gtceu.arc_furnace(`gtfte:silver_dust`)
        .itemInputs(`gtceu:crushed_gold_ore`)
        .inputFluids(`gtceu:oxygen 56`)
        .itemOutputs(`gtceu:silver_dust`)
        .duration(80)
        .EUt(14);
    event.recipes.gtceu.arc_furnace(`gtfte:stibnite_dust`)
        .itemInputs(`gtceu:crushed_sphalerite_ore`)
        .inputFluids(`gtceu:oxygen 56`)
        .itemOutputs(`gtceu:stibnite_dust`)
        .duration(80)
        .EUt(14);
    event.recipes.gtceu.arc_furnace(`gtfte:nickel_dust`)
        .itemInputs(`gtceu:crushed_iron_ore`)
        .inputFluids(`gtceu:oxygen 56`)
        .itemOutputs(`gtceu:nickel_dust`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.ULV]);
    event.recipes.gtceu.arc_furnace(`gtfte:raw_lead`)
        .itemInputs(`gtceu:crushed_tin_ore`)
        .inputFluids(`gtceu:oxygen 56`)
        .itemOutputs(`gtceu:lead_dust`)
        .duration(80)
        .EUt(GTValues.VA[GTValues.ULV]);
    event.recipes.gtceu.arc_furnace(`gtfte:annealed_elementium`)
        .itemInputs(`gtceu:elementium_ingot`)
        .inputFluids(`gtceu:oxygen 56`)
        .itemOutputs(`gtceu:annealed_elementium_ingot`)
        .duration(80)
        .EUt(8190);
})