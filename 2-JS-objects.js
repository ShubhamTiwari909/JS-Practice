//objects in JS
const  myObj = {
    name:"shubham",
    course:"BCA",
    age:20,
    email:"shubhmtiwri00@gmail.com"
}

// console.log(myObj.age);//first way of accessing
// console.log(myObj["age"]);//second way of accessing


//creating new properties
myObj["semester"] = 5;

//deleting a property
delete myObj["semester"];


//function inside objects
const Obj1 = {
    firstname:"Shubham",
    lastname:"Tiwari",
    course:"BCA",
    age:20,
    email:"shubhmtiwri00@gmail.com",
    fullname(){
        return this.firstname + " " + this.lastname;
    }

}

// console.log(Obj1.fullname());

//Arrays inside objects
const Obj2 = {
    firstname:"Shubham",
    lastname:"Tiwari",
    course:"BCA",
    subjects:["PHP,MYSQL,MULTIMEDIA,MOBILE TECHNOLOGY"]
}

let text = "";
for(let i in Obj2.subjects){
  text += Obj2.subjects[i];
}

//object inside object
const Obj3 = {
    firstname : "Shubham",
    lastname : "Tiwari",
    course : "BCA",
    age : 20,
    marks1 : {
       subject:"php",
       total:80
    },
    marks2 : {
        subject:"Mysql",
        total:91
    }

}

// console.log(Obj3.marks1.total);accessing


//getters and setter 
const Obj4 = {
    firstname:"Shubham",
    lastname:"Tiwari",
    course:"BCA",
    fullname:"",
    get getFullname(){
        return this.fullname.toUpperCase();
    },
    set setFullname(value){
        this.fullname = value;
    }
}


Obj4.setFullname = "Bharat Chauhan";
console.log(Obj4.getFullname);

Obj4.setFullname = "Shubham Tiwari";
console.log(Obj4.getFullname);



//constructors
function Person(first,last,age,email){
    this.first = first;
    this.last = last;
    this.age = age;
    this.email = email;
}

const Person1 = new Person("Shubham","Tiwari",20,"shubhmtiwri00@gmail.com");
const Person2 = new Person("Bharat","Chauhan",20,"chauhanbharat909@gmail.com");

console.log("My name is " + Person1.first + " " + Person1.last + " and i am " + Person1.age + " years old");

Person2.name = function(){
    return this.first + " " + this.last;
}

console.log(Person2.name());

//object prototype -  used to add properties to contructor objects
Person.prototype.name = function(){
    return this.first + " " + this.last;
}
console.log(Person1.name());


//object.defineProperty
Object.defineProperty(Obj4,"semester",{ value:5});
console.log(Obj4.semester);


//object destructuring
const obj1 = {name : "Shubham", age : 20, course : "BCA", year : "3rd", jobStatus : "Web Developer"};
const { name, age, course, year, jobStatus } = obj1;

console.log(name , age , course, year , jobStatus);


// using variable as a key
let orderNo = 1 , orderName = "Burger" , price = 35;

const bill = {
    orderNo,
    orderName,
    price
}
console.log(bill)


//assigning variable name to the values
const {orderNo : Sno, orderName : Food} = bill;
console.log(Sno + " " + Food)


//Using Rest parameters 
let languages = {lang1 : "Javascript", lang2 : "PHP", lang3 : "Mysql", lang4 : "Python"}

let {lang1 , ...langs} = languages;
console.log(lang1);
console.log(langs);

