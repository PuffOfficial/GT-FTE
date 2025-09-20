ItemEvents.rightClicked("kubejs:the_watch_of_times", interacted => {
    let server = interacted.server
    let player = interacted.player

    if (server.getWorldData().gameRules == false) {
        server.gameRules.set("doDaylightCycle", true)
        player.tell("§o§7You see as time goes by...")
    } else {
        server.gameRules.set("doDaylightCycle", false)
        player.tell("§o§7You see as celestial time freezes...")
    }
})