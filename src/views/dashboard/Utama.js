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
import FormulirA from './FormulirA.js'
import FormulirB from './FormulirB.js'
import { Redirect, Route, Switch } from 'react-router-dom';

function LogoFormA(props) {
    const tab = props.tab;
    if (tab== "a") {
      return <Satu/>;
    }
    return <Satuoff/> ;
  }
function LogoFormB(props) {
    const tab = props.tab;
    if (tab=="b") {
      return <Satu/>;
    }
    return <Satuoff/> ;
  } 
function IsiUtama(props) {
    const tab = props.tab;
    if (tab=="a") {
      return <FormulirA kembali={(item) => props.kembali(item)} kirimInformasi={(item) => props.kirimInformasi(item)} informasi={props.informasi} certificate={props.certificate} kirimCertificate={(item) => props.kirimCertificate(item)} jehee={(item)=>props.jehee(item)} calleback={(item) => props.calleback(item)} />;
    }
    return <FormulirB defic={props.defic} kirimDefic={(item)=>props.kirimDefic(item)} juhuu={(item)=>props.juhuu(item)} Viavalen={(item)=> props.Viavalen(item)} kirimDefisiensi={(item)=>props.kirimDefisiensi(item)} defisiensi={props.defisiensi} calleback={(item) => props.calleback(item)} /> ;
  }      

const Utama = (props) => {
    const [tab, setTab] = useState("a");
    const [pancingan, setPancingan] = useState();
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
    const [certificate, setCertificate] = useState([
        {
        id:1,
        title:0,
        issuingauthority:"LR",
        dateofissue:"2020-05-04",
        dateofexpiry:"2020-03-02"
        },
        {
        id:2,
        title:1,
        issuingauthority:"BKI",
        dateofissue:"2020-04-02",
        dateofexpiry:"2020-09-04"
        },
        {
        id:3,
        title:2,
        issuingauthority:"BKI",
        dateofissue:"2020-06-02",
        dateofexpiry:"2020-09-01"
        },
        {
        id:4,
        title:3,
        issuingauthority:"BKI",
        dateofissue:"2020-07-03",
        dateofexpiry:"2020-09-01"
        },
        {
        id:5,
        title:4,
        issuingauthority:"BKI",
        dateofissue:"2020-04-03",
        dateofexpiry:"2020-11-02"
        }                                               
    ]);
    const [informasi, setInformasi] = useState([
        {
        id:1,
        date:"2020-05-06",
        surveyinguathority:"BKI",
        place:"JAKARTA"
        }                        
    ]); 
    const [defisiensi, setDefisiensi] = useState([{
        id:1,
        code:"13102",
        nature:"FIRE POOR INSTALLED IN E/R ESCAPE TRUNK NOT CLOSED COMPLETELY",
        convention:"",
        action:0,
        responsible:0,
    }]); 
    const [defic, setDefic] = useState([
        {
            id:1,
            subdef:"SPRINKLES BROKEN"
        },
        {
            id:2,
            subdef:"FIRE PUMP NOT OPERATE PROPERLY"
        },        
    ])
    const [viavalen, setViavalen] = useState("") 
    const [kembali, setKembali] = useState("")      
    const handleClickTabA = () => {
        if(tab!=="a"){
            setTab("a")
        }
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
            props.history.push('/tindaklanjut')
        }
        if(kembali == "ya"){
            props.history.push('/tindaklanjut')
        }
      }); 
  return (
    <>
    <CCard>
      <CCardBody>
      <div className="align-self-start">
        <div class="d-flex justify-content-center">
        <div onClick={handleClickTabA.bind(this)} className="item px-5 btn" >
        <LogoFormA tab={tab} />
        <span style={{display:"block"}}>
            Form A
        </span>
        </div>
        <div onClick={handleClickTabB.bind(this)} className="item px-5 btn" >          
        <LogoFormB tab={tab} />
        <span style={{display:"block"}}>
            Form B
        </span>
        </div>        
      </div> 
      </div> 
      <div>
          <IsiUtama defic={defic} kirimDefic={handleDefic} kembali={handleKembali} tab={tab} Viavalen={handleViavalen} kirimDefisiensi={handleDefisiensi} defisiensi={defisiensi} kirimInformasi={handleInformasi} informasi={informasi}s certificate={certificate} kirimCertificate={handleCertificate} juhuu={handleSebelumnya} jehee={handleSelanjutnya} calleback={fungsipancing} />
      </div>
      </CCardBody>
    </CCard>
    </>
  )
}

export default Utama
