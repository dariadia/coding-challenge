/* From https://www.codewars.com/kata/576757b1df89ecf5bd00073b
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

*/

const buildTower = (floors) => {
    let ans = []
    let width = floors * 2 - 1
    let _pointer = 1
    const STAR = "*", GAP = " "
    for (let i = 0; i < floors; i++) {
        ans.push(GAP.repeat((width - _pointer) / 2) + STAR.repeat(_pointer) + GAP.repeat((width - _pointer) / 2))
        _pointer = _pointer + 2
    }
    return ans
}

console.log(buildTower(3))
