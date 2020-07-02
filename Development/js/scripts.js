let mat=["yes","no","definitly"];
mat.forEach(logger);
function logger(x){
    console.log(x)
}

let summerDeg=[12,45,50,54];
summerDeg.filter(myFun)
console.log(summerDeg.filter(myFun))
function myFun (y){
    return y > 50
}
// let newarray = summerdegree.map(myFunction)
// function myFunction(num)
// return num <=40;

let books = [
    {
        name: "book1",
        ID:1,
    },

    {
        name: "book2",
        ID:2,
    },

    {
        name: "book3",
        ID:3,
    },

    {
        name: "book4",
        ID:4,
    },

];

getBookById(books,4)

function getBookById(books,ID){
    for ( i of books){
    if (i.ID == ID)
    { console.log("متوفر")
    break;
    }
//   else {console.log("غير متوفر")
}
// return console.log("متوفر")
}


let shop =[ ];

let items= prompt("اكتب مشترياتك");

let price= prompt("االسعر");

let size= prompt("الكميه");
