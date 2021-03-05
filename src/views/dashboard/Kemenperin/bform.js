import React, { lazy, useEffect, useState } from 'react'
import Select from 'react-select';
import {
  CCol,
  CSelect,
  CModal,
  CFormGroup,
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
        <CTextarea disabled></CTextarea>        
        </CFormGroup>
    </CModalBody>
    <CModalFooter>
        <CRow>
            <CButton onClick={()=>setModal2(false)}color="danger">Close</CButton>
        </CRow>        
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
        <CTextarea disabled></CTextarea>        
        </CFormGroup>
    </CModalBody>
    <CModalFooter>
        <CRow>
            <CButton onClick={()=>setModal2(false)}color="danger">Close</CButton>
        </CRow>        
    </CModalFooter>
    </CModal> 
    </>       
    )
  } 

const Bform = (props) => {
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
    const [action, setAction] = useState([
        {
            "value":"10",
            "label":"10"
        },
        {
            "value":"15",
            "label":"15"
        }, 
        {
            "value":"16",
            "label":"16"
        }, 
        {
            "value":"17",
            "label":"17"
        },  
        {
            "value":"00",
            "label":"dst.."
        },               
    ])
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
                  'status':
                  (item)=>(
                    <td>
                        <Select isDisabled value={
                                                            {
                                                                "value" : "02",
                                                                "label" : ""
                                                            }
                        } options={
                            [
                                {
                                    "value" : "01",
                                    "label" : "DONE"
                                },
                                {
                                    "value" : "02",
                                    "label" : "ON PROGRESS"
                                },                                
                            ]
                        }/>
                    </td>
                  ),                   
                  'subdeficiencies':
                  (item)=>(
                    <td>
                        <CTextarea></CTextarea>
                    </td>
                  ), 
                  'komentargovt':
                  (item)=>(
                    <td>
                        <Modal3/>
                    </td>
                  ),                   
                  'komentarro':
                  (item)=>(
                    <td>
                        <Modal2/>
                    </td>
                  ),                   
                  'action':
                  (item)=>(
                    <td>
                        <CButton onClick={handleTambahsubdefic} size="sm" color="success">+</CButton>{' '}
                        <CButton onClick={handleKurangsubdefic} size="sm" color="danger">-</CButton>                                                 
                    </td>
                  ),                                                    
            }}
            />
            <hr/>
            <h5>Keterangan:</h5>
            <CTextarea></CTextarea>
            <hr/>
            <h5>Keterangan RO:</h5>
            <CTextarea disabled></CTextarea>            
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
                <CInput type="text"></CInput>
                </td>
              )
          },
          'nature':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <CTextarea type="text"></CTextarea>
                </td>
              )
          }, 
          'convention':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <CInput type="text"></CInput>
                </td>
              )
          }, 
          'action':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <Select options={action} />
                </td>
              )
          }, 
          'responsible':
          (index)=>{
              console.log(index.id)
              return(
                <td>
                <Select/>
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
                <CButton onClick={handleTambahDefisiensi} size="sm" color="success">+</CButton>{' '}
                <CButton onClick={handleKurangDefisiensi} size="sm" color="danger">-</CButton> 
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

export default Bform
