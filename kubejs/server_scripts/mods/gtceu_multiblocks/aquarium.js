ServerEvents.recipes(event => {
        event.shaped(`gtceu:large_aquarium`, [
                `ACA`,
                `BDB`,
                `EBE`
        ], {
                A: global.HV.Pump,
                B: global.HV.Circuit,
                C: `gtceu:fluid_filter`,
                D: `gtceu:clean_machine_casing`,
                E: `gtceu:gold_small_fluid_pipe`
        });
        event.recipes.gtceu.aquarium(`gtfte:salmon`)
                .itemInputs(`minecraft:salmon`).circuit(1)
                .inputFluids(`gtceu:oxygen 2000`,`minecraft:water 16000`)
                .itemOutputs(`minecraft:salmon`)
                .chancedOutput(`2x minecraft:salmon`, 5000, 0)
                .chancedOutput(`minecraft:salmon`, 2500, 0)
                .chancedOutput(`minecraft:bone_meal`, 2500, 0)
                .chancedOutput(`minecraft:bone`, 1000, 0)
                .EUt(GTValues.VA[GTValues.LV])
                .duration(1200);
        event.recipes.gtceu.aquarium(`gtfte:cod`)
                .itemInputs(`minecraft:cod`).circuit(1)
                .inputFluids(`gtceu:oxygen 2000`,`minecraft:water 8000`)
                .itemOutputs(`minecraft:cod`)
                .chancedOutput(`2x minecraft:cod`, 7500, 0)
                .chancedOutput(`minecraft:cod`, 2500, 0)
                .chancedOutput(`minecraft:bone_meal`, 1500, 0)
                .chancedOutput(`minecraft:bone`, 500, 0)
                .EUt(GTValues.VA[GTValues.LV])
                .duration(800);
        event.recipes.gtceu.aquarium(`gtfte:tropical_fish`)
                .itemInputs(`minecraft:tropical_fish`).circuit(1)
                .inputFluids(`gtceu:oxygen 4000`,`minecraft:water 16000`)
                .itemOutputs(`minecraft:tropical_fish`)
                .chancedOutput(`2x minecraft:tropical_fish`, 5000, 0)
                .chancedOutput(`minecraft:tropical_fish`, 1250, 0)
                .chancedOutput(`minecraft:bone_meal`, 150, 0)
                .chancedOutput(`minecraft:bone`, 50, 0)
                .EUt(GTValues.VA[GTValues.LV])
                .duration(1000);
        event.recipes.gtceu.aquarium(`gtfte:pufferfish`)
                .itemInputs(`minecraft:pufferfish`).circuit(1)
                .inputFluids(`gtceu:oxygen 1000`,`minecraft:water 16000`)
                .itemOutputs(`minecraft:pufferfish`)
                .chancedOutput(`2x minecraft:pufferfish`, 9000, 0)
                .chancedOutput(`minecraft:pufferfish`, 5000, 0)
                .chancedOutput(`minecraft:bone_meal`, 150, 0)
                .chancedOutput(`minecraft:bone`, 50, 0)
                .EUt(GTValues.VA[GTValues.LV])
                .duration(400);
});