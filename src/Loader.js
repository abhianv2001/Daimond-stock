import React from 'react'

function Loader() {
    return (
        <>

            <div class="main-loader">
                <div className='loader'>
                    <span>
                        <img src="assets/image/logo1.png" alt="anv_loader_logo" />
                    </span>
                    <span>
                        <img src="assets/image/logo2.png" alt="anv_loader_logo" />
                    </span>

                </div>
                <br/>
                <div class="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>



        </>
    )
}

export default Loader;
