function createTime() {
let time = new Date

const yyyy = time.getFullYear()
const mm = String(time.getMonth() + 1).padStart(2, "0")
const dd = String(time.getDate()).padStart(2, "0")
const hour = String(time.getHours()).padStart(2, "0")
const min = String(time.getMinutes()).padStart(2, "0")
const sec = String(time.getSeconds()).padStart(2, "0")

console.log(`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec} 입니다.`)
}

createTime()