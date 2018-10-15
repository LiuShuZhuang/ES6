{
    let info = 36.523456;

    console.log(Number.isNaN(info));        //是否为NaN
    console.log(Number.parseInt(info));     //转整数    
    console.log(Number.parseFloat(info));   //保留浮点数
    console.log(Number.isFinite(info));     //判断是否数字
    console.log(Number.isInteger(info));    //判断是否为整数
    console.log(Math.abs(info));            //绝对值
    console.log(Math.sqrt(info));           //平方根
    console.log(Math.trunc(info));          //截取 取整     es6新增
    console.log(Math.ceil(info));           //向上取整
    console.log(Math.floor(info));          //向下取整
    console.log(Math.round(info));          //四舍五入
    console.log(info.toFixed(4));           //四舍五入保留N位
}
{
    // let info = "05";

    // console.log(Number(info));       //5
    // console.log(parseInt(info));     //5
    // console.log(parseFloat(info));   //5
    // console.log('数字字符串  05---------------01,number,parseInt,parseFloat');
}

{
    // let info = "05test";

    // console.log(Number(info));          //NaN
    // console.log(parseInt(info));        //05
    // console.log(parseFloat(info));      //05
    // console.log('字符串  test05---------------01,number,parseInt,parseFloat');
}

{
    // let info = "05.123456test";

    // console.log(Number(info));          //NaN
    // console.log(parseInt(info));        //5
    // console.log(parseFloat(info));      //5.123456
    // console.log('字符串  test05---------------01,number,parseInt,parseFloat');
}

{
    // let info = "-5.123456test";

    // console.log(Number(info));          //NaN
    // console.log(parseInt(info));        //5
    // console.log(parseFloat(info));      //5.123456
    // console.log('字符串  test05---------------01,number,parseInt,parseFloat');
}