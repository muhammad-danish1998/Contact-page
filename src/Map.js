import React from 'react'
import './App.css';

export const Map = () => {
    return (
        <div>
            <iframe className='MapLook' style ={{width:600,height:420}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
                frameborder="0" allowfullscreen="">

                </iframe>
        </div>
    )
}
