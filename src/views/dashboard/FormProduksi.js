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
  CForm
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {fieldviavalen, fieldshipcertificate, fieldinformation} from './source.js'
import {ReactComponent as Satu} from './satu.svg'
import {ReactComponent as Satuoff} from './satuoff.svg'

const FormProduksi = (props) => {
  const [modalrencanadistribusi,setModalrencanadistribusi] = useState(false)
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
    const [realisasi,setRealisasi] = useState() 
    const [hitung, setHitung] = useState(0)
    const [rencanaproduksi, setRencanaproduksi] = useState()
    const [realisasiproduksi, setRealisasiProduksi] = useState()
    const fieldrencanaproduksi = [
      { key: 'id', _style: { width: '3%'}, label:"No" },
      { key: 'periode', _style: { width: '5%'}, label:"Periode" },
      { key: 'bulan', _style: { width: '5%'}, label:"Bulan" },                    
      { key: 'nmproduk', _style: { width: '15%'}, label:"Nama Produk" },
      { key: 'hscode', _style: { width: '10%'}, label:"Post Tarif" },  
      { key: 'stdmutu', _style: { width: '20%'}, label:"Standard Mutu" },          
      { key: 'bahanbaku', _style: { width: '12%'}, label:"Jml. Bahan Baku" }, 
      { key: 'jnssatuanbahanbaku', _style: { width: '3%'}, label:"Satuan" },            
      { key: 'produkjadi', _style: { width: '12%'}, label:"Jml. Produk Jadi" },  
      { key: 'jnssatuanprodukjadi', _style: { width: '3%'}, label:"Satuan" },              
      { key: 'action', _style: { width: '12%'}, label:"Aksi"}
    ]  
    const handleRencana = () => {
        setModalrencanaproduksi(false)
        setRencanaproduksi([
            {
                id:1,
                periode:"2020",
                bulan:"Januari",
                nmproduk:"Cairan Inhalasi",
                hscode:"3004.90.20",
                stdmutu:"NaCl maksimal 97%",
                bahanbaku:"0.3",
                jnssatuanbahanbaku:"TNE",
                produkjadi:"160.000",
                jnssatuanprodukjadi:"LTR"           
            },
            {
                id:2,
                periode:"2020",
                bulan:"Februari",
                nmproduk:"Tetes Mata",
                hscode:"3004.90.96",
                stdmutu:"NaCl 97-99%",
                bahanbaku:"0.15",
                jnssatuanbahanbaku:"TNE",                
                produkjadi:"1.400.000",
                jnssatuanprodukjadi:"PCS"                           
            }
        ])
    }
    const fieldrealisasiproduksi = [
        { key: 'id', _style: { width: '3%'}, label:"No" },
        { key: 'tahun', _style: { width: '10%'}, label:"Periode" },
        { key: 'jenis', _style: { width: '20%'}, label:"Nama Produk" },
        { key: 'hscode', _style: { width: '15%'}, label:"Post Tarif" },
        { key: 'stdmutu', _style: { width: '15%'}, label:"Standard Mutu" },        
        { key: 'volume', _style: { width: '20%'}, label:"Jumlah Produk" },
        { key: 'jnssatuanproduk', _style: { width: '5%'}, label:"Satuan" },                   
        { key: 'action', _style: { width: '12%'}, label:"Aksi"}
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
    const handleRealisasi = () => {
        setModalrealisasiproduksi(false)
        setRealisasiProduksi([
            {
                id:1,
                tahun:"2020",
                jenis:"Cairan Inhalasi",
                hscode:"3004.90.20",
                stdmutu:"NaCl maksimal 97%",
                jnssatuanproduk:"LTR",
                volume:"158.678"
            },
            {
                id:2,
                tahun:"2020",
                jenis:"Tetes Mata",
                hscode:"3004.90.96",
                stdmutu:"NaCl 97-99%",
                jnssatuanproduk:"PCS",
                volume:"1.357.135"
            }                                 
        ])        
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
      const pilihannegara = [
        { value: 'ID', label: 'Indonesia' },
        { value: 'MY', label: 'Malaysia' },
        { value: 'TH', label: 'Thailand' },
        { value: 'US', label: 'United States of America'},
      ]   
      const pilihanpelabuhan = [
        { value: 'IDTPP', label: 'Tanjung Priok' },
        { value: 'IDPKS', label: 'Pangkalan Susu' },
        { value: 'IDKOJ', label: 'Koja' },
        { value: 'IDRAU', label: 'Riau'},
        { value: 'IDBLW', label: 'Belawan'},
        { value: 'IDMAK', label: 'Makassar'},
      ] 
      const pilihansatuan = [
        { value: 'TNE', label: 'Ton' },
        { value: 'LTR', label: 'Liter' },
        { value: 'KGM', label: 'Kilogram' }
      ]    
      const pilihankodehs = [
        { value: '25010099', label: '2501.00.99' },
        { value: '25010092', label: '2501.00.92' },          
      ]   
      const pilihanstdmutu = [
        { value: '1', label: 'NaCl Maks 97%' },   
        { value: '2', label: 'NaCl 97-99%' },          
      ]             
      const [modalrealisasiproduksi, setModalrealisasiproduksi] = useState(false)    
      const [modalrencanaproduksi,setModalrencanaproduksi] = useState(false)
  return (
    <>
<CModal
                    show={modalrealisasiproduksi}
                    onClose={()=>setModalrealisasiproduksi(false)}
                    size="lg"                
                >
                    <CModalHeader closeButton>
                        <h4>Input Realisasi Produksi</h4>
                    </CModalHeader>
                    <CModalBody>
                        <CFormGroup>
                            <CRow>
                                <CCol md="3">
                                    <CLabel>Periode</CLabel>
                                    <CSelect>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                    </CSelect>
                                </CCol>                              
                            </CRow>
                            <CRow>
                                <CCol md="4">
                                    <CLabel>Nama Produk</CLabel>
                                    <CInput/>
                                </CCol>
                                <CCol md="4">
                                    <CLabel>Standard Mutu</CLabel>
                                    <Select
                                    options={pilihanstdmutu}
                                    />
                                </CCol> 
                                <CCol md="4">
                                    <CLabel>Pos Tarif</CLabel>
                                    <Select
                                    options={pilihankodehs}
                                    />
                                    {/* <CSelect>
                                        <option></option>
                                        <option>2501.00.99</option>
                                        <option>2501.00.92</option>
                                    </CSelect> */}
                                </CCol>
                            </CRow>
                            <CRow> 
                                <CCol md="6">
                                    <CLabel>Jumlah Produk</CLabel>
                                    <CInput type="number" />                                   
                                </CCol>   
                                <CCol md="6">
                                    <CLabel>Satuan Produk</CLabel>
                                    <Select
                                    options={pilihansatuan}
                                    />                                   
                                </CCol>                                                                                                                              
                            </CRow>                                                      
                        </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CRow>
                        <div className="pr-2">
                        <CButton onClick={()=>handleRealisasi()} color="info">Simpan</CButton>                          
                        </div>
                        <div>
                        <CButton color="danger">Batal</CButton>
                        </div>
                      </CRow>                         
                    </CModalFooter>
                </CModal>    
                <CModal
                    show={modalrencanaproduksi}
                    onClose={()=>setModalrencanaproduksi(false)}
                    size="lg"                
                >
                    <CModalHeader closeButton>
                        <h4>Input Rencana Penggunaan Garam Impor dan Produksi</h4>
                    </CModalHeader>
                    <CModalBody>
                        <CFormGroup>
                            <CRow>
                                <CCol md="3">
                                    <CLabel>Periode</CLabel>
                                    <CSelect>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                    </CSelect>
                                </CCol>
                                <CCol md="3">
                                    <CLabel>Bulan</CLabel>
                                    <CSelect>
                                        <option>Januari</option>
                                        <option>Februari</option>
                                        <option>Maret</option>
                                        <option>April</option>
                                        <option>Mei</option>
                                        <option>Juni</option>   
                                        <option>Juli</option>
                                        <option>Agustus</option>
                                        <option>September</option>  
                                        <option>Oktober</option>
                                        <option>November</option>
                                        <option>Desember</option>                                                                                                                   
                                    </CSelect>
                                </CCol>                                
                            </CRow>
                            <CRow>
                                <CCol md="4">
                                    <CLabel>Nama Produk</CLabel>
                                    <CInput/>
                                </CCol>
                                <CCol md="4">
                                    <CLabel>Standard Mutu</CLabel>
                                    <Select
                                    options={pilihanstdmutu}
                                    />
                                </CCol> 
                                <CCol md="4">
                                    <CLabel>Pos Tarif</CLabel>
                                    <Select
                                    options={pilihankodehs}
                                    />
                                    {/* <CSelect>
                                        <option></option>
                                        <option>2501.00.99</option>
                                        <option>2501.00.92</option>
                                    </CSelect> */}
                                </CCol>
                            </CRow>
                            <CRow> 
                                <CCol md="6">
                                    <CLabel>Jumlah Bahan Baku</CLabel>
                                    <CInput type="number" />                                   
                                </CCol>   
                                <CCol md="6">
                                    <CLabel>Satuan Bahan Baku</CLabel>
                                    <Select
                                    options={pilihansatuan}
                                    />                                   
                                </CCol>                                                                                                                              
                            </CRow>
                            <CRow> 
                                <CCol md="6">
                                    <CLabel>Jumlah Produk Jadi</CLabel>
                                    <CInput type="number" />                                   
                                </CCol>   
                                <CCol md="6">
                                    <CLabel>Satuan Produk Jadi</CLabel>
                                    <Select
                                    options={pilihansatuan}
                                    />                                   
                                </CCol>                                                                                                                              
                            </CRow>                                                      
                        </CFormGroup>
                    </CModalBody>
                    <CModalFooter>
                      <CRow>
                        <div className="pr-2">
                        <CButton onClick={()=>handleRencana()} color="info">Simpan</CButton>                          
                        </div>
                        <div>
                        <CButton color="danger">Batal</CButton>
                        </div>
                      </CRow>                         
                    </CModalFooter>
                </CModal>    
                <div>
                <h4>Rencana Penggunaan Garam Impor dan Produksi</h4>
                </div>
                <hr/>
                <div className="d-flex">                       
                      <div className="ml-auto p-2 d-flex align-items-end"> 
                          <CButton onClick={()=>setModalrencanaproduksi(true)}className="btn btn-sm btn-info">Tambah + </CButton>
                      </div>                                                                   
                  </div>   
            <CModal
                show={modalrencanadistribusi}
                onClose={()=>setModalrencanadistribusi(false)}
                size="lg"
                closeOnBackdrop={true}  
            >
                <CModalHeader>
                    <h4>Rencana Distribusi</h4>
                </CModalHeader>
                <CModalBody>
                    <CRow className="px-2">                 
                        <CDataTable
                        addTableClasses="joss"
                        fields={fieldrencanaproduksi}
                        />                                                               
                    </CRow>                     
                </CModalBody>
                <CModalFooter>

                </CModalFooter>
            </CModal>              
              <CRow className="px-2">                 
                  <CDataTable
                  addTableClasses="joss"
                  fields={fieldrencanaproduksi}
                  items={rencanaproduksi}
                  scopedSlots={{
                      'action':
                      (item)=>{
                          return(
                              <td>
                                  <CButton className="btn btn-sm btn-warning"><CIcon size={'sm'} name={'cilPencil'} /></CButton>{' '}
                                  <CButton className="btn btn-sm btn-danger"><CIcon size={'sm'} name={'cilTrash'} /></CButton>
                              </td>
                          )
                      }
                  }}
                  />                                                               
              </CRow>              
              <hr/>   
              <div>
                <h4>Realisasi Produksi</h4>
                </div>
                <hr/> 
                <div className="d-flex">                       
                      <div className="ml-auto p-2 d-flex align-items-end"> 
                          <CButton onClick={()=>setModalrealisasiproduksi(true)} className="btn btn-sm btn-info">Tambah + </CButton>
                      </div>                                                                   
                  </div>                              
              <CRow className="px-2">                               
                  <CDataTable
                  addTableClasses="joss"
                  fields={fieldrealisasiproduksi}
                  items={realisasiproduksi}
                  scopedSlots = {{
                      'action':
                      (item) =>{
                          return(
                              <td>
                                  <CButton className="btn btn-sm btn-warning"><CIcon size={'sm'} name={'cilPencil'} /></CButton>{' '}
                                  <CButton className="btn btn-sm btn-danger"><CIcon size={'sm'} name={'cilTrash'} /></CButton>
                              </td>                            
                          )
                      }
                  }}
                  />                                                               
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

export default FormProduksi
