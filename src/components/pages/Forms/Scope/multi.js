import React from 'react'
import Select from 'react-select'
import Animation from 'react-select/animated'
// import './multi.scss'
export default function Multi(){
    const Name=[
        
        {value:'MD',
        label:'Option 1',
        color:'blue',
        backgroundColor:'blue'
         },
        
        {value:'FullStack',
        label:'Option 2'},

        {value:'FrontEnd',
        label:'Option 3'},
        
        {value:'BackEnd',
        label:'Option 4'},
        
        {value:'QA',
        label:'Option 5'},

    ]
return(
    
        <div>
            <Select options={Name} components={Animation} defaultValue={[Name[0],Name[1]]} isMulti/>
        </div>
);
}