import React, { useContext, useEffect, useState } from 'react'
import Leftmenu from '../../Leftmenu';
import ModalComponent from '../../utils/ModalComponent'
import ImageTag from '../ImageTag';
import { useLocation } from 'react-router-dom';
import { apiContext } from '../../context/ApiState';
import Footer from '../../Footer';
import json from "../../shapedisc.json"
import MultiFilterComponent from './Example';

function ShareListPage() {

 console.log('fwefwefwfewf')
  const [Daimonddata, setDaimonddata] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [filterData, setFilterData] = useState([]);


  const shapedisc = json.shapedisc

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shapeURL = searchParams.get('shape');
  const colorURL = searchParams.get('color');
  const clariyURl = searchParams.get('clarity');
  const sizeURL = searchParams.get('size');

  const shape = shapeURL ? shapeURL.split(',') : [];
  const color = colorURL ? colorURL.split(',') : [];
  const clarity = clariyURl ? clariyURl.split(',') : [];
  const size = sizeURL ? sizeURL.split(',') : [];

  console.log("url",shape,color,clarity,size);

//   const shape = category == 'shape' ? [value] : []
//   const color = category == 'color' ?[value]:[]
//   const size = category == 'size' ?[value]:[]
  const { apiData, fetchData } = useContext(apiContext)


  const handleClick = (item) => {
    setOpen((prev) => !prev)
    setModalData(item)
  }

//   useEffect(() => {
//     if (category && value) {
//       if (category != 'size') {
//         let filteredData = value == "other" ? apiData.filter((item) => !["HT", "OV", "RAD", "PEAR", "EM", "MQ", "CMB", "AC", "CB", "RD"].includes(item[category])) :
//           apiData.filter((item) => item[category] == value);
//         setDaimonddata(filteredData);
//       } else {
//         const max = value.split("-")[1]
//         const min = value.split("-")[0]

//         let filteredData = apiData.filter((item) => item[category] > min && item[category] <= max);
//         setDaimonddata(filteredData);
//       }

//     } else {
//       setDaimonddata(apiData)
//     }
//   }, [apiData]);

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <>
      <Leftmenu />
      <div className="p-4 mb-[150px] sm:ml-64 ">
        <div className="main-filter">

          <MultiFilterComponent setDaimonddata={setDaimonddata} shape={shape} size={size} color={color} clarity={clarity} />
        </div>
        <div className="main-card-outer block w-full bg-[#fff]">
          <div className="main-card-inner mx-[-15px]">
            <div className="main-card-content w-full  block">
              <div div className="main-card-item flex flex-wrap">
                {
                  Daimonddata.map((item) => {
                    return (
                      <div class="daimond-card">
                        <div className="item-inner p-4">
                          <div className="card-top">
                            <div className="item" title="Stock Number">Sr:
                              <span>{item.stock_num}</span></div>
                            <div className="item font-normal" title="Certificate Number">Cer:
                              <a href={item.cert_url} target="_blank" className='font-semibold text-[#838384]'>{item.cert_num}</a>
                              <span style={{ color: '#007399' }}>({item.lab})</span>
                            </div>
                          </div>
                          <div className="card-item">
                            <div className="image-block">
                              {/* <img src={item.image_url} alt="" onError="assets/image/noimage.png"/> */}
                              <ImageTag image={item.image_url} />
                            </div>
                            <div className="card-bottom mt-[10px]">
                              <div className="top-item flex justify-start mb-[10px]">
                                <div className="text mr-[18px]"><span className='bg-[#90bbdb]  font-bold'>{item.DiamondType}</span></div>
                                <div className="text mr-[18px] ">
                                  <span className='  bg-[#da636d] font-bold '>{`${item.shape in shapedisc ? shapedisc[item.shape].shape : "Undefined"}`}</span>
                                </div>
                              </div>
                              <div className="middle-item flex justify-start mb-[10px]">
                                <div className="text "><span className='bg-[#1d4c70]'>{item.color}</span></div>
                                <div className="text "><span className='bg-[#1d4c70]'>{item.clarity}</span></div>
                                <div className="text"><span className='bg-[#1d4c70]'>{item.size}</span></div>
                              </div>
                              <div className="bootom-item flex justify-start items-center mb-[4px]">
                                <div className="text text-[11px] text-[#575454] mr-[8px]">Sym:</div><span className='text-[11px] mr-[20px]  text-[#363636] font-semibold italic'>{item.symmetry}</span>
                                <div className="text text-[11px] text-[#575454] mr-[8px]">Pls:</div><span className=' mr-[20px]  text-[#363636] text-[11px] font-semibold italic'>{item.polish}</span>
                              </div>
                              <div
                                className={`avai-item ${item.availability === "MEMO" ? "text-[red]" : ""}`}
                              >
                                {item.availability}
                              </div>
                              <div class="card-btn p-6 pt-3">
                                <button
                                  class="block w-full select-none rounded-lg bg-[#008fb3] py-[10px] px-7 text-center align-middle font-sans text-sm font-bold uppercase text-[#e1e1e1]  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  type="button"
                                  data-ripple-light="true"
                                  onClick={() => handleClick(item)}
                                >
                                  View More
                                </button>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    )
                  })
                }
                <ModalComponent open={open} setOpen={setOpen} item={modalData} />

              </div>
            </div>
          </div>
        </div>

      </div >
      <Footer />
    </>
  )
}



export default ShareListPage;
