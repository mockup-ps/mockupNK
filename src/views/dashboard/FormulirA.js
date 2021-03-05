import React, { lazy, useEffect, useState } from 'react'
import Select from 'react-select';
import {
  CCol,
  CSelect,
  CFormGroup,
  CInputCheckbox,
  CButton,
  CLabel,
  CInput,
  CProgress,
  CRow,
  CCallout,
  CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {fieldviavalen, fieldshipcertificate, fieldinformation} from './source.js'
import {ReactComponent as Satu} from './satu.svg'
import {ReactComponent as Satuoff} from './satuoff.svg'

const FormulirA = (props) => {
    const [form, setForm] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]);
    const [form1, setForm1] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]);    
    const [hitung, setHitung] = useState(0)
    const [classes, setClass] = useState([
        {
          "value" : "LR",
          "label" : "LR"
        }
      ])    
    const [negara, setNegara] = useState([
        {
            "value":"KR",
            "label":"Republic of Korea"
        },
        {
            "value":"JP",
            "label":"Japan"
        }, 
        {
            "value":"SG",
            "label":"Singapore"
        }, 
        {
            "value":"MY",
            "label":"Malaysia"
        },        
    ])
    const [tipekapal, setTipekapal] = useState([
        {
            "value":"01",
            "label":"Gas Carrier"
        },
        {
            "value":"02",
            "label":"Oil Tanker"
        }, 
        {
            "value":"03",
            "label":"Bulk Carrier"
        }, 
        {
            "value":"04",
            "label":"General Cargo/Multipurpose"
        },        
    ])
    const [titlesertif, setTitlesertif] = useState([
        {
            "value":"01",
            "label":"Load Line"
        },
        {
            "value":"02",
            "label":"SC"
        }, 
        {
            "value":"03",
            "label":"SE"
        }, 
        {
            "value":"04",
            "label":"SR"
        },   
        {
            "value":"05",
            "label":"IOPP"
        },   
        {
            "value":"06",
            "label":"IAPP"
        },                        
    ])   
    const handleChange = (e) => {
        console.log(e)
    }       
    const handleTambahcertificate = () => {
        var arraynih = props.certificate
        var jos = {
          id: null,
          title: "",
          issuingauthority:"LR",
          dateofissue:"2020-06-03",
          dateofexpiry:"2026-07-04"
        }
        jos.id = arraynih[arraynih.length - 1].id + 1  
        arraynih.push(jos)
        setForm(arraynih)
        setHitung(hitung+1)
        props.calleback(hitung)
        props.kirimCertificate(form)
    }
    const handleSelanjutnya = () => {
        setHitung(hitung+1)
        props.jehee(hitung)
    }        
    const handleTambahInformasi = () => {
        var arraynih = props.informasi
        var jos = {
          id:null,
          title:"",
          issuingauthority:"",
          dateofissue:"",
          dateofexpiry:""
        }
        jos.id = arraynih[arraynih.length - 1].id + 1
        arraynih.push(jos)
        setForm1(arraynih)
        setHitung(hitung+1)
        props.calleback(hitung)
        props.kirimInformasi(form1)
    }    
    const handleKurangCertificate = () => {
        var arraynih = props.certificate
        if(arraynih.length > 1) {
            arraynih.pop()
            setForm(arraynih)
            setHitung(hitung+1)
            props.calleback(hitung)
            props.kirimCertificate(form)
            console.log("ini bro", form)
        } else {
            alert('Tidak Bisa Menghapus Row Terakhir')
        }
    }
    const handleKurangInformasi = () => {
        var arraynih = props.informasi
        if(arraynih.length > 1) {
            arraynih.pop()
            setForm1(arraynih)
            setHitung(hitung+1)
            props.calleback(hitung)
            props.kirimInformasi(form1)
        } else {
            alert('Tidak Bisa Menghapus Row Terakhir')
        }
    }
    const handleKembali = () => {
        props.kembali("ya")
    }        
    useEffect(() => {
        console.log(Date.now())
        setForm(props.certificate)
        setForm1(props.informasi)
      });
  return (
    <>
                <div>
                <h4>Data Kapal</h4>
                </div>
                <hr/>
              <CRow>
              <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="negarapelapor">Otoritas PSC</CLabel>
                    <Select value={negara[0]} options={negara} isDisabled/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="namakapal">Nama Kapal</CLabel>
                    <CInput value="Meratus Jimbaran" disabled id="namakapal" type="text" placeholder="Masukkan Nama Kapal"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="namakapal">Tipe Kapal</CLabel>
                    <Select value={tipekapal[1]} isDisabled options={tipekapal} />
                  </CFormGroup>
                </CCol>                                
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="callsign"><i>Call Sign</i></CLabel>
                    <CInput value="9M2093" disabled id="callsign" type="text" placeholder="Masukkan Call Sign"></CInput>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="mmsinumber">Nomor MMSI</CLabel>
                    <CInput value ="236475829" disabled id="mmsinumber" type="text" placeholder="Masukkan Nomor MMSI"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="imonumber">Nomor IMO</CLabel>
                    <CInput value="9537630" disabled id="imonumber" type="text" placeholder="Masukkan Nomor IMO"></CInput>
                  </CFormGroup>
                </CCol>                                
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="gt"><i>Gross Tonnage</i></CLabel>
                    <CInput value="43506.00" disabled id="gt" type="text" placeholder="Masukkan Gross Tonnage"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="dw"><i>Dead Weight</i></CLabel>
                    <CInput value="32206.00" disabled id="dw" type="text" placeholder="Masukkan Dead Weight"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="dw">Tanggal <i>Keel Laid</i></CLabel>
                    <CInput disabled value="2005-07-04" id="tglkeellaid" type="date" ></CInput>
                  </CFormGroup>
                </CCol>                                                
              </CRow>
              <hr/>               
              <CRow>
                <CCol xs="6">             
                <div>
                <h4>Data Inspeksi</h4>
                </div>
                <div className="borderleft"> 
                <div className="pr-4"><hr/></div>                               
              <CRow className="pr-4">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Tanggal Inspeksi</i></CLabel>
                    <CInput disabled value="2020-08-10" id="tglinspeksi" type="date"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tempatinspeksi"><i>Tempat Inspeksi</i></CLabel>
                    <CInput disabled value="INCHEON" id="tempatinspeksi" type="text" placeholder="Masukkan Tempat Inspeksi"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>
              <CRow className="pr-4">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Classification Society</i></CLabel>
                    <Select isDisabled value={classes[0]} options={classes} />
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tempatinspeksi"><i>Date of Release from Detention</i></CLabel>
                    <CInput disabled value="2020-05-04" id="tempatinspeksi" type="date"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>
              </div>              
                </CCol>
                <CCol xs="6">             
                <div>
                <h4>Data Perusahaan</h4>
                </div>
                <hr/>
                <div>                
              <CRow className="pr-3">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>IMO Company Number</i></CLabel>
                    <CInput value="283940" disabled id="tglinspeksi" type="text" placeholder="Masukkan IMO Company Number"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tempatinspeksi"><i>Particulars of Company</i></CLabel>
                    <CInput disabled id="tempatinspeksi" type="text" value=" " placeholder="Masukkan Particulars of Company"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>
              <CRow className="pr-3">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Name of Master</i></CLabel>
                    <CInput value="JOHN" disabled type="text" placeholder="Masukkan Name of Master"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>  
              </div>              
                </CCol>                  
              </CRow>
              <hr/>  
                <div>
                <h4><i>Detail of Ship Certificates</i></h4>
                </div>
                <hr/> 
              <CRow>
                <CCol xs="12">
                    <CDataTable
                    fields={fieldshipcertificate}
                    items={props.certificate}
                    addTableClasses="joss"
                    scopedSlots = {{
                        'title':
                          (item)=>(
                            <td>
                                <Select isDisabled value={titlesertif[item.title]} onChange={handleChange} options={titlesertif} />
                            </td>
                          ),
                          'no':
                          (item)=>{
                            console.log(item)
                            return(
                              <td>
                                {item.id}
                              </td>
                            )
                          },                         
                          'issuingauthority':
                          (item)=>(
                            <td>
                                <CInput disabled value={item.issuingauthority}></CInput>
                            </td>
                          ), 
                          'dateofissue':
                          (item)=>(
                            <td>
                                <CInput value={item.dateofissue} disabled type="date" ></CInput>
                            </td>
                          ),   
                          'dateofexpiry':
                          (item)=>(
                            <td>
                                <CInput value={item.dateofexpiry} disabled type="date" ></CInput>
                            </td>
                          ),   
                          'action':
                          (item)=>(
                            <td>
                                    <CButton disabled size="sm" onClick={handleTambahcertificate} color="success">+</CButton>{' '}
                                    <CButton disabled size="sm" onClick={handleKurangCertificate} color="danger">-</CButton>                             
                            </td>
                          ),                                                                                                 
                    }}
                    />
                </CCol>                                                 
              </CRow>
              <hr/> 
                <div>
                <h4><i>Information on Last Intermediate or Annual Survey</i></h4>
                </div>
                <hr/> 
                <CRow>
                <CCol xs="12">
                    <CDataTable
                    fields={fieldinformation}
                    items={form1}
                    addTableClasses="joss"
                    scopedSlots = {{
                        'date':
                          (item)=>(
                            <td>
                                <CInput value={item.date} disabled type="date"></CInput>
                            </td>
                          ),
                          'no':
                          (item)=>(
                            <td>
                                {item.id}
                            </td>
                          ),                          
                          'surveyingauthority':
                          (item)=>(
                            <td>
                                <CInput value={item.surveyinguathority} disabled type="text" ></CInput>
                            </td>
                          ), 
                          'place':
                          (item)=>(
                            <td>
                                <CInput value={item.place} disabled type="text" ></CInput>
                            </td>
                          ),     
                          'action':
                          (item)=>(
                            <td>
                                    <CButton disabled size="sm" onClick={handleTambahInformasi} color="success">+</CButton>{' '}
                                    <CButton disabled size="sm" onClick={handleKurangInformasi} color="danger">-</CButton>                            
                            </td>
                          ),                                                                                                 
                    }}
                    />
                </CCol>                                                 
              </CRow> 
              {/* <hr/> 
              <div>
                <h4>Data <i>Checklist</i></h4>
                </div> */}
                <hr/>
                <CRow>
                  <CCol md="3"><CLabel>Deficiencies</CLabel></CCol>
                  <CCol md="3">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox checked={true} disabled custom id="inline-checkbox" name="inline-checkbox" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox">Yes</CLabel>
                    </CFormGroup>
                    </CCol>                    
            </CRow> 
            <CRow>
                  <CCol md="3"><CLabel>Ship Detained</CLabel></CCol>
                  <CCol md="3">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox checked={true} disabled custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Yes</CLabel>
                    </CFormGroup>
                    </CCol>                    
            </CRow>
            <CRow>
                  <CCol md="3"><CLabel>Supporting Documentation</CLabel></CCol>
                  <CCol md="3">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox checked={true} disabled custom id="inline-checkboxx" name="inline-checkboxx" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkboxx">Yes</CLabel>
                    </CFormGroup>
                    </CCol>                    
            </CRow>  
            <hr/>                                                      
              <div>
                <h4>Data Penerbit</h4>
                </div>
                <hr/> 
                <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Issuing Office</i></CLabel>
                    <CInput value="INCHEON" disabled id="issuingoffice" type="text" placeholder="Masukkan Issuing Office"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow> 
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Telephone</i></CLabel>
                    <CInput value="+82-32-880-6453" disabled id="issuingoffice" type="text" placeholder="Masukkan Telephone"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Telefax</i></CLabel>
                    <CInput value="+82-32-884-3564" disabled id="issuingoffice" type="text" placeholder="Masukkan Telefax"></CInput>
                  </CFormGroup>
                </CCol>                                                                 
              </CRow> 
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi">Nama PSOC</CLabel>
                    <CInput value="HAN SEUNG-IL/SON MIN-A" disabled id="issuingoffice" type="text" placeholder="Masukkan Telephone"></CInput>
                  </CFormGroup>
                </CCol>                                                                 
              </CRow>
              <hr/>
              <div className="d-flex justify-content-between">
                  <CButton onClick={handleKembali} color="danger">Kembali</CButton>
                  <div>
                  {/* <CButton color="primary">Simpan</CButton>{' '} */}
                  <CButton onClick={handleSelanjutnya} color="info">Selanjutnya</CButton>
                  </div>
              </div>                                                                                                                                                                    
    </>
  )
}

export default FormulirA
