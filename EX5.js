let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

nombres.forEach(n => {
    let categorie = "";

    if (Number.isNaN(n)) {
        categorie = "INVALIDE";
    } else if (n === Infinity || n === -Infinity) {
        categorie = "INFINI";
    } else if (n === -0) {
        categorie = "ZERO NEGATIF";
    } else if (Number.isInteger(n)) {
        if (n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER) {
            categorie = "ENTIER SUR";
        } else {
            categorie = "ENTIER HORS LIMITES";
        }
    } else {
        categorie = "DECIMAL";
    }

    console.log(n, "->", categorie);
});