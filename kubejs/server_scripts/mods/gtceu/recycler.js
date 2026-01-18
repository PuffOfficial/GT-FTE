ServerEvents.recipes(event => {
    event.recipes.gtceu.recycling(`gtfte:scrap`)
        .itemInputs(`#gtfte:anything`)
        .chancedOutput(`gtceu:scrap_gem`, 5000, 5000)
        .EUt(GTValues.VA[GTValues.LV]/2)
});