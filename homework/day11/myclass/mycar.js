class Car {
   
    kind = "BMW"
    power = 1000000
    color = "black"

    start = () => {
        console.log("색깔이"+ this.color + "이고 힘이" + this.power+ "인" + this.kind+ "출발한다잉~~")
    }

    stop = () => {
        console.log("색깔이"+ this.color + "이고 힘이" + this.power+ "인" + this.kind+ "정지한다잉~~")
    }
}

const car = new Car()
car.start()
car.stop()