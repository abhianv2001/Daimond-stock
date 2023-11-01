import React, { useContext, useEffect, useState } from 'react'
import Leftmenu from '../../Leftmenu';
import ModalComponent from '../../utils/ModalComponent'
import ImageTag from '../ImageTag';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiContext } from '../../context/ApiState';
import Footer from '../../Footer';
import json from "../../shapedisc.json"
import MultiFilterComponent from './Example';
import Sharesocial from '../Sharesocial';
import { Button, Modal } from 'antd';

function Daimondcard() {


    const [Daimonddata, setDaimonddata] = useState([]);
    const [open, setOpen] = useState(false);
    const [openShare, setOpenShare] = useState(false);
    const [modalData, setModalData] = useState({});
    const [filterData, setFilterData] = useState([]);
    const [url, setUrl] = useState("");




    const shapedisc = json.shapedisc

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const shape = [];
    const color = [];

    const id = searchParams.get('id');
    console.log('id',id)
    const { apiData, fetchData } = useContext(apiContext)


    const handleClick = (item) => {
        setOpen((prev) => !prev)
        setModalData(item)
    }

    const handleOpen = (url) => {
        setOpenShare(true)
        setUrl(`${window.location.origin}/daimond?id=${url}`)
    }

    useEffect(() => {

        let filteredData = apiData.filter((item) => item.stock_num == id);
        setDaimonddata(filteredData);
    }, [apiData]);

    useEffect(() => {
        fetchData();
    }, [])




    return (
        <>
            <Leftmenu />
            <div className="p-4 mb-[150px] sm:ml-64 ">
                <div className="main-filter">

                    <MultiFilterComponent setDaimonddata={setDaimonddata} shape={shape} color={color} />
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
                                                        <div className="image-block relative">
                                                            {/* <img src={item.image_url} alt="" onError="assets/image/noimage.png"/> */}
                                                            <ImageTag image={item.image_url} />
                                                            <button className='share_list' onClick={() => handleOpen(item.stock_num)}>
                                                                <i class="fas fa-share"></i>
                                                            </button>

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
                                <Sharesocial {...{ openShare, setOpenShare, url }} />
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



export default Daimondcard;
