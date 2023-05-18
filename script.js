function friend(name, pokemon){
  this.name = name;
  this.pokemon = pokemon;
}

let friend1 = new friend ('Roy', 'Aurorus')
console.log(`Meet ${friend1.name}. A will-spirited young man who is the explorer. His main Pokemon is ${friend1.pokemon}.`)
let friend2 = new friend ('Suzuna White', 'Meowth')
console.log(`Meet ${friend2.name}. A creative woman who likes to make things possible. Her main Pokemon is ${friend2.pokemon}.`)
let friend3 = new friend ('Chris', 'Tauros')
console.log(`Meet ${friend3.name}. A caring woman who looks for her family and friends. She can also fight swiftly against her enemies. Her main Pokemon is ${friend3.pokemon}.`)
let friend4 = new friend ('Harumi Ashley', 'Slaking')
console.log(`Meet ${friend4.name}. A greatest martial art fighter and science wiz. She can protect her family and allies at all times. Her main Pokemon is ${friend4.pokemon}.`)
let friend5 = new friend ('Frederic', 'Pikachu')
console.log(`Meet ${friend5.name}. A brave and intelligent man who is willing to protect his friends. He is welcome to help you anytime. His main Pokemon is ${friend5.pokemon}.`)
let friend6 = new friend ('Lois', 'Hoopa')
console.log(`Meet ${friend6.name}. A young woman but a strong and responsible one. She would use her abilities to help people and she can solve anything to stop crime. Her main Pokemon is ${friend6.pokemon}.`)
let friend7 = new friend ('Juan', 'Wigglytuff')
console.log(`Meet ${friend7.name}. An experiment of the evil company but she chooses to help the good people. She uses her extraordinary abilities for good. Her main Pokemon is ${friend7.pokemon}.`)

let trainer = prompt("Enter your name: ");
const age = parseInt(prompt('Enter your age: '));
alert(`You are ${trainer} at age ${age}. Welcome to the Davis Pokemon Battle. You will learn new skills to master the power of Pokemon battles. Good luck!!`)

function Pokemon(name, maxHP, maxAtk, maxDef, maxSpAtk, maxSpDef, maxSpeed, HP, atk, def, spAtk, spDef, speed, statCondition, moves, type, inventory) {
	this.name = name;
  this.maxHP = maxHP;
  this.maxAtk = maxAtk;
  this.maxDef = maxDef;
  this.maxSpAtk = maxSpAtk;
  this.maxSpDef = maxSpDef; 
  this.maxSpeed = maxSpeed;
	this.HP = HP;
	this.atk = atk;
	this.def = def;
	this.spAtk = spAtk;
	this.spDef = spDef; 
	this.speed = speed;
	this.statCondition = "none";
	this.moves = moves;
	this.type = type;
  this.inventory = 1;
	this.takeDamage = function(amt){
		this.HP -= amt;
		console.log(this.name + " took " + amt + " damage!");
			if (this.HP <= 0) {  
        console.log(this.name + " has fainted!");
			} else {
        console.log(this.name + " has " + this.HP + " HP left");
			}
	};

	this.raiseStat = function(stat, amt){                 
    if (stat === "atk") {var stat2 = this.atk; var stat3 = this.maxAtk;}
    else if (stat === "def") {var stat2 = this.def; var stat3 = this.maxDef;}
    else if (stat === "spAtk") {var stat2 = this.spAtk; var stat3 = this.maxSpAtk;}
    else if (stat === "spDef") {var stat2 = this.spDef; var stat3 = this.maxSpDef;}
    else if (stat === "speed") {var stat2 = this.speed; var stat3 = this.maxSpeed;} 
    if (stat2 >= Math.floor(stat3 * 1.25)) {
      console.log(this.name + "'s " + stat + " won't go any higher!");
    } else {
    if (stat === "HP") {
      if (this.HP + amt >= this.maxHP) {
        console.log(this.name + " gained " + (this.maxHP - this.HP) + " HP");
        var healHP = this.maxHP;
        this.HP = healHP;
        console.log(this.name + "'s total HP: " + this.HP);
      } else {
        this.HP += amt;
        console.log(this.name + " gained " + amt + " HP. Total HP: " + this.HP);
      }
    }  else {
    var raised = Math.floor((((2 * 25 + 10)/250) * (stat2) * (amt) + 2));
    if (stat === "atk") {this.atk += raised;}
    else if (stat === "def") {this.def += raised;}
    else if (stat === "spAtk") {this.spAtk += raised;}
    else if (stat === "spDef") {this.spDef += raised;}
    else if (stat === "speed") {this.speed += raised;} 
    console.log("Raised " + this.name + "'s " + stat + " by " + raised + ".");
    }
    }
    };  

  this.lowerStat = function(stat, amt){
    if (stat === "atk") {var stat2 = this.atk; var stat3 = this.maxAtk;}
    else if (stat === "def") {var stat2 = this.def; var stat3 = this.maxDef;}
    else if (stat === "spAtk") {var stat2 = this.spAtk; var stat3 = this.maxSpAtk;}
    else if (stat === "spDef") {var stat2 = this.spDef; var stat3 = this.maxSpDef;}
    else if (stat === "speed") {var stat2 = this.speed; var stat3 = this.maxSpeed;} 

  if (stat2 <= Math.floor(stat3 * 0.75)) {
    console.log(this.name + "'s " + stat + " won't go any lower!");
  } else {
    var lowered = Math.floor((((2 * 25 + 10)/250) * (stat2) * (amt) + 2));
    if (stat === "atk") {this.atk -= lowered;}
    else if (stat === "def") {this.def -= lowered;}
    else if (stat === "spAtk") {this.spAtk -= lowered;}
    else if (stat === "spDef") {this.spDef -= lowered;}
    else if (stat === "speed") {this.speed -= lowered;} 
    console.log("Lowered " + this.name + "'s " + stat + " by " + lowered + ".");
    }
  };  

	this.attack = function(move, target, user){
		console.log(this.name + " used " + move.name + " on " + target.name + "!");
    if (move.hasOwnProperty("kind")) {
      var attacker = this.atk;
      var spAttacker = this.spAtk;
      move.dealDamage(target, attacker, spAttacker, user);
    } else {
      move.changeStat(target);
    }
  };
  this.heal = function(item, target) {
      this.inventory -= 1;     
      item.heal(target);       
  };
}


