var femaleNames = ['Wanda', 'Beata', 'Iwona', 'Joanna'];

var maleNames = ['Dariusz', 'Leszek', 'Adam', 'Piotr'];

var newName = 'Radosław';

var allNames = femaleNames.concat(maleNames);

if (allNames.indexOf(newName) === -1 ) {
    allNames.push(newName);
}

console.log(allNames);