let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal, "MAD");

let reduction = 0;
if (codePromo !== null && estMembre) {
    reduction = sousTotal * (reductionPourcentage / 100);
}
console.log("Réduction :", reduction, "MAD");

let total = sousTotal - reduction;
console.log("Total :", total, "MAD");

let paiementAccepte = soldeCompte >= total;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

let nouveauSolde = paiementAccepte ? soldeCompte - total : soldeCompte;

console.log("===== RÉCAPITULATIF =====");
console.log("Produit     :", nomProduit);
console.log("Quantité    :", quantite);
console.log("Prix unit.  :", prix, "MAD");
console.log("Sous-total  :", sousTotal, "MAD");
console.log("Réduction   :", reduction, "MAD");
console.log("Total       :", total, "MAD");
console.log("Statut      :", paiementAccepte ? "Paiement accepté" : "Paiement refusé");
console.log("Solde       :", nouveauSolde, "MAD");
console.log("========================");