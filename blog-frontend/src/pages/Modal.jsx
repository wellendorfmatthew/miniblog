import React, { useState, useEffect } from 'react';
import '../App.css'

const Modal = ({ open, onClose, title, setTitle, text, setText, addBlog}) => {
    if (!open) return null;

    return ( 
        <div className="overlay">
            <div className='modal'>
                <button className='exit-modal' onClick={onClose}>X</button>
                <input type="text" id='title-entry' placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} value={title}/>
                <textarea name="text-box" id="text-box" cols="30" rows="10" placeholder={"Enter blog entry"} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <button className='modal-button' onClick={addBlog}>Create blog</button>
            </div>
        </div>
     );
}
 
export default Modal;