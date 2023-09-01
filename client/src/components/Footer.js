import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

import './footer.css'
const Footer = () => {
    return (
        <>
<div className='footer'>
            <MDBFooter className='text-center text-white' style={{ backgroundColor: 'white' }}>
                

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
</div>

        </>
    )
}

export default Footer