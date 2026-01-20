ServerEvents.recipes(event => {
    event.remove({ id: `gtceu:laser_engraver/crystal_cpu` })
    event.remove({ id: `gtceu:laser_engraver/crystal_soc` })

    event.remove({ id: `gtceu:circuit_assembler/crystal_processor_iv` })
    event.remove({ id: `gtceu:circuit_assembler/crystal_processor_iv_soldering_alloy` })

    event.recipes.gtceu.alchemy('gtfte:crystal_cpu')
        .itemInputs('gtceu:engraved_crystal_chip')
        .inputFluids(['gtceu:venenum 250', 'gtceu:limus 150', 'gtceu:lucrum 50'])
        .itemOutputs('gtceu:crystal_cpu')
        .addData("min_temp", 5800)
        .addData("max_temp", 6900)
        .duration(1200)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.LuV]);

    event.recipes.gtceu.alchemy('gtfte:crystal_soc')
        .itemInputs('gtceu:crystal_cpu')
        .inputFluids(['gtceu:instrumentum 250', 'gtceu:sensus 150', 'gtceu:lucrum 50'])
        .itemOutputs('gtceu:crystal_soc')
        .addData("min_temp", 6800)
        .addData("max_temp", 9600)
        .duration(2400)
        .cleanroom(CleanroomType.CLEANROOM)
        .EUt(GTValues.VA[GTValues.ZPM]);
})