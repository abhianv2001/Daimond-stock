import React from 'react'

function Footer() {
    return (
        <div>
            <div className='footer-outer sm:ml-[250px]'>
                <div className="footer-item flex justify-center">
                    <div className="footer-text text-center text-[12px] font-normal">
                        Copyright © 2023 Anv Tech All Rights Reserved
                    </div>
                    <div className="image">
                        <a href="https://www.anvtech.co/" target="_blank">
                            <img src="assets/image/ANV TECH LOGO.png" alt="" />

                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
