let fs = require('fs');
let get = (url)=>{
    return new Promise((resolve,reject) => {
        fs.readFile(url,'UTF-8',(err,data)=>{
            resolve(data);
        })
    });
}

// {
//     get('data/status.json').then((data)=>{
//         console.log(data);
//         return get('data/info.json');
//     }).then((data)=>{
//         console.log(data);
//         return get('data/user.json');
//     }).then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.info(error);
//     })
// }

    // {
    //     function* generator(){
    //         yield get('data/status.json');
    //         yield get('data/user.json');
    //         yield get('data/info.json');
    //     }

    //     let step = generator();

    //     step.next().value.then((data)=>{
    //         console.log(data);
    //         return step.next().value;
    //     }).then((data)=>{
    //         console.log(data);
    //         return step.next().value;
    //     }).then((data)=>{
    //         console.log(data);
    //     })
    // }

    {
        async function step() {
            let step1 = await get('data/status.json');
            let step2 = await get('data/user.json');
            let step3 = await get('data/info.json');
            // console.log(step1);
        }

        step();
    }