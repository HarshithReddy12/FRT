import React from 'react';
import "./CompletedPaymentModule.css"
import QRCODE from '../images/covid/QRCODEhealth.png';
const CompletedPaymentModule = () => {
    
    return(
        <>
        <div className="boxCompleted-boxModulepayment">
            <div>
                <img src={QRCODE} alt="" />
            </div>
            <div className="CP-detailsOfpayment">
        <h2>Completed payment</h2>
        <h2><b>Recipt:</b>79866</h2>
        <h2><b>Transaction ID:</b><br />a4782-aaw998</h2>
        <h3><b>Payment Payed:</b>299</h3>
        </div>
        </div>
        
        </>
    )
}

export default CompletedPaymentModule