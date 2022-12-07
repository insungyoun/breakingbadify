// The two symbol arrays consist of all lowercased element symbols

const twoCharacterSymbols = ['he', 'li', 'be', 'ne', 'na', 'mg', 'al', 'si', 'cl', 'ar', 'ca', 'sc', 'ti', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga', 'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'in', 'sn', 'sb', 'te', 'xe', 'cs', 'ba', 'la', 'hf', 'ta', 're', 'os', 'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po', 'at', 'rn', 'fr', 'ra', 'ac', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'nh', 'fl', 'mc', 'lv', 'ts', 'og', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'th', 'pa', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr'];
const oneCharacterSymbols = ['h', 'b', 'c', 'n', 'o', 'f', 'p', 's', 'k', 'v', 'y', 'i', 'w', 'u'];

(async () => {
    let name = 'Insung Youn';
    let elementFound = false;
    twoCharacterLoop:
    for (let i = 0; i < name.length - 1; i++) {
        if (twoCharacterSymbols.includes(name.substring(i, i + 2).toLowerCase())) {
            console.log(`${name.substring(0, i)}` + `${name[i].toUpperCase()}` + `${name[i + 1].toLowerCase()}` + `${name.substring(i + 2, name.length)}`);
            console.log(`twochar: ${name.substring(i, i + 2)}`);
            elementFound = true;
            break twoCharacterLoop;
        }
    }
    if (elementFound == false) {
        oneCharacterLoop:
        for (let i = 0; i < name.length; i++) {
            if (oneCharacterSymbols.includes(name[i].toLowerCase())) {
                console.log(`${name.substring(0, i)}${name[i].toUpperCase()}${name.substring(i + 1, name.length)}`);
                console.log(`onechar: ${name.substring(i, i + 1)}`);
                elementFound = true;
                break oneCharacterLoop;
            }
        }
    }
    if (elementFound == false) {
        console.log(`Aww, your name isn’t Breaking Bad (no seriously, we couldn’t find an element symbol from the periodic table in your name). If you have a middle name or something (or even a nickname *shudder*) that you were secretive about, now’s the time to try again with it included.`);
    }
})();