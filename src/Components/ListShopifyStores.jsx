import { useState } from "react"

function ListShopifyStores(){
    
    let [stores, setStores] = useState([])
    let jsonStores = getStores().then((stores)=>{
        setStores(stores)
    })
    return(
        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Name</p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">admin api access token</p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Order prefix</p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Shopify store url</p>
                        </th>
                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">Paymentcapture on fullfilment</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store)=>{
                        return (
                        <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {store.name}
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {store.adminAccessToken}
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {store.orderPrefix}
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {store.storeName}
                                </p>
                            </td>
                            <td>
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    {store.capturePayment}
                                </p>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
async function getStores(){
    let res = await fetch('http://localhost:3001/api/shopify/stores', {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    let json = await res.json()
    return json
}
 export default ListShopifyStores