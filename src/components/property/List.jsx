import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
// import ListGroup from 'react-bootstrap/ListGroup';
import '../../styles/list.css';
import SearchLogo from '../../utils/SearchLogo';
import PropertyData from './PropertyData';

export default function List() {

  const { loginStatus, data } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    loginStatus ? <></> : navigate('/signin')
  }, []);

  const search = true;
  const [searchInput, setSearchInput] = useState("");


  return (
    <div className='content-container'>
      <div className='top-container'>
        <div className='search-container'>
          <input
            type="text"
            placeholder='Search PPD ID'
            className='search-bar'
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            value={searchInput} />
          <div 
          className='search-logo'
          >
            <SearchLogo />
          </div>
        </div>
        <Link  to={"/basicinfo"}><button className='add-btn white-clr'>+ Add Property</button></Link>
      </div>
      <div className='data-container'>
        <table>
          <thead className='blue-clr-light2'>
            <tr>
              <th>PPD ID</th>
              <th>Image</th>
              <th>Property</th>
              <th>Contact</th>
              <th>Area</th>
              <th>Views</th>
              <th>Status</th>
              <th>Days Left</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              search 
              ?
              data.map((item)=>{
                  if(item._id.toString().includes(searchInput)){
                    return (<PropertyData item={item} key={item._id}/>)
                  }else{
                    return <></>
                  }
              })
              :
              data.map((item) => {
                return (
                  <PropertyData item={item} key={item._id}/>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
