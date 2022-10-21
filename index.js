import{ menuArray } from './data.js'

let subt=0
let num1=0
let num2=1
let order=''
let orderA=[]

document.addEventListener('click',(e)=>{
    
    if(e.target.dataset.addd){
       
            getorder(e.target.dataset.addd)
            }
    if(e.target.dataset.remove){
        remove(e.target.dataset.remove)
    }
    if(e.target.dataset.btn){
        modell()
    }
  
           
})
function modell(){
    if( document.getElementById('model').style.display==='none'){
        document.getElementById('model').style.display=''
        document.getElementById('model').style.position='fixed'
    }else{
        document.getElementById('model').style.display='none'
    }
   
    console.log('none')
}


function remove(rval){

   let price=""
   

const index=orderA.findIndex(obj=>{
    return obj.fooditem==rval
})

orderA.forEach((data)=>{
    if(rval===data.fooditem){
        price=data.price
    }
    console.log(data ,"  d a t a" ,rval)
})
 orderA.splice(index,1)

order=''

orderA.forEach((data)=>{
    
    order +=
    ` 
    <div class="order" id="order">
        
        <div class="ordp">
          <p  id="ord">${data.fooditem}</p>
          
          <i class="fa-solid fa-minus" data-remove="${data.fooditem}"></i>
          <p  id="ord">${data.price}</p>
        </div>
        
    </div>

    `
    
})
subt-=price
console.log('subt',subt,' price', price)
 render()

}
function getorder(val){
    let price=''

    menuArray.forEach((data)=>{
    if(val===data.name){
        price=data.price
    }
})
 

   orderA.push({
    fooditem:val,
    price:price
   })
console.log(val,price)
   order=''
orderA.forEach((data)=>{
    console.log(data)
    order +=
    ` 
    <div class="order" id="order">
        
        <div class="ordp">
          <p  id="ord">${data.fooditem}</p>
          
          <i class="fa-solid fa-minus" data-remove="${data.fooditem}"></i>
          <p  id="ord">${data.price}</p>
        </div>
        
    </div>
    `
})
 
      subt+=price
    

    
     render()
  
}
function getfeedhtml(){
    let feedhtml=''
    menuArray.forEach((data)=>{
   feedhtml+=`
        
        <div class='lower'>
            <div class="items">
                 <div class="emoji"><img src ="${data.emoji}"></div>
                 <div>
                    <p>${data.name}</p>
                    <p>${data.ingredients}</p>
                    <p>${data.price}</p>
                 </div>
                 <div class="icon">
                 <i class="fa-sharp fa-solid fa-cart-shopping" data-addd="${data.name}"></i>
                 </div>
            </div>
        </div>
  
   `
 
    })
   return feedhtml
}



function render(){

    document.getElementById('lower').innerHTML=getfeedhtml()
    document.getElementById('order').innerHTML=order
    document.getElementById('subt').innerText =subt
}
render()