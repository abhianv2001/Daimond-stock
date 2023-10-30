import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiContext } from '../../context/ApiState';
import Footer from '../../Footer';
function Carat() {

    const { apiData, fetchData } = useContext(apiContext);

    const [caratData, setcaratData] = useState([]);

    useEffect(() => {
        fetchData();
        const sizeCounts = apiData.reduce((acc, item) => {
            return Math.max(acc, Number(item.size));
        }, 0)
        const count = Math.ceil(sizeCounts)

        setcaratData(Array.from({ length: count }, (_, index) => 0 + index))

    }, [apiData])
    return (
        <>
            {/* Carat */}

            <div className="shape-daimond-outer block w-full my-[80px]">
                <div className="shape=-daimond-inner ">
                    <div className="card-title mb-[20px]">
                        <h2>Diamond <span>Carat</span></h2>
                    </div>
                    <div className="carat-item" >
                        {caratData.map((item) => {
                            return <Link to={`/daimondcard?value=${item}-${item + 1}&category=size`} className='carat-outer'>
                                <div className="content flex justify-center">
                                    <div className="item">
                                        <div className="text">
                                            {item}-{item + 1}
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        })}

                    </div>
                </div>
            </div>
            <Footer/>
        </ >
    )
}

export default Carat;
// 