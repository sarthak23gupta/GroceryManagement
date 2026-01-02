import React, { Children } from 'react'
import isAuthenticated from './auth'
import { Navigate, replace, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    return(
        isAuthenticated() ? children : <Navigate to={"/login"} replace/>
    )
}

export default ProtectedRoute