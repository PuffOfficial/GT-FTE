let conversionList = [
]


ServerEvents.recipes(event => {
    conversionList.forEach(([item1, item2]) => {
        event.shapeless(item2, [
            item1,
        ]);
    });
})