//part 1 and 2
const createDelay1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Delay completed")
    },1000)
})


createDelay1
    .then((message)=>{
        console.log(message)
    })

//part3 -modified version of promise- we return the promise we created inside the function with required parameters

//Experiment with different ways of chaining promises to understand how sequential and parallel execution is handled.
const createDelay3=(message,delayTime)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        },delayTime)
})}
//parallel execution
createDelay3("delay 1",3000)
    .then((message)=>{
        console.log(message)
    })

createDelay3("delay 2",1000)
    .then((message)=>{
        console.log(message)
    })

createDelay3("delay 3",2000)
    .then((message)=>{
        console.log(message)
    })

//sequental execution
createDelay3("delay 1",3000)
    .then((message)=>{
        console.log(message)
        return createDelay3("delay 2",1000)
    })
    .then((message)=>{
        console.log(message)
        return createDelay3("delay 3",2000)
    })
    .then((message)=>{
        console.log(message)
    })


//part4-error handling
//for randomly choosing either reject or resolve:
const createDelay4=(delayTime)=>{
    return new Promise((resolve,reject)=>{
        let num=Math.random()*2;
        setTimeout(()=>{
            if(num<0.5){
                resolve("Delay completed")
            } else{
                reject("Error: Delay failed")
            }
        },delayTime)
})}

createDelay4(4000)
    .then((message)=>{
        console.log(message)
    })
    .catch((message)=>{
        console.log(message)
    })


//promise all
const promise1=createDelay3("hello",1000)
const promise2=createDelay3("goodbye",4000)

Promise.all([promise1,promise2])
    .then((promises)=>{
        console.log(promises);
    })
    .catch(()=>{
        console.log("error occured");
    })