function Move(kind, name, power, accuracy, type, PP) {
  this.kind = kind;
	this.name = name;
	this.power = power;
	this.accuracy = accuracy;
	this.type = type;
	this.PP = PP;
	this.dealDamage = function(target, attack, specialAttack, user){
    var typeVar;
    if (this.type === "grass") {
        if (target.type === "water") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "fire" || target.type === "grass" || target.type === "dragon" || target.type === "poison" || target.type === "steel" || target.type === "flying") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "fire") {
        if (target.type === "grass" || target.type === "steel" || target.type === "bug") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "water" || target.type === "fire" || target.type === "dragon") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "water") {
        if (target.type === "fire") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "grass" || target.type === "water" || target.type === "dragon") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "electric") {
        if (target.type === "water" || target.type === "flying") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "grass" || target.type === "dragon" || target.type === "electric") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "steel") {
        if (target.type === "rock" || target.type === "fairy" || target.type === "ice") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "fire" || target.type === "water" || target.type === "electric" || target.type === "steel") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "normal") {
        if (target.type === "rock" || target.type === "steel" || target.type === "ghost") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "rock") {
        if (target.type === "fire" || target.type === "flying" || target.type === "ice" || target.type === "bug") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "fighting" || target.type === "steel") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "dark") {
        if (target.type === "psychic" || target.type === "ghost") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "fighting" || target.type === "fairy" || target.type === "dark") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "fairy") {
        if (target.type === "dragon" || target.type === "dark" || target.type === "fighting") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "steel" || target.type === "fire" || target.type === "poison") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "dragon") {
        if (target.type === "dragon") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "steel" || target.type === "fairy") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "fighting") {
        if (target.type === "dark" || target.type === "steel" || target.type === "normal" || target.type === "rock" || target.type === "ice") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "fairy" || target.type === "psychic" || target.type === "bug") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "bug") {
        if (target.type === "grass" || target.type === "dark" || target.type === "psychic") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "steel" || target.type === "fairy" || target.type === "flying" || target.type === "fighting" || target.type === "ghost" || target.type === "fire") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "ice") {
        if (target.type === "dragon" || target.type === "grass" || target.type === "flying") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "steel" || target.type === "ice" || target.type === "fire") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "psychic") {
        if (target.type === "fighting" || target.type === "poison") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "steel" || target.type === "psychic" || target.type === "dark") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "ground") {
        if (target.type === "electric" || target.type === "poison" || target.type === "fire" || target.type === "steel" || target.type === "rock") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "bug" || target.type === "grass" || target.type === "flying") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "flying") {
        if (target.type === "fighting" || target.type === "grass" || target.type === "bug") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "steel" || target.type === "rock" || target.type === "electric") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "poison") {
        if (target.type === "grass" || target.type === "fairy") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "steel" || target.type === "poison" || target.type === "rock" || target.type === "ground") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else if (this.type === "ghost") {
        if (target.type === "psychic" || target.type === "ghost") {console.log("It's super effective!"); typeVar = 2;}
        else if (target.type === "dark" || target.type === "fighting" || target.type === "normal") {console.log("It's not very effective."); typeVar = 0.5;}
        else {typeVar = 1;}
    } else {typeVar = 1;}
    var roll = (Math.floor(Math.random() * (100 - 85 + 1)) + 85)/100;    //random number
    if (this.kind === "physical") {
      var damage = Math.floor((((2 * 25 + 10)/250) * (attack / target.def) * (this.power) + 2) * roll * typeVar);
    } else if (this.kind === "special"){
      var damage = Math.floor((((2 * 25 + 10)/250) * (specialAttack / target.spDef) * (this.power) + 2) * roll * typeVar);
    }

    if (damage <= 0) {damage = 1;}
    target.takeDamage(damage);
	};
}


