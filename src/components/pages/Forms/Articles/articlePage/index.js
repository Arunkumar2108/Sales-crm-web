import React from 'react'

import './style.scss'

import BaseCode from '../../../../../__template__/pages/BaseCode'
import RichText from '../../../../shared/RichText'
import Select from 'react-select'

function Articles() {

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuColor,
      padding: 5,
    }),

    option: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuColor,
      backgroundColor: state.selectProps.menuBgColor,
      cursor: 'pointer',
      fontSize: 15
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: 13
    }),
  }

  const optionsStatus = [
    { label: 'Public' },
    { label: 'Internal' },
    { label: 'Draft' },
  ]

  const optionsTopic = [
    { label: 'Getting Started' },
    { label: 'FAQ' },
    { label: 'General' },
  ]

  return (
    <>
      <BaseCode>
        <div className='article-container'>
          <div className='setting-container'>
            <span className='text'>Article Setting</span>
            <div className='body-container'>
              <div className='input-field'>
                <label>Title</label>
                <input type="text" />
              </div>
              <div className='input-field'>
                <label>Status</label>
                <Select
                  options={ optionsStatus }
                  styles={ customStyles }
                  placeholder="Choose Status"
                  isSearchable
                  isClearable
                />
              </div>
              <div className='input-field'>
                <label>Show in Topic</label>
                <Select
                  options={ optionsTopic }
                  styles={ customStyles }
                  menuColor='black'
                  menuBgColor='white'
                  placeholder="Choose Topic"
                  isSearchable
                  isClearable
                />
              </div>
              <div className='input-field'>
                <label>Keywords</label>
                <textarea />
              </div>
              <div className='btn-container'>
                <button>save</button>
              </div>
            </div>
          </div>
          <div className='richtext-container'>
            <RichText />
          </div>
        </div>
      </BaseCode>
    </>
  )
}


export default Articles