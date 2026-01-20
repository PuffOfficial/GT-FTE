const MaterialTooltips = [
    ["infinity", `<rainb>`, ``]
]
const Flags = ((material) => {
    return {
    ingot: [`gtceu:${material}_ingot`, Component.translatable("gtfte.tagprefix.ingot", "")],
    plate: [`gtceu:${material}_plate`, Component.translatable("gtfte.tagprefix.plate", "")],
    rod: [`gtceu:${material}_rod`, Component.translatable("gtfte.tagprefix.rod", "")],
    screw: [`gtceu:${material}_screw`, Component.translatable("gtfte.tagprefix.screw", "")],
    bolt: [`gtceu:${material}_bolt`, Component.translatable("gtfte.tagprefix.bolt", "")],
    double_plate: [`gtceu:double_${material}_plate`, Component.translatable("gtfte.tagprefix.double_plate", "")],
    gear: [`gtceu:${material}_gear`, Component.translatable("gtfte.tagprefix.gear", "")],
    small_gear: [`gtceu:small_${material}_gear`, Component.translatable("gtfte.tagprefix.small_gear", "")],
    dust: [`gtceu:${material}_dust`, Component.translatable("gtfte.tagprefix.dust", "")],
    small_dust: [`gtceu:small_${material}_dust`, Component.translatable("gtfte.tagprefix.small_dust", "")],
    tiny_dust: [`gtceu:tiny_${material}_dust`, Component.translatable("gtfte.tagprefix.tiny_dust", "")],
    nugget: [`gtceu:${material}_nugget`, Component.translatable("gtfte.tagprefix.nugget", "")],
    ring: [`gtceu:${material}_ring`, Component.translatable("gtfte.tagprefix.ring", "")],
    }
})
ItemEvents.tooltip(Tooltip => {
for (const [Material, firstEdit, SecondEdit] of MaterialTooltips) {

    let AllFlags = Flags(Material)
    for (const [type, [flag, prefix]] of Object.entries(AllFlags)) {
        let f = flag;
        let p = prefix;
        Tooltip.addAdvanced(f, (item, advanced, text) => {
            console.log(flag, prefix)
            text.add(1, Text.of(Component.translatable(`gtfte.tooltip.material.${Material}`, Text.of(`${firstEdit}${p.getString().toLowerCase()}${SecondEdit}`))))
        })
    };
};});