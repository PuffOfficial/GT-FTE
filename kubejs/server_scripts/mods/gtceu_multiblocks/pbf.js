ServerEvents.recipes(event => {
        event.recipes.gtceu.primitive_blast_furnace(`gtfte:ceramic_plate`)
                .itemInputs(`ftecore:ceramic_ingot`, `2x #minecraft:coals`)
                .notConsumable(`gtceu:plate_casting_mold`)
                .itemOutputs(`ftecore:ceramic_plate`)
                .duration(320);
});