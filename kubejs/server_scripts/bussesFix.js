let HatchTiers = ["ulv", "lv"]
const HatchType = [
    ["hatch", "minecraft:glass"], 
    ["bus", "minecraft:chest"]
]

ServerEvents.recipes(event => {
    HatchTiers.forEach(Tier => {
    for (const [Type, Resource] of HatchType){
            event.shapeless(`gtceu:${Tier}_input_${Type}`, [
            `gtceu:${Tier}_machine_hull`,
            `#forge:tools/screwdrivers`,
            Resource
        ])
}})
})
