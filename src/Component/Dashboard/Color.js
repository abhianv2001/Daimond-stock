import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiContext } from '../../context/ApiState';
import Footer from '../../Footer';

function Color() {
  const [colorsData, setColorsData] = useState([]);

  const { apiData ,fetchData} = useContext(apiContext);


  const colordisc = {
    "D": { color: "Colorless-D", image: "assets/image/Colorless.png" },
    "E": { color: "Colorless-E", image: "assets/image/Colorless.png" },
    "F": { color: "Colorless-F", image: "assets/image/Colorless.png" },
    "G": { color: "Near Colorless-G", image: "assets/image/nearless.png" },
    "H": { color: "Near Colorless-H", image: "assets/image/nearless.png" },
    "I": { color: "Near Colorless-I", image: "assets/image/nearless.png" },
  }

  useEffect(() => {
    fetchData();
    const colorCounts = apiData.reduce((acc, item) => {
      acc[item.color] = (acc[item.color] || 0) + 1;
      return acc;
    }, {});
    console.log(colorCounts);
    const colorsData = Object.entries(colorCounts).map(([colors, count]) => {
      if (colordisc[colors]) {
        return {
          name: colors,
          color: colordisc[colors].color,
          count,
          image: colordisc[colors].image,
        };
      } else {
        console.warn(`Color '${colors}' not found in colordisc`);
        return null;
      }
    });
    const filteredColorsData = colorsData.filter((data) => data !== null);
    setColorsData(filteredColorsData);
  }, [])

  return (
    <div>
      {/* COLOR */}

      <div className="shape-daimond-outer block w-full my-[30px]">
        <div className="shape-daimond-inner ">
          <div className="card-title mb-[20px]">
            <h2>Diamond <span>Color</span></h2>
          </div>
          <div className="color-item" >
            {
              colorsData.map((item) => {
                return <Link to={`/daimondcard?category=color&value=${item.name}`} className='color-outer'>
                  <div className="content block">
                    <div className="item">
                      <div className="title">
                        {item.color}
                      </div>
                      <div className="text">
                        {item.count}
                      </div>
                    </div>
                    <div className="item">
                      <img src={item.image} alt="shape" className='color-image' />
                    </div>
                  </div>
                </Link>
              })
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Color;
