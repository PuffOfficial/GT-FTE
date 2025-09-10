let simpleAspects = ['ordo', 'aqua', 'terra', 'perditio', 'ignis', 'aer']
ServerEvents.recipes(event => {
//MARK: Aspects
    for (const [name, component1, component2, color] of global.ComplicatedAspects) {
        event.recipes.gtceu.chemical_reactor(`gtfte:aspect_${name}_1`).circuit(1)
            .inputFluids([`gtceu:${component1} 1000`,`gtceu:${component2} 1000`])
            .outputFluids(`gtceu:${name} 1000`)
            .duration(600)
            .EUt(8192);   
        event.recipes.gtceu.chemical_reactor(`gtfte:aspect_${name}_2`).circuit(2)
            .inputFluids([`gtceu:${component1} 10`,`gtceu:${component2} 10`])
            .outputFluids(`gtceu:${name} 10`)
            .duration(6)
            .EUt(8192); 

        event.recipes.gtceu.autoclave(`gtfte:crystalized_${name}`)
            .inputFluids([`gtceu:${name} 250`])
            .itemInputs('gtceu:nether_quartz_dust')
            .itemOutputs(`gtceu:crystallized_${name}_gem`)
            .duration(200)
            .EUt(2048);   
        event.recipes.gtceu.extractor(`gtfte:${name}_from_crystal`)
            .itemInputs(`gtceu:crystallized_${name}_gem`)
            .outputFluids(`gtceu:${name} 250`)
            .duration(200)
            .EUt(2048);   
    }   
    simpleAspects.forEach(aspect => {
        event.recipes.gtceu.autoclave(`gtfte:crystalized_${aspect}`)
            .inputFluids([`gtceu:${aspect} 250`])
            .itemInputs('gtceu:nether_quartz_dust')
            .itemOutputs(`gtceu:crystallized_${aspect}_gem`)
            .duration(200)
            .EUt(2048);    
        event.recipes.gtceu.extractor(`gtfte:${aspect}_from_crystal`)
            .itemInputs(`gtceu:crystallized_${aspect}_gem`)
            .outputFluids(`gtceu:${aspect} 250`)
            .duration(200)
            .EUt(2048);   
    })
//MARK: Fuel Rods
    for (const [name, color] of global.FuelRods) {
        event.recipes.gtceu.canner(`gtfte:${name}_fuel_rod_filling`)
            .itemInputs(`gtceu:empty_fuel_rod`)
            .inputFluids(`gtceu:${name} 288`)
            .itemOutputs(`gtceu:${name}_fuel_rod`)
            .duration(100)
            .EUt(32);  

        event.recipes.gtceu.canner(`gtfte:${name}_fuel_rod_emptying`)
            .itemInputs(`gtceu:${name}_fuel_rod`)
            .outputFluids(`gtceu:${name} 288`)
            .itemOutputs(`gtceu:empty_fuel_rod`)
            .duration(100)
            .EUt(32);   
    }
//MARK: Bees
    for (const CombBeeProperty of global.BeesCombs) {
        let Name = CombBeeProperty[0];
            let Resource = CombBeeProperty[3];
        let IsFluid = CombBeeProperty[4];
        let CentrifugeType = CombBeeProperty[5];


    if (IsFluid == false) {
        event.recipes.gtceu.comb_centrifuge(`gtfte:${Name}_comb_centrifuge`)
            .itemInputs(`kubejs:${Name}_comb`)
            .chancedOutput(`kubejs:${Name}_comb_extract`, 5000, 0)
            .chancedOutput(`kubejs:${Name}_comb_extract`, 1000, 0)
            .outputFluids(`gtceu:${Resource} 72`)
            .addData("centrifuge_type", CentrifugeType)
            .duration(100)
            .EUt(512);
        event.recipes.gtceu.extractor(`gtfte:${Name}_comb_extraction`)
            .itemInputs(`kubejs:${Name}_comb_extract`)
            .chancedOutput(`gtceu:${Resource}_dust`, 1000, 0)
            .outputFluids(`gtceu:${Resource} 72`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);    
    } else {
        event.recipes.gtceu.comb_centrifuge(`gtfte:${Name}_comb_centrifuge`)
            .itemInputs(`kubejs:${Name}_comb`)
            .chancedOutput(`kubejs:${Name}_comb_extract`, 3500, 0)
            .chancedOutput(`kubejs:${Name}_comb_extract`, 1000, 0)
            .outputFluids(`gtceu:${Resource} 250`)
            .addData("centrifuge_type", CentrifugeType)
            .duration(100)
            .EUt(GTValues.VA[GTValues.HV]);   
        event.recipes.gtceu.extractor(`gtfte:${Name}_comb_extraction`)
            .itemInputs(`kubejs:${Name}_comb_extract`)
            .outputFluids(`gtceu:${Resource} 250`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV]);    
    }
}
});