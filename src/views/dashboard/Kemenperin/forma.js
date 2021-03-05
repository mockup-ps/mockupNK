import React, { lazy, useState, useEffect } from 'react'
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
import {ReactComponent as Satu} from './satu.svg'
import {ReactComponent as Satuoff} from './satuoff.svg'
import {ReactComponent as Profile} from './profile.svg'
import {ReactComponent as Import} from './import.svg'
import {ReactComponent as Produksi} from './produksi.svg'
import {ReactComponent as Distribusi} from './distribusi.svg'
import {ReactComponent as Penyerapan} from './penyerapan.svg'
import {ReactComponent as Konfirmasi} from './konfirmasi.svg'
import {ReactComponent as Stok} from './stok.svg'
import  FormProfil from './FormProfil.js'
import FormImpor from './FormImpor.js'
import FormProduksi from './FormProduksi.js'
import FormDistribusi from'./FormDistribusi.js'
import FormPenyerapan from'./FormPenyerapan.js'
import FormKonfirmasi from'./FormKonfirmasi.js'
import FormStok from'./FormStok.js'
import Bform from './bform.js'
import { Redirect, Route, Switch } from 'react-router-dom';

function IsiUtama(props) {
    var button = props.button
    if (button.profil){
        return <FormProfil/>
    } else if (button.impor){
        return <FormImpor/>
    } else if(button.produksi){
        return <FormProduksi/>
    } else if (button.distribusi){
        return <FormDistribusi/>
    } else if (button.penyerapan){
        return <FormPenyerapan/>
    } else if (button.stok){
        return <FormStok/>
    }
    else {
        return <FormKonfirmasi/>
    }
  }      

const FormA = (props) => {
    const [button, setButton] = useState({"profil":true})
    const [tab, setTab] = useState("a");
    const [pancingan, setPancingan] = useState();
    const [certificate, setCertificate] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]);
    const [informasi, setInformasi] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]); 
    const [defisiensi, setDefisiensi] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]); 
    const [defic, setDefic] = useState([
        {
            id:1,
            title:"",
            issuingauthority:"",
            dateofissue:"",
            dateofexpiry:""
        }
    ])
    const [viavalen, setViavalen] = useState("") 
    const [kembali, setKembali] = useState("")      
    const handleClickTabA = () => {
        if(tab!=="a"){
            setTab("a")
        }
    }
    const handleClick = (e) =>{
        setButton({[e.target.id]:true})
        console.log(button)
        console.log(e.target.id)
    }
    const handleViavalen = (item) => {
        setViavalen(item)
        console.log(viavalen)
    }  
    const handleKembali = (item) => {
        setKembali(item)
        console.log("kembali", kembali)
    } 
    const handleCertificate = (item) => {
        setCertificate(item)
    }  
    const handleInformasi = (item) => {
        setInformasi(item)
    }   
    const handleDefisiensi = (item) => {
        setDefisiensi(item)
    }       
    const handleDefic = (item) => {
        setDefic(item)
    }     
    const handleSelanjutnya = (param) => {
        setPancingan(param)
        setTab("b")
    } 
    const handleSebelumnya = (param) => {
        setPancingan(param)
        setTab("a")
    }        
    const handleClickTabB = () => {
        if(tab!=="b"){
            setTab("b")
        }
    }    
    const fungsipancing = (hehe) => {
        setPancingan(!hehe)
        console.log(pancingan)
    }   
    useEffect(() => {
        if(viavalen == "ya"){
            props.history.push('/helpkapal')
        }
        if(kembali == "ya"){
            props.history.push('/helpkapal')
        }
      }); 
  return (
    <>
    <CCard>
      <CCardBody>
      <div className="align-self-start">
        <div class="d-flex justify-content-center">
        <CButton onClick={handleClick.bind(this)} >
        <div id="profil" className={button.profil ? "item px-5 btn " : "item px-5 btn"}>  
        <Profile/>
        <span style={{display:"block"}}>
            Profil
        </span>
        </div>
        </CButton>
        <CButton onClick={handleClick.bind(this)} >      
        <div id="impor" className={button.impor ? "item px-5 btn " : "item px-5 btn"}>    
        <Import/>
        <span style={{display:"block"}}>
            Impor
        </span>
        </div> 
        </CButton>
        <CButton onClick={handleClick.bind(this)}>  
        <div id="produksi" className={button.produksi ? "item px-5 btn " : "item px-5 btn"}>         
        <Produksi/>
        <span style={{display:"block"}}>
            Produksi
        </span>
        </div> 
        </CButton>
        <CButton onClick={handleClick.bind(this)} > 
        <div id="distribusi" className={button.distribusi ? "item px-5 btn " : "item px-5 btn"}>          
        <Distribusi/>
        <span style={{display:"block"}}>
            Distribusi
        </span>
        </div> 
        </CButton>
        <CButton onClick={handleClick.bind(this)}> 
        <div id="penyerapan" className={button.penyerapan ? "item px-5 btn " : "item px-5 btn"}> 
        <Penyerapan/>      
        <span style={{display:"block"}}>
            Penyerapan
        </span>
        </div>
        </CButton>
        <CButton onClick={handleClick.bind(this)}> 
        <div id="stok" className={button.penyerapan ? "item px-5 btn" : "item px-5 btn"}> 
        <Stok/>      
        <span style={{display:"block"}}>
            Stok
        </span>
        </div>
        </CButton>        
        <CButton style={{outline:"none"}}onClick={handleClick.bind(this)}>
        <div id="konfirmasi" className={button.konfirmasi ? "item px-5 btn " : "item px-5 btn"}>          
        <Konfirmasi />
        <span style={{display:"block"}}>
            Keputusan
        </span>
        </div> 
        </CButton>                                        
      </div> 
      </div> 
      <div className="pt-5">
          <IsiUtama button={button} defic={defic} kirimDefic={handleDefic} kembali={handleKembali} tab={tab} Viavalen={handleViavalen} kirimDefisiensi={handleDefisiensi} defisiensi={defisiensi} kirimInformasi={handleInformasi} informasi={informasi}s certificate={certificate} kirimCertificate={handleCertificate} juhuu={handleSebelumnya} jehee={handleSelanjutnya} calleback={fungsipancing} />
      </div>
      </CCardBody>
    </CCard>
    </>
  )
}

export default FormA
