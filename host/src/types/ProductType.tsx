
 interface Reviews {
  rating: number,//2,
  comment: string,//"Very unhappy with my purchase!",
  date: string,//"2024-05-23T08:56:21.618Z",
  reviewerName: string,//"John Doe",
  reviewerEmail: string,//"john.doe@x.dummyjson.com"
  }
 export interface Product {
  id: number,//1
  title: string,//"Essence Mascara Lash Princess",
  description: string,//"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: string,//"beauty",
  price:number,// 9.99,
  discountPercentage:number,// 7.17,
  rating: number,//4.94,
  stock: number,//5,
  tags:  string[],//,
  brand: string,//"Essence",
  sku: string,//"RCH45Q1A",
  weight: number,//2,
  dimensions: {
    width: number,//23.17,
    height: number,//14.43,
    depth: number,//28.01
    },
  warrantyInformation: string,//"1 month warranty",
  shippingInformation: string,//"Ships in 1 month",
  availabilityStatus: string,//"Low Stock",
   reviews: Reviews[],
    // "reviews": [
    //   {
    //   rating": 2,
    //   comment": "Very unhappy with my purchase!",
    //   date": "2024-05-23T08:56:21.618Z",
    //   reviewerName": "John Doe",
    //   reviewerEmail": "john.doe@x.dummyjson.com"
    //   },
    //   {
    //   rating": 2,
    //   comment": "Not as described!",
    //   date": "2024-05-23T08:56:21.618Z",
    //   reviewerName": "Nolan Gonzalez",
    //   reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
    //   },
    //   {
    //   rating": 5,
    //   comment": "Very satisfied!",
    //   date": "2024-05-23T08:56:21.618Z",
    //   reviewerName": "Scarlett Wright",
    //   reviewerEmail": "scarlett.wright@x.dummyjson.com"
    //   }
    // ],
  returnPolicy: string,//"30 days return policy",
    minimumOrderQuantity: number,//24,
  meta: {
    createdAt: string,//"2024-05-23T08:56:21.618Z",
    updatedAt: string,//"2024-05-23T08:56:21.618Z",
    barcode: string,//"9164035109868",
    qrCode: string,//"..."
    },
  thumbnail: string,//"...",
  images: string[],//["...", "...", "..."]
  }
  