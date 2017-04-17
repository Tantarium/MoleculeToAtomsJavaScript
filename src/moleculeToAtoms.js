function parseMolecule(formula) {
    var map = new Object(), endBracket = "", multiple = 0;
    formula = formula.split("");
    
    for (var i = 0; i < formula.length; i++) {
        if (formula[i].match(/^[[({]+$/)) {
            endBracket = getBracket(formula[i]);
            for (var j = i; j < formula.length; j++) {
                if (formula[j] == endBracket) {
                    if (formula[j+1].match(/^[2-9]+$/)) {
                        multiple = formula[j+1];
                    }
                    else {
                        multiple = 1;
                    }
                    map = group(map, formula[i], formula.slice(i+1, formula.length -1), multiple);
                    i = j;
                    break;
                }
            }
        }
        else if (formula[i].match(/^[A-Z]+$/)) {
            map = addToMap(map, formula.slice(i, formula.length));
        }
    }
    return map;
}

function getBracket(bracketStart) {
    switch (bracketStart) {
        case "[":
            return "]";
            break;
        case "{":
            return "}";
            break;
        case "(":
            return ")";
            break;
    }
}

function group(map, bracketStart, substring, multiple) {
    var endBracket = getBracket(bracketStart), innerEndBracket = "", innterMult = 0;
    for (var i = 0; i < substring.length; i++) {
        if (substring[i] == endBracket) {break;}
        if (substring[i] != null) {
            if (substring[i].match(/^[[({]+$/)) {
                innerEndBracket = getBracket(substring[i]);
                for (var j = i; j < substring.length; j++) {
                    if (substring[j] == innerEndBracket) {
                        if (substring[j+1] != null) {
                            if (substring[j+1].match(/^[2-9]+$/)) {
                                innterMult = substring[j+1];
                            }
                            else {
                                innterMult = 1;
                            }
                            for (var k = 0; k < multiple; k++) {
                                map = group(map, substring[i], substring.slice(i+1, substring.length -1), innterMult);
                            }
                            i = j + 1;
                            break;
                        }
                    }
                }
            }
            else if (substring[i].match(/^[A-Z]+$/)) {
                for (var k = 0; k < multiple; k++) {
                    map = addToMap(map, substring.slice(i, substring.length));
                }
            }
        }
    }
    
    return map;
}

function addToMap(map, formula) {
    if (formula[1] != null) {
        if (formula[1].match(/^[a-z]+$/)) {
            if (formula[2] != null) {
                if (formula[2].match(/^[2-9]+$/)) {
                    if (formula[3] != null) {
                        if (formula[3].match(/^[2-9]+$/)) {
                            if (formula[0] + formula[1] in map) {
                                map[formula[0] + formula[1]] = 
                                    map[formula[0] + formula[1]] + parseInt(formula[2] + formula[3]);
                            }
                            else {
                                map[formula[0] + formula[1]] = parseInt(formula[2] + formula[3]);
                            }
                        }
                    }
                    if (formula[0] + formula[1] in map) {
                        map[formula[0] + formula[1]] = 
                            map[formula[0] + formula[1]] + parseInt(formula[2]);
                    }
                    else {
                        map[formula[0] + formula[1]] = parseInt(formula[2]);
                    }
                }
                else {
                    if (formula[0] + formula[1] in map) {
                        map[formula[0] + formula[1]] = 
                            map[formula[0] + formula[1]] + 1;
                    }
                    else {
                        map[formula[0] + formula[1]] = 1;
                    }
                }
            }
        }
        else if (formula[1].match(/^[1-9]+$/)) {
            if (formula[2] != null && formula[2].match(/^[0-9]+$/)) {
                if (formula[0] in map) {
                    map[formula[0]] = 
                        map[formula[0]] + parseInt(formula[1] + formula[2]);
                }
                else {
                    map[formula[0]] = parseInt(formula[1] + formula[2]);
                }
            }
            else if (formula[0] in map) {
                map[formula[0]] = map[formula[0]] + parseInt(formula[1]);
            }
            else {
                map[formula[0]] = parseInt(formula[1]);
            }
        }
        else {
            if (formula[0] in map) {
                map[formula[0]] = map[formula[0]] + 1;
            }
            else {
                map[formula[0]] = 1;
            }
        }
    }
    else {
        if (formula[0] in map) {
            map[formula[0]] = map[formula[0]] + 1;
        }
        else {
            map[formula[0]] = 1;
        }
    }
    return map;
}