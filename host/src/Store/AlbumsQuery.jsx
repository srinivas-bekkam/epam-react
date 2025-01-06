import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
export const  AlbumsQuery = createApi({
    reducerPath:'AlbumsQuery',
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints:(builder)=>({
        getAlbums:builder.query({
            query:(page)=>`/albums?_pages=${page}&_limit=10`,
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
export const {useGetAlbumsQuery}=AlbumsQuery;