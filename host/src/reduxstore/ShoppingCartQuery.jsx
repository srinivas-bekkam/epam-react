//https://dummyjson.com/products?limit=2&skip=2

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const ShoppingCartQuery=createApi({
    reducerPath:"ShoppingCartQuery",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(builder)=>({
      getShoppingList:builder.query({
        query:(query)=> `/products?limit=${query.pageSize}&skip=${query.page*query.pageSize}`,
        transformResponse:(response)=>{
            return response.products
        },
        providesTags:(result)=>{
            return result?result:[]
        },
        // Only have one cache entry because the arg always maps to one string
        serializeQueryArgs: ({ endpointName }) => {
            return endpointName
        },
        // Always merge incoming data to the cache entry
        merge: (currentCache, newItems) => {
            currentCache.push(...newItems)
        },
        // Refetch when the page arg changes
        forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },      
        })  
    })
})
export const {useGetShoppingListQuery}=ShoppingCartQuery;

