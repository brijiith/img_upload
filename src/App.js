import React, {useState} from 'react';
import picture from './picture.png'
import './App.css';

function App() {
const [imgPreview, setImgPreview] = useState()
const [error,setError]= useState(false)
  const imageChange = (e) =>{
const selectedImg= e.target.files[0]
const valid_types = ["image/png", 'image/jpeg', "image/jpg"]
if (selectedImg && valid_types.includes(selectedImg.type)){
 let reader = new FileReader()
 reader.onlodend=()=>{
setImgPreview(reader.result)

 }
 reader.readAsDataURL(selectedImg)
} else
setError(true)
  }
  return (
    <div className="App">
      <div className='wrap'>
        {error && <p className='errorMessage'>File not supported</p>}
        <div className='imgPreview'
        style={{
          background: imgPreview
          ? 'url("${imgPreview}") no-repeat center/cover'
          : "ivory"
      }}
        >

        {!imgPreview && (
          <><input
              type="file"
              className="hidden"
              id="commentImage"
              onChange={imageChange}
              accept="image/*" />
              <label className='shown' for="commentImage">
                <div className='topper'>
                  <img src={picture} />
                </div>
                <h1 className='text-2xl text-amber-400'>UPLOAD IMAGE</h1>
              </label>
              <input type="text" placeholder="Caption" classname="showInput" /></>
        )}
                
                </div>
                {imgPreview && (
                  <button onClick={()=> setImgPreview(null)}> X </button>
                )}
                </div>
    </div>
  );
}

export default App;
