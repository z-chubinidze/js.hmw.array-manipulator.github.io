
// Given an array 
var masivi = [12, 56, 34, 22, 12, 14, 90, 33, 39, 11, 23, 19];

/*შექმენათ დამატებითი ორი ცარიელი მასივი ლუწი და კენტი 
რიცხვებისთვის. ძირითადი მასივი გავიაროთ ციკლის დახმარებით
 და ლუწი რიცხვები გადავყაროთ ერთ მასივში, კენტები მეორეში.
*/

// even numbers array
const even = masivi.filter(e => e % 2 === 0)

//odd numbers array
const odd = masivi.filter(o => o % 2 !== 0)

// display on the page even numbers array
var array1 = document.getElementById("array1")
array1.innerHTML = "this is the even array" + " " + "-----" + " " + even;

// display on the page odd numbers array
var array2 = document.getElementById("array2")
array2.innerHTML = "this is the odd array" + " " + "-----" + " " + odd;


var cursor = document.getElementById("cursor");
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})