function geteven(value, delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        if(value % 2 == 0){
            resolve("Its is an even number");
        }else{
            reject(new Error("It is not an even number"))
        }
        },delay);
    });
}

async function output(result){
    try{
        let result = await geteven(9,2000);
        console.log(result);
    }
    catch(error){
        console.error(error);
    }
}

output();