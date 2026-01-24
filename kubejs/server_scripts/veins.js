const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")
const Registries = Java.loadClass("net.minecraft.core.registries.Registries")
const ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")


GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
    //CUSTOM
    // MARK: ABYDOS:
    event.add("abydos/tungstate_pyrite", vein => {
        vein.weight(15)
        vein.density(0.15)
        vein.clusterSize(30)
        vein.layer("abydos_stone")
        vein.dimensions("sgjourney:abydos")
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Powellite).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Scheelite).size(1, 2))
            )
        )
    })

    event.add("abydos/copper", vein => {
        vein.weight(25)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("abydos_stone")
        vein.dimensions("sgjourney:abydos")
        vein.heightRangeUniform(15, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Chalcopyrite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Iron).size(1, 2))
            )
        )
    })

    event.add("abydos/iron", vein => {
        vein.weight(30)
        vein.density(0.3)
        vein.clusterSize(15)
        vein.layer("abydos_stone")
        vein.dimensions("sgjourney:abydos")
        vein.heightRangeUniform(10, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Goethite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Hematite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Goethite)
            .placement("above")
        )
    })
    event.add("abydos/lubricant", vein => {
        vein.weight(20)
        vein.density(0.15)
        vein.clusterSize(12)
        vein.layer("abydos_stone")
        vein.dimensions("sgjourney:abydos")
        vein.heightRangeUniform(10, 35)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Soapstone).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Talc).size(1, 5))
                .layer(l => l.weight(1).mat(GTMaterials.GlauconiteSand).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(1, 2))
            )
        )
    })
    event.add("abydos/coal", vein => {
        vein.weight(40)
        vein.density(0.30)
        vein.clusterSize(43)
        vein.layer("abydos_stone")
        vein.dimensions("sgjourney:abydos")
        vein.heightRangeUniform(55, 100)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Coal).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Graphite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Coal)
            .placement("above")
        )
    })
    event.add("abydos/naquadah", vein => {
        vein.weight(10)
        vein.density(0.15)
        vein.clusterSize(33)
        vein.layer("abydos_stone")
        vein.dimensions("sgjourney:abydos")
        vein.heightRangeUniform(-10, 55)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Naquadah).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Naquadah).size(1, 2))
                .layer(l => l.weight(6).mat(GTMaterials.Naquadah).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Plutonium239).size(1, 2))
            )
        )
    })

    // MARK: UNITAS:
    event.add("unitas/sheldonite", vein => {
        vein.weight(10)
        vein.density(0.30)
        vein.clusterSize(35)
        vein.layer("unitas_sand")
        vein.dimensions("sgjourney:unitas")
        vein.heightRangeUniform(60, 100)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Platinum).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Bornite).size(2, 6))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bornite)
            .placement("above")
        )
    })
    event.add("unitas/monazite", vein => {
        vein.weight(15)
        vein.density(0.20)
        vein.clusterSize(35)
        vein.layer("unitas_sand")
        vein.dimensions("sgjourney:unitas")
        vein.heightRangeUniform(-20, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 2))
            )
        )
    })
    event.add("unitas/lapis", vein => {
        vein.weight(15)
        vein.density(0.20)
        vein.clusterSize(35)
        vein.layer("unitas_sand")
        vein.dimensions("sgjourney:unitas")
        vein.heightRangeUniform(-20, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Lazurite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Sodalite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Lapis).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Calcite).size(1, 2))
            )
        )
    })
    // MARK: CAVUM TENEBRAE:
    event.add("cavum_tenebrae/sombralite", vein => {
        vein.weight(15)
        vein.density(0.15)
        vein.clusterSize(25)
        vein.layer("cavum_tenebrae_stone")
        vein.dimensions("sgjourney:cavum_tenebrae")
        vein.heightRangeUniform(60, 180)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get("sombralite")).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.get("fluorite")).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Diamond).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Cobaltite).size(1, 6))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .placement("above")
        )
    })
    event.add("cavum_tenebrae/pitchblende", vein => {
        vein.weight(24)
        vein.density(0.25)
        vein.clusterSize(45)
        vein.layer("cavum_tenebrae_stone")
        vein.dimensions("sgjourney:cavum_tenebrae")
        vein.heightRangeUniform(60, 180)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Pitchblende).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Uraninite).size(1, 6))
            )
        )
    })
    // MARK: CHULAK
    event.add("chulak/cassiterite", vein => {
        vein.weight(24)
        vein.density(0.25)
        vein.clusterSize(45)
        vein.layer("chulak_stone")
        vein.dimensions("sgjourney:chulak")
        vein.heightRangeUniform(20, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.CassiteriteSand).size(2, 4))
            )
        )
    })
    event.add("chulak/rock_salt", vein => {
        vein.weight(10)
        vein.density(0.15)
        vein.clusterSize(60)
        vein.layer("chulak_stone")
        vein.dimensions("sgjourney:chulak")
        vein.heightRangeUniform(10, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.RockSalt).size(1, 7))
                .layer(l => l.weight(2).mat(GTMaterials.Salt).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.TricalciumPhosphate).size(2, 4))
            )
        )
    })
    event.add("chulak/barite", vein => {
        vein.weight(20)
        vein.density(0.30)
        vein.clusterSize(20)
        vein.layer("chulak_stone")
        vein.dimensions("sgjourney:chulak")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Barite).size(1, 7))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(2, 4))
            )
        )
    })
    event.add("chulak/quartz", vein => {
        vein.weight(10)
        vein.density(0.60)
        vein.clusterSize(60)
        vein.layer("chulak_stone")
        vein.dimensions("sgjourney:chulak")
        vein.heightRangeUniform(20, 35)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Quartzite).size(1, 5))
                .layer(l => l.weight(2).mat(GTMaterials.NetherQuartz).size(3, 8))
            )
        )
    })
    event.add("chulak/lepidolite", vein => {
        vein.weight(10)
        vein.density(0.60)
        vein.clusterSize(60)
        vein.layer("chulak_stone")
        vein.dimensions("sgjourney:chulak")
        vein.heightRangeUniform(20, 25)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Lepidolite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Spodumene).size(1, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Pollucite).size(3, 8))
            )
        )
    })
})
// MARK: BEDROCK FLUIDS:
GTCEuServerEvents.fluidVeins(event => {

    event.remove("gtceu:heavy_oil_deposit")
    event.remove("gtceu:light_oil_deposit")
    event.remove("gtceu:oil_deposit")
    event.remove("gtceu:raw_oil_deposit")
    event.remove("gtceu:salt_water_deposit")
    event.remove("gtceu:natural_gas_deposit")

    event.add("gtfte:overworld/salty_mixture_deposit", vein => {
        vein.dimensions("minecraft:overworld")
        vein.fluid(() => Fluid.of("gtceu:salty_mixture").fluid)
        vein.weight(5)
        vein.minimumYield(80)
        vein.maximumYield(150)
        vein.depletionAmount(10)
        vein.depletionChance(20)
        vein.depletedYield(20)
    })
    event.add("gtfte:overworld/natural_gas", vein => {
        vein.dimensions("minecraft:overworld")
        vein.fluid(() => Fluid.of("gtceu:natural_gas").fluid)
        vein.weight(5)
        vein.minimumYield(120)
        vein.maximumYield(200)
        vein.depletionAmount(20)
        vein.depletionChance(30)
        vein.depletedYield(10)
    })

    event.add("gtfte:cavum_tenebrae/raw_oil", vein => {
        vein.dimensions("sgjourney:cavum_tenebrae")
        vein.fluid(() => Fluid.of("gtceu:oil_medium").fluid)
        vein.weight(100)
        vein.minimumYield(500)
        vein.maximumYield(1000)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(20)
    })
    event.add("gtfte:cavum_tenebrae/oil", vein => {
        vein.dimensions("sgjourney:cavum_tenebrae")
        vein.fluid(() => Fluid.of("gtceu:oil").fluid)
        vein.weight(100)
        vein.minimumYield(500)
        vein.maximumYield(1000)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(20)
    })
    event.add("gtfte:cavum_tenebrae/heavy_oil", vein => {
        vein.dimensions("sgjourney:cavum_tenebrae")
        vein.fluid(() => Fluid.of("gtceu:oil_heavy").fluid)
        vein.weight(100)
        vein.minimumYield(500)
        vein.maximumYield(1000)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(20)
    })
    event.add("gtfte:cavum_tenebrae/heavy_oil", vein => {
        vein.dimensions("sgjourney:cavum_tenebrae")
        vein.fluid(() => Fluid.of("gtceu:oil_heavy").fluid)
        vein.weight(100)
        vein.minimumYield(500)
        vein.maximumYield(1000)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(20)
    })
    event.add("gtfte:cavum_tenebrae/light_oil", vein => {
        vein.dimensions("sgjourney:cavum_tenebrae")
        vein.fluid(() => Fluid.of("gtceu:oil_light").fluid)
        vein.weight(100)
        vein.minimumYield(500)
        vein.maximumYield(1000)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(20)
    })
})