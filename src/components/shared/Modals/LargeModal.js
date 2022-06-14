import { Title } from '@material-ui/icons'
import React, { Children } from 'react'
import './largeModal.scss'

function smallModal({title, children,}) {
  return (
    <div>
      
        <body>
          {children}</body>
    </div>
  )
}

export default smallModal