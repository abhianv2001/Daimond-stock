import React, { useContext, useEffect } from 'react'
import Leftmenu from '../../Leftmenu';
import Shape from './Shape';
import Color from './Color';
import { apiContext } from '../../context/ApiState';
import Carat from './Carat';
import Footer from '../../Footer'
import Allcard from './Allcard';
import MultiFilterComponent from './Example';


function Dashboard() {

    const { typeCount, fetchData } = useContext(apiContext)

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <Leftmenu />
            <div class="mb-[150px]  sm:ml-[250px] relative">
                <Allcard/>
                <Shape />
                <Color />
                <Carat />
                <Footer/>
            </div>
        </>
    )
}

export default Dashboard;
