//1
/*
buat fungsi untuk mengubah excel sheet
jika 
A = 1
B = 2
...
Z = 26
AA = 27
rumus:
Z = 26
ZZ = 26^2 + 26
zzz = 26^3 + 26^2 + 26

dara dpaat rumus:
Z = 26
ZZ = AA - ZZ (26 * 26)
zzz = AAA - ZZZ (26 * 26 * 26)
*/

function excelColumn(str){
    let result = 0
    let power = str.length - 1
    for(let i = 0; i < str.length; i++) {
        result += (str[i].charCodeAt(0) - 64) * (26 ** power) //kalo huruf besar itu A = 65, B = 66
        power--
    }
    return result

}
console.log(excelColumn("AA"))


//2
/*
mencari duplicate
input: nums = [2,2,1]
output: 1
*/
function singleNumber(arr1) {
   for(let i = 0; i < arr1.length; i++){
    let flag = true //sendiri
    for(let j = 0; j < arr1.length; j++){
        console.log(arr1[i], " == ", arr1[j], " and ", i, " == ",j)
        if(arr1[i] == arr1[j] && i != j) {
            flag = false //double
            break
        }
    }
    console.log(" ----------------- ")
    if(flag){
        return arr1[i]
    }
   }
}
console.log(singleNumber([2,2,1]))

//3
/*
mencari apakah 2 string bersifat anagram yaitu sebuah kata yang memiliki komponen2 huruf yang sama tapi berbeda kata
contoh:
input: s = "anagram", t = "nagaram"

name1 = I AM LORD VOLDEMORT
name2 = TOM MARVOLO RIDDLE
*/
function kata(name1, name2) {
    let result = []
    kata3 = name1.split("").sort().join("") //untuk membuat string menjadi array, maka perlu dilakukan split() pada string dan kemudian array tersebut bisa di urutkan dengan sort(). untuk mengubah array menjadi string, maka bisa menggunakan perintah join()
    kata4 = name2.split("").sort().join("")
    
    if(kata3 = kata4){
        console.log("true")
    } else {
        console.log("false")
    }
}
kata("I AM LORD VOLDEMORT", "TOM MARVOLO RIDDLE")


//4
function stairCase(n){
    let firstSC = 1
    let secondSC = 2
    for(let i = 3; i <= n; i++){
        let temp = secondSC
        secondSC = firstSC + secondSC
        firstSC = temp
        console.log(i, " => ", firstSC, " --> ", secondSC)
    }
    return secondSC
}

console.log(stairCase(5))

