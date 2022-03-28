class SkyUnit {    
    
    constructor(){

    }
    
    run = () => {
        console.log("날라서 도망간다~")
    }

}

class GroundUnit {
    
    constructor(qqq){ // super(300)의 300이 qqq로 들어간다.

    }

    run = () => {
        console.log("뛰어서 도망간다~")
    }

}


class Monster extends GroundUnit { // extends 사용 하는 방법!!
    power = 10

    constructor(aaa){
        super(300)
    }

    attack = () => {
        console.log("우워어어어~ 공격!!")
        console.log("내 공격력은" + this.power + "이야!!!")
    }
    
}

const mymonster1 = new Monster()
mymonster1.attack()
mymonster1.run()
