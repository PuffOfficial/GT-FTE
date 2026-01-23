GTCEuStartupEvents.registry(`gtceu:material_icon_set`, event => {
    event.create(`aspect`).parent(`certus`)
})
global.ComplicatedAspects = [
//Tier 1
    [`gelum`, `ignis`, `perditio`, 0xe6ffff],
    [`lux`, `ignis`, `aer`, 0xe3e06f],
    [`motus`, `ordo`, `aer`, 0xa2a3c1],
    [`permutatio`, `motus`, `aqua`, 0x5f8c65],
    [`potentia`, `ignis`, `ordo`, 0xcffffa],    
    [`tempestas`, `aer`, `aqua`, 0xfdfcf8],
    [`vacuos`, `aer`, `perditio`, 0x847f79],
    [`venenum`, `aqua`, `perditio`, 0x81dd00],
    [`victus`, `aqua`, `terra`, 0xd10005],
    [`vitreus`, `ordo`, `terra`, 0x7cfffe],
//Tier 2
    [`bestia`, `motus`, `victus`, 0x9c630a],
    [`fames`, `vacuos`, `victus`, 0x9b0101],
    [`herba`, `terra`, `victus`, 0x288f0a],
    [`iter`, `motus`, `terra`, 0xd75d58],
    [`limus`, `aqua`, `victus`, 0x12e922],
    [`metallum`, `terra`, `vitreus`, 0xb5b7ce],
    [`mortuus`, `perditio`, `victus`, 0x7e727c],
    [`praecantatio`, `potentia`, `vacuos`, 0x9300ac],
    [`sano`, `ordo`, `victus`, 0xff292e],
    [`tenebrae`, `lux`, `vacuos`, 0x2c2b29],
    [`volatus`, `aer`, `motus`, 0xe5e6d8],
//Tier 3
    [`alienis`, `tenebrae`, `vacuos`, 0x775570],
    [`arbor`, `aer`, `herba`, 0x8e6932],
    [`auram`, `aer`, `praecantatio`, 0xe4b9d7],
    [`corpus`, `bestia`, `mortuus`, 0xf4448d],
    [`exanimis`, `mortuus`, `motus`, 0x373f03],
    [`spiritus`, `mortuus`, `victus`, 0x525252],
    [`vitium`, `perditio`, `praecantatio`, 0x8a007e],
//Tier 4
    [`cognitio`, `ignis`, `spiritus`, 0xf8c2b6],
    [`sensus`, `aer`, `spiritus`, 0x22cfef],
//Tier 5
    [`humanus`, `bestia`, `cognitio`, 0xffd4ba],
//Tier 6
    [`instrumentum`, `humanus`, `ordo`, 0x615bbd],
    [`lucrum`, `fames`, `humanus`, 0xe0be40],
    [`messis`, `herba`, `humanus`, 0xc6a778],
    [`perfodio`, `humanus`, `terra`, 0xded3db],
//Tier 7
    [`fabrico`, `humanus`, `instrumentum`, 0x808e77],
    [`machina`, `instrumentum`, `motus`, 0x817fa4],
    [`meto`, `instrumentum`, `messis`, 0xebae82],
    [`pannus`, `bestia`, `instrumentum`, 0xe6e6c4],
    [`telum`, `instrumentum`, `ignis`, 0xab4e58],
    [`tutamen`, `instrumentum`, `terra`, 0x00c5c5]
]
GTCEuStartupEvents.registry(`gtceu:material`, event => {
    event.create(`terra`)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff).secondaryColor(0x000000).iconSet(`dull`)
        .formula(`Te`);   
    event.create(`aqua`)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff).secondaryColor(0x000000).iconSet(`dull`)
        .formula(`Aq`);   
    event.create(`ignis`)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff).secondaryColor(0x000000).iconSet(`dull`)
        .formula(`Ig`);   
    event.create(`aer`)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xf8fc74).secondaryColor(0x000000).iconSet(`dull`)
        .formula(`Ae`);   
    event.create(`ordo`)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff).secondaryColor(0x000000).iconSet(`dull`)
        .formula(`Or`);  
    event.create(`perditio`)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff).secondaryColor(0x000000).iconSet(`dull`)
        .formula(`Pe`);

    event.create(`crystallized_ordo`)
        .gem()
        .color(0xdbd4e4).secondaryColor(0x000000).iconSet(`aspect`);
    event.create(`crystallized_aer`)
        .gem()
        .color(0xf8fc74).secondaryColor(0x000000).iconSet(`aspect`);
    event.create(`crystallized_terra`)
        .gem()
        .color(0x54c200).secondaryColor(0x000000).iconSet(`aspect`);
    event.create(`crystallized_ignis`)
        .gem()
        .color(0xe5650c).secondaryColor(0x000000).iconSet(`aspect`);
    event.create(`crystallized_aqua`)
        .gem()
        .color(0x50d7ff).secondaryColor(0x000000).iconSet(`aspect`);
    event.create(`crystallized_perditio`)
        .gem()
        .color(0x414244).secondaryColor(0x000000).iconSet(`aspect`);

    for (const[Name, Component1, Component2, Color] of global.ComplicatedAspects) {
    event.create(Name)
        .liquid (new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(Color).secondaryColor(0x000000).iconSet(`dull`)
        .components(Component1, Component2);
    event.create(`crystallized_${Name}`)
        .gem()
        .color(Color).secondaryColor(0x000000).iconSet(`aspect`);
    }
})