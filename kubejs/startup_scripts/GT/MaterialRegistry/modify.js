GTCEuStartupEvents.registry('gtceu:material', event => {

    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
    const $GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty');
    const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');

        const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');

    GTMaterials.BlueAlloy.setFormula("(ᛗFe)2(Si(FeS2)5(CrAl2O3)Hg3(AgAu))4Ag").setComponents("1x silver", "4x electrotine", "2x mana_steel")
    GTMaterials.Uranium235.addFlags(GTMaterialFlags.GENERATE_RING)

    GTMaterials.Polonium.setProperty($PropertyKey.INGOT, new $IngotProperty)
    GTMaterials.Polonium.addFlags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)
})  