import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {fieldviavalen} from './source.js'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Viavalen = (props) => {
  const [tambah, setTambah] = useState("")
  const [data, setData] = useState([
    {
      id:1,
      namakapal:"MERATUS JIMBARAN",
      tempatdetensi:"INCHEON",
      tanggalmulai:"20/03/2020",
      tanggalselesai:"30/03/2020",
    },
    {
      id:2,
      namakapal:"MERAK JAYA",
      tempatdetensi:"TOKYO",
      tanggalmulai:"10/04/2020",
      tanggalselesai:"29/09/2020",
    },    
  ])
  return (
    <>
    <CCard>
      <CCardHeader>
        <h4>Form Tindak Lanjut RP</h4>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          fields={fieldviavalen}
          items={data}
          addTableClasses="josss"
          scopedSlots = {{
            'action':
              (item)=>(
                <td>
                    <CButton onClick={() => props.history.push('/tindaklanjut/form')} size="sm" color="success">→</CButton>
                </td>
              ),
              'no':
              (item)=>(
                <td>
                    {item.id}
                </td>
              ),              
          }}
        />    
      </CCardBody>
    </CCard>
    </>
  )
}

export default Viavalen
