import React from 'react'
import { ShareSocial } from 'react-share-social'
import {  Modal } from 'antd';

export default function Sharesocial({openShare, setOpenShare, url}) {
    return (
        <div>
            <Modal
                centered
                footer={false}
                open={openShare}
                onCancel={() => setOpenShare(false)}
                width={600}
            >
                <ShareSocial
                    title={'Hirvi International'} 
                    url={url}
                    socialTypes={['whatsapp', 'facebook', 'twitter', 'reddit', 'linkedin']}
                    onSocialButtonClicked={() => console.log('')} 
                    style = {{ 
                        root:{
                            color:'#1d4c70'
                        },
                        copyContainer: {
                        padding:'15px',
                        border: '1px solid blue',
                        background: '#1d4c70'

                    }}}
                    />
            </Modal>



        </div>
    )
}

