import React, { lazy, useEffect, useState } from 'react'
import Select from 'react-select';
import {
  CCol,
  CCard,
  CCardBody,
  CSelect,
  CCollapse,
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
  CForm,
  CCardHeader,
  CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {fieldviavalen, fieldshipcertificate, fieldinformation} from './source.js'
import {ReactComponent as Satu} from './satu.svg'
import {ReactComponent as Satuoff} from './satuoff.svg'

const FormKonfirmasi = (props) => {
  const [details,setDetails] = useState([])   
  const [detail,setDetail] = useState([]) 
  const [modalalamatpabrik,setModalAlamatPabrik] = useState(false)
  const [rencana, setRencana] = useState()
    const [form, setForm] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]);
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
      const toggleDetail = (index) =>{
        const posisi = detail.indexOf(index)
        let newDetail = detail.slice()
        if(posisi !== -1){
          newDetail.splice(posisi, 1)
        } else {
          newDetail = [...detail, index]
        }
        setDetail(newDetail)
      }          
    const [form1, setForm1] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]);   
    const fieldperusahaan =[
        { key: 'id', _style: { width: '1%'}, label:"No" }, 
        { key: 'periode', _style: { width: '1%'}, label:"Periode" },        
        { key: 'npwp', _style: { width: '1%'}, label:"NPWP" },   
        { key: 'nmperusahaan', _style: { width: '1%'}, label:"Nama Perusahaan" },  
        { key: 'kota', _style: { width: '1%'}, label:"Kota" },   
        { key: 'provinsi', _style: { width: '1%'}, label:"Provinsi" },  
        { key: 'jmlproduk', _style: { width: '1%'}, label:"Jumlah Produk" }, 
        { key: 'jnssatuanproduk', _style: { width: '1%'}, label:"Jns. Satuan Produk" },                          
    ]
    const perusahaan = [
        {
            id:1,
            periode:"2020",
            npwp:"01.302.575.4-073.000",
            nmperusahaan:"Pratapa Nirmala",
            nmproduk:"Cairan Inhalasi",
            kota:"Surabaya",
            provinsi:"Jawa Timur",
            jmlproduk:"50.000",
            jnssatuanproduk:"LTR",            
        }, 
        {
            id:2,
            periode:"2020",
            npwp:"01.341.857.9-092.000",
            nmperusahaan:"Riau Andalan Pulp And Paper",
            nmproduk:"Cairan Inhalasi",
            kota:"Semarang",
            provinsi:"Jawa Tengah",
            jmlproduk:"40.000",
            jnssatuanproduk:"LTR",
            keterangan:"-"
        },  
        {
            id:3,
            periode:"2020",
            npwp:"01.062.213.2-092.000",
            nmperusahaan:"Sulfindo Adiusaha",
            nmproduk:"Cairan Inhalasi",
            kota:"Kendal",
            provinsi:"Jawa Tengah",
            jmlproduk:"70.000",
            jnssatuanproduk:"LTR",
            keterangan:"-"
        }                      
    ]
    const [realisasi,setRealisasi] = useState() 
    const [hitung, setHitung] = useState(0)
    const fieldrencanadistribusi = [
      { key: 'collapse', _style: { width: '2%'}, label:"" },                
      { key: 'id', _style: { width: '3%'}, label:"No" },              
      { key: 'nmproduk', _style: { width: '27%'}, label:"Nama Produk" },
      { key: 'klasifikasi', _style: { width: '27%'}, label:"Klasifikasi Produk" }, 
      { key: 'subklasifikasi', _style: { width: '26%'}, label:"Subklasifikasi Produk" },                
      { key: 'keterangan', _style: { width: '15%'}, label:"Keterangan" }
    ]  
    const handleRencana = () => {
        setRencana([
            {
                id:1,
                npwp:"01.302.575.4-073.000",
                nmperusahaan:"Pratapa Nirmala",
                nmproduk:"Cairan Inhalasi",
                klasifikasi:"Produk Farmasi",
                subklasifikasi:"Obat",
                keterangan:"-"
            },
            {
                id:2,
                npwp:"01.341.857.9-092.000",
                nmperusahaan:"Riau Andalan Pulp And Paper",
                nmproduk:"Cairan Inhalasi",
                klasifikasi:"Produk Farmasi",
                subklasifikasi:"Obat",
                keterangan:"-"
            },
            {
                id:3,
                npwp:"01.062.213.2-092.000",
                nmperusahaan:"Sulfindo Adiusaha",
                nmproduk:"Cairan Inhalasi",
                klasifikasi:"Produk Farmasi",
                subklasifikasi:"Obat",
                keterangan:"-"
            }                          
        ])
    }
    const handleRealisasi = () => {
        setRealisasi([
            {
                id:1,
                npwp:"01.302.575.4-073.000",
                nmperusahaan:"Pratapa Nirmala",
                nmproduk:"Cairan Inhalasi",
                klasifikasi:"Produk Farmasi",
                subklasifikasi:"Obat",
                keterangan:"-"
            },
            {
                id:2,
                npwp:"01.341.857.9-092.000",
                nmperusahaan:"Riau Andalan Pulp And Paper",
                nmproduk:"Cairan Inhalasi",
                klasifikasi:"Produk Farmasi",
                subklasifikasi:"Obat",
                keterangan:"-"
            },
            {
                id:3,
                npwp:"01.062.213.2-092.000",
                nmperusahaan:"Sulfindo Adiusaha",
                nmproduk:"Cairan Inhalasi",
                klasifikasi:"Produk Farmasi",
                subklasifikasi:"Obat",
                keterangan:"-"
            }                          
        ])
    }    
    const fieldrealisasidistribusi = [
        { key: 'id', _style: { width: '3%'}, label:"No" },
        { key: 'nmperusahaan', _style: { width: '30%'}, label:"Tahun" },
        { key: 'nmproduk', _style: { width: '30%'}, label:"Jenis" },
        { key: 'lokasi', _style: { width: '15%'}, label:"Pos Tarif" },
        { key: 'jumlahproduk', _style: { width: '15%'}, label:"Jumlah Produk" },
        { key: 'keterangan', _style: { width: '15%'}, label:"Keterangan" }
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
    <CCard>
        <CCardHeader>
            <h4>Checkpoint Konfirmasi</h4>
        </CCardHeader>
        <CCardBody>
            <CFormGroup>
                <CRow>
                    <CCol xsd="6">
                        <CLabel>
                            <h5>Form Profil</h5>
                        </CLabel>
                    </CCol>
                    <CCol xsd="6">
                        <CBadge color="success">Lengkap</CBadge>
                    </CCol>                    
                </CRow>
                <CRow>
                    <CCol xsd="6">
                        <CLabel>
                            <h5>Form Impor</h5>
                        </CLabel>
                    </CCol>
                    <CCol xsd="6">
                        <CBadge color="success">Lengkap</CBadge>
                    </CCol>                    
                </CRow> 
                <CRow>
                    <CCol xsd="6">
                        <CLabel>
                            <h5>Form Produksi</h5>
                        </CLabel>
                    </CCol>
                    <CCol xsd="6">
                        <CBadge color="success">Lengkap</CBadge>
                    </CCol>                    
                </CRow> 
                <CRow>
                    <CCol xsd="6">
                        <CLabel>
                            <h5>Form Distribusi</h5>
                        </CLabel>
                    </CCol>
                    <CCol xsd="6">
                        <CBadge color="success">Lengkap</CBadge>
                    </CCol>                    
                </CRow>  
                <CRow>
                    <CCol xsd="3">
                        <CLabel>
                            <h5>Form Penyerapan</h5>
                        </CLabel>
                    </CCol>
                    <CCol xsd="9">
                        <CBadge color="success">Lengkap</CBadge>
                    </CCol>                    
                </CRow> 
                <CRow className="d-flex justify-content-end">
                    <div className="pr-2" >
                        <CButton className="btn btn-success">
                            Kirim
                        </CButton>                        
                    </div>
                    <div className="pr-2">
                        <CButton className="btn btn-info">
                            Simpan
                        </CButton>                         
                    </div>                       
                </CRow>                                                           
            </CFormGroup>
        </CCardBody>
    </CCard>                                                                                                                                                                   
    </>
  )
}

export default FormKonfirmasi
