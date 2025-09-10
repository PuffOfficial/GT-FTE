// priority: 999
ServerEvents.loaded(event => {
    let server = event.server

    server.runCommandSilent(`ae2 channelmode infinite`)
    
    server.gameRules.set("doTraderSpawning", 'false')

    console.info("Gamerules set!");

})
ServerEvents.loaded(event => {
global.server = Utils.server 
})
PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", Text.green("GT:FTE").bold(), ", Pioneer"]); // force recast to string
    event.player.tell(["Report any issues to ", Text.blue("Discord Server")
        .underlined()
        .clickOpenUrl("https://discord.gg/KjzBXsGxBt").hover("P-Corp Server"), "."
    ]);

    if (server.getWorldData().difficulty == 'peaceful') {
        event.player.tell("§8§oCurrent difficulty is: " + global.worldServer.getWorldData().difficulty.toString().toLowerCase() + ", using peaceful recipes")
    } else {
        event.player.tell("§8§oCurrent difficulty is: " + global.worldServer.getWorldData().difficulty.toString().toLowerCase() + ", using default recipes")
    }
})
