class Order{
    constructor(orderNo,orderName){
        this.orderNo = orderNo;
        this.orderName = orderName;
    }
    display(){
        const months = ["January","February","March","April","May","June",
        "July","August","September","October","November","December"]
        let date = new Date();
        let fullDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        return this.orderNo + " " + this.orderName + " " + fullDate;
    }
}

//inheritance
class User extends Order{
    constructor(orderNo,orderName,userName){
        super(orderNo,orderName);
        this.userName = userName;
    }
    show(){
        console.log(this.display() + " " + this.userName);
    }
}


//getters and setters - encapsulation
class Student{
    constructor(id,name,course){
        this.id = id;
        this.name = name;
        this.course = course;
    }
    get details(){
        console.log(this.id + " " + this.name + " " + this.course);
    }
    set sid(x){
        this.id = x;
    }
    set sname(y){
        this.name = y;
    }
    set scourse(z){
        this.course = z;
    }
}

const student1 = new Student(19120033,"Shubham Tiwari","BCA");
student1.details;
student1.sid = 19120060 ;
student1.sname = "Abhishek Verma";
student1.scourse = "BTECH";
student1.details;


//static method
class Car{
    constructor(brand){
        this.brand = brand;
    }
    static display(x){
        console.log("Hello " + x.brand);
    }
}

const myCar = new Car("Mustang");
Car.display(myCar);


//polymorphism
class Order{
   
    display(){
        console.log("Order class is invoked");
    }
    
}

class Menu extends Order{
   
    display(){
        console.log("Menu class is invoked");
    }
}

const x = [new Order(), new Menu()];
x.forEach((msg) => {
    msg.display();
});