let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i];
    let str = (val === "") ? "(chaîne vide)" : String(val);
    let truthy = val ? "truthy" : "falsy";
    console.log(str, "->", truthy);
}