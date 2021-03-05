import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
      Mockup Helpdesk Kapal | per 10-01-2021
      </div>
      <div className="mfs-auto">
        Made with CoreUI for ReactJS
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
