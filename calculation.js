

function init() {
    let base_atk = document.getElementById("base_atk").value;
    let base_atk_buff = document.getElementById("base_atk_buff").value;
    let insp = document.getElementById("insp").value;
    let atk_mult = document.getElementById("atk_mult").value;

    let calculated_damage = calculateDamageValue(base_atk, base_atk_buff, insp, atk_mult);

    console.log("Calculated Damage: " + calculated_damage);

    document.getElementById("calced_damage").innerHTML = "Calculated Damage: " + calculated_damage;
}


function calculateDamageValue(base_atk, base_atk_buff, insp, atk_mult) {
    base_atk = parseFloat(base_atk);
    base_atk_buff = parseFloat(base_atk_buff) / 100;
    insp = parseFloat(insp);
    atk_mult = parseFloat(atk_mult);
    return (base_atk * (1 + base_atk_buff) + insp) * atk_mult;
}

