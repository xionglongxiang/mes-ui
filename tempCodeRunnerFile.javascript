async function async1() {
  console.log(1)
  await async2()
  console.log(2)
}
async function async2() {
  console.log(3)
}

console.log(4)

setTimeout(function () {
  console.log(5)
  new Promise(function (resolve) {
    console.log(6)
    resolve()
  }).then(function () {
    console.log(7)
  })
})

setTimeout(() => {
  console.log(8)
}, 0)

async1()

new Promise(function (resolve) {
  console.log(9)
  resolve()
}).then(function () {
  console.log(10)
});
// 4 1  3 2 9 10   5 6 7  8