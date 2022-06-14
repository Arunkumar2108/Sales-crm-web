import React , {useState} from 'react'
import './toggle.scss'

function ToggleSwitch({onClick}) {
  const[toggled, setToggled] = useState(false)
  
  const ToggleSwitch = () =>{
    toggled ? setToggled(!toggled) : setToggled(!toggled)
  }
  console.log(toggled)

  return (
    <div>
    <label className='switch'>
        <input type="checkbox" onClick={ToggleSwitch}/>
        <span className='slider'/>
    </label> 
</div>
  )
}

export default ToggleSwitch