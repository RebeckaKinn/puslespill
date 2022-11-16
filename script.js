let site = document.getElementById(`app`); 
const imgs = [`<img class="imgclass" src="img/000.jpg"/>`, `<img class="imgclass" src="img/001.jpg"/>`, 
`<img class="imgclass" src="img/002.jpg"/>`, `<img class="imgclass" src="img/003.jpg"/>`, 
`<img class="imgclass" src="img/004.jpg"/>`, `<img class="imgclass" src="img/005.jpg"/>`, 
`<img class="imgclass" src="img/006.jpg"/>`, `<img class="imgclass" src="img/007.jpg"/>`, 0];

//let fasit = [`<img class="imgclass" src="img/000.jpg"/>`, `<img class="imgclass" src="img/003.jpg"/>`, 
//`<img class="imgclass" src="img/006.jpg"/>`, `<img class="imgclass" src="img/001.jpg"/>`, 
//`<img class="imgclass" src="img/004.jpg"/>`, `<img class="imgclass" src="img/007.jpg"/>`, 
//`<img class="imgclass" src="img/002.jpg"/>`, `<img class="imgclass" src="img/005.jpg"/>`, 0];
view();
function view(){
    site.innerHTML = `<h1>Puzzle 2.0</h1>`; 
    for(let i = 0; i < imgs.length; i++){
        let img = imgs[i];
        let blank = img === 0; 
        let showimg = blank ? '' : img; 
//(i % 3) = hver tredje i arrayet får da tilsvarende. 
        let fistline = i % 3 == 0 ? 'førstPåLinja' : ''; 

        site.innerHTML += `<div class="look ${fistline}" onclick="trykk(${i})">${showimg}</div>`;
    }
}

function trykk(index) {
    let blankIndex = findBlank(index);
    if (blankIndex == null) return; 
    imgs[blankIndex] = imgs[index]
    imgs[index] = 0; 
    view();
}

function findBlank(index){
    for (let delta of [-3, -1, 1, 3]){
        let newIndex = index + delta; 
        if (newIndex < 0 || newIndex >= imgs.length) continue;
        if (imgs[newIndex] === 0) {
            return newIndex;
    }
}
    return null; 
}

function randomizer(){
    imgs.sort(() => Math.random() - 0.5);
}

randomizer();
view();

/*const isArraySorted = array =>
array
.slice(0) // clone array
.sort((a, b) => a - b) // sort it
.every((el, i) => el === array[i]) // compare with initial value)*/