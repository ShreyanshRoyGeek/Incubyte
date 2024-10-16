/*

    Example 1:
    Input: str = "1\n2,3"
    Output: 6

    Example 2:
    Input: nums = "//;\n1;2" 
    Output: 3


    Example 3:
    Input: nums = "//;\n1;2-1" 
    Output: negative numbers not allowed -1


    Example 4:
    Input: nums = "//;\n1;2-" 
    Output: negative numbers not allowed 3


*/


function add(str) {
    let number = 0
    for(let i=0; i<str.length; i++) {
        if(("-").includes(str[i]) && (str[i] && str[i+1])) return `negative numbers not allowed ${str[i]+str[i+1]}`
        if(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(str[i])) {
            number += parseInt(str[i])
        }
    }
    return number
}


let str = "1\n2,3"
str = "//8;\n1;2"
const res = add(str)
console.log('res', res)

