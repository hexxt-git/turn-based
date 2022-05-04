//warning this code is really really shit

function rdm(max){
    return Math.floor(Math.random()*(max +1));
};
function random( min, max, floor){
    if (floor) return Math.floor((Math.random()*(max - min + 1)) + min);
    return (Math.random()*(max - min)) + min;
};
function write(input){
    console.log('%c' + input, 'color: #AEF');
    document.getElementById('log').innerHTML += `<div class="write" >${input}</div>`;
    return void 0;
};
function error(input){
    console.log('%c' + input, 'color: #F54;');
    document.getElementById('log').innerHTML += `<div class="error" >${input}</div>`;
    return void 0;
};
function announceAttack( player, attack, hurt){
    if ( hurt > 0 ){
        write(`${player.name} used ${attack} dealing ${hurt} damage`);
    }else if ( attack == 'heal' ){
        write(`${player.name} used ${attack} healing ${hurt} HP`);
    }
    else{
        write(`${player.name} used ${attack}`);
    };

};

function updateHp(p1, p2){
    if (p1.hp > 5){
        p1Hp.innerHTML = `<div class="hpGreen" style="width:${ p1.hp / p1.maxHp * 100 - 1}%">${p1.hp}/${p1.maxHp}</div>`
    }else if ( p1.hp > 0 ){
        p1Hp.innerHTML = `<div class="hpRed" style="width:${ p1.hp / p1.maxHp * 100 - 1}%">${p1.hp}/${p1.maxHp}</div>`
    }else{
        p1Hp.innerHTML = `<div class="hpRed" style="width:1%">${p1.hp}/${p1.maxHp}</div>`
    };
    
    if (p2.hp > 5){
        p2Hp.innerHTML = `<div class="hpGreen" style="width:${ p2.hp / p2.maxHp * 100 - 1}%">${p2.hp}/${p2.maxHp}</div>`
    }else if ( p2.hp > 0 ){
        p2Hp.innerHTML = `<div class="hpRed" style="width:${ p2.hp / p2.maxHp * 100 - 1}%">${p2.hp}/${p2.maxHp}</div>`
    }else{
        p2Hp.innerHTML = `<div class="hpRed" style="width:1%">${p2.hp}/${p2.maxHp}</div>`
    };
};
let allAttacks = {
    sword : {
        name: 'sword',
        damage: 10,
        use: function(player, enemy){
            let hurt = Math.floor(this.damage * player.type.strength * player.charges);
            enemy.hp -= hurt;
            player.charges = 1;
            announceAttack( player, this.name, hurt);
        }
    },
    heal : {
        name: 'heal',
        use: function(player, enemy){
            if (player.hp + 50 <= player.maxHp){
                player.hp += 50;
                announceAttack( player, this.name, 50);
            }
            else {
                announceAttack( player, this.name, 0);
            }
        }
    },
    punch : {
        name: 'punch',
        damage: 5,
        use: function(player, enemy){
            let hurt = Math.floor(this.damage * player.type.strength * player.charges);
            enemy.hp -= hurt;
            player.charges = 1;
            announceAttack( player, this.name, hurt);
        }
    },
    hammer : {
        name: 'hammer',
        damage: 10,
        use: function(player, enemy){
            let hurt = Math.floor(this.damage * player.type.strength * player.charges);
            enemy.hp -= hurt;
            player.charges = 1;
            announceAttack( player, this.name, hurt);
        }
    },
    fireball : {
        name: 'fireball',
        damage: 10,
        use: function(player, enemy){
            let hurt = Math.floor(this.damage * player.type.strength * player.charges);
            enemy.hp -= hurt;
            player.charges = 1;
            announceAttack( player, this.name, hurt);
        }
    },
    charge : {
        name: 'charge',
        use: function(player, enemy){
            player.charges *= 2.5
            announceAttack( player, this.name);
        }
    },
    shield : {
        name: 'shield',
        use: function(player, enemy){
            announceAttack( player, this.name);
        }
    },
    reflect : {
        name: 'reflect',
        use: function(player, enemy){
            announceAttack( player, this.name);
        }
    }
}

let p1 = JSON.parse(localStorage.getItem('player1'))
let p2 = JSON.parse(localStorage.getItem('player2'))

updateHp ( p1, p2);


write(`a fight started between ${p1.name} and ${p2.name}`);

p1Name.innerText = p1.name;
p2Name.innerText = p2.name;
document.getElementById('display').innerHTML += `<img id="player1Img" src="./characters/${p1.sprite}.jpg" />`
document.getElementById('display').innerHTML += `<img id="player2Img" src="./characters/${p2.sprite}.jpg" />`

p1C.innerHTML += p1.type.attacks.map((attack)=> {
    return `<button id="${p1.name}${attack}" class="button">${attack.toUpperCase()}</button>`
}).join('');
p2C.innerHTML += p2.type.attacks.map((attack)=> {
    return `<button id="${p2.name}${attack}" class="button">${attack.toUpperCase()}</button>`
}).join('');

let turn = 0;

p1.type.attacks.map((attack)=>{
    document.getElementById( p1.name + attack ).addEventListener('click',()=>{
        if (turn != 2){
            allAttacks[attack].use(p1, p2);
            updateHp( p1, p2);
            p2C.style.filter = 'blur(0px)';
            p1C.style.filter = 'blur(3px)';
            turn = 2;
        }
    })
});
p2.type.attacks.map((attack)=>{
    document.getElementById( p2.name + attack ).addEventListener('click',()=>{
        if (turn != 1){
            allAttacks[attack].use( p2, p1);
            updateHp( p1, p2);
            p2C.style.filter = 'blur(3px)';
            p1C.style.filter = 'blur(0px)';
            turn = 1;
        }
    })
});