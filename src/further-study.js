// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    const array3 = []
    for (let item of array1) {
        if (array2.includes(item)) {
            if (array3.includes(item)) {}
            else {
            array3.push(item)
            }
        }
    }
    return array3
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    const div = []
    for(let i = 1; i <= 100; i ++) {
        if (Number.isInteger(i / a)) {
            div.push(i)
        } else  if (Number.isInteger(i / b)) {
            div.push(i)
        } else  if (Number.isInteger(i / c)) {
            div.push(i)
        } else {}
    }
    return div
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
    let comp = ''
    let stringArray = string.split('')
    for (let i = 0; i < stringArray.length; i ++) {
        let letter = stringArray[i]
        let count = 1
        while (letter === stringArray[i + 1]) {
            count ++
            i++
        }
        if (count === 1) {
            comp += letter
        } else {
            comp += count + letter
        }
    }
    return comp
}

export { commonStrings, compressString, divisibleByEither };
