let MaterialTypeList = [
    [`ingot`, `ingot`],
    [`plate`, `plate`],
    [`rod`, `rod`],
    [`bolt`, `bolt`],
    [`screw`, `screw`],
    [`double_plate`, `plateDouble`],
    [`gear`, `gear`],
    [`small_gear`, `gearSmall`],
    [`ring`, `ring`],
    [`dust`, `dust`]
]

// Hello you fellow code digger! Welcome to so called "Meta materials" that I made to fix my issue with shaders on items, feel free to use, but PLEASE mention puff_official.
function GenerateMetaMaterial(IconSet, Name, MaterialToReplace) {
    register.create(``)

    GTCEuStartupEvents.materialModification(event => {
        eval(`TagPrefix.${Name[2]}`).setIgnored(GTMaterialRegistry.getMaterial(MaterialToReplace))
    })
    StartupEvents.postInit(event => {
        eval(`TagPrefix.${Name[2]}`).setIgnored(GTMaterialRegistry.getMaterial(MaterialToReplace))
    })
}
