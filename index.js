// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift ('Bob');
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift ();
}

function appendCat(){
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}

function prependCat (){
    const newCats = ["Arnold",...cats]
    return newCats;
}

function removeLastCat (){
    return cats.slice (0,cats.length -1)
}

function removeFirstCat (){
    return cats.slice(1);
}
