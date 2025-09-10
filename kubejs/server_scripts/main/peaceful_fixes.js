ServerEvents.loaded(event => {
global.localserver = Utils.server 
})
ServerEvents.recipes(event => {
    //PEACEFUL
    
    if (global.localserver.getWorldData().difficulty == 'peaceful') {
        console.log("Peaceful Recipes")
    } else {
    //DEFAULT RECIPES
        console.log("NOT Peaceful Recipes")
    event.shapeless('minecraft:stick', [
        'kubejs:stick_fragments',
        'kubejs:stick_fragments',
        'minecraft:string'
    ])    
}
})