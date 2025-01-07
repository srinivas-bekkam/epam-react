import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup"
import InputText from "../CustomInputs/InputText";
import InputPassword from "../CustomInputs/InputPassword";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    
    return(<div className="login-page">
        <Formik
        initialValues={{
            username:'',
            password:''
        }}
        validationSchema={
            Yup.object({
            username:Yup.string().required("User Name Is Required"),
            password:Yup.string().required("Password Is Required")
            }
        )}
        onSubmit={(values)=>{
//alert(JSON.stringify(values))
if(values.username==="admin" && values.password==="admin"){
    localStorage.setItem("authenticated",true);
    navigate('/products')
return;
}

        }}
        >
            <>
           
            <Form>
            <div className=" row login-form col-6">
                <div className=" col-7">              
                <InputText name="username" label="User Name" placeholder="admin"></InputText>
                </div>
                <div className=" col-7">              

                <InputPassword name="password" label="Password" placeholder="admin"></InputPassword>
                </div>
                <div className="row col-7">              
            <button type="submit" class="btn btn-primary">Login</button>
            </div>
            </div>
            </Form>
           
            </>

        </Formik>
    </div>)
} 