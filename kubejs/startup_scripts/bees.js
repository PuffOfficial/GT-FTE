/*
const $ForestryBeeSpecies = Java.loadClass("forestry.api.apiculture.ForestryBeeSpecies")
const $ItemHiveFrame = Java.loadClass("forestry.apiculture.items.ItemHiveFrame")


ForestryEvents.apiculture(apiculture => {
  apiculture.registerSpecies('custom:honorium', ForestryTaxa.GENUS_END, 'testium', true, Color.of('#14c8dc')).setBody(new Color.of('#4ddc14'))
})

global.BeesCombs = [
  ['ferrous', '#3a3a3a', '#ffffff', 'iron', false, 2, $ForestryBeeSpecies.NOBLE, $ForestryBeeSpecies.INDUSTRIOUS],
  ['aurous', '#3a3a3a', '#ecce6c', 'gold', false, 1, $ForestryBeeSpecies.DEMONIC, $ForestryBeeSpecies.IMPERIAL],
  ['cuprous', '#3a3a3a', '#ba6b4c', 'copper', false, 2, $ForestryBeeSpecies.SAVANNA, $ForestryBeeSpecies.AUTOTROPHIC],
  ['argentous', '#3a3a3a', '#d5fdff', 'silver', false, 2, $ForestryBeeSpecies.SINISTER, $ForestryBeeSpecies.FIENDISH],
  ['plumbous', '#3a3a3a', '#39365c', 'lead', false, 1, $ForestryBeeSpecies.SINISTER, $ForestryBeeSpecies.FIENDISH],
  ['stannous', '#3a3a3a', '#ededed', 'tin', false, 1, $ForestryBeeSpecies.WARPED, $ForestryBeeSpecies.SCULK],
  ['hydrogenous', '#000000', '#4268e3', 'hydrogen', true, 2, $ForestryBeeSpecies.CULTIVATED, $ForestryBeeSpecies.EXOTIC],
  ['helious', '#000000', '#e9ef80', 'helium', true, 2, $ForestryBeeSpecies.ICY, $ForestryBeeSpecies.TRICKY],
  ['oxygenous', '#000000', '#87ebf0', 'oxygen', true, 2, $ForestryBeeSpecies.PHOTOSYNTHETIC, $ForestryBeeSpecies.FOREST],
  ['chlorous', '#000000', '#23533d', 'chlorine', true, 2, $ForestryBeeSpecies.TRICKY, $ForestryBeeSpecies.SINISTER],
]

global.OreBeesCombs = [
  ['tungstate', '#3a3a3a', '#e0ffc4', 'tungstate', false]
]
 



StartupEvents.registry('item', register => { 
  function RegisterComb(Name, OutlineColor, BodyColor, Resource, IsFluid, CentrifugeType) {
    register.create(`${Name}_comb`)
      .textureJson({layer0: `kubejs:item/comb/comb`,layer1: `kubejs:item/comb/comb_outline`})
      .color(0, BodyColor).color(1, OutlineColor)
      .tag("forestry:combs")
    register.create(`${Name}_comb_extract`)
      .textureJson({layer0: `kubejs:item/comb/pulp`,layer1: `kubejs:item/comb/pulp_outline`})
      .color(0, BodyColor).color(1, OutlineColor)
  }
  for (const [Name, Color1, Color2] of global.BeesCombs) {
    RegisterComb(Name, Color1, Color2)
  }

//	public static final FeatureItem<ItemHiveFrame> FRAME_IMPREGNATED = REGISTRY.item(() -> new ItemHiveFrame(240, 0.4f), "frame_impregnated");

})

ForestryEvents.apiculture(apiculture => {
  function RegisterBee(Name, OutlineColor, BodyColor, Resource, isFluid, CentrifugeType, Bee1, Bee2) {
  apiculture.registerSpecies(`custom:${Name}`, ForestryTaxa.GENUS_VANILLA, 'gregorious', true,Color.of(OutlineColor))
    .setBody(new Color.of(BodyColor)) //Color of the species, HEX!
    .addProduct(`kubejs:${Name}_comb`, 0.50) //Item produced by the bee, chance
    .addMutations(mutations => {
      mutations.add(Bee1, Bee2, 0.10)
    }); 
  }
  for (const [Name, Color1, Color2, Resource, IsFluid, CentrifugeType, Bee1, Bee2] of global.BeesCombs) {
    RegisterBee(Name, Color1, Color2, Resource, IsFluid, CentrifugeType, Bee1, Bee2)
  }
})
*/
