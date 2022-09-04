import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux/es/exports";
import {addCart, delCart} from "../action";
import {useParams} from 'react-router';
import{NavLink} from 'react-router-dom';
import Skleton from 'react-loading-skeleton'

const Product =()=>{
    const {id}=useParams();
    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(false);

    const dispatch = useDispatch();
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }
    
    const removeProduct = (product)=>{
        dispatch(delCart(product))
    }

    useEffect(()=>{
        const getProduct= async ()=>{
            setLoading(true)
            const response= await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
             setLoading(false)
        } 
        getProduct(); 
    },[]);
    
    const Loading=()=>{
        return(
            <>
             <div className="col-md-6">
                <Skleton height={350}/>
            </div>
            <div className="col-md-6" style={{lineHeight:2}}>
                <Skleton height={50} width={300}/>
                <Skleton height={75}/>
                <Skleton height={25} width={150}/>
                <Skleton height={30}/>
                <Skleton height={150}/>
                <Skleton height={50} width={100}/>
                <Skleton height={50} width={100} style={{marginLeft:6}}/>

            </div>
            </>
        )
    }

     const ShowProduct=()=>{
         
          return(
             <>
               <div className="col-md-6" >
                 <img src={product.image} alt={product.title}
                 height='400px'width='400px'/>
              </div>
               <div className="col-md-6">
                <h4 className="text-uppercase text-black-50 my-3">{product.category}</h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder">
                    Reating 
                    <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark me-2" onClick={()=>addProduct(product)}>
                    Add to Cart
                </button>
                <button className="btn btn-outline-dark me-2" onClick={()=>removeProduct(product)}>
                    Remove to Cart
                </button>
                <NavLink to='/cart' className="btn btn-dark ">Go to Cart</NavLink>
               </div>
               
             </>
          )
     }
     return(
        <div>
            <div className="container my-3">
                <div className="row">
                {loading ?<Loading/>:<ShowProduct/>} 
            </div>
            </div>
        </div>
    )
}
 export default Product;

