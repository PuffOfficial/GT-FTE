ServerEvents.recipes(event => { 
    event.remove({ id: /space_station/ })
    const orbits = ["earth", "moon", "mars", "venus", "glacio", "mercury"]
    orbits.forEach(dim => {
        event.custom({
            "type": "ad_astra:space_station_recipe",
            "dimension": `ad_astra:${dim}_orbit`,
            "ingredients": [
                {
                    "count": 16,
                    "ingredient": {
                        "item": "gtceu:double_tungsten_steel_plate"
                    }
                },
                {
                    "count": 4,
                    "ingredient": {
                        "tag": "gtceu:circuits/luv"
                    }
                },
                {
                    "count": 4,
                    "ingredient": {
                        "item": "gtceu:iv_robot_arm"
                    }
                },
                {
                    "count": 2,
                    "ingredient": {
                        "item": "gtceu:iv_emitter"
                    }
                }
            ],
            "structure": "ad_astra:space_station"
        })
    })
})