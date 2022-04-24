//warning this code is really really shit

let submit = document.getElementById('submit')

function updateSprites(){
    document.getElementById('p1Display').innerHTML = `<img src="./characters/${p1Sprite}.jpg" />` ;
    document.getElementById('p2Display').innerHTML = `<img src="./characters/${p2Sprite}.jpg" />` ;
}

let p1Sprite = 1;
let p2Sprite = 1;

let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')

let pre1 = document.getElementById('pre1')
pre1.addEventListener('click', ()=>{
    if (c1.innerText > 1){
        p1Sprite--
        c1.innerHTML = p1Sprite
        updateSprites()
    }
})
let pre2 = document.getElementById('pre2')
pre2.addEventListener('click', ()=>{
    if (c2.innerText > 1){
        p2Sprite--
        c2.innerHTML = p2Sprite
        updateSprites()
    }
})
let next1 = document.getElementById('next1')
next1.addEventListener('click', ()=>{
    if (c1.innerText < 10){
        p1Sprite++
        c1.innerHTML = p1Sprite
        updateSprites()
    }
})
let next2 = document.getElementById('next2')
next2.addEventListener('click', ()=>{
    if (c2.innerText < 10){
        p2Sprite++
        c2.innerHTML = p2Sprite
        updateSprites()
    }
})

let knight1 = document.getElementById('knight1')
knight1.addEventListener('click', ()=>{
    p1Type = knight
    document.getElementById('knight1').classList = 'selectedType'
    document.getElementById('mage1').classList = 'type'
    document.getElementById('warrior1').classList = 'type'
})
let knight2 = document.getElementById('knight2')
knight2.addEventListener('click', ()=>{
    p2Type = knight
    document.getElementById('knight2').classList = 'selectedType'
    document.getElementById('mage2').classList = 'type'
    document.getElementById('warrior2').classList = 'type'
})
let mage1 = document.getElementById('mage1')
mage1.addEventListener('click', ()=>{
    p1Type = mage
    document.getElementById('knight1').classList = 'type'
    document.getElementById('mage1').classList = 'selectedType'
    document.getElementById('warrior1').classList = 'type'
})
let mage2 = document.getElementById('mage2')
mage2.addEventListener('click', ()=>{
    p2Type = mage
    document.getElementById('knight2').classList = 'type'
    document.getElementById('mage2').classList = 'selectedType'
    document.getElementById('warrior2').classList = 'type'
})
let warrior1 = document.getElementById('warrior1')
warrior1.addEventListener('click', ()=>{
    p1Type = warrior
    document.getElementById('knight1').classList = 'type'
    document.getElementById('mage1').classList = 'type'
    document.getElementById('warrior1').classList = 'selectedType'
})
let warrior2 = document.getElementById('warrior2')
warrior2.addEventListener('click', ()=>{
    p2Type = warrior
    document.getElementById('knight2').classList = 'type'
    document.getElementById('mage2').classList = 'type'
    document.getElementById('warrior2').classList = 'selectedType'
})

// ~~~~~~~~~ //

function rdm(max){
    return Math.floor(Math.random()*(max +1));
};
function random( min, max, floor){
    if (floor) return Math.floor((Math.random()*(max - min + 1)) + min);
    return (Math.random()*(max - min)) + min;
};
function write(input){
    console.log('%c' + input, 'color: #AEF');
    return void 0;
};
function error(input){
    console.log('%c' + input, 'color: #F54;');
    return void 0;
};

class character {
    constructor(name, sprite, type) {
        this.name = name;
        this.sprite = sprite;
        this.type = type;
        this.maxHp = this.type.maxHp;
        this.hp = this.maxHp;
        this.charges = 1;
    }
};


let knight = {
    name: 'knight',
    strength: 6,
    maxHp: 600,
    attacks: ['heal', 'punch', 'sword', 'charge']
};
let mage = {
    name: 'mage',
    strength: 3,
    maxHp: 500,
    attacks: ['heal', 'punch', 'fireball', 'reflect']
};
let warrior = {
    name: 'warrior',
    strength: 9,
    maxHp: 800,
    attacks: ['heal', 'punch', 'hammer', 'shield']
};

submit.addEventListener('click', ()=>{
    let p1Name = document.getElementById('p1NameIn').innerHTML
    let p2Name = document.getElementById('p2NameIn').innerHTML
    let p1 = new(character)( p1Name, p1Sprite, p1Type);
    let p2 = new(character)( p2Name, p2Sprite, p2Type);
    console.log(JSON.stringify(p1))
    console.log(JSON.stringify(p2))
    sessionStorage.setItem('player1', JSON.stringify(p1))
    sessionStorage.setItem('player2', JSON.stringify(p2))
})