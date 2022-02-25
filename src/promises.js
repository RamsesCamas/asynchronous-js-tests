const somethingWillHappen = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Ta bien');
        }else{
            reject('Uhhhh');
        }
    });
};

somethingWillHappen().then(respose => console.log(respose)).catch(err=> console.log(err));



const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('Ta bien prometido');
            },2000);
        }else{
            const error = new Error('Mira pues');
            reject(error);
        }
    });
};

somethingWillHappen2().then(respose => console.log(respose)).catch(err=> console.log(err));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(respose=>{
    console.log('Array de resultados', respose);
}).catch(err=>{
    console.log(err);
})