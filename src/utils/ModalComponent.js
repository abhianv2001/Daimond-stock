import React from 'react'
import {Modal } from 'antd';

export default function ModalComponent({item,open,setOpen}) {
  return (
            <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={false} width={1000}
                >
                  <div className="Daimond-detail-outer">
                    <div className="daimond-detail-content">
                      <div className="daimond-detail-item">
                        <div className="image-block">
                          {/* <img src={item.image_url} alt="" />  */}
                          <iframe src={item.comments} title="Daimond" width="100%" height="380"></iframe> 
                        </div>
                      </div>
                      <div className="daimond-detail-item ">
                        <div className="daimond-information">
                          <div className="certi-details my-[15px]">
                            <div className="title-0 text-[16px] text-[#023047] font-semibold">Certifate Details: </div>
                            <div className="num mr-[15px] text-[14px] text-[#081725] font-semibold">Certificate Num:
                              <a href={item.cert_url} target="_blank">
                                <span className='text-[#625f5f] font-normal'>{item.cert_num}
                                </span>
                              </a>
                              <span style={{ color: '#007399' }}> ({item.lab})</span></div>
                            <p className='text-[14px] text-[#524747] font-normal'>
                              {item.cert_comment}
                            </p>
                          </div>
                          <div className="title-0 text-[14px] text-[#081725] font-semibold">
                            Daimond Type: <span className='text-[14px] text-[#524747] font-normal'>{item.daimondtype}</span>
                            <span style=
                              {{
                                color: '#004f63',
                                fontSize: '12px',
                                paddingLeft: '10px'
                              }}>({item.availability})</span>
                          </div>
                          <div className="title-0 text-[14px] text-[#081725] font-semibold">
                            Measurement: <span className='text-[14px] text-[#524747] font-normal'>{item.Measurement}</span>
                          </div>
                          <div className="title-0 text-[14px] text-[#081725] font-semibold">
                            Stock Number: <span className='text-[14px] text-[#524747] font-normal'>{item.stock_num}</span>
                          </div>
                          <div className="title-1 my-[10px] flex justify-start">
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Shape:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.shape}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Size:
                              <span className='text-[14px] text-[#524747] font-normal'>   {item.size}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Color:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.color}</span>
                            </div>
                          </div>
                          <div className="title-2 my-[10px] flex justify-start">
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Clarity:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.clarity}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Cut:
                              <span className='text-[14px] text-[#524747] font-normal'>   {item.cut}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Polish:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.polish}</span>
                            </div>
                          </div>
                          <div className="title-3 my-[10px] block">
                            <div className="title text-[16px] font-medium text-[#023047] ">Diamond Girdle</div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Girdle Condition:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.girdle_condition}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Gridle Min:
                              <span className='text-[14px] text-[#524747] font-normal'>   {item.girdle_min}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Gridle Percantage:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.girdle_percent}</span>
                            </div>
                          </div>
                          <div className="title-4 my-[10px] block">
                            <div className="title text-[16px] font-medium text-[#023047]">Diamond intensity</div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Fluor_intensity:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.fluorintensity}</span>
                            </div>

                          </div>
                          <div className="title-4 my-[10px] block">
                            <div className="title text-[16px] font-medium text-[#023047]"> Price List</div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Rap Price:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.Rap_price}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Price Per carat:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.price_per_cara}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Total Sales_price:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.total_sales_price}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Depth Percent:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.depth_percent}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Table Percent:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.table_percent}</span>
                            </div>

                          </div>
                          <div className="title-4 my-[10px] block">
                            <div className="title text-[16px] font-medium text-[#023047]"> Other :</div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Laser Inscription:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.laser_inscription}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Culet Size:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.culet_size}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Ratio:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.ratio}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Crown Angle:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.crown_angle}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Crown Height:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.crown_height}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Pavilion Depth:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.pavilion_depth}</span>
                            </div>
                            <div className='text-1 mr-[15px] text-[14px] text-[#081725] font-semibold'>Pavilion Angle:
                              <span className='text-[14px] text-[#524747] font-normal'> {item.pavilion_angle}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </Modal>
  )
}
