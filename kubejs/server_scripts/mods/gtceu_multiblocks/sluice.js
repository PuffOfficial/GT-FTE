ServerEvents.recipes(event => {
    event.shaped('gtceu:sluice', [
        'BDC',
        'FAF',
        'EGG'
    ], {
        A: 'gtceu:solid_machine_casing',
        B: global.EV.Circuit,
        C: global.HV.RobotArm,
        D: global.HV.Piston,
        E: global.HV.Pump,
        F: 'exdeorum:iron_mesh',
        G: 'gtceu:steel_plate'
    })
    event.recipes.gtceu.sluicing('gtfte:gravel_sluicing')
        .inputFluids('gtceu:gravel_slurry 1000')
        .itemOutputs([
            '16x gtceu:crushed_cassiterite_ore',
            '8x gtceu:crushed_lead_ore',
            '12x gtceu:crushed_gold_ore',
            '24x gtceu:crushed_copper_ore',
            '32x gtceu:crushed_vanadium_magnetite_ore',
            '64x gtceu:crushed_coal_ore',
            '16x gtceu:crushed_nickel_ore'
        ])
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.sluicing('gtfte:sand_sluicing')
        .inputFluids('gtceu:sand_slurry 1000')
        .itemOutputs([
            '4x gtceu:crushed_diamond_ore',
            '4x gtceu:crushed_emerald_ore',
            '64x gtceu:crushed_redstone_ore',
            '16x gtceu:crushed_magnesite_ore',
            '16x gtceu:crushed_pyrolusite_ore',
            '16x gtceu:crushed_tantalite_ore',
            '16x gtceu:crushed_wulfenite_ore',
            '8x gtceu:crushed_fluorite_ore',
        ])
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.sluicing('gtfte:netherrack_sluicing')
        .inputFluids('gtceu:netherrack_slurry 1000')
        .itemOutputs([
            '16x gtceu:crushed_sphalerite_ore',
            '16x gtceu:crushed_sulfur_ore',
            '16x gtceu:crushed_goethite_ore',
            '8x gtceu:crushed_gold_ore',
            '8x gtceu:crushed_yellow_limonite_ore',
            '16x gtceu:crushed_tricalcium_phosphate_ore'
        ])
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
    event.recipes.gtceu.sluicing('gtfte:endstone_sluicing')
        .inputFluids('gtceu:endstone_slurry 1000')
        .itemOutputs([
            '6x gtceu:crushed_platinum_ore',
            '12x gtceu:crushed_bornite_ore',
            '16x gtceu:crushed_magnetite_ore',
            '16x gtceu:crushed_gold_ore',
            '8x gtceu:crushed_chromite_ore',
            '8x gtceu:crushed_bauxite_ore',
            '8x gtceu:crushed_ilmenite_ore',
            '4x gtceu:crushed_pitchblende_ore'
        ])
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV]);
})