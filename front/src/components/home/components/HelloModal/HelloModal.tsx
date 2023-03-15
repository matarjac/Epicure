import React from 'react';
import './hellomodal.css';

const HelloModal: React.FC = () => {

    return (
        <>
            {false &&
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2>hello User!</h2>
                        <button className='close-modal'><img src="./Assets/close-btn.svg" alt="" /></button>
                    </div>
                </div>
            }
        </>
    )
}

export default HelloModal;