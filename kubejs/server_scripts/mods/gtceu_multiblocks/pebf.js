ServerEvents.recipes(event => {
        event.shaped('gtceu:primitive_electric_blast_furnace', [
                'DDD',
                'BAB',
                'CBC'
        ], {
                A: 'gtceu:firebricks',
                B: global.ULV.Circuit,
                C: global.ULV.Cable("single"),
                D: 'minecraft:furnace',
        }
        )
        event.recipes.gtceu.pebf('gtfte:steel_from_coke')
                .itemInputs(['gtceu:wrought_iron_ingot', 'gtceu:coke_gem'])
                .itemOutputs('gtceu:steel_ingot')
                .duration(600)
                .EUt(30);
        event.recipes.gtceu.pebf('gtfte:steel_from_coal')
                .itemInputs(['gtceu:wrought_iron_ingot', 'minecraft:coal'])
                .itemOutputs('gtceu:steel_ingot')
                .duration(1200)
                .EUt(30);
        event.recipes.gtceu.pebf('gtfte:ceramic_plate')
                .notConsumable('gtceu:plate_casting_mold')
                .itemInputs('2x gtceu:ceramic_ingot')
                .itemOutputs('gtceu:ceramic_plate')
                .duration(360)
                .EUt(7);
        event.recipes.gtceu.pebf('gtfte:graphite')
                .itemInputs('2x gtceu:raw_coal')
                .itemOutputs('gtceu:raw_graphite')
                .duration(600)
                .EUt(30);
})