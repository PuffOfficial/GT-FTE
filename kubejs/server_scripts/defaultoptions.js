// priority: 999
ServerEvents.loaded(event => {
    let server = event.server

    server.runCommandSilent(`ae2 channelmode infinite`)

    server.gameRules.set("doTraderSpawning", 'false')

    console.info("Gamerules set!");

})
PlayerEvents.loggedIn(event => {
    let player = event.player

    event.player.tell(["Welcome to ", Text.green("GT:FTE").bold(), ", Pioneer"]); // force recast to string
    event.player.tell(["Found bugs? Join my Discord! ", Text.blue("Discord Server")
        .underlined()
        .clickOpenUrl("https://discord.gg/KjzBXsGxBt").hover("P-Corp Server"), "."
    ]);

    if (player.level.difficulty == 'peaceful') {
        player.tell("§8§oCurrent difficulty is: " + player.level.difficulty.toString().toLowerCase() + ", using peaceful recipes")
    } else {
        player.tell("§8§oCurrent difficulty is: " + player.level.difficulty.toString().toLowerCase() + ", using default recipes")
    }
})
