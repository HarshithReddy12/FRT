import React,{useState} from "react";
import './PaymentMoney.css'
import {useHistory} from "react-router"
const PaymentMoney = () =>{
    const history = useHistory();
    const[showPayment,setShowPayment] = useState(true)
    
    
    if(showPayment){
        return(
            <>
             <button id="PaymentProceed-module-button" onClick={()=>setShowPayment(false)}>
            Proceed
        </button>
        <div className="centerbox-paymentTransaction">
           <h1 id="Payment-module-text">Payment module</h1>
           <h1 id="Rate-payment-module">RS 299</h1>
           <div className="aligin-right-payment-module">
               <div>
                   <h1><i class="far fa-check-square" id="check-square-Payment"></i></h1>
               </div>
                <div id="payment-move-left">
                    <h2>Face to Face communication</h2>
                </div>
           </div>
           <div className="aligin-right-payment-module">
               <div>
                   <h1><i class="far fa-check-square" id="check-square-Payment"></i></h1>
               </div>
                <div id="payment-move-left">
                    <h2>30 Minutes Talk time  doctor</h2>
                </div>
           </div>
           <div className="aligin-right-payment-module">
               <div>
                   <h1><i class="far fa-check-square" id="check-square-Payment"></i></h1>
               </div>
                <div id="payment-move-left">
                    <h2>Face to Face communication</h2>
                </div>
           </div>
        </div>
        </>
        );
    }
    return(

        <>
        
        <button id="PaymentProceed-module-button">
            Proceed
        </button>
        <div className="centerbox-paymentTransaction">
           <h1 id="Payment-module-text">Payment module</h1>
           <h1 id="Rate-payment-module">RS 299</h1>
           <div className="aligin-right-payment-module">
               <div>
                   <h1><i class="far fa-check-square" id="check-square-Payment"></i></h1>
               </div>
                <div id="payment-move-left">
                    <h2>Face to Face communication</h2>
                </div>
           </div>
           <div className="aligin-right-payment-module">
               <div>
                   <h1><i class="far fa-check-square" id="check-square-Payment"></i></h1>
               </div>
                <div id="payment-move-left">
                    <h2>30 Minutes Talk time  doctor</h2>
                </div>
           </div>
           <div className="aligin-right-payment-module">
               <div>
                   <h1><i class="far fa-check-square" id="check-square-Payment"></i></h1>
               </div>
                <div id="payment-move-left">
                    <h2>Face to Face communication</h2>
                </div>
           </div>
        </div>
        <div className="payment-car-details">
            <h1>Credit/Debit card:</h1>
            <h3>Card Details</h3>
            <div className="total-inputdiv-cardinput">
                <div>
                    <input type="tel" id="short4" maxLength="4"/>
                </div>
                <div>
                    <input type="tel" id="short4" maxLength="4"/>
                </div> 
                <div>
                    <input type="tel" id="short4" maxLength="4"/>
                </div> 
                <div>
                    <input type="tel" id="short4" maxLength="4"/>
                </div>
                
            </div>
            <div className="cvvbox">
                    <h3>CVV</h3>
                    <input type="tel" id="short4" maxLength="3"/> 
                </div>
            <div className="cardHolderName">
                <h3>CardHolder Name:</h3>
                <input type="text" name="" id="long-text-cardHolderName" />
            </div>
            <div className="cvvbox">
                    <h3>Expiry mon/date</h3>
                    <input type="text" id="short5"/> 
                </div>
            <div>
                <button id="CPayment-button"  onClick={()=>{history.push('/CompletedPaymentModule')}}>Complete Payment</button>
            </div>
        </div>
        </>
    )
}

export default PaymentMoney