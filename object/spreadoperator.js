

var colors=["red","green","blue"]

//var colorcopy=colors   // like this means it will change the colors also

var  colorcopy=[...colors,"cyan","purple"]  // ...  spread operator   to take a duplicate one or shallow copy
                
//colorcopy.pop()   //  when we change the colorcopy it will also change the colors  it has same reference thats why .


console.log(colors)

console.log(colorcopy);



// in object

var user={name:"krish",email:"krish@gmail.com",password:"password@123",isActive:true}

var userCopy={...user}

userCopy.isActive=false

console.log(user)

console.log(userCopy)

console.table(userCopy)   // to display in table



var product={id:1,name:"ramu",brand:"samsung",price:12000,isAvailable:false}

var productCopy={...product,isAvailable:true}   // it will change the isAvailabe in the product into true

console.log(productCopy);

