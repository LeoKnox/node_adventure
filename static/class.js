class Adventurer {
    constructor(name, classes, atk="15", def="15", mgc="10", hp="15") {
        this.name = name;
        this.classes = classes;
        this.atk = atk;
        this.def = def;
        this.mgc = mgc;
        this.hp = hp;
        this.weapons =[];
    }
}

module.exports = Adventurer;