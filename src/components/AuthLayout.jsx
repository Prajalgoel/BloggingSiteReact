import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({
    children,
    authentication = true,
}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const authStatus = useSelector(state => state.authReducer.status)

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        // easy
        // if (authStatus) {
        //     navigate("/")
        // } else {
        //     navigate("login")
        // }

        // complex
        if (authentication && authentication !== authStatus) {
            navigate("/login")
        } else if(!authentication && authentication !== authStatus) {
            navigate("/")
        }

        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

