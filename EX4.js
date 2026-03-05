const paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    ["1\n", "1"],
    [" \t\n ", 0]
];

let countDifferent = 0;

paires.forEach(([x, y]) => {
    let egalLarge = x == y;
    let egalStrict = x === y;
    console.log(`${x} == ${y}  -> ${egalLarge} | ${x} === ${y}  -> ${egalStrict}`);
    if (egalLarge !== egalStrict) countDifferent++;
});

console.log("---");
console.log(`${countDifferent} paire(s) où == et === donnent des résultats différents`);