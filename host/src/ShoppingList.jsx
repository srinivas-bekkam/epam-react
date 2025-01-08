import * as React from "react"

import { useState} from "react"
import Counter2 from "./components/Counter2"
import Header from "./components/Header"
import { useGetAlbumsQuery } from "./Store/AlbumsQuery"
import { useGetShoppingListQuery } from "./Store/ShoppingCartQuery"
import { Button } from "@mui/material"
import ProductCard from "./CustomInputs/ProductCard"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

export default function ShoppingList(){
     let [page, setPage]=useState(1)
     const pageSize=10;
    const {data, isFetching} = useGetShoppingListQuery({page:page, pageSize:10})

    React.useEffect(()=>{

        const onScrollChange=(e)=>{
            const currentScroll= window.innerHeight+ window.scrollY;
            const bodyHeight= document.body.offsetHeight
            if(currentScroll>=bodyHeight){
                if(!isFetching){
                    setPage(page+1);
                }
            }

        }
        window.addEventListener("scroll",onScrollChange);

        return ()=>{
            window.removeEventListener("scroll",onScrollChange);

        }

    },[page,isFetching])
    
    return (
    <div container spacing={2}>

        {/* <Button variant="contained"> Button</Button> */}
        {isFetching && `Loading...`}
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
   
        {data && data.map((alb)=>{
            return (<Grid key={alb.id} className="gl" size={{ xs: 6, md: 4, lg:3 }}>
                {/* <h3>{alb.title}</h3> */}
                <ProductCard data={alb} hideAddToCart={false}></ProductCard>
            </Grid>)
        })}
          </Grid>
          </Box>
        {/* <Counter2/>
        <Header/> */}
    </div>
    )
}