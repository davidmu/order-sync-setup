
import { useState } from 'react';
function ShopifyStoreForm(){
    let [storeName, setName] = useState("")
    let [accesstoken, setAccessToken] = useState("")
    let [orderPrefix, setOrderPrefix] = useState("")
    let [urlName, setUrlName] = useState("")
    let [paymentCapture, setPaymentCapture] = useState(false)
    return(
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Store name</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Store name" type="text" value={storeName} onChange={(event) => {
                    setName(event.target.value)}} />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin access api Token</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Access token" value={accesstoken} onChange={(event) => {
                    setAccessToken(event.target.value)}} />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OrderPrefix</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Short order prefix"  value={orderPrefix} onChange={(event) => {
                    setOrderPrefix(event.target.value)}} />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ShopifyStore/url name</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Storename used for the url in shopify"  value={urlName} onChange={(event) => {
                    setUrlName(event.target.value)}}/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Payment Capture needed on Fulfillment
                </label>
                <input type='checkbox' checked={paymentCapture} onChange={(event) => {
                    setPaymentCapture(!paymentCapture)}}/>
            </div>
            <button onClick={(e)=>{ 
                    e.preventDefault();
                    fetch('http://localhost:3001/api/shopify/addstore', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: storeName,
                            adminAccessToken: accesstoken,
                            orderPrefix: orderPrefix,
                            storeName: urlName,
                            capturePayment: paymentCapture,
                        })
                      }).then((res)=>{
                        res.json().then((json)=>{
                            console.log(json)
                        })
                      })
                      
                }}> Save Store
            </button>
        </form>
    )
}

export default ShopifyStoreForm