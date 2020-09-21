import Product1 from '../images/product1.png'
import Product2 from '../images/product2.png'
import Product3 from '../images/product3.png'
import Product4 from '../images/product4.png'
import Product5 from '../images/product5.png'


const initState = {
    addedProducts: [
        {id:1,title:'Jacket',code:"#594786", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:200,img:Product1,quantity:1},
        {id:2,title:'T Shirt',code:"#364251", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:100,img: Product2,quantity:1},
        {id:3,title:'Suit',code:"#956784", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:260,img: Product3,quantity:1},
        {id:4,title:'Short',code:"#125496", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:200,img:Product4,quantity:1},
        {id:5,title:'Nike shoes',code:"#836542", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Product5,quantity:1},
    ],
    total: 920

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;