function StatusMove(name, power, accuracy, type, PP, plusStat, minusStat, stage){
  this.name = name;
  this.power = power;
  this.accuracy = accuracy;
  this.type = type;                      
  this.PP = PP;
  this.plusStat = plusStat;              
  this.minusStat = minusStat;            
  this.stage = stage;                    
    this.changeStat = function(target){
    var amt = this.stage;
    if (this.minusStat) {                
      var stat = this.minusStat;         
      target.lowerStat(stat, amt);       
    }
    else if (this.plusStat){
      var stat = this.plusStat;
      target.raiseStat(stat, amt);
    }
  };
  this.changeStatus = function(status){};
};


function Item(name, healAmount, healStat){
  this.name = name;
  this.healAmount = healAmount;
  this.healStat = healStat;
  this.heal = function (target){
    var amt = this.healAmount;
    var stat = this.healStat;
    console.log("used " + this.name + " on " + target.name);
    target.raiseStat(stat, amt);
  };
}

var oranBerry = new Item("oran berry", 10, "HP");
var potion = new Item("potion", 20, "HP");
var superPotion = new Item("super potion", 50, "HP");
var mooMooMilk = new Item("moo moo milk", 100, "HP");
var hyperPotion = new Item("hyper potion", 200, "HP");

var tackle = new Move("physical", "tackle", 50, 100, "normal", 35); 
var scratch = new Move("physical", "scratch", 40, 100, "normal", 35);
var vineWhip = new Move("physical", "vine whip", 45, 100, "grass", 25);
var waterGun = new Move("special", "water gun", 40, 100, "water", 25);
var ember = new Move("special", "ember", 40, 100, "fire", 25);
var bite = new Move("physical", "bite", 60, 100, "dark", 25);
var swift = new Move("special", "swift", 60, 100, "normal", 20);
var quickAttack = new Move("physical", "quick attack", 40, 100, "normal", 30);  
var thunderShock = new Move("special", "thundershock", 40, 100, "electric", 30);
var twister = new Move("special", "twister", 40, 400, "dragon", 20);
var ironHead = new Move("physical", "iron head", 100, 400, "steel", 25);
var confusion = new Move("special", "confusion", 40, 200, "psychic", 20);
var rockSmash = new Move("physical", "rock smash", 40, 200, "fighting", 30);
var bugBuzz = new Move("special", "bug buzz", 80, 400, "bug", 20);
var iceBeam = new Move("special", "ice beam", 90, 400, "ice", 20);
var moonblast = new Move("special", "moonblast", 90, 400, "fairy", 20);
var rockTomb = new Move("physical", "rock tomb", 60, 400, "rock", 20);
var fly = new Move("special", "fly", 70, 400, "flying", 25);
var dive = new Move("special", "dive", 70, 400, "water", 25);
var ironTail = new Move("physical", "iron tail", 80, 400, "steel", 25);
var dig = new Move("physical", "dig", 80, 400, "ground", 25);
var drainPunch = new Move("physical", "drain punch", 85, 400, "fighting", 25);
var sludgeBomb = new Move("physical", "sludge bomb", 90, 400, "poison", 25);
var flameThrower = new Move("physical", "flamethrower", 90, 400, "fire", 30);
var growl = new StatusMove("growl", 0, 100, "normal", 40, false, "atk", 0.05);
var tailWhip = new StatusMove("tail whip", 0, 100, "normal", 30, false, "def", 0.05);
var screech = new StatusMove("screech", 0, 100, "normal", 40, false, "def", 0.10);
var dragonDance = new StatusMove("dragon dance", 0, 100, "dragon", 20, "atk", false, 0.10);
var leer = new StatusMove("leer", 0, 100, "normal", 30, false, "def", 0.05);
var howl = new StatusMove("howl", 0, 100, "normal", 30, "atk", false, 0.05);
howl.self = true;
dragonDance.self = true;


