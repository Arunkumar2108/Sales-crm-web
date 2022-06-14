import React, { useState } from 'react'
import heroImg from '../../../assets/Images/signin.png'
import './signup.scss'


function sigin() {
  const [eye, setEye] = useState(false)
  const [eye1, setEye1] = useState(false)


  const NumericOnly = (e) => {
    const reg = /^[0-9\b]+$/
    let preval = e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) return true
    else e.target.value = preval.substring(0, (preval.length - 1))
  }

  const customStyles = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // const color = chroma(data.color);
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor: isFocused ? "#a7a7f1" : null,
        color: "#333333",
        fontSize: "13px"
      };
    }
  }
  const optionsType = [
    { label: 'Healthcare & Biotech' },
    { label: 'Education' },
    { label: 'Software & Technology' },
    { label: 'Consulting, Professional & Business Services' },
    { label: 'Banking/Insurance/Final Services' },
    { label: 'Goverment' },
    { label: 'Legal/Utilities' },
    { label: 'Not for Profit' },
    { label: 'Real Estate' },
    { label: 'Others' },
  ]
  return (
    <div className='signin-container'>
      <div className='left-container'>
        <div className='left-content-container'>
          <div className='logo-container'>
            {/* <img src={Logo} /> */ }
          </div>

          <div className='input-fields'>
            <label>Name</label><br />
            <input type='email' placeholder='Enter your Name' />
          </div>
          <div className='input-fields'>
            <label>Email</label><br />
            <input type='email' placeholder='Enter Email' />
          </div>
          <div className='input-fields'>
            <label>Password</label><br />
            <input type={ eye ? "text" : "password" } placeholder='Enter Your password' />
            <div className='showpswd' onClick={ () => setEye(!eye) }>
              <i className={ eye ? "fa fa-eye-slash" : "fa fa-eye" }></i>
            </div>
          </div>
          <div className='input-fields'>
            <label>Confirm Password</label><br />
            <input type={ eye1 ? "text" : "password" } placeholder='Enter Your password' />
            <div className='showpswd' onClick={ () => setEye1(!eye1) }>
              <i className={ eye1 ? "fa fa-eye-slash" : "fa fa-eye" }></i>
            </div>
          </div>
          <div className='policy-container'>
            <input type='checkbox' id='checkbox' />&nbsp;
            <label>You understand and agree to the <span><u>Formstack privacy policy, Terms of service </u></span>and <span><u>Acceptable use policy</u></span></label>
          </div><br />
          <div className='submit-btn'>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <img src={ heroImg } />
      </div>
    </div>
  )
}

export default sigin