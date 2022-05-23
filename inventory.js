
let data=JSON.parse(localStorage.getItem("products"))||[];

function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let all_pro=document.getElementById("all_products")
    all_pro.innerHTML=null

data.forEach(function(el, index){
    let box=document.createElement("div");

    let p1=document.createElement("p");
    p1.innerText=el.type;

    let p2=document.createElement("p");
    p2.innerText=el.desc;

    let p3=document.createElement("p");
    p3.innerText=el.price;

    let img=document.createElement("img");
    img.src=el.image;

    let btn=document.createElement("button")
    btn.innerText="Remove Product"
    btn.setAttribute("click", function(index){
        
     remove(el, index)
     index.parentNode.remove()
    })
   console.log(p1, p2, p3, img, btn)
    box.append(p1, p2, p3, img, btn)
    all_pro.append(box)
   // document.querySelector("#all_products").append(box)

})
}

append()
function remove( el ,index){
    pdata.splice(index, 1)
     localStorage.setItem("Products", JSON.stringify(pdata))
    window.location.reload()
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let newdata=data.filtar(function (el, i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[]
            trash.push(el);
            localStorage.setItem("trash", JSON.stringify(trash))
        }
        else{
            return i!==index;
        }
    })
    localStorage.setItem("products",JSON.stringify(newdata))
    append()


 }