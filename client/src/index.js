import React, { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
       <GoogleOAuthProvider clientId="384191499069-n4r8125ed7u4jd6qaengf2h06q7grv48.apps.googleusercontent.com">
           
                <App />
           
        </GoogleOAuthProvider>;
    </StrictMode>
)