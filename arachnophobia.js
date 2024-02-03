/* From https://www.codewars.com/kata/5bc73331797b005d18000255

There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

Our spiders will have legs, body, eyes and a mouth. Here are some examples:

/\((OOwOO))/\

/╲(((0000w0000)))╱\

^(oWo)^
You will be given four values:

leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
mouth representing the spider's mouth
eye representing the spider's eye
Note: the eyes are symmetric, and their total amount is 2 to the power of body size.

*/

const arachnophobia = (legSize, bodySize, mouth, eye) => {
    const LEG_SIZES = ["", "^ ^", "/| |/", "\|| ||/", "\| |/"]
    const BODY_SIZES = ["", "( )", "(( ))", "((( )))"]
    const EYE_COUNT = Math.pow(2, bodySize)
    return LEG_SIZES[legSize].split(" ")[0] 
      + BODY_SIZES[bodySize].split(" ")[0] 
      + Array.from({ length: EYE_COUNT / 2 }, () => eye).join("") 
      + mouth 
      + BODY_SIZES[bodySize].split(" ")[1] 
      + LEG_SIZES[legSize].split(" ")[1]
}

console.log(arachnophobia(1,2,"w","o"))
