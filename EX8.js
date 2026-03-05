let nom = " Fatima ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

console.log("nom               :", nom.trim() || "Inconnu", "(corrigé : espaces supprimés)");

let ageCorrige = parseInt(age, 10);
console.log("age               :", isNaN(ageCorrige) || ageCorrige < 0 ? "invalide" : ageCorrige, "(valide)");

let emailValide = email.includes("@") && email.split("@")[1]?.includes(".");
console.log("email             :", emailValide ? email : email + " (invalide : pas de point après @)");

let scoreExtrait = parseInt(scoreJeu, 10);
console.log("scoreJeu          :", isNaN(scoreExtrait) ? "invalide" : scoreExtrait, "(extrait depuis \"150pts\")");

let adminBool = estAdmin === "true";
console.log("estAdmin          :", adminBool, "(attention : Boolean(\"false\") vaut true, conversion manuelle requise)");

console.log("derniereConnexion :", derniereConnexion ?? "Jamais connecté", "(valeur par défaut ??)");

let nbConnex = Number(nombreConnexions);
console.log("nombreConnexions  :", nbConnex === 0 ? "Aucune connexion" : nbConnex, `(${nbConnex} après conversion)`);

console.log("================================");