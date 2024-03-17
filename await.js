//part1
const createDelay=(delayTime)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Delay completed")
        },delayTime)
})}
  
async function asyncCall(delayTime) {
    const result = await createDelay(delayTime);
    console.log(result);
  }
  
  asyncCall(1000);


//part2

async function asyncFunction(delayTime){
    try{
    const result= await createDelay(delayTime);
    console.log(result);
    } catch (error) {
        console.log("error occured");
    }
}

asyncFunction(1000)

//part3
async function task3() {
    const result1 = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("message1")
        }, 2000)
    })
    console.log(result1);
    const result2 = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("message2")
        },3000)
    })
    console.log(result2);
    const result3 = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("message3")
        },1000)
    })
    console.log(result3);
}

task3();


//part4
const createDelay4=(delayTime)=>{
    return new Promise((resolve,reject)=>{
        let num=Math.random()*2;
        setTimeout(()=>{
            if(num<0.5){
                resolve("delay is successfully completed")
            } else{
                reject("Error: Delay failed")
            }
        },delayTime)
})}


async function task4(delayTime){
    try{
    const result= await createDelay4(delayTime);
    console.log(result);
    } catch (error) {
        console.log(error);
    }
}

task4(1000)


//part5

async function task5() {
    const result1 = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("first mesage")
        }, 2000)
    })
    const result2 = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("second message")
        },3000)
    })
    const result3 = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("third message")
        },1000)
    })
    const results= await Promise.all([result1,result2,result3])
    console.log(results);
}

task5();
