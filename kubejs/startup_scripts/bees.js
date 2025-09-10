ForestryEvents.apiculture(apiculture => {
  apiculture.registerSpecies('custom:honorium', ForestryTaxa.GENUS_END, 'testium', true, Color.of('#14c8dc')).setBody(new Color.of('#4ddc14'))
})

global.BeesCombs = [
  ['ferrous', '#3a3a3a', '#ffffff', 'iron', false, 2],
  ['aurous', '#3a3a3a', '#ecce6c', 'gold', false, 1],
  ['cuprous', '#3a3a3a', '#ba6b4c', 'copper', false, 2],
  ['argentous', '#3a3a3a', '#d5fdff', 'silver', false, 2],
  ['plumbous', '#3a3a3a', '#39365c', 'lead', false, 1],
  ['stannous', '#3a3a3a', '#ededed', 'tin', false, 1],
  ['hydrogenous', '#000000', '#4268e3', 'hydrogen', true, 2],
  ['helious', '#000000', '#e9ef80', 'helium', true, 2],
]



StartupEvents.registry('item', register => { 
  function RegisterComb(Name, OutlineColor, BodyColor, Resource, IsFluid, CentrifugeType) {
    register.create(`${Name}_comb`)
      .textureJson({layer0: `kubejs:item/comb/comb`,layer1: `kubejs:item/comb/comb_outline`})
      .color(0, BodyColor).color(1, OutlineColor)
    register.create(`${Name}_comb_extract`)
      .textureJson({layer0: `kubejs:item/comb/pulp`,layer1: `kubejs:item/comb/pulp_outline`})
      .color(0, BodyColor).color(1, OutlineColor)
  }
  for (const [Name, Color1, Color2] of global.BeesCombs) {
    RegisterComb(Name, Color1, Color2)
  }
})

ForestryEvents.apiculture(apiculture => {
  function RegisterBee(Name, OutlineColor, BodyColor, Resource, isFluid, CentrifugeType) {
  apiculture.registerSpecies(`custom:${Name}`, ForestryTaxa.GENUS_VANILLA, 'gregorious', true,Color.of(OutlineColor))
    .setBody(new Color.of(BodyColor)) //Color of the species, HEX!
    .addProduct(`kubejs:${Name}_comb`, 0.50) //Item produced by the bee, chance
  }
  for (const [Name, Color1, Color2] of global.BeesCombs) {
    RegisterBee(Name, Color1, Color2)
  }
})

