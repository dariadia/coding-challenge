/* 
From https://www.codewars.com/kata/57675f3dedc6f728ee000256
Build Tower by the following given arguments:

number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))

for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]

*/

const buildTower = (floors, blockSize) => {
    let ans = []
    let width = floors * 2 - 1
    let _pointer = 1
    const STAR = "*", GAP = " "
    for (let i = 0; i < floors; i++) {
        const _string = GAP.repeat((width - _pointer) / 2) + STAR.repeat(_pointer) + GAP.repeat((width - _pointer) / 2)
        for (let j = 0; j < blockSize; j++) ans.push(_string)
        _pointer = _pointer + 2
    }
    return ans
}
console.log(buildTower(3, 2))
