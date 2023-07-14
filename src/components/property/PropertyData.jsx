import React, { useState } from 'react'
import ImagesLogo from '../../utils/ImagesLogo';
import EyeLogo from '../../utils/EyeLogo';
import EditLogo from '../../utils/EditLogo';
// import images from '../../test/heshan-perera-aIJa8dPdzRI-unsplash.jpg'

export default function PropertyData({ item }) {
  const { _id, image, property_type
    , mobile, area } = item;
  const [view, setView] = useState(true);
  const [viewData, setViewData] = useState(true);
  const arr = [];
  for (const [key, value] of Object.entries(item)) {
    if(value.length > 20) continue;
    let obj = {};
    obj[key] = value;
    arr.push(obj);
  }
  return (
    <tr key={item._id}>
      <td>{`PPD${_id.slice(-4)}`.toUpperCase()}</td>
      <td onClick={() => {
        setView(!view)
      }}>
        {
          view ?
            <ImagesLogo />
            :
            <div className='image-container'>
              <button onClick={() => { setView(!view) }}>Close</button>
              <img src={image} alt={_id} />
            </div>
        }
      </td>
      <td>{property_type}</td>
      <td>{mobile}</td>
      <td>{area}</td>
      <td>{Math.floor(Math.random() * 100)}</td>
      <td>{Math.round(Math.random()) == 0 ? "Sold" : "Unsold"}</td>
      <td>{Math.floor(Math.random() * 100)}</td>
      <td className='action-container'>
            <div className="view-container"
            onClick={()=>{
              setViewData(!viewData)
            }}
            >
              {viewData ?
              <EyeLogo /> :
              <div className='data-table-conatiner'>
                <button onClick={() => { setViewData(!viewData) }}>Close</button>
                <table >
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    arr.map ((itm)=> {
                      const [[key, val]] = Object.entries(itm)
                      return <tr key={key}>
                        <td>{key}</td>
                        <td>{val}</td>
                      </tr>
                    }) 
                  }
                </tbody>
              </table>
              </div>}
            </div>

        {/* <EditLogo /> */}
      </td>
    </tr>
  )
}
