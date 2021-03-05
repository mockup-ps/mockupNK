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
  CDataTable,
  CCollapse
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {fieldviavalen} from './source.js'

const ViaValenLHV = (props) => {
  const [tambah, setTambah] = useState("")
  const [data, setData] = useState([
    {
      id:1,
      noaju:"4000077EEF8F61512202100001",
      periode:"2021",
      status:"Draft"
    },
    {
      id:2,
      noaju:"4000088AAF5461512202000002",
      periode:"2020",
      status:"Penerbitan LHV"
    }, 
    {
      id:3,
      noaju:"400007799F8F61513201900001",
      periode:"2019",
      status:"Penerbitan LHV"
    },   
    {
      id:4,
      noaju:"4000099OOF8K61512201800001",
      periode:"2018",
      status:"Penerbitan LHV"
    },      
  ])
  const handleTambah = () => {
    setTambah("ya")
  }
  const [details,setDetails] = useState([])
  const toggleDetails = (index) =>{
    const posisi = details.indexOf(index)
    let newDetails = details.slice()
    if(posisi !== -1){
      newDetails.splice(posisi, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  useEffect(() => {
    if(tambah == "ya"){
        props.history.push('/helpkapal/form')
    }
  }); 
  return (
    <>
    <CCard>
      <CCardHeader>
        <h4>Histori Laporan Hasil Verifikasi</h4>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          fields={fieldviavalen}
          items={data}
          addTableClasses="josss"
          overTableSlot={<div className="d-flex justify-content-end pb-2"><CButton onClick={handleTambah.bind(this)} color="info"> Tambah + </CButton></div>}   
          scopedSlots = {{
            'action':
              (item)=>{
                var disable = false
                if(item.status !== "Draft"){
                  disable = true
                }
                return(
                  <td>
                      <CButton size="sm" color="info" disabled={disable}>Edit</CButton>{' '}
                      <CButton size="sm" color="success" >Lihat</CButton>{' '}
                      <CButton size="sm" color="danger" disabled={disable}>Hapus</CButton>
                  </td>                  
                )
              },
              'no':
              (item)=>(
                <td>
                    {item.id}
                </td>
              ),
              'status':
              (item, index)=>(
                <td>
                  <CButton onClick={()=>{toggleDetails(index)}}>
                  {details.includes(index) ? 
                  <CIcon size={'sm'} name={'cilArrowCircleBottom'} /> 
                  :
                  <CIcon size={'sm'} name={'cilArrowCircleRight'} />
                  }  
                  </CButton>{' '}{item.status}
                </td>
              ),
              'details':
              (item, index)=>(
                <CCollapse show={details.includes(index)}>
                  <table>
                  {item.status == "Draft"
                  ?
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Draft                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr>   
                  :
                  <>
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Draft                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr>
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Pengajuan Terkirim                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr> 
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Penerimaan K/L                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr>                                   
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Proses Verifikasi               
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                      
                  </tr> 
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Penerbitan LHV                 
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                      
                  </tr>                                      
                  </>                                 
                  }
                  </table>
                </CCollapse>
              )                                         
          }}
        />    
      </CCardBody>
    </CCard>
    </>
  )
}

export default ViaValenLHV
