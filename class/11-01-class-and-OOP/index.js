const aaa = new Date() // Date라는 설명서를 보고 만든 개체 : aaa
console.log(aaa.getFullYear())
console.log(aaa.getMonth() + 1)


class Monster {  // Monster가 Date랑 똑같음.
    power = 10
    
    constructor(aaa){  // 생성자 : 밑에 monster2의 매개변수를 constructor의 매개변수로 들어간다.
        this.power = aaa
    }

    attack = () => {
        
        console.log("공격한다?")
        console.log("내 공격력은" + this.power + " 이야!!!") // this는 Class 안에 어떤걸 쓸건지 고를때 this를 사용!!
    }

    run = () => {
        console.log("도망간다?")
    }
}

const mymonster1 = new Monster(10)
mymonster1.attack()
mymonster1.run()

const mymonster2 = new Monster(500000)
mymonster2.attack()
mymonster2.run()


const loginService = new loginService()  // 객체지향프로그램에서 API를 만드는 형식.
loginService.login()
loginService.logout()
loginService.loginCheck()