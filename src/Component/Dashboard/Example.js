import React, { useState, useEffect, useContext } from 'react';
import { apiContext } from '../../context/ApiState';
import { Button, Modal } from 'antd';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Sharesocial from '../Sharesocial';



const MultiFilterComponent = ({ setDaimonddata, shape, color, size,clarity }) => {
    const { apiData,fetchData } = useContext(apiContext);
    const [openFilter, setOpenFilter] = useState(false);
    const [openShare, setOpenShare] = useState(false);
    const [url,setUrl]=useState("");

    console.log(shape, color, size)
    const [filters, setFilters] = useState({
        shape: shape,
        clarity: clarity,
        color: color,
        size: size
    });



    useEffect(() => {
        const uniqueShape = [...new Set(apiData.map((item) => item.shape))];
        const uniqueClarity = [...new Set(apiData.map((item) => item.clarity))];
        const uniqueColor = [...new Set(apiData.map((item) => item.color))];
        const uniqueSize = ['less than 1', '1-2', '2-4', '4+'];

        console.log(uniqueSize);


        setFilters({
            shape: shape,
            clarity: clarity,
            color: color,
            size: size,
        });

        // Set the options for the checkboxes dynamically
        setFilterOptions({
            shapeOptions: uniqueShape,
            clarityOptions: uniqueClarity,
            colorOptions: uniqueColor,
            sizeOptions: uniqueSize,
        });
        applyFilters()

    }, [apiData]);

    
    useEffect(()=>{
        fetchData()
        setUrl(`${window.location.origin}/daimondcardfilter?shape=${shape}&color=${color}&clarity=${clarity}&size=${size}`)
    },[])



    const [filterOptions, setFilterOptions] = useState({
        shapeOptions: [],
        clarityOptions: [],
        colorOptions: [],
        sizeOptions: [],
    });

    const handleCheckboxChange = (event) => {
        const { name, value } = event.target;
        const isChecked = event.target.checked;

        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: isChecked
                ? [...prevFilters[name], value]
                : prevFilters[name].filter((item) => item !== value),
        }));
    };

    const applyFilters = () => {
        console.log(filters);
        console.log( window.location.origin);
        const { clarity, color, shape, size } = filters;
        const clarityParams = clarity.join(',');
        const colorParams = color.join(',');
        const shapeParmas = shape.join(',');
        const sizeParmas = size.join(',');
        setUrl(`${window.location.origin}/daimondcardfilter?shape=${shapeParmas}&color=${colorParams}&clarity=${clarityParams}&size=${sizeParmas}`)

        const dataDict = {
            'less than 1': { min: 0, max: 1 },
            '1-2': { min: 1, max: 2 },
            '2-4': { min: 2, max: 4 },
            '4+': { min: 4, max: 50 }
        };

        const filteredData = apiData.filter((item) => {
            const selectedSize = size.map((sizeKey) => dataDict[sizeKey]);

            if (selectedSize.length === 0) {
                return (
                    (clarity.length === 0 || clarity.includes(item.clarity)) &&
                    (color.length === 0 || color.includes(item.color)) &&
                    (shape.length === 0 || shape.includes(item.shape))
                );
            } else {
                const itemSize = item.size;
                return (
                    (clarity.length === 0 || clarity.includes(item.clarity)) &&
                    (color.length === 0 || color.includes(item.color)) &&
                    (shape.length === 0 || shape.includes(item.shape)) &&
                    selectedSize.some((sizeRange) =>
                        itemSize >= sizeRange.min && itemSize <= sizeRange.max
                    )
                );
            }
        });

        setDaimonddata(filteredData);
        setOpenFilter(false);
    };


    const clearFilter = () => {
        setTimeout(() => {
            setDaimonddata(apiData)
            setFilters({
                shape: [],
                clarity: [],
                color: [],
                size: [],
            });

        }, 100);
    }

    // async function shareLink() {
    //     try {
    //         // const { clarity, color, shape, size } = filters;
    //         // const clarityParams = clarity.join(',');
    //         // const colorParams = color.join(',');
    //         // const shapeParmas = shape.join(',');
    //         // const sizeParmas = size.join(',');
    //         // const url = `${window.location.origin}/daimondcardfilter?shape=${shapeParmas}&color=${colorParams}&clarity=${clarityParams}&size=${sizeParmas}`
    //         console.log(url)
    //         await navigator.clipboard.writeText(url);
    //         alert("Text copied to clipboard!");
    //     } catch (error) {
    //       console.error("Clipboard writeText error:", error);
    //       alert("Copy to clipboard failed.");
    //     }
    //   }

      const shareLink = () => {
        const textArea = document.createElement("textarea");
        textArea.value = url;
    
        document.body.appendChild(textArea);
    
        textArea.select();
    
        try {
          document.execCommand("copy");
          alert("URL copied to clipboard!");
        } catch (err) {
          console.error("Copy to clipboard error:", err);
          alert("Copy to clipboard failed.");
        }
    
        document.body.removeChild(textArea);
      };
    
      const handleShareClick = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title:'diamon app',
              text:'sdasd',
              url,
            });
          } catch (error) {
            console.error("Web Share API error:", error);
          }
        } else {
          alert("Web Share API is not supported in your browser.");
        }
      };
      

    return (
        <>
            <Button className='filter-data' onClick={() => setOpenFilter(true)}>
                <span><FilterAltRoundedIcon /></span>
                <span> FILTER</span>
            </Button>

            <Button typr='warning' className='filter-data' onClick={clearFilter}>
                <span><ClearRoundedIcon className='close' /> CLEAR</span>
            </Button>

            <Button className='filter-data' onClick={()=>setOpenShare(true)}>
                <span><ShareOutlinedIcon className='close'/> SHARE</span>
            </Button>


            <Modal
                centered
                footer={false}
                open={openFilter}
                onCancel={() => setOpenFilter(false)}
                width={600}
            >
                <div class="filter-container">
                    <div class="filter-section">
                        <div> <label>Shape:</label></div>
                        <div className='input-checkbox'>
                            {filterOptions.shapeOptions.map((shape, index) => (
                                <div className='input'>
                                    <input
                                        type="checkbox"
                                        name="shape"
                                        value={shape}
                                        checked={filters.shape.includes(shape)}
                                        onChange={handleCheckboxChange}
                                    />
                                    {shape}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="filter-section">
                        <label>Clarity:</label>
                        <div className='input-checkbox'>
                            {filterOptions.clarityOptions.map((clarity, index) => (
                                <div className='input'>
                                    <input
                                        type="checkbox"
                                        name="clarity"
                                        value={clarity}
                                        checked={filters.clarity.includes(clarity)}
                                        onChange={handleCheckboxChange}
                                    />
                                    {clarity}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="filter-section">
                        <label>Color:</label>
                        <div className='input-checkbox'>
                            {filterOptions.colorOptions.map((color, index) => (
                                <div className='input'>
                                    <input
                                        type="checkbox"
                                        name="color"
                                        value={color}
                                        checked={filters.color.includes(color)}
                                        onChange={handleCheckboxChange}
                                    />
                                    {color}
                                </div>
                            ))}

                        </div>

                    </div>
                    <div class="filter-section">
                        <label>Size:</label>
                        <div className='input-checkbox'>
                            {filterOptions.sizeOptions.map((sizeOption, index) => (
                                <div className='input'>
                                    <input
                                        type="checkbox"
                                        name="size"
                                        value={sizeOption}
                                        checked={filters.size.includes(sizeOption)}
                                        onChange={handleCheckboxChange}
                                    />
                                    {sizeOption}
                                </div>

                            ))}
                        </div>
                    </div>
                    <button onClick={applyFilters} className='multiple_filter_btn'>Apply Filters</button>
                </div>
            </Modal>
            <Sharesocial {...{openShare,setOpenShare,url}}/>
                          
        </>

    );
};

export default MultiFilterComponent;


MultiFilterComponent.defaultProps = {
    shape: [],
    color: [],
    size: [],
    clarity: []

};