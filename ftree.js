function resolveR(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('done');
        }, 5000);
    });
}

async function async(){
    console.log('callin');
    let result= await resolveR();
    console.log(result)
}

async();