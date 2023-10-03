import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



const Cards = (props) => (
  <div className='main-card'>
    <div className='card'>
      <img src={props.image} className='image' alt='im'></img>
      <div className='card-det'>
        <h1>{props.name}</h1>
        <h2>{props.year}</h2>
      </div>
      <div className='det2'>
        <div className='det2-1'>
          <PeopleAltIcon style={{ fontSize: 50 }} />
          <h4>{props.people}</h4>
        </div>
        <div className='det2-2'>
          <LocalGasStationIcon style={{ fontSize: 50 }} />
          <h4>{props.pet}</h4>
        </div>
      </div>
      <div className='det3'>
        <div className='det3-1'>
          <SpeedIcon style={{ fontSize: 50 }} />
          <h4>{props.speed}</h4>
          <div className='det3-2'>
            <ShutterSpeedIcon style={{ fontSize: 50 }}/>
            <h4>{props.automatic}</h4>
          </div>
        </div>
      </div>
       <div className='hr'>
       <div className='det4'>
        <div className='det4-1'>
          <h4>{props.price}</h4>
        </div>
        <div className='det4-1--1'>
          <div className='det4-1-1'>
          <FavoriteBorderOutlinedIcon style={{backgroundColor:"lightBlue", fontSize: 60, borderRadius: 15}}/>
        </div>
        </div>
        <div className='det4-1-2'>
          <button className='btn'>Rent Now</button>
        </div>


       </div>
       
      </div>



    </div>
  </div>
)

export default Cards