function Pikachu() {
  this.species = "Pikachu";  this.name = this.species;
  this.maxHP = 90; this.maxAtk = 55; this.maxDef = 40; this.maxSpAtk = 50; this.maxSpDef = 50; this.maxSpeed = 90;
  this.HP = 90; this.atk = 55;  this.def = 40;  this.spAtk = 50;  this.spDef = 50;  this.speed = 90;
  this.moves = [thunderShock, dig, ironTail, growl]; 
  this.type = "electric";
}
function Tyrantrum(){
  this.species = "Tyrantrum"; this.name = this.species;
  this.maxHP = 81; this.maxAtk = 74; this.maxDef = 45; this.maxSpAtk = 70; this.maxSpDef = 50; this.maxSpeed = 50;
  this.HP = 81; this.atk = 74; this.def = 45; this.spAtk = 70; this.spDef = 50; this.speed = 50;
  this.moves = [ironHead, rockSmash, rockTomb, dragonDance]; 
  this.type = "dragon";    
}
function Aurorus(){
  this.species = "Aurorus";  this.name = this.species;
  this.maxHP = 85; this.maxAtk = 70; this.maxDef = 50; this.maxSpAtk = 45; this.maxSpDef = 80; this.maxSpeed = 55;
  this.HP = 85; this.atk = 70; this.def = 50; this.spAtk = 45; this.spDef = 80; this.speed = 55;
  this.moves = [iceBeam, rockTomb, ironHead, tailWhip]; 
  this.type = "ice";    
}
function Meowth(){
  this.species = "Meowth"; this.name = this.species;
  this.maxHP = 50; this.maxAtk = 70; this.maxDef = 35; this.maxSpAtk = 40; this.maxSpDef = 40; this.maxSpeed = 90;
  this.HP = 50; this.atk = 70; this.def = 35; this.spAtk = 40; this.spDef = 40; this.speed = 90;
  this.moves = [rockSmash, ironHead, screech, growl]; 
  this.type = "steel";    
}
function Mewtwo(){
  this.species = "Mewtwo";  this.name = this.species;
  this.maxHP = 70; this.maxAtk = 80; this.maxDef = 35; this.maxSpAtk = 80; this.maxSpDef = 80; this.maxSpeed = 72;
  this.HP = 70; this.atk = 80; this.def = 35; this.spAtk = 80; this.spDef = 35; this.speed = 72;
  this.moves = [rockSmash, dive, confusion, tackle]; 
  this.type = "fighting";    
}
function Arceus(){
  this.species = "Arceus";  this.name = this.species;
  this.maxHP = 90; this.maxAtk = 90; this.maxDef = 90; this.maxSpAtk = 90; this.maxSpDef = 90; this.maxSpeed = 90;
  this.HP = 90; this.atk = 90; this.def = 90; this.spAtk = 90; this.spDef = 90; this.speed = 90;
  this.moves = [rockSmash, waterGun, confusion, vineWhip]; 
  this.type = "normal";    
}
function Slaking(){
  this.species = "Slaking";  this.name = this.species;
  this.maxHP = 80; this.maxAtk = 80; this.maxDef = 43; this.maxSpAtk = 80; this.maxSpDef = 50; this.maxSpeed = 65;
  this.HP = 80; this.atk = 80; this.def = 43; this.spAtk = 80; this.spDef = 50; this.speed = 65;
  this.moves = [scratch, rockSmash, thunderShock, iceBeam]; 
  this.type = "normal";    
}
function Tauros(){
  this.species = "Tauros"; this.name = this.species;
  this.maxHP = 65; this.maxAtk = 60; this.maxDef = 49; this.maxSpAtk = 75; this.maxSpDef = 65; this.maxSpeed = 70;
  this.HP = 65; this.atk = 60; this.def = 49; this.spAtk = 75; this.spDef = 65; this.speed = 70;
  this.moves = [ironHead, rockSmash, tailWhip, leer]; 
  this.type = "fire";    
}
function Naganadel(){
  this.species = "Naganadel";  this.name = this.species;
  this.maxHP = 85; this.maxAtk = 70; this.maxDef = 50; this.maxSpAtk = 45; this.maxSpDef = 80; this.maxSpeed = 55;
  this.HP = 55; this.atk = 70; this.def = 50; this.spAtk = 45; this.spDef = 80; this.speed = 55;
  this.moves = [thunderShock, fly, twister, sludgeBomb]; 
  this.type = "poison";    
}
function Darmanitan(){
  this.species = "Darmanitan";  this.name = this.species;
  this.maxHP = 85; this.maxAtk = 90; this.maxDef = 50; this.maxSpAtk = 75; this.maxSpDef = 45; this.maxSpeed = 90;
  this.HP = 85; this.atk = 90; this.def = 50; this.spAtk = 75; this.spDef = 45; this.speed = 90;
  this.moves = [iceBeam, flameThrower, ironHead, dig]; 
  this.type = "ice";    
}
function Wigglytuff(){
  this.species = "Wigglytuff";  this.name = this.species;
  this.maxHP = 85; this.maxAtk = 70; this.maxDef = 60; this.maxSpAtk = 45; this.maxSpDef = 80; this.maxSpeed = 55;
  this.HP = 85; this.atk = 70; this.def = 60; this.spAtk = 45; this.spDef = 80; this.speed = 55;
  this.moves = [thunderShock, iceBeam, moonblast, waterGun]; 
  this.type = "fairy";    
}
function Manaphy(){
  this.species = "Manaphy";  this.name = this.species;
  this.maxHP = 85; this.maxAtk = 70; this.maxDef = 50; this.maxSpAtk = 65; this.maxSpDef = 65; this.maxSpeed = 80;
  this.HP = 85; this.atk = 70; this.def = 50; this.spAtk = 65; this.spDef = 65; this.speed = 80;
  this.moves = [iceBeam, dive, moonblast, growl]; 
  this.type = "water";    
}
function Hoopa(){
  this.species = "Hoopa";  this.name = this.species;
  this.maxHP = 85; this.maxAtk = 85; this.maxDef = 80; this.maxSpAtk = 85; this.maxSpDef = 80; this.maxSpeed = 75;
  this.HP = 85; this.atk = 85; this.def = 80; this.spAtk = 85; this.spDef = 80; this.speed = 75;
  this.moves = [drainPunch, iceBeam, confusion, thunderShock]; 
  this.type = "dark";    
}
function Alakazam(){
  this.species = "Alakazam";  this.name = this.species;
  this.maxHP = 85; this.maxAtk = 70; this.maxDef = 55; this.maxSpAtk = 45; this.maxSpDef = 65; this.maxSpeed = 60;
  this.HP = 85; this.atk = 70; this.def = 55; this.spAtk = 45; this.spDef = 65; this.speed = 60;
  this.moves = [iceBeam, confusion, moonblast, swift]; 
  this.type = "psychic";    
}
Pikachu.prototype = new Pokemon();      Tyrantrum.prototype = new Pokemon();    Aurorus.prototype = new Pokemon();
Meowth.prototype = new Pokemon();       Mewtwo.prototype = new Pokemon();    Arceus.prototype = new Pokemon();
Slaking.prototype = new Pokemon();   Tauros.prototype = new Pokemon();    Naganadel.prototype = new Pokemon();     Darmanitan.prototype = new Pokemon();    Wigglytuff.prototype = new Pokemon();   Manaphy.prototype = new Pokemon();       Hoopa.prototype = new Pokemon();     Alakazam.prototype = new Pokemon();


