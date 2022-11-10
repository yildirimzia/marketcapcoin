import { createContext, useState, useEffect } from 'react'


export const CoinmarketContext = createContext()


export const CoinMarketProvider = ({ children }) => {

    const getTopTenCoins = async () => {
        try {
            const res = await fetch('/api/getTopten')
            const data = await res.json()
            return data.data.data
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <CoinmarketContext.Provider
            value={{
                getTopTenCoins
            }}
        >{children}</CoinmarketContext.Provider>
    )
}