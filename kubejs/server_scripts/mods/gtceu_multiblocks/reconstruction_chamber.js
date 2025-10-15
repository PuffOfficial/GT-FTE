let tiers = ['MV', 'HV', 'EV', 'IV', 'LuV', "ZPM", "UV"]
ServerEvents.recipes(event => {
        tiers.forEach(tier => {
                event.shaped(`gtceu:${tier.toLowerCase()}_reconstruction_chamber`, [
                        'AFA',
                        'BCB',
                        'DED'
                ], {
                        A: 'gtceu:tempered_glass',
                        B: eval(`global.${tier}.Coil`),
                        C: eval(`global.${tier}.Hull`),
                        D: eval(`global.${tier}.Cable("single")`),
                        E: eval(`global.${tier}.Circuit`),
                        F: eval(`global.${tier}.RobotArm`),
                }
                )
        })
        for (const [name, tint] of global.Universal) {
                event.recipes.gtceu.reconstructing(`gtfte:universal_${name}_circuit`)
                        .itemInputs(`#gtceu:circuits/${name}`)
                        .itemOutputs(`kubejs:universal_${name}_circuit`)
                        .duration(100)
                        .EUt(GTValues.VA[GTValues.ULV]);
        }
})