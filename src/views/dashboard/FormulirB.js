import React, { lazy, useEffect, useState } from 'react'
import Select from 'react-select';
import {
  CCol,
  CSelect,
  CModal,
  CFormGroup,
  CForm,
  CFormText,
  CInputCheckbox,
  CButton,
  CLabel,
  CInput,
  CProgress,
  CRow,
  CCallout,
  CDataTable,
  CTextarea,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {fieldviavalen, fieldshipcertificate, fieldinformation, fieldformb, fieldsubdefisiensi} from './source.js'
import {ReactComponent as Satu} from './satu.svg'
import {ReactComponent as Satuoff} from './satuoff.svg'
function Modal3(props) {
    const [modal2, setModal2] = useState(false)
    return(
    <>
    <div className="d-flex justify-content-center">
    <CButton size="sm" onClick={()=> setModal2(true)} color="success"><CIcon className="text-light" name="cil-comment-square" /></CButton>
    </div>
    <CModal
        show={modal2}
        onClose={()=>setModal2(false)}
        size="md"
        closeOnBackdrop={false}
    >
    <CModalHeader>
        <h4>Komentar Pemerintah</h4>
    </CModalHeader>
    <CModalBody>
        <CFormGroup>
        <CLabel htmlFor="dw"><i>Komentar : </i></CLabel>
        <CTextarea></CTextarea>        
        </CFormGroup>
    </CModalBody>
    <CModalFooter>
        <CButton onClick={()=>setModal2(false)} color="info">Simpan</CButton>{' '}
        <CButton onClick={()=>setModal2(false)} color="danger">Batal</CButton>       
    </CModalFooter>
    </CModal> 
    </>       
    )
  } 


function Modal2(props) {
    const [modal2, setModal2] = useState(false)
    return(
    <>
    <div className="d-flex justify-content-center">
    <CButton size="sm" onClick={()=> setModal2(true)} color="success"><CIcon className="text-light" name="cil-comment-square" /></CButton>
    </div>
    <CModal
        show={modal2}
        onClose={()=>setModal2(false)}
        size="md"
        closeOnBackdrop={false}
    >
    <CModalHeader>
        <h4>Komentar RO</h4>
    </CModalHeader>
    <CModalBody>
        <CFormGroup>
        <CLabel htmlFor="dw"><i>Komentar : </i></CLabel>
        <CTextarea></CTextarea>        
        </CFormGroup>
    </CModalBody>
    <CModalFooter>
        <CButton onClick={()=>setModal2(false)} color="info">Simpan</CButton>{' '}
        <CButton onClick={()=>setModal2(false)} color="danger">Batal</CButton>       
    </CModalFooter>
    </CModal> 
    </>       
    )
  } 

const FormulirB = (props) => {
    const [form, setForm] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]);
    const [defic, setDefic] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]); 
    const [action, setAction] = useState([
        {
            "label":"16. Rectify Deficiency Before 14 days",
            "value" : "16"
        }
    ]); 
    const [responsible, setResponsible] = useState([
        {
            "label":"BKI",
            "value" : "BKI"
        }
    ]);            
    const [modal,setModal] = useState(false)
    const [modal2,setModal2] = useState(false)
    const [hitung, setHitung] = useState(0)
    const [viavalen, setViavalen] = useState(false)
    const handleTambahDefisiensi = () => {
        var arraynih = form
        var jos = {
            id:null,
            title:"",
            issuingauthority:"",
            dateofissue:"",
            dateofexpiry:""
        }
        jos.id = form[form.length-1].id + 1
        arraynih.push(jos)
        setForm(arraynih)
        setHitung(hitung+1)
        props.calleback(hitung)
        props.kirimDefisiensi(form)
    }
    useEffect(() => {
        setDefic(props.defic)
        setForm(props.defisiensi)
      });
    const handleTambahsubdefic = () => {
        var arraynih = defic
        var jos = {
            id:null,
            title:"",
            issuingauthority:"",
            dateofissue:"",
            dateofexpiry:""
        }
        jos.id = defic[defic.length-1].id + 1
        arraynih.push(jos)
        setDefic(arraynih)
        setHitung(hitung+1)
        props.calleback(hitung)
        props.kirimDefic(defic)
    }   
    const handleKurangsubdefic = () => {
        var arraynih = props.defic
        if(arraynih.length > 1) {
            arraynih.pop()
            setDefic(arraynih)
            setHitung(hitung+1)
            props.calleback(hitung)
            props.kirimDefic(defic)
        } else {
            alert('Tidak Bisa Menghapus Row Terakhir')
        }
    }      
    const handleKurangDefisiensi = () => {
        var arraynih = props.defisiensi
        if(arraynih.length > 1) {
            arraynih.pop()
            setForm(arraynih)
            setHitung(hitung+1)
            props.calleback(hitung)
            props.kirimDefisiensi(form)
        } else {
            alert('Tidak Bisa Menghapus Row Terakhir')
        }
    }  
    const handleViavalen = () => {
        props.Viavalen("ya")
      }   
    const handleSebelumnya = () => {
        setHitung(hitung+1)
        props.juhuu(hitung)
    }           
  return (
    <>
    <div>
    <h4>Deficiencies</h4>
    </div>
    <hr/>    
    <CModal
        show={modal}
        onClose={()=>setModal(false)}
        size="lg"
        closeOnBackdrop={false}
    >
        <CModalHeader>
            <h5><i>Rectification Plan</i></h5>
        </CModalHeader>
        <CModalBody>
        <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel><h6>Responsible RO : </h6></CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput value="BKI" disabled/>
                  </CCol>
                </CFormGroup>
        </CForm>
            <CDataTable
            fields={fieldsubdefisiensi}
            items={props.defic}
            addTableClasses="joss"
            closeOnBackdrop = {false}
            scopedSlots = {{
                'no':
                  (index)=>(
                    <td>
                        {index.id}
                    </td>
                  ),
                  'subdeficiencies':
                  (item)=>(
                    <td>
                        <CTextarea value={item.subdef} disabled ></CTextarea>
                    </td>
                  ), 
                  'status':
                  (item)=>(
                    <td>
                        <Select options={
                            [
                                {
                                    "label":"DONE",
                                    "value":"01"
                                },
                                {
                                    "label":"ON PROCESS",
                                    "value":"02"
                                },                                
                            ]
                        }/>
                    </td>
                  ),                   
                  'komentarro':
                  (item)=>(
                    <td>
                        <Modal2/>
                    </td>
                  ), 
                  'komentargovt':
                  (item)=>(
                    <td>
                        <Modal3/>
                    </td>
                  ),                                     
                  'action':
                  (item)=>(
                    <td>
                        <CButton disabled onClick={handleTambahsubdefic} size="sm" color="success">+</CButton>{' '}
                        <CButton disabled onClick={handleKurangsubdefic} size="sm" color="danger">-</CButton>                                                 
                    </td>
                  ),                                                    
            }}
            />
            <hr/>
            <h5>Keterangan:</h5>
            <CTextarea disabled>Keterangan dari Penginput Ditaruh Disini</CTextarea>
            <hr/>
            <h5>Keterangan RO:</h5>
            <CTextarea></CTextarea>            
        </CModalBody>
        <CModalFooter>
            <CButton onClick={()=>setModal(false)} color="info">Simpan</CButton>{' '}
            <CButton onClick={()=>setModal(false)} color="danger">Batal</CButton>
        </CModalFooter>
    </CModal>
    <CDataTable
    fields={fieldformb}
    items={form}
    addTableClasses="joss"
    scopedSlots = {{
        'no':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                {index.id}
                </td>
              )
          },
          'code':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <CInput value={index.code} disabled type="text"></CInput>
                </td>
              )
          },
          'nature':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <CTextarea value={index.nature} disabled type="text"></CTextarea>
                </td>
              )
          }, 
          'convention':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <CInput value={index.convention} disabled type="text"></CInput>
                </td>
              )
          }, 
          'action':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <Select isDisabled options={action} value={action[index.action]} />
                </td>
              )
          }, 
          'responsible':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <Select isDisabled options={responsible} value={responsible[index.responsible]}/>
                </td>
              )
          },
          'RP':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <CButton onClick={()=>setModal(true)} size="sm" color="info"><CIcon className="text-light" name="cil-list" /></CButton>
                </td>
              )
          }, 
          'aksi':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <div className="juos">
                <CButton disabled onClick={handleTambahDefisiensi} size="sm" color="success">+</CButton>{' '}
                <CButton disabled onClick={handleKurangDefisiensi} size="sm" color="danger">-</CButton> 
                </div>                           
                </td> 
              )
          },                                                                     
    }}    
    />  
    <hr/>
    <div className="d-flex justify-content-between">
                  <CButton onClick={handleSebelumnya} color="danger">Kembali</CButton>
                  <CButton onClick={handleViavalen.bind(this)} color="info">Simpan</CButton>
              </div>                                                                                                                                                                       
    </>
  )
}

export default FormulirB