function selectPokemon(){
  var choosePokemon = prompt("Choose a Pokemon: PIKACHU, TYRANTRUM, AURORUS, MEOWTH, MEWTWO, ARCEUS, SLAKING, TAUROS, NAGANADEL, DARMANITAN, WIGGLYTUFF, MANAPHY, HOOPA, or ALAKAZAM?").toLowerCase();
  if (choosePokemon === "tauros") {myPokemon = new Tauros();}
  else if (choosePokemon === "slaking") {myPokemon = new Slaking();}
  else if (choosePokemon === "arceus") {myPokemon = new Arceus();}
  else if (choosePokemon === "mewtwo") {myPokemon = new Mewtwo();}
  else if (choosePokemon === "aurorus") {myPokemon = new Aurorus();}
  else if (choosePokemon === "meowth") {myPokemon = new Meowth();}
  else if (choosePokemon === "tyrantrum") {myPokemon = new Tyrantrum();}
  else if (choosePokemon === "naganadel") {myPokemon = new Naganadel();}
  else if (choosePokemon === "darmanitan") {myPokemon = new Darmanitan();}
  else if (choosePokemon === "wigglytuff") {myPokemon = new Wigglytuff();}
  else if (choosePokemon === "manaphy") {myPokemon = new Manaphy();}
  else if (choosePokemon === "hoopa") {myPokemon = new Hoopa();}
  else if (choosePokemon === "alakazam") {myPokemon = new Alakazam();}
  else {myPokemon = new Pikachu();}
  myPokemon.inventory += 1;
  var chooseNickname = confirm("Do you want to give your " + choosePokemon + " a nickname? Click 'OK' for yes, and 'CANCEL' for no");
  if (chooseNickname === true) {var pokeNickname = prompt("What will you name your " + choosePokemon + "?"); myPokemon.name = pokeNickname;}
  console.log("I choose you, " + myPokemon.name + "!!!");


  var botChoose = Math.floor(Math.random() * (14 - 1 + 1)) + 1;  
  if (botChoose === 1) {botPokemon = new Tauros();}
  else if (botChoose === 2) {botPokemon = new Slaking();}
  else if (botChoose === 3) {botPokemon = new Arceus();}
  else if (botChoose === 4) {botPokemon = new Mewtwo();}
  else if (botChoose === 5) {botPokemon = new Aurorus();}
  else if (botChoose === 6) {botPokemon = new Meowth();}
  else if (botChoose === 7) {botPokemon = new Tyrantrum();}
  else if (botChoose === 8) {botPokemon = new Manaphy();}
  else if (botChoose === 9) {botPokemon = new Wigglytuff();}
  else if (botChoose === 10) {botPokemon = new Naganadel();}
  else if (botChoose === 11) {botPokemon = new Darmanitan();}
  else if (botChoose === 12) {botPokemon = new Hoopa();}
  else if (botChoose === 13) {botPokemon = new Alakazam();}
  else {botPokemon = new Pikachu();}
  console.log("The computer chose " + botPokemon.name);
  if (myPokemon.name === botPokemon.name) {botPokemon.name = "Enemy " + botPokemon.name;}

battle(myPokemon, botPokemon);
} 


function userAction(myPokemon, botPokemon) {
  if (myPokemon.HP > 0 && botPokemon.HP > 0) {
  var fight = prompt("Will you ATTACK or HEAL?").toLowerCase();
  if (fight === "attack") {
      var attack1 = myPokemon.moves[0].name;
      var attack2 = myPokemon.moves[1].name;
      var attack3 = myPokemon.moves[2].name;
      var attack4 = myPokemon.moves[3].name;
      var whichAttack = prompt("Which attack will you use? " + attack1 + ", " + attack2 + ", " + attack3 + ", or "  + attack4 + "?").toLowerCase();

      if (whichAttack !== attack1 && whichAttack !== attack2 && whichAttack !== attack3 && whichAttack !== attack4) {
        console.log("Please choose a valid move.");
        userAction(myPokemon, botPokemon);
      } else {
          for (var i = 0; i < myPokemon.moves.length; i++) {
            if (whichAttack === myPokemon.moves[i].name) {      
              var moveChoice = myPokemon.moves[i];              
            }
          }
        console.log(myPokemon.name + ", use " + moveChoice.name + "!!!");
          if (moveChoice.hasOwnProperty("self")) {
            myPokemon.attack(moveChoice, myPokemon);
          } else {
          myPokemon.attack(moveChoice, botPokemon, myPokemon);
        }
      }
  } else if (fight === "heal") {
    if (myPokemon.inventory >=1 ) {
      if (myPokemon.maxHP <= 20) {
        myPokemon.heal(oranBerry, myPokemon);
      } else if (myPokemon.maxHP <= 50) {
        myPokemon.heal(potion, myPokemon);
      } else if (myPokemon.maxHP <= 75){
        myPokemon.heal(superPotion, myPokemon);  
      } else if (myPokemon.maxHP <= 150) {
        myPokemon.heal(mooMooMilk, myPokemon);
      } else {
        myPokemon.heal(hyperPotion, myPokemon);
      }
    } else {    
      console.log("You're out of items! Please choose an attack instead.");
      userAction(myPokemon, botPokemon);
    }
  } else {
    console.log("That is not an option, choose again");
    userAction(myPokemon, botPokemon);
  }
}
}

function botAction(myPokemon, botPokemon) {
  if (myPokemon.HP > 0 && botPokemon.HP > 0) {
if (botPokemon.HP < botPokemon.maxHP * 0.20 && botPokemon.inventory >= 1) {
     if (botPokemon.maxHP <= 20) {
      botPokemon.heal(oranBerry, botPokemon);
    } else if (botPokemon.maxHP <= 50) {
      botPokemon.heal(potion, botPokemon);
    } else if (botPokemon.maxHP <= 75){
      botPokemon.heal(superPotion, botPokemon);  
    } else if (botPokemon.maxHP <= 150) {
      botPokemon.heal(mooMooMilk, botPokemon);
    } else {
      botPokemon.heal(hyperPotion, botPokemon);
    }
}  else {

var moveKind = Math.floor(Math.random() * (100 - 0 + 1)) + 0;  
if (moveKind <= 70) {
  var randomMove = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  var botMove = botPokemon.moves[randomMove];
} else {
  var randomMove = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
  var botMove = botPokemon.moves[randomMove];
}
if (botMove.hasOwnProperty("self")) {              
  botPokemon.attack(botMove, botPokemon);         
} else {
  botPokemon.attack(botMove, myPokemon, botPokemon);           
}
} 
} 
}

function battle(myPokemon, botPokemon){
  console.log("-------------ROUND!-------------");
  var speedy; 
  if (myPokemon.speed > botPokemon.speed) {
    speedy = "user"; 
  } else if (botPokemon.speed > myPokemon.speed) { 
    speedy = "bot";
  } else { 
      var coinToss = Math.floor(Math.random() * (1 - 0 + 1)) + 0; 
      if (coinToss === 0) {                  
        speedy = "user"; 
      } else {                                 
        speedy = "bot";
      }
  }
  if (speedy === "user"){
  console.log("YOU:");
  userAction(myPokemon, botPokemon);
  console.log("ENEMY:");
  botAction(myPokemon, botPokemon);
    if (myPokemon.HP <= 0 || botPokemon.HP <= 0) {
        if (myPokemon.HP <= 0) {
          console.log("The winner is " + botPokemon.name);     //declare the winner of the battle
        } else {
          console.log("The winner is " + myPokemon.name);
        }
      } else {
      battle(myPokemon, botPokemon);
      }                                    
  } else if (speedy === "bot") {
  console.log("ENEMY:");
  botAction(myPokemon, botPokemon);
  console.log("YOU:");
  userAction(myPokemon, botPokemon);
    if (myPokemon.HP <= 0 || botPokemon.HP <= 0) {   //if one pokemon has fainted, stop recursion
        if (myPokemon.HP <= 0) {
            console.log("The winner is " + botPokemon.name);
          } else {
            console.log("The winner is " + myPokemon.name);
          }
      } else {
      battle(myPokemon, botPokemon);
      }     
  }
} 

selectPokemon(); 
