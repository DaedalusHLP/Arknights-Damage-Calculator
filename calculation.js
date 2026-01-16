

function init() {
    let base_atk = document.getElementById("base_atk").value;
    let base_atk_buff = document.getElementById("base_atk_buff").value;
    let insp = document.getElementById("insp").value;
    let atk_mult = document.getElementById("atk_mult").value;
    let base_def = document.getElementById("base_def").value;
    let flat_def_increase = document.getElementById("flat_def_buff").value;
    let scaling_defense_increase = document.getElementById("def_percent_buff").value;
    let flat_def_decrease = document.getElementById("flat_def_debuff").value;
    let scaling_defense_decrease = document.getElementById("def_percent_debuff").value;
    let phys_amp = document.getElementById("phys_amp").value;
    let phys_red = document.getElementById("phys_red").value;

    let calculated_attack = calculateAttackValue(base_atk, base_atk_buff, insp, atk_mult);
    console.log("Calculated Attack: " + calculated_attack);
    let calculated_defense = calculateDefenseValue(base_def, flat_def_increase, scaling_defense_increase, flat_def_decrease, scaling_defense_decrease);
    console.log("Calculated Defense: " + calculated_defense);
    let physical_damage = calculatePhysicalDamage(calculated_attack, calculated_defense, 0, 0, phys_amp, phys_red);
    console.log("Physical Damage: " + physical_damage);


    document.getElementById("calced_damage").innerHTML = "Calculated Damage: " + physical_damage;
}


function calculateAttackValue(base_atk, base_atk_buff, insp, atk_mult) {
    base_atk = parseFloat(base_atk);
    base_atk_buff = parseFloat(base_atk_buff) / 100;
    insp = parseFloat(insp);
    atk_mult = parseFloat(atk_mult);
    return (base_atk * (1 + base_atk_buff) + insp) * atk_mult;
}

function calculateDefenseValue(base_def, flat_def_increase, scaling_defense_increase, flat_def_decrease, scaling_defense_decrease) {
    base_def = parseFloat(base_def);
    flat_def_increase = parseFloat(flat_def_increase);
    scaling_defense_increase = parseFloat(scaling_defense_increase) / 100;
    flat_def_decrease = parseFloat(flat_def_decrease);
    scaling_defense_decrease = parseFloat(scaling_defense_decrease) / 100;
    return ((base_def + flat_def_increase) * (1 + scaling_defense_increase) - flat_def_decrease) * (1 - scaling_defense_decrease);
}

function calculatePhysicalDamage(attack_value, defense_value, flat_defense_ignore, scaling_defense_ignore, amp, red) {
    attack_value = parseFloat(attack_value);
    defense_value = parseFloat(defense_value);
    flat_defense_ignore = parseFloat(flat_defense_ignore);
    scaling_defense_ignore = parseFloat(scaling_defense_ignore) / 100;
    amp = parseFloat(amp);
    red = parseFloat(red);

    return (attack_value - (defense_value - flat_defense_ignore) * (1 - scaling_defense_ignore)) * (amp * red);
}

