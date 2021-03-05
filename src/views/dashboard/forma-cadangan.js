import React, { lazy, useState, useEffect } from 'react'
import { GoogleSpreadsheet } from "google-spreadsheet";
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
import Aform from './aform.js'
import Bform from './bform.js'
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
      return <Aform kirimJenis={(item) => props.kirimJenis(item)} jenis={props.jenis} nomorid={props.nomorid} DataForm={props.DataForm} kirimDataForm={(item) => props.kirimDataForm(item)} valuefield={props.valuefield} kembali={(item) => props.kembali(item)} kirimInformasi={(item) => props.kirimInformasi(item)} informasi={props.informasi} certificate={props.certificate} kirimCertificate={(item) => props.kirimCertificate(item)} jehee={(item)=>props.jehee(item)} calleback={(item) => props.calleback(item)} />;
    }
    return <Bform defic={props.defic} kirimDefic={(item)=>props.kirimDefic(item)} juhuu={(item)=>props.juhuu(item)} Viavalen={(item)=> props.Viavalen(item)} kirimDefisiensi={(item)=>props.kirimDefisiensi(item)} defisiensi={props.defisiensi} calleback={(item) => props.calleback(item)} /> ;
  }      

const FormA = (props) => {
    const SPREADSHEET_ID = '1Fh2giaKIDx1bsk31cLqGMuwtsyymAUsHCJywXuPSLJE';
    const SHEET_ID = '22166995';
    const CLIENT_EMAIL = 'mockup-helpdesk-kapal@helpdesk-kapal.iam.gserviceaccount.com';
    const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDaW5+lRch6l7kS\naeH8i+jCgkL8wl3evi8aJycZareM3Lc4Kt6bjl1SNsvR6hWGnzIfwkioK6v6vPs+\nOycRUy6fKdCy/G3Yby5sPG7gLAVRrIS1WxqM79sbWZhwbyNFfRCTJOYhXwVXDGkH\nrttd/hDYQW1iXlEdrfBdrfllXgdYWNF9nTR/Ll4ePDuc9+YS0OQyYaAWwoc3ah6U\nCbSopHszL+w5EH/DK9hlu9IjPxREi8k9MntmXGu4HJPYrdnBhZTwJWZ/qIMvWBcc\nAFrNEHNyzps0KPSau3vMJN0PQ0idEmMVk5spGJJbIUBmdsKsnf4z/ZONOyvSNjMD\nhnIUYzYBAgMBAAECggEAI7J65PAFmFUZgnMg6MKOqM3W2a+E3RdGaAYilDsoCrVC\nlsIbZl7dzsT6iTS1lC6OaTa/3g5VrUYb5M6S0nhA1PBnF/vAkXOLqVIv5iIMNI/5\nmhRswMGtlkkNbMQehguuHAAaRzZbjyGOQh1J65HPeysnEL/OjwWSmB4K+ZFnrf95\nwanpNFROc2DMWVRiKJghyO2tb4zSolGO919z/VPIa+IguRG57utEVX6SY+XqGuHY\nDZo48h14qhsQaq74QsCUXO24diCXIRZq3uJMVS6ShW4aXfhoxqTSiC9bpVYOHH7F\nfgYNFex3SzrAMPEnyVuyqUBfhe+ZpG6vtxxsd6o64QKBgQD6V/GR+75iyyKWT/AE\nOQeLA/2gNzHuQlShKLfciCLTDHTUkSORLyeh0ILv4bs5i/2/x/vgiozPHoPR1joB\n3+zQrskJjrwcfMX7xytxdEVSMFvrHRNGjWX7ZsPuLCDkPphuwFMq7c3CfWxiqmLx\nSzdhdZDoUh3JJYv6u6PUjjDGRQKBgQDfSqqQD8Enoa52wJzA/z7NVA90NSWYjDuL\n1DRHW9EWHovEkmkDZffOYxItp3CADFQMPieulkUCEFsxyqaeitdwEJE7KJ56DzHQ\np8+4qdH4fxNzioWU17m7iI2ecYyvhr2THQQmu/7xhBphrzzyJpYQs9axGfiND8Tu\nBe89zYcajQKBgQDccQZSIxhhzDgXnipevY0r14bFRvUbtaLqCn3knqfzqdtStr9X\n/+rpLT+vVdlUcjYuYz4jWj1lwJwY8YhA0Fqq4845MUvp1eFMtPRHQjgsiFLYdNDd\nZnNv7e0H1CneclQt6gMSITb3VRRUyW64xR/uHOVN/ckmr35UelhoOhEu9QKBgQCR\nFNyZ2gKwk3beJewz4iSWGOYppVaWNZeDFRAaxWenLZW21UJyONC4QtrO2xpXuKrr\ngX8bCvwviR0XzwpPvPqaD8mtXIkL2c+OOVrYK08IXNjwm7KLsVc2qFUL+89jRPLs\nIVBPMptFpYXWrpu04qlilNcMH0nFrddQqH5385CzCQKBgQD5LelQOIOKy+ejyykt\n/CRoP8I9rToRI3TG7/lrBiMnofab06m69NbX3KkR89eXg8sICSY+4O5gTvcghG4D\nXBAMr261yQrRumvwWCxv7nty8px+D7CIyVbF6hR2CAlE3nPF0u7rRBjPI9+l7i/1\nUyMtgMmcd4mjPWws8Amjk2LZ6w==\n-----END PRIVATE KEY-----\n';
    
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);       
    const [tab, setTab] = useState("a");
    const [DataForm, setDataForm] = useState({})
    const [pancingan, setPancingan] = useState();
    const [certificate, setCertificate] = useState(
        [
            {
                nomorid:null,
                id:1,
                title:"",
                issuingauthority:"",
                dateofissue:"",
                dateofexpiry:""
            }
        ]
    );
    const handleDataForm = (item) => {
        setDataForm(item)
    }
    const [informasi, setInformasi] = useState([{
        nomorid:null,
        id:1,
        date:"",
        surveyingauthority:"",
        place:"",   
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
    const handleViavalen = (item) => {
        props.history.push('/helpkapal')
    }  
    const handleKembali = (item) => {
        props.history.push('/helpkapal')
    } 
    const handleCertificate = (item) => {
        setCertificate(item)
        console.log("certificate", item)
    }  
    const handleInformasi = (item) => {
        setInformasi(item)
        console.log("informasi", item)
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
    const [jenis, setJenis] = useState(props.location.jenis)
    const handleJenis = (item) => {
        setJenis(item)
    }
    useEffect(() => {
    },[]); 
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
          <IsiUtama kirimJenis={handleJenis} jenis={jenis} nomorid={props.location.nomorid} DataForm={DataForm} kirimDataForm={handleDataForm} defic={defic} kirimDefic={handleDefic} kembali={handleKembali} tab={tab} Viavalen={handleViavalen} kirimDefisiensi={handleDefisiensi} defisiensi={defisiensi} kirimInformasi={handleInformasi} informasi={informasi}s certificate={certificate} kirimCertificate={handleCertificate} juhuu={handleSebelumnya} jehee={handleSelanjutnya} calleback={fungsipancing} />
      </div>
      </CCardBody>
    </CCard>
    </>
  )
}

export default FormA
