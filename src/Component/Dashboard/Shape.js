import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiContext } from '../../context/ApiState';
import Footer from '../../Footer';


function Shape() {
  const [shapeData, setShapeData] = useState([]);


  const { apiData } = useContext(apiContext)

  const shapedisc = {
    "HT": { shape: "Heart", image: 'assets/image/heart.png' },
    "OV": { shape: 'Oval', image: 'assets/image/oval.png' },
    "RAD": { shape: "Radiant", image: 'assets/image/Radial.png' },
    "PEAR": { shape: "Pear", image: 'assets/image/pear.png' },
    "EM": { shape: "Emerald", image: 'assets/image/Emerald.png' },
    "MQ": { shape: "Marquise", image: 'assets/image/Marquise.png' },
    "CMB": { shape: "Cushion", image: 'assets/image/Cushion_modified_brilliants.png' },
    "AC": { shape: "Asscher ", image: 'assets/image/Asscher.png' },
    "CB": { shape: "Cubic", image: 'assets/image/Cubic.png' },
    "RD": { shape: "Round", image: 'assets/image/Round.png' },
    // "PR": { shape: "Princess ", image: 'assets/image/princess.png' },
    "Other": { shape: "Other", image: 'assets/image/no-imag.png' }
  }

  useEffect(() => {
    const shapeCounts = apiData.reduce((acc, item) => {
      acc[item.shape] = (acc[item.shape] || 0) + 1;
      return acc;
    }, {});

    const shapeData = Object.entries(shapeCounts).map(([shape, count]) => ({
      // name: shape in shapedisc ? shape : "other",
      name: shape ,
      shape: shape in shapedisc ? shapedisc[shape].shape : shapedisc["Other"].shape,
      count,
      image: shape in shapedisc ? shapedisc[shape].image : shapedisc["Other"].image,
    }));


    setShapeData(shapeData);
  }, [apiData])






  return (
    <div shape={shapedisc}>
      {/* SHAPE */}

      <div className="shape-daimond-outer block  my-[30px]">
        <div className="shape-daimond-inner">
          <div className="card-title mb-[20px]">
            <h2>Diamond <span>Shape</span></h2>
          </div>
          <div className="shape-item" >
            {
              shapeData.map((item) => {

                return <Link to={`/daimondcard?category=shape&value=${item.name}`} className='shape-outer'>
                  <div className="content flex justify-between">
                    <div className="item">
                      <div className="title">
                        {item.shape == 'Other'?item.name:item.shape}
                      </div>
                      <div className="text">
                        {item.count}
                      </div>
                    </div>
                    <div className="item">
                      <img src={item.image} alt="shape" className='shape-image' />
                    </div>
                  </div>
                </Link>
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shape;
