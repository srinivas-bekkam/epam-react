import React, { useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup"
import InputText from "../../CustomInputs/InputText";
import InputPassword from "../../CustomInputs/InputPassword";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../services/LoginStatus";
import { LoginContext } from "../../providers/LoginContext";
import { GoogleLogin } from '@react-oauth/google';
import { Button } from "@mui/material";

export default function LoginPage() {
    const navigate = useNavigate();
    const [auth,setAuth]=useContext(LoginContext)
const onGoogleLoginSuccess=(creadentials)=>{
    console.log(creadentials)
    localStorage.setItem("authenticated",true);
    setAuth(true)
    navigate('/products')
}
    
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
    setAuth(true)
    navigate('/products')
return;
}

        }}
        >
            <>
           
            <Form>
            <div className=" row login-form col-6">
                <div className=" col-7">              
                <InputText name="username" label="User Name" placeholder="admin" fullWidth></InputText>
                </div>
                <div className=" col-7">              

                <InputPassword name="password" label="Password" placeholder="admin"></InputPassword>
                </div>
                <div className="row col-7">              
            <Button type="submit" variant="contained" fullWidth>Login</Button>
            <fieldset class="title">
    <legend>OR</legend>
</fieldset>
            <div className="google-login-container">
            <GoogleLogin
  onSuccess={credentialResponse => {
   onGoogleLoginSuccess(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</div>

            </div>
            </div>
            </Form>
           
            </>

        </Formik>
    </div>)
} 