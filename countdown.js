// let date = new Date()
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// let diwali = new Date("07-October-2023 06:00")
// console.log(diwali.getDate())
// console.log(diwali.getMonth())
// let total_seconds = (diwali - date) / 1000
// let days = total_seconds / 60 / 60 / 24
// let hours = (total_seconds / 3600) % 24
// let minutes = total_seconds / 60 % 60
// let seconds = total_seconds % 60 
// document.write(Math.round(days))
// document.write(hours)
// document.write(minutes)
// document.write(seconds)

function clock() {
    let endDate = "11 November 2023 23:59"
    let end = new Date(endDate)
    let now = new Date()
    let inputs = document.querySelectorAll("input")
    let diff = (end - now) / 1000

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff % 60);
}
setInterval(() => clock(), 1000);
