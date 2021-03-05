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
    const [rencanaproduksi, setRencanaproduksi] = useState([
        {
            id:1,
            periode:"2020",
            bulan:"Januari",
            nmproduk:"Cairan Inhalasi",
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
            bahanbaku:"0.15",
            jnssatuanbahanbaku:"TNE",                
            produkjadi:"1.400.000",
            jnssatuanprodukjadi:"PCS"                           
        }
    ])
    const [realisasiproduksi, setRealisasiProduksi] = useState([
        {
            id:1,
            tahun:"2020",
            jenis:"Cairan Inhalasi",
            jnssatuanproduk:"LTR",
            volume:"158.678"
        },
        {
            id:2,
            tahun:"2020",
            jenis:"Tetes Mata",
            jnssatuanproduk:"PCS",
            volume:"1.357.135"
        }  
    ])
    const fieldrencanaproduksi = [
      { key: 'id', _style: { width: '3%'}, label:"No" },
      { key: 'periode', _style: { width: '5%'}, label:"Periode" },
      { key: 'bulan', _style: { width: '5%'}, label:"Bulan" },                    
      { key: 'nmproduk', _style: { width: '20%'}, label:"Nama Produk" },
      { key: 'bahanbaku', _style: { width: '12%'}, label:"Jml. Bahan Baku" }, 
      { key: 'jnssatuanbahanbaku', _style: { width: '12%'}, label:"Jns. Satuan Bahan Baku" },            
      { key: 'produkjadi', _style: { width: '12%'}, label:"Jml. Produk Jadi" },  
      { key: 'jnssatuanprodukjadi', _style: { width: '12%'}, label:"Jns. Satuan Produk Jadi" },              
      { key: 'action', _style: { width: '30%'}, label:"Aksi"}
    ]  
    const handleRencana = () => {
        setRencanaproduksi([
            {
                id:1,
                periode:"2020",
                bulan:"Januari",
                nmproduk:"Cairan Inhalasi",
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
        { key: 'jenis', _style: { width: '30%'}, label:"Nama Produk" },
        { key: 'volume', _style: { width: '15%'}, label:"Jumlah Produk" },
        { key: 'jnssatuanproduk', _style: { width: '15%'}, label:"Jenis Satuan Produk" },                   
        { key: 'action', _style: { width: '25%'}, label:"Aksi"}
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
        console.log("hehe")
        setRealisasiProduksi([
            {
                id:1,
                tahun:"2020",
                jenis:"Cairan Inhalasi",
                jnssatuanproduk:"LTR",
                volume:"158.678"
            },
            {
                id:2,
                tahun:"2020",
                jenis:"Tetes Mata",
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
      const [modalrencanaproduksi,setModalrencanaproduksi] = useState(false)
  return (
    <>        
                <div>
                <h4>Rencana Penggunaan Garam Impor dan Produksi</h4>
                </div>
                <hr/>
                {/* <div className="d-flex">                       
                      <div className="ml-auto p-2 d-flex align-items-end"> 
                          <CButton onClick={()=>handleRencana()}className="btn btn-sm btn-info">Tambah + </CButton>
                      </div>                                                                   
                  </div>    */}
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
                                  <CButton className="btn btn-sm btn-warning" disabled>Edit</CButton>{' '}
                                  <CButton className="btn btn-sm btn-danger" disabled>Hapus</CButton>
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
                {/* <div className="d-flex">                       
                      <div className="ml-auto p-2 d-flex align-items-end"> 
                          <CButton onClick={()=>handleRealisasi()} className="btn btn-sm btn-info">Tambah + </CButton>
                      </div>                                                                   
                  </div>                               */}
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
                                  <CButton className="btn btn-sm"color="success">Detail</CButton>
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
