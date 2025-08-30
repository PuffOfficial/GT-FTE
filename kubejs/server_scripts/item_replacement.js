let debounce = 0;
BlockEvents.rightClicked(event => {
  const now = Date.now();
  if (now - debounce < 100) return;
  debounce = now;
  const {player, block, facing, player: {mainHandItem}} = event;
    
if (mainHandItem.id === 'gtceu:terrasteel_ingot' && block.id == 'minecraft:beacon' && event.player.isCrouching() == true){
        
    mainHandItem.count--;
        
    block.popItemFromFace('botania:terrasteel_ingot', facing)
        
    player.tell("Replaced your GTCEU terrasteel ingot with Botania one!");
        
    event.cancel();
  
};
 if (mainHandItem.id === 'gtceu:gaia_steel_ingot' && block.id == 'minecraft:beacon' && event.player.isCrouching() == true){
        
    mainHandItem.count--;
        
    block.popItemFromFace('botania:gaia_ingot', facing)
        
    player.tell("Replaced your GTCEU Gaia ingot with Botania one!");
        
    event.cancel();
  
};});