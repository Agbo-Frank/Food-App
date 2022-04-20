import { createContext, useState } from 'react'

export const ModelContext = createContext()

export function ModelProvider({children}){
    let [notification, setNotification] = useState(false)
    let [product, setProduct] = useState(false)
    let state = {
        notification,
        product,
        toggleNotification: () => setNotification(!notification),
        toggleProduct: () => setProduct(!product)
    }
    return(
        <ModelContext.Provider value={state}>
            {children}
        </ModelContext.Provider>
    )
}