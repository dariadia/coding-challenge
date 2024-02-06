// From https://jscodebox.com/challenge/ghappy
// A small 'g' is 'happy', but only if a small 'g' follows before or after it. Return true if all g's are happy.

function gHappy(string) {
  const G = "g"
  const gPlace = string.indexOf(G)
  return string[gPlace - 1] === G 
    || string[gPlace + 1] === G 
}
