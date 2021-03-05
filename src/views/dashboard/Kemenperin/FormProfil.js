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
  CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {fieldviavalen, fieldshipcertificate, fieldinformation} from './source.js'
import {ReactComponent as Satu} from './satu.svg'
import {ReactComponent as Satuoff} from './satuoff.svg'

const FormProfil = (props) => {
  const [modalalamatpabrik,setModalAlamatPabrik] = useState(false)
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
    const fieldalamatpabrik = [
      { key: 'id', _style: { width: '3%'}, label:"No" },
      { key: 'jalan', _style: { width: '30%'}, label:"Alamat" },
      { key: 'kelurahan', _style: { width: '15%'}, label:"Kelurahan" },
      { key: 'kecamatan', _style: { width: '15%'}, label:"Kecamatan" },
      { key: 'action', _style: { width: '25%'}, label:"Aksi"}
    ]
    const fieldpenanggungjawab = [
      { key: 'check', _style: { width: '1%'}, label:"" },
      { key: 'no', _style: { width: '1%'}, label:"No" },
      { key: 'namapgjawab', _style: { width: '20%'}, label:"Nama Penanggung Jawab" },
      { key: 'jabatan', _style: { width: '20%'}, label:"Jabatan" },
      { key: 'telepon', _style: { width: '20%'}, label:"Telepon" },
      { key: 'hp', _style: { width: '20%'}, label:"Handphone" },
    ]
    const penanggungjawab = [
      {
        no:1,
        namapgjawab:"Taufiq",
        jabatan:"Direktur",
        telepon:"(021)95309420",
        hp:"089364734343"
      }, 
      {
        no:2,
        namapgjawab:"Michael",
        jabatan:"Kepala Divisi",
        telepon:"(021)9538473420",
        hp:"0893647332748"
      }, 
      {
        no:3,
        namapgjawab:"Joko",
        jabatan:"Kepala Seksi",
        telepon:"(021)9533283420",
        hp:"08393832748"
      },                  
    ]
    const fieldiui = [
      { key: 'check', _style: { width: '1%'}, label:"" },
      { key: 'no', _style: { width: '1%'}, label:"No" },
      { key: 'noiui', _style: { width: '10%'}, label:"Nomor IUI" }, 
      { key: 'tgliui', _style: { width: '10%'}, label:"Tanggal IUI" }, 
      { key: 'alamatpabrik', _style: { width: '10%'}, label:"Alamat Pabrik" },
      { key: 'kelpabrik', _style: { width: '10%'}, label:"Kel. Pabrik" },
      { key: 'kecpabrik', _style: { width: '10%'}, label:"Kecamatan Pabrik" },
      { key: 'action', _style: { width: '10%'}, label:"Action" },                  
    ]
    const iui = [
      {
        no:1,
        noiui:"IUI3546",
        tgliui:"07-08-2019",
        alamatpabrik:"Jl Nanas No 3A",
        kelpabrik:"Cibubur",
        kecpabrik:"Ciracas"
      }, 
      {
        no:2,
        noiui:"IUI8495",
        tgliui:"08-09-2017",
        alamatpabrik:"Jl Anggur No 3A",
        kelpabrik:"Klender",
        kecpabrik:"Duren Sawit"
      },             
      {
        no:3,
        noiui:"IUI3940",
        tgliui:"01-12-2012",
        alamatpabrik:"Jl Melon No 3A",
        kelpabrik:"Cijantung",
        kecpabrik:"Pasar Rebo"
      },       
    ]
    const alamatpabrik = [
    {
      id:1,
      jalan:"Jl. Nanas No 32A RT 03 RW 05",
      kelurahan:"Penggilingan",
      kecamatan:"Cakung"
    },
    {
      id:2,
      jalan:"Jl. Anggur No 43B RT 02 RW 03",
      kelurahan:"Batu Ampar",
      kecamatan:"Kramat Jati"
    },
    {
      id:3,
      jalan:"Jl. Melon No 1A Rt 06 RW 09",
      kelurahan:"Cijantung",
      kecamatan:"Pasarebo"
    }        
    ]
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
    const handleTambahcertificate = () => {
        var arraynih = props.certificate
        var jos = {
          id: null,
          title:"",
          issuingauthority:"",
          dateofissue:"",
          dateofexpiry:""
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
        setForm(props.certificate)
        setForm1(props.informasi)
      });
  return (
    <>
                <div>
                <h4>Profil Perusahaan</h4>
                </div>
                <hr/> 
                <CRow>
              <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="negarapelapor">Nomor Pokok Wajib Pajak</CLabel>
                    <CInput value="123.458.394.457.00" disabled/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="negarapelapor">Nomor Induk Berusaha</CLabel>
                    <CInput value="8372635923" disabled/>
                  </CFormGroup>
                </CCol>                
              </CRow>                           
              <CRow>
              <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="negarapelapor">Nama Perusahaan</CLabel>
                    <CInput value="PT JAYA MAKMUR" disabled/>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="negarapelapor">Status Badan Hukum</CLabel>
                    <CInput value="PMD" disabled/>
                  </CFormGroup>
                </CCol>                
              </CRow>              
              <hr/>  
              <div>
              <h4>Penanggung Jawab</h4>
              </div>
              <hr/> 
              <CDataTable
              fields={fieldpenanggungjawab}
              items = {penanggungjawab}
              addTableClasses="joss" 
              scopedSlots = {{
                'check':
                (item) => {
                  var checked = false
                  if(item.namapgjawab == "Taufiq" || item.namapgjawab =="Joko"){
                    checked = true
                  }
                  return(
                    <td>
                      <input checked={checked} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled={!checked}/>                                            
                    </td>
                  )
                }
              }}              
              />
              <hr/>                          
              <CRow>
                <CCol xs="12">            
                <div>
                <h4>Alamat Kantor</h4>
                </div>
                <div className="borderleft"> 
                <div className="pr-4"><hr/></div>                               
              <CRow className="pr-4">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi">Alamat</CLabel>
                    <CTextarea value="Jalan Nangka No 12A" disabled></CTextarea>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>
              <CRow className="pr-4">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi">Kecamatan</CLabel>
                    <CInput value="Cipayung" disabled/>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                  <CLabel htmlFor="tglinspeksi">Kelurahan</CLabel>
                  <CInput value="Ceger" disabled/>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>
              <CRow className="pr-4">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi">Kode Pos</CLabel>
                    <CInput value="42112" disabled/>
                  </CFormGroup>
                </CCol> 
                <CCol xs="8">
                  <CFormGroup>
                  <CLabel htmlFor="tglinspeksi">Telepon</CLabel>
                  <CInput value="08952637867" disabled/>
                  </CFormGroup>
                </CCol>                                                                
              </CRow>    
              <CRow className="pr-4">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi">Faksimile</CLabel>
                    <CInput value="0212938473" disabled/>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                  <CLabel htmlFor="tglinspeksi">Website</CLabel>
                    <CInput value="http://google.com" disabled/>
                  </CFormGroup>
                </CCol>                                                                
              </CRow>                         
              </div>              
                </CCol>
                {/* <CCol xs="6">             
                <div>
                <h4>Alamat Pabrik</h4>
                </div>
                <hr/>
                <div>     
                <CModal
                        show={modalalamatpabrik}
                        onClose={()=>setModalAlamatPabrik(false)}
                        size="lg"
                        closeOnBackdrop={true}                       
                >
                  <CModalHeader closeButton>
                    <h4>Alamat Pabrik</h4>
                  </CModalHeader>
                  <CModalBody>
                    <CFormGroup>
                      <CRow>
                        <CCol md="12">
                        <CLabel>Alamat</CLabel>
                        <CTextarea></CTextarea>
                        </CCol>
                      </CRow>
                    </CFormGroup>
                    <CFormGroup>
                      <CRow className="pt-1">
                        <CCol md="6">
                        <CLabel>Kecamatan</CLabel>
                        <Select/>
                        </CCol>
                        <CCol md="6">
                        <CLabel>Kelurahan</CLabel>
                        <Select/>
                        </CCol>                        
                      </CRow>
                      <CRow className="pt-1">
                        <CCol md="6">
                        <CLabel>Kode Pos</CLabel>
                        <Select/>
                        </CCol>
                        <CCol md="6">
                        <CLabel>Telepon</CLabel>
                        <CInput/>
                        </CCol>                        
                      </CRow> 
                      <CRow className="pt-1">
                        <CCol md="6">
                        <CLabel>Faksimile</CLabel>
                        <CInput/>
                        </CCol>
                        <CCol md="6">
                        <CLabel>Website</CLabel>
                        <CInput/>
                        </CCol>                        
                      </CRow>                                            
                    </CFormGroup>                    
                  </CModalBody>
                  <CModalFooter>
                      <CRow>
                        <div className="pr-2">
                        <CButton color="info">Simpan</CButton>                          
                        </div>
                        <div>
                        <CButton color="danger">Batal</CButton>
                        </div>
                      </CRow>                    
                  </CModalFooter>
                </CModal>             
              <div className="d-flex justify-content-end pb-2"><CButton onClick={() => setModalAlamatPabrik(true)}className="btn-sm" color="info"> Tambah + </CButton></div> 
                <CDataTable              
                fields={fieldalamatpabrik}
                items={alamatpabrik}  
                addTableClasses="joss"              
                scopedSlots = {{
                  'action':
                  (item) => {
                    return(
                      <td>
                        <CButton className="btn btn-success btn-sm"><CIcon size={'sm'} name={'cilPencil'} /></CButton>{' '}
                        <CButton className="btn btn-danger btn-sm"><CIcon size={'sm'} name={'cilTrash'} /></CButton>                        
                      </td>
                    )
                  }
                }}
                />                                                  
              </div>              
                </CCol>                   */}
              </CRow>
              <hr/> 
              <div>
                <h4>Izin Usaha Industri</h4>
                </div>
                <hr/>
                <CModal
                        show={modalalamatpabrik}
                        onClose={()=>setModalAlamatPabrik(false)}
                        size="lg"
                        closeOnBackdrop={true}                       
                >
                  <CModalHeader closeButton>
                    <h4>Detail IUI</h4>
                  </CModalHeader>
                  <CModalBody>
                  <CFormGroup>
                      <CRow className="pt-1">
                        <CCol md="6">
                        <CLabel>Nomor IUI</CLabel>
                        <CInput value="IUI3546" disabled/>
                        </CCol>
                        <CCol md="6">
                        <CLabel>Tanggal IUI</CLabel>
                        <CInput value="07-04-2019" disabled/>
                        </CCol>                        
                      </CRow>                                                                
                    </CFormGroup>                     
                    <CFormGroup>
                      <CRow>
                        <CCol md="12">
                        <CLabel>Alamat</CLabel>
                        <CTextarea value="Jl Nanas No 3A" disabled></CTextarea>
                        </CCol>
                      </CRow>
                    </CFormGroup>
                    <CFormGroup>
                      <CRow className="pt-1">
                        <CCol md="6">
                        <CLabel>Kecamatan</CLabel>
                        <CInput value="Cibubur" disabled/>
                        </CCol>
                        <CCol md="6">
                        <CLabel>Kelurahan</CLabel>
                        <CInput value="Ciracas" disabled/>
                        </CCol>                        
                      </CRow>
                      <CRow className="pt-1">
                        <CCol md="6">
                        <CLabel>Kode Pos</CLabel>
                        <CInput value="42112" disabled/>
                        </CCol>
                        <CCol md="6">
                        <CLabel>Telepon</CLabel>
                        <CInput value="08953647834" disabled/>
                        </CCol>                        
                      </CRow> 
                      <CRow className="pt-1">
                        <CCol md="6">
                        <CLabel>Faksimile</CLabel>
                        <CInput/>
                        </CCol>
                        <CCol md="6">
                        <CLabel>Website</CLabel>
                        <CInput/>
                        </CCol>                        
                      </CRow>                                            
                    </CFormGroup>                    
                  </CModalBody>
                  <CModalFooter>
                      <CRow>
                        <div className="pr-2">
                        <CButton color="info">Simpan</CButton>                          
                        </div>
                        <div>
                        <CButton color="danger">Batal</CButton>
                        </div>
                      </CRow>                    
                  </CModalFooter>
                </CModal>                
                <CDataTable
                fields={fieldiui}
                items={iui}
                addTableClasses="joss"   
                scopedSlots = {{
                  'check':
                  (item) => {
                    var checked = false
                    if(item.noiui == "IUI8495" || item.noiui =="IUI3940"){
                      checked = true
                    }                    
                    return(
                      <td>
                        <input checked={checked} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" disabled={!checked} />                                            
                      </td>
                    )
                  },
                  'action':
                  (item) => {
                    return(
                      <td>
                        <CButton onClick={()=>setModalAlamatPabrik(true)} className="btn btn-success btn-sm">Detail</CButton>{' '}                       
                      </td>
                    )
                  }
                }}              
                />                              
                <CRow>    
                <CCol xs="12">             
                <div>
                <h4>API-P</h4>
                </div>
                <div className="pr-4"><hr/></div> 
                <CRow className="pr-4">
                        <CCol md="12">
                        <CLabel>Nomor API-P</CLabel>
                        <CInput value="API1234" disabled/>
                        </CCol>
                </CRow>
                <CRow className="pr-4">
                  <CCol md="12">
                        <CLabel>Tanggal API-P</CLabel>
                        <CInput value="2019-04-07" type="date" disabled/>
                  </CCol>
                </CRow>
                </CCol>                                                
                </CRow>               
              <hr/>               
              <div className="d-flex justify-content-between">
                  <CButton color="danger">Kembali</CButton>
                  <div>
                  <CButton color="primary">Simpan</CButton>{' '}
                  <CButton color="info">Selanjutnya</CButton>
                  </div>
              </div>                                                                                                                                                                    
    </>
  )
}

export default FormProfil
