for(let i = 0;i<catalog.length;i++)
{
    catalog[i]["id"]=100+i;
}
console.log(catalog);

function f1()
{
    let x = document.querySelector("#name").value;
    let y = catalog.filter((item)=>item.title.includes(x));   
    console.log(y);
    printTable(y);
}
function f2()
{
    let countries = catalog.reduce((prev,cur)=>{
              if(!prev.includes(cur.country)){
                prev.push(cur.country);
              }
              return prev;
    },[]).sort();

    for(let i=0;i<countries.length;i++)
    {
        document.getElementById("countries").innerHTML+="<option value=" + countries[i] + ">" + countries[i] + "</option>";
    }
}
f2();
function printf2(){
    let x = document.querySelector("#countries").value;
    let print = catalog.filter((item)=>item.country===x);
    console.log(print);
    printTable(print);
}

function f3()
{
    let x = document.querySelector("#year1").value;
    let y = document.querySelector("#year2").value;
    let years = catalog.find((item)=>(item.year>x && item.year<y)||(item.year>x && item.year<y))
    console.log(years);
    printTable(years);
}

function printTable(item)
{
  item.forEach(element => {
    document.getElementById("t").innerHTML+="<tr><td>"+element.title+"<td><td>"+element.artist+"<td><td>"+element.country+"<td><td>"+element.company+"<td><td>"+element.price+"<td><td>"+element.year+"<td></td>"+element.id+"<td></tr>";
  });
}

function add(){
    let x={title:document.getElementById("title").value,
    artist:document.getElementById("artist").value,
    country:document.getElementById("country").value,
    company:document.getElementById("company").value,
    price:document.getElementById("price").value,
    year:document.getElementById("year").value,
    id:catalog.length-1
    }   
    catalog.push(x);
    printTable(catalog);
}

function remove(id){
    let x = catalog.findIndex((item)=>item==id);
    if(x>0)
      catalog.splice(x,1);
      printTable(catalog);
}

const names = ['Alice', 'Bob','Tiff', 'Bruce','Alice'];
const result1 = names.reduce((prev,cur)=>{
        if(!prev[cur])
          prev[cur] = 0;
        prev[cur]++;
    return prev;
},{})
console.log(result1);

const letters = ['a','b','a','b','c','e','e','c','d','d','d','d'];
let result2 = letters.filter((item, index)=>!letters.includes(item,index+1));
console.log(result2);

const numbers = [-5, 25, -19, 0, 16, 0];
let result3 = numbers.reduce((prev,cur)=>{
    if(cur>0){
      prev.push(Math.sqrt(cur));}
    return prev; 
},[])
console.log(result3);






