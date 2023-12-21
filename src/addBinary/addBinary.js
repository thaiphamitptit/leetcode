export const addBinary = (a, b) => {
  let alen = a.length
  let blen = b.length
  let carry = false
  let result = ''

  while (alen > 0 || blen > 0) {
    const abit = alen <= 0 ? 0 : parseInt(a[alen - 1])
    const bbit = blen <= 0 ? 0 : parseInt(b[blen - 1])
    const cbit = carry ? 1 : 0

    result = ((abit + bbit + cbit) & 1) + result
    carry = abit + bbit + cbit > 1

    alen--
    blen--
  }

  if (carry) {
    result = '1' + result
  }

  return result
}
