let Difficulty = Java.loadClass("net.minecraft.world.Difficulty")

ServerEvents.loaded(e => e.server.runCommandSilent('reload'))

ServerEvents.recipes(event => {
  let server = Utils.server
  if (server.getLevel('minecraft:overworld').getDifficulty() == Difficulty.PEACEFUL) {
    //---------------------------// MARK: Peaceful
    event.shaped('kubejs:stone_stick', [
      'A  ',
      'A  ',
      '   '
    ], {
      A: 'minecraft:cobblestone',
    }
    );
    event.shaped('kubejs:stone_spade', [
      ' C ',
      'BA ',
      '   '
    ], {
      A: 'minecraft:cobblestone',
      B: 'kubejs:stone_stick',
      C: 'exdeorum:stone_pebble',
    }
    );
    //---------------------------// MARK: Normal
  } else {
    //---------------------------//
    event.shapeless('minecraft:stick', [
      'kubejs:stick_fragments',
      'kubejs:stick_fragments',
      'minecraft:string'
    ])
    //---------------------------//
  };
});     