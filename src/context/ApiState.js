import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const apiContext = createContext()

export default function ApiState(props) {
    const [apiData, setApiData] = useState([])
    const [typeCount, setTypeCount] = useState(0)




    const fetchData = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/?APIKEY=cvd`)
            .then((response) => {
                if (response.status === 200) {
                    setApiData(response.data.map((item,index)=>({...item,id:index+1})))
                    setTypeCount(response.data.length);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
   


    return (
        <apiContext.Provider value={{ apiData, typeCount, fetchData }}>
            {props.children}
        </apiContext.Provider>
    )
}
