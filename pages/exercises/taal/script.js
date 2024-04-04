const week27woordArray32 = ["voorbeeld", "buurman", "huiswerk", "steden", "broertje", "gaatje", "goedkoop", "hierdoor", "maandag", "potlood", "tandarts", "vijftien", "geknoei", "sleutel", "bliksem", "regen", "vliegveld",
    "voorhoofd", "zakmes", "sneeuwpop", "boodschap", "speelplaats", "waaraan", "aankomst", "hoofdstad", "brandweer", "balpen", "brandstof", "maaltijd", "strandhuis", "aardig", "sigaar"];
const week27woordArray53 = ["kucht", "meeuw", "stuk", "trui", "pruim", "kust", "hangt", "schaar", "vlug", "trui", "brug", "krul", "rust", "spoor", "kost", "ploeg", "klop", "druk", "kroon",
    "steun", "stuur", "kruip", "koets", "scheef", "rups", "bruin", "stok", "broek", "kleur", "groot", "snoek", "zicht", "kruk", "kreun", "groet", "stout", "flauw", "dreun", "blauw",
    "grijs", "brood", "vocht", "klauw", "zwaard", "niets", "trouw", "woord", "knip", "berg", "groot", "stoel", "fruit", "kast"];
const week27woordArray68 = ["van", "been", "zes", "saus", "leer", "laat", "was", "gaat", "zaag", "boot", "kei", "dief", "ja", "kip", "beet", "bijl", "had", "laat", "pen", "hok",
    "dat", "kauw", "bij", "vis", "pen", "raam", "duik", "wei", "gum", "koe", "wat", "dik", "oog", "zout", "jan", "tel", "hap", "bier", "vaar", "wip", "zou",
    "peer", "dan", "bus", "koor", "deur", "raam", "lip", "lauw", "mes", "bal", "teen", "ren", "kan", "pop", "tien", "gat", "soep", "boot", "weg", "doos", "neus",
    "roos", "bok", "mug", "ruit", "ruik", "leg"];
const week28woordArray32 = ["messen", "onder", "werden", "anders", "achter", "sleutel", "bliksem", "regen", "kooien", "pauze", "gaten", "onze", "verder", "vinden", "planten", "werken", "zonder", "zorgen", "morgen", "zwarte",
                            "worden", "konden", "meestal", "landen", "helpen", "riempje", "moeilijk", "modder", "voedsel", "minder", "piraat", "figuur"];
const week28woordArray53 = ["licht", "plein", "knijp", "vrij", "iets", "wang", "zweer", "vorst", "blij", "fris", "trein", "vlees", "straat", "wierp", "kast", "vlug", "kreeft", "spoor", "zacht", "vlag", "half",
                            "schoen", "zing", "kleur", "zelf", "dweil", "leegt", "vast", "prijs", "school", "kwijt", "griep", "erg", "graag", "prei", "grap", "scherp", "bloei", "plein", "sluw", "berg", "baard", "dwaas", "kalf", "struik", "sta", "schreeuw", "stro",
                            "vraag", "dans", "helm", "zwerm", "stad"];
const week28woordArray68 = ["zal", "moet", "heet", "daar", "weg", "rauw", "boeg", "bes", "heen", "das", "man", "woog", "bot", "as", "heel", "mei", "pot", "zag", "boot", "wit", "wel", "pauw", "dag", "bon", "weer", "met", "dik", "zeil", "roos", "mik", "peen",
                            "kok", "jip", "voet", "was", "les", "bek", "kou", "dun", "pijl", "geef", "haar", "reis", "doen", "jos", "bak", "keel", "dit", "haan", "moet", "wel", "doel", "zit", "joop", "zout", "pak", "mam", "let", "piet", "vuur",
                            "dat", "web", "paus", "mag", "vier", "zag", "nauw", "heup"];

const element = document.getElementById("woord");
const buttonA = document.getElementById("a");
const buttonB = document.getElementById("b");
const buttonC = document.getElementById("c");
const tijdA = (60000 / week28woordArray32.length);
const tijdB = (60000 / week28woordArray53.length);
const tijdC = (60000 / week28woordArray68.length);

buttonA.addEventListener('click', () => {
    document.getElementById("container-buttons").remove();
    for (let i = 0; i < week28woordArray32.length; i++) {
        setTimeout(() => { element.innerHTML = week28woordArray32[i] }, tijdA * i);
    }
}, false)

buttonB.addEventListener('click', () => {
    document.getElementById("container-buttons").remove();
    for (let i = 0; i < week28woordArray53.length; i++) {
        setTimeout(() => { element.innerHTML = week28woordArray53[i] }, tijdB * i);
    }
}, false)

buttonC.addEventListener('click', () => {
    document.getElementById("container-buttons").remove();
    for (let i = 0; i < week28woordArray68.length; i++) {
        setTimeout(() => { element.innerHTML = week28woordArray68[i] }, tijdC * i);
    }
}, false)