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

const ViaValenRKI = (props) => {
  const [tambah, setTambah] = useState("")
  const [data, setData] = useState([
    {
      id:1,
      noaju:"4000077EEF8F61512202100001",
      npwp:"01.104.916.0-092.000",
      nmperusahaan:"Sanbe Farma",
      status:"Draft"
    },
    {
      id:2,
      noaju:"4000088AAF5461512202000002",
      npwp:"02.208.940.3-618.000",
      nmperusahaan:"Sumatraco Langgeng Makmur",
      status:"Penerbitan LHV"
    }, 
    {
      id:3,
      noaju:"400007799F8F61513201900001",
      npwp:"01.061.615.9-092.000",
      nmperusahaan:"Asahimas Chemical",
      status:"Penerbitan LHV"
    },   
    {
      id:4,
      noaju:"4000099OOF8K61512201800001",
      npwp:"03.113.327.5-615.000",
      nmperusahaan:"Emjebe Pharma",
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
        props.history.push('/kemenperin/form')
    }
  }); 
  return (
    <>
    <CCard>
      <CCardHeader>
        <h4>Daftar Pengajuan RKI</h4>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          fields={fieldviavalen}
          items={data}
          addTableClasses="josss"
          // overTableSlot={<div className="d-flex justify-content-end pb-2"><CButton onClick={handleTambah.bind(this)} color="info"> Tambah + </CButton></div>}   
          scopedSlots = {{
            'action':
              (item)=>{
                var disable = false
                if(item.status !== "Draft"){
                  disable = true
                }
                return(
                  <td>
                      <CButton  onClick={handleTambah.bind(this)} size="sm" color="info">Lihat</CButton>{' '}
                      <CButton size="sm" color="success">Kirim Surveyor</CButton>{' '}
                      <CButton size="sm" color="danger" disabled={disable}>Terbitkan LHV</CButton>
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
              (item, index)=>{
                if(item.status !== "Draft"){
                  var status = "danger"
                  var text = "High"
                } else {
                  var status = "success"
                  var text = "Low"
                }
                return(
                  <td>
                      <CButton size="sm" color={status}>{text}</CButton>
                  </td>                  
                )
              },
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
                      - Pengiriman Kemenperin                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr>  
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Penerimaan Kemenperin                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr>                                     
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Pengiriman Surveyor                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr>
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Penerimaan Surveyor                  
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                    
                  </tr>  
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Penerimaan Surveyor                  
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
                      - Pengiriman LHV ke LNSW                 
                    </td>
                    <td style={{width:400}}>
                    04/03/2021 20:48:29
                    </td>                      
                  </tr> 
                  <tr>
                    <td style={{width:750}}>
                    </td>
                    <td style={{width:200}}>
                      - Penerimaan LHV oleh LNSW                
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

export default ViaValenRKI
