// priority: 999
ServerEvents.loaded(event => {
    let server = event.server

    server.runCommandSilent(`ae2 channelmode infinite`)

    server.gameRules.set(`doTraderSpawning`, `false`)

    console.info(`Gamerules set!`);

})
PlayerEvents.loggedIn(event => {
    let player = event.player

    event.player.tell([`Welcome to <neon p=8 r=2 a=0.15><grad from=#7fddff to=#1E90FF hue uni>GT:FTE</grad></neon>, Pioneer`]); // force recast to string
    event.player.tell([`Found bugs? Join my `, Text.blue(`<turb a=0.5 f=1.5>Discord Server</turb>`)
        .underlined()
        .clickOpenUrl(`https://discord.gg/KjzBXsGxBt`).hover(`P-Corp Server`), `.`
    ]);
})
