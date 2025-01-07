import React from "react";
import { useSelector } from "react-redux";
import { cart } from "./Store/ShoppingCartReducer";
import { Box, Grid2 as Grid } from "@mui/material";
import ProductCard from "./CustomInputs/ProductCard";

export function CartList(){
    const list = useSelector(cart)
    return (<>
     <div container spacing={2}>

<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={4}>

{list && list.map((alb)=>{
    return (<Grid key={alb.id} className="gl" size={{ xs: 6, md: 4, lg:3 }}>
        <ProductCard data={alb} hideAddToCart={true}></ProductCard>
    </Grid>)
})}
  </Grid>
  </Box>
{/* <Counter2/>
<Header/> */}
</div>
    </>)
}