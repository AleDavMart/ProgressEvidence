const mystery = 'answer';

const PI = Math.PI;

const obj = {
    p1: 10,
    p2: 20,
    f1() {};
    f2: () =>{},
    [mystery]: 42,
    PI,
}

//if obj.mystery is called it would be undefined when ran.
//this is becuase it would change the name of mystery to answer
//which would become the new object with a value of 42. 

//use shorter syntax by defining the object by just calling PI
//within the object. This is cause the value was defined before and outside.