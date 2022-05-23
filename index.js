//store the products array in localstorage as "products"

function products(t, d, p, i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function addData(el){
    el.preventDefault()
    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
   // console.log(Type, Desc, Price, Image)

    let p1=new products(type, desc, price, image);
    let data=JSON.parse(localStorage.getItem("products"))||[];
    data.push(p1);
    localStorage.setItem("products", JSON.stringify(data));

    console.log(p1);
    window.location.href="inventory.html"
}
function calculete(){
    let data=JSON.parse(localStorage.getItem("products"))||[]
    let products={}
    for(let i=0; i<data.length; i++){
        if(!products[data[i].price]){
            products[data[i].price]=0
        }
    }
    for(let i=0; i<data.length; i++){
       
            products[data[i].price]++
        
    }
    console.log(products)
}
calculete()