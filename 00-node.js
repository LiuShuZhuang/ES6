{
    let str = 'asdfatwabhemaamrtyasdbdeteatwaasdf';

    let arr = str.split('a');       //split 分离 离开;
    // console.log(arr);
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    let str = arr.join(':');        //join 参加;结合;连接
    // console.log(str);
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    let newArr = arr.slice(3, 5);        //薄片 部分 菜刀 把...分成部分

    // console.log(newArr, arr);
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    let newArr = arr.splice(3, 1, 'hahahahahah', 'aaaaaaaa');

    // console.log(newArr, arr);       //拼接 接合 结婚
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    arr.forEach((...a)=>{
        console.log(this);
    })
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    for (let val in arr) {
        // console.log(val);
    }
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    {
        for (let val of arr) {
            // console.log(val);
        }
    }

    {
        for (let keys of arr.keys()) {
            // console.log(keys);
        }
    }

    {
        for (let entries of arr.entries()){
            // console.log(entries);
        }
    }
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    var newArr = arr.filter(function(value){
        return value.length > 4;
    })

    // console.log(newArr);
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    for(let i=0;i<arr.length;i++){
        // console.log(arr[i]);
    }
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    arr.map((val)=>{
        // console.log(`${val}test`);
    })
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    var str = arr.reduce((...a)=>{
        return `${a[0]}${a[1]}`
    })

    // console.log(str);
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    var judge = arr.some((value)=>{
        return value.length>3;
    })

    // console.log(judge);
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    let judge = arr.every((value)=>{
        return value.length>3;
    })

    // console.log(judge);
}

{
    let arr = ['asdf', 'tw', 'bhema', 'mrty', 'sdbdete', 'tw', 'asdf'];

    let arr2 = 'asdfasd';

    let newArr = arr.concat(arr2);

    // console.log(newArr);
}