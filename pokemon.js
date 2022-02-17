class Pokemon {
    constructor(name, attack, defense, health, type) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.initialHealth = health;
        this.health = health;
        this.type = type;
    }
    takeDamage(a) {
        this.health = this.health - a;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    attackOpponent(opponent_object) {
        const CURRENT_POKEMON_ATTACK = this.attack;

        const OPPONENT_POKEMON_DEFENSE = opponent_object.defense;

        const CURRENT_DAMAGE = CURRENT_POKEMON_ATTACK - OPPONENT_POKEMON_DEFENSE;

        if (CURRENT_DAMAGE > 0) {
            opponent_object.takeDamage(CURRENT_DAMAGE)
        }
    }
    
    display()
    {
        let name = this.name;
        let type = this.type;
        let result = name.toUpperCase.call(name);
        let result1 = name.toUpperCase.call(type);
        return result + " " + "(" + result1 + ")" + " " + this.health + "/" + this.initialHealth;
    }
}
// Don't edit this line!
module.exports = Pokemon;
