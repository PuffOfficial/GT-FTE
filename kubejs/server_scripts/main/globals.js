global.ULV = (() => {
  const tier = "ulv";
  return {
    Piston: `kubejs:${tier}_electric_piston`,
    Conveyor: `kubejs:${tier}_conveyor_module`,
    Motor: `kubejs:${tier}_electric_motor`,
    RobotArm: `kubejs:${tier}_robot_arm`,
    Pump: `kubejs:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:red_alloy_${amount}_cable`,
    Wire: (amount) => `gtceu:red_alloy_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`
  };
})();
global.LV = (() => {
  const tier = "lv";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:tin_${amount}_cable`,
    Wire: (amount) => `gtceu:tin_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();
global.MV = (() => {
  const tier = "mv";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:copper_${amount}_cable`,
    Wire: (amount) => `gtceu:copper_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();
global.HV = (() => {
  const tier = "hv";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:gold_${amount}_cable`,
    Wire: (amount) => `gtceu:gold_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();
global.EV = (() => {
  const tier = "ev";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:aluminium_${amount}_cable`,
    Wire: (amount) => `gtceu:aluminium_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();
global.IV = (() => {
  const tier = "iv";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:platinum_${amount}_cable`,
    Wire: (amount) => `gtceu:platinum_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();
global.LuV = (() => {
  const tier = "luv";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:niobium_titanium_${amount}_cable`,
    Wire: (amount) => `gtceu:niobium_titanium_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();
global.ZPM = (() => {
  const tier = "zpm";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:vanadium_gallium_${amount}_cable`,
    Wire: (amount) => `gtceu:vanadium_gallium_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();
global.UV = (() => {
  const tier = "uv";
  return {
    Piston: `gtceu:${tier}_electric_piston`,
    Conveyor: `gtceu:${tier}_conveyor_module`,
    Motor: `gtceu:${tier}_electric_motor`,
    RobotArm: `gtceu:${tier}_robot_arm`,
    Pump: `gtceu:${tier}_electric_pump`,
    Hull: `gtceu:${tier}_machine_hull`,
    Casing: `gtceu:${tier}_machine_casing`,
    Circuit: `#gtceu:circuits/${tier}`,
    FieldGenerator: `gtceu:${tier}_field_generator`,
    CircuitMulti: (amount) => `${amount}x #gtceu:circuits/${tier}`,
    Cable: (amount) => `gtceu:yttrium_barium_cuprate_${amount}_cable`,
    Wire: (amount) => `gtceu:yttrium_barium_cuprate_${amount}_wire`,
    Coil: `gtceu:${tier}_voltage_coil`,
    Emitter: `gtceu:${tier}_emitter`,
    Sensor: `gtceu:${tier}_sensor`
  };
})();

global.tools = {
  AnyScrewdriver: '#gtceu:tools/crafting_screwdrivers',
  AnyWrench: '#gtceu:tools/crafting_wrenches',
  AnyHammer: '#gtceu:tools/crafting_hammers',
  AnyWireCutter: '#gtceu:tools/crafting_wire_cutters',
  AnyCrowbar: '#gtceu:tools/crafting_crowbars',
  AnyFile: '#gtceu:tools/crafting_files',
  AnySaw: '#gtceu:tools/crafting_saws',
  AnyMallet: '#gtceu:tools/crafting_mallets'
};