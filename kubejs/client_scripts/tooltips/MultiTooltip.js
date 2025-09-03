const $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting");
const $Style = Java.loadClass("net.minecraft.network.chat.Style");
const $TextColor = Java.loadClass("net.minecraft.network.chat.TextColor")


ItemEvents.tooltip(event => {
    function SimpleTooltip(input) {
        event.addAdvanced(`gtceu:${input}`, (item, advanced, text) => {
            text.add(1, Text.of(Component.translatable(`gtfte.tooltip.${input}`)))
        })
    }
    function AdvancedTooltip(input, key1, arg1, key2, arg2) {
        event.addAdvanced(input, (item, advanced, text) => {
            text.add(1, Text.of(Component.translatable(`gtfte.tooltip.${key1}`, arg1)))
            text.add(2, Text.of(Component.translatable(`gtfte.tooltip.${key2}`, arg2)))
        })
    }

SimpleTooltip("bedrock_crusher")
SimpleTooltip("daycycle_simulation_chamber")
SimpleTooltip("energizer")

AdvancedTooltip("gtceu:alchemical_crucible", 'alchemical_crucible_1', "", 'alchemical_crucible_2', "")

AdvancedTooltip("gtceu:etbf", "defaultParallel", "§58", 'etbf', "")
AdvancedTooltip("gtceu:primitive_bender", "", "", "primitive", "")
AdvancedTooltip("gtceu:primitive_electric_furnace", "defaultParallel", "§58", "primitive", "")
AdvancedTooltip("gtceu:primitive_alloy_smelter", "defaultParallel", "§54", "primitive", "")

})