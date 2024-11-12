for(let i = 0;i<catalog.length;i++)
{
    catalog[i]["id"]=100+i;
}

function f1()
{
    let x = document.querySelector("#name").value;
    let y = catalog.filter((item)=>item.title.includes(x));   
    console.log(y);
}





