const grayCode1 = (num) => {
  const vt = [0]
  for (let i = 0; i < num; i++) {
    let size = vt.length
    for (let j = 0; j < size; j++) {
      let val = vt[j] << 1
      if (j % 2 === 0) {
        vt.push(val)
        vt.push(val + 1)
      } else {
        vt.push(val + 1)
        vt.push(val)
      }
    }
    vt.splice(0, size)
  }

  return vt
}

const grayCode2 = (num) => {
  const vt = []
  let size = 1 << num
  for (let i = 0; i < size; ++i) {
    vt.push((i >> 1) ^ i)
  }

  return vt
}

export const grayCode = (num) => {
  return Math.round(Math.random()) ? grayCode1(num) : grayCode2(num)
}
