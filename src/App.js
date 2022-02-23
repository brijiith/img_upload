
import React, { useState } from "react";
import "./App.css";
import picture from './picture.png'

function App ()  {
  const [imgPreview, setImgPreview] = useState()
  const [error, setError] = useState(false)

  const imageChange = (e) => {
    const selectedImg = e.target.files[0]
    const valid_types = ["image/png", "image/jpeg", "image/jpg"]
    if (selectedImg && valid_types.includes(selectedImg.type)) {
      let reader = new FileReader()
      reader.onloadend = ()=>{
        setImgPreview(reader.result)
      }
      reader.readAsDataURL(selectedImg)
    } else {
      setError(true)
    }
  }

  return (
    <div className="App">
      <div className="wrap">
        {error && <p className="commentImage">File not supported</p>}
        <div
          className="imgPreview"
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "ivory"
          }}
        >
          {!imgPreview && (
            <><input type="file" 
            id="commentImage" 
            className="hidden" 
            onChange={imageChange} 
            accept="image/*"/>
              <label className='shown' htmlFor="commentImage">
           <div className='topper'>
            <img src= {picture} />
            </div>
             <h1>UPLOAD IMAGE</h1>
            </label>
              <input type="text" placeholder="Caption" className="showInput" />
            </>
          )}
          
        </div>
        
        {imgPreview && (
          <button className="btn" onClick={()=> setImgPreview(null)}> X </button>
        )}
      </div>
    </div>
  );
};

export default App;