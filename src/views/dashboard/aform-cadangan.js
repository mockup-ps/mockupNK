import React, { lazy, useEffect, useState, useRef } from 'react'
import Select from 'react-select';
import uuid from 'react-uuid'
import { GoogleSpreadsheet } from "google-spreadsheet";
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

const Simpan = (props) => {
  if(props.disabled == false){
    return <CButton onClick={()=>props.kirimSimbol("tidak")} color="primary">Update</CButton>
  } else {
    return <CButton onClick={()=>props.kirimSimbol("ya")} color="primary">Simpan</CButton>
  }
}

const Aform = (props) => {
  const SPREADSHEET_ID = '1Fh2giaKIDx1bsk31cLqGMuwtsyymAUsHCJywXuPSLJE';
  const SHEET_ID = '22166995';
  const CLIENT_EMAIL = 'mockup-helpdesk-kapal@helpdesk-kapal.iam.gserviceaccount.com';
  const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDaW5+lRch6l7kS\naeH8i+jCgkL8wl3evi8aJycZareM3Lc4Kt6bjl1SNsvR6hWGnzIfwkioK6v6vPs+\nOycRUy6fKdCy/G3Yby5sPG7gLAVRrIS1WxqM79sbWZhwbyNFfRCTJOYhXwVXDGkH\nrttd/hDYQW1iXlEdrfBdrfllXgdYWNF9nTR/Ll4ePDuc9+YS0OQyYaAWwoc3ah6U\nCbSopHszL+w5EH/DK9hlu9IjPxREi8k9MntmXGu4HJPYrdnBhZTwJWZ/qIMvWBcc\nAFrNEHNyzps0KPSau3vMJN0PQ0idEmMVk5spGJJbIUBmdsKsnf4z/ZONOyvSNjMD\nhnIUYzYBAgMBAAECggEAI7J65PAFmFUZgnMg6MKOqM3W2a+E3RdGaAYilDsoCrVC\nlsIbZl7dzsT6iTS1lC6OaTa/3g5VrUYb5M6S0nhA1PBnF/vAkXOLqVIv5iIMNI/5\nmhRswMGtlkkNbMQehguuHAAaRzZbjyGOQh1J65HPeysnEL/OjwWSmB4K+ZFnrf95\nwanpNFROc2DMWVRiKJghyO2tb4zSolGO919z/VPIa+IguRG57utEVX6SY+XqGuHY\nDZo48h14qhsQaq74QsCUXO24diCXIRZq3uJMVS6ShW4aXfhoxqTSiC9bpVYOHH7F\nfgYNFex3SzrAMPEnyVuyqUBfhe+ZpG6vtxxsd6o64QKBgQD6V/GR+75iyyKWT/AE\nOQeLA/2gNzHuQlShKLfciCLTDHTUkSORLyeh0ILv4bs5i/2/x/vgiozPHoPR1joB\n3+zQrskJjrwcfMX7xytxdEVSMFvrHRNGjWX7ZsPuLCDkPphuwFMq7c3CfWxiqmLx\nSzdhdZDoUh3JJYv6u6PUjjDGRQKBgQDfSqqQD8Enoa52wJzA/z7NVA90NSWYjDuL\n1DRHW9EWHovEkmkDZffOYxItp3CADFQMPieulkUCEFsxyqaeitdwEJE7KJ56DzHQ\np8+4qdH4fxNzioWU17m7iI2ecYyvhr2THQQmu/7xhBphrzzyJpYQs9axGfiND8Tu\nBe89zYcajQKBgQDccQZSIxhhzDgXnipevY0r14bFRvUbtaLqCn3knqfzqdtStr9X\n/+rpLT+vVdlUcjYuYz4jWj1lwJwY8YhA0Fqq4845MUvp1eFMtPRHQjgsiFLYdNDd\nZnNv7e0H1CneclQt6gMSITb3VRRUyW64xR/uHOVN/ckmr35UelhoOhEu9QKBgQCR\nFNyZ2gKwk3beJewz4iSWGOYppVaWNZeDFRAaxWenLZW21UJyONC4QtrO2xpXuKrr\ngX8bCvwviR0XzwpPvPqaD8mtXIkL2c+OOVrYK08IXNjwm7KLsVc2qFUL+89jRPLs\nIVBPMptFpYXWrpu04qlilNcMH0nFrddQqH5385CzCQKBgQD5LelQOIOKy+ejyykt\n/CRoP8I9rToRI3TG7/lrBiMnofab06m69NbX3KkR89eXg8sICSY+4O5gTvcghG4D\nXBAMr261yQrRumvwWCxv7nty8px+D7CIyVbF6hR2CAlE3nPF0u7rRBjPI9+l7i/1\nUyMtgMmcd4mjPWws8Amjk2LZ6w==\n-----END PRIVATE KEY-----\n';
  
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);  
  const noaju = uuid()
    const [datapengajuan, setDatapengajuan] = useState({
        nomorid:noaju,
        otoritas:"",
        namakapal:"",
        tipekapal:"",
        callsign:"",
        mmsi:"",
        imo:"",
        GT:"",
        DW:"",
        tglkeel:"",
        tglinspeksi:"",
        tempatinspeksi:"",
        classification:"",
        daterelease:"",
        imocompany:"",
        particulars:"",
        master:"",
        defic: false,
        detain: false,
        support: false,
        issuingoffice:"",
        telephone:"",
        telefax:"",
        psoc:""
    })
    const [shipInformation, setShipinformation] = useState(
        [
            {
                nomorid:null,
                no:null,
                date:"",
                surveyingauthority:"",
                place:""
            }
        ]
    )    
    const [check, setCheck] = useState(
      {
        defic:false,
        detain:false,
        support:false,
      }
    )
    const [databingung, setDataBingung] = useState({})
    const handleReactselect = (item, items) => {
        setDatapengajuan(prevState => {
          return {...prevState, [items]: item.value}})
        setDataBingung(prevState => {
          return {...prevState, [items]:item}
        })
    }  
    const handleChange = (e) => {
      var value = e.target.value
      var name = e.target.name
      setDatapengajuan(prevState => {
        return {...prevState, [name]: value}
      })
    }
    const handleCheck = (e) => {
      var nama = e.target.name
      var value = datapengajuan.[nama]
      setDatapengajuan(prevState => {
        return {...prevState, [nama]:!value}
      })
    }
    const [disabled, setDisabled] = useState(true)
    const [noajus,setNoaju] = useState(noaju)
    const [form, setForm] = useState([{
        id:1,
        title:"",
        issuingauthority:"",
        dateofissue:"",
        dateofexpiry:""
    }]);
    const [form1, setForm1] = useState([{
        id:1,
        date:"",
        surveyingauthority:"",
        place:""
    }]);    
    const [hitung, setHitung] = useState(0)
    const [classes, setClass] = useState([
      {
        "value" : "LR",
        "label" : "LR"
      }
    ])
    const handleSimbol = (item) => {
      if(item=="ya") {
        setDisabled(false)
        kirimDataPengajuan()
      }
    }
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
    const handleTambahcertificate = async () => {
        var arraynih = form
        var jos = {
          nomorid:noajus,
          id: null,
          title:"",
          issuingauthority:"",
          dateofissue:"",
          dateofexpiry:""
        }
        jos.id = parseInt(arraynih[arraynih.length - 1].id) + 1 
        arraynih.push(jos)
        setForm(arraynih)
        setHitung(hitung+1)
        props.calleback(hitung)
        console.log(form)
    }
    const handleSelanjutnya = () => {
        setHitung(hitung+1)
        props.jehee(hitung)
        localStorage.setItem("jenis", "lama")

        localStorage.setItem("nomorid", datapengajuan.nomorid)
    }   
    const handleChangeArray = (ini, id) => {
      var name = ini.target.name
      var value = ini.target.value
      var arraycertificate = [...form]
      arraycertificate[id-1].[name] = value
      arraycertificate[id-1].nomorid = noajus
      setForm(arraycertificate)
    } 
    const handleChangeArray2 = (ini, id) => {
      var name = ini.target.name
      var value = ini.target.value
      var arrayinformasi = form1
      arrayinformasi[id-1].[name] = value
      arrayinformasi[id-1].nomorid = noajus
      props.kirimInformasi(arrayinformasi)
    }  
    const [databingungi, setDataBingungi] = useState([{
      id:1,
      title:{},
      date:"",
      surveyingauthority:"",
      place:""
    }])    
    const handleSelectArray = (ini, id, name) => {
      var value = ini.value
      var arraycertificate = form
      arraycertificate[id-1].[name] = value
      arraycertificate[id-1].nomorid = noajus
      setForm(arraycertificate)
      arraycertificate[id-1].[name] = ini
      setDataBingungi(arraycertificate)  
      console.log(databingungi)  
    }   
    const handleTambahInformasi = () => {
        var arraynih = form1
        var jos = {
          nomorid:noajus,
          id:null,
          date:"",
          surveyingauthority:"",
          place:""
        }
        jos.id = arraynih[arraynih.length - 1].id + 1
        arraynih.push(jos)
        setForm1(arraynih)
        setHitung(hitung+1)
        props.calleback(hitung)
        props.kirimInformasi(form1)
    }    
    const handleKurangCertificate = () => {
        var arraynih = [...form]
        if(arraynih.length > 1) {
            arraynih.pop()
            setForm(arraynih)
            setHitung(hitung+1)
            props.calleback(hitung)
        } else {
            alert('Tidak Bisa Menghapus Row Terakhir')
        }
    }
    const handleKurangInformasi = () => {
        var arraynih = form1
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
    var jos = []
    const kirimDataPengajuan = async () => {
      try{
        jos.push(datapengajuan)
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsById[SHEET_ID];
        const sheet1 = doc.sheetsById['1573011625']
        const sheet2 = doc.sheetsById['693245347']
        const result = await sheet.addRows(jos); 
        const result1 = await sheet1.addRows(form)
        const result2 = await sheet2.addRows(form1)
      } catch (e) {
        console.error(e)
      }
    }
    const fetchditi = async () => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();
        const sheet = doc.sheetsById[SHEET_ID];
        const log = await sheet.getRows();
        var noid = localStorage.getItem("nomorid")  
        const hayoo = log.filter((item) => {
          return item.nomorid == noid
        })
        const idotoritas = negara.findIndex(k => k.value == hayoo[hayoo.length -1].otoritas )
        const idtipekapal = tipekapal.findIndex(k=> k.value == hayoo[hayoo.length -1].tipekapal )
        const idclasses = classes.findIndex(k=> k.value == hayoo[hayoo.length -1].classification )
        setDataBingung({otoritas: negara[idotoritas], tipekapal:tipekapal[idtipekapal], classification:classes[idclasses]})
        return hayoo[hayoo.length-1]    
      } catch (e){
        console.error(e)
      }
    }
    const fetchditi2 = async () => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        // loads document properties and worksheets
        await doc.loadInfo();
        const sheet = doc.sheetsById['1573011625'];
        const log = await sheet.getRows();
        var noid = localStorage.getItem("nomorid")  
        const hayoo = log.filter((item) => {
          return item.nomorid == noid
        })
        console.log("")
        var haha = []
        var i
        for (i=0;i<hayoo.length;i++){
          const idtitlesertif = titlesertif.findIndex(k => k.value == hayoo[i].title)
          var jinx = 
          {
            id:hayoo[i].id,

            title:hayoo[i].title,
            issuingauthority:hayoo[i].issuingauthority,
            dateofissue:hayoo[i].dateofissue,
            dateofexpiry:hayoo[i].dateofexpiry
          }
          haha.push(jinx)
        }
        return haha    
      } catch (e){
        console.error(e)
      }
    }      
    useEffect(() => {
        // setForm(props.certificate)
        // setForm1(props.informasi)
        var jenis = localStorage.getItem("jenis")
        if(jenis == "lama" ){
          fetchditi().then(setDatapengajuan)
          fetchditi2().then(setForm)
          setDisabled(false)
        }
      },[]);
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
                    <Select value={databingung.otoritas} onChange={(item) => handleReactselect(item, "otoritas")} options={negara} />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="namakapal">Nama Kapal</CLabel>
                    <CInput value={datapengajuan.namakapal} onChange={handleChange} name="namakapal" type="text" placeholder="Masukkan Nama Kapal"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="namakapal">Tipe Kapal</CLabel>
                    <Select value={databingung.tipekapal} onChange={(item) => handleReactselect(item, "tipekapal")} options={tipekapal} />
                  </CFormGroup>
                </CCol>                                
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="callsign"><i>Call Sign</i></CLabel>
                    <CInput value={datapengajuan.callsign} onChange={handleChange} name="callsign" type="text" placeholder="Masukkan Call Sign"></CInput>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="mmsinumber">Nomor MMSI</CLabel>
                    <CInput value={datapengajuan.mmsi} onChange={handleChange} name="mmsi" type="text" placeholder="Masukkan Nomor MMSI"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="imonumber">Nomor IMO</CLabel>
                    <CInput value={datapengajuan.imo} onChange={handleChange} name="imo" type="text" placeholder="Masukkan Nomor IMO"></CInput>
                  </CFormGroup>
                </CCol>                                
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="gt"><i>Gross Tonnage</i></CLabel>
                    <CInput value={datapengajuan.GT} onChange={handleChange} name="GT" type="text" placeholder="Masukkan Gross Tonnage"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="dw"><i>Dead Weight</i></CLabel>
                    <CInput value={datapengajuan.DW} onChange={handleChange} name="DW" type="text" placeholder="Masukkan Dead Weight"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="dw">Tanggal <i>Keel Laid</i></CLabel>
                    <CInput value={datapengajuan.tglkeel} onChange={handleChange} name="tglkeel" type="date" ></CInput>
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
                    <CInput value={datapengajuan.tglinspeksi} onChange={handleChange} name="tglinspeksi" type="date"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tempatinspeksi"><i>Tempat Inspeksi</i></CLabel>
                    <CInput value={datapengajuan.tempatinspeksi} onChange={handleChange} name="tempatinspeksi" type="text" placeholder="Masukkan Tempat Inspeksi"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>
              <CRow className="pr-4">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Classification Society</i></CLabel>
                    <Select value={databingung.classification} onChange={(item) => handleReactselect(item, "classification")} options={classes} />
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tempatinspeksi"><i>Date of Release from Detention</i></CLabel>
                    <CInput value={datapengajuan.daterelease} onChange={handleChange} name="daterelease" type="date"></CInput>
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
                    <CInput value={datapengajuan.imocompany} onChange={handleChange} name="imocompany" type="text" placeholder="Masukkan IMO Company Number"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tempatinspeksi"><i>Particulars of Company</i></CLabel>
                    <CInput value={datapengajuan.particulars} onChange={handleChange} name="particulars" type="text" placeholder="Masukkan Particulars of Company"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow>
              <CRow className="pr-3">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Name of Master</i></CLabel>
                    <CInput value={datapengajuan.master} onChange={handleChange} name="master" type="text" placeholder="Masukkan Name of Master"></CInput>
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
              <CRow className="mantib">
                <CCol className="mantib" xs="12">
                    <CDataTable
                    fields={fieldshipcertificate}
                    items={form}
                    addTableClasses="joss"
                    scopedSlots = {{
                        'title':
                          (item)=>{
                            var id = item.id
                            var jas = databingungi[0]
                            return (
                            <td>
                                <Select className="jonnn" value={jas.title} onChange={(item) => handleSelectArray(item, id, "title" )} options={titlesertif} />
                            </td>
                            )
                          },
                          'no':
                          (item)=>{
                            return(
                              <td>
                                {item.id}
                              </td>
                            )
                          },                         
                          'issuingauthority':
                          (item)=>{
                            var id = item.id
                            console.log("ntap", id-1)
                            return (
                            <td>
                                <CInput value={form[id-1].issuingauthority} onChange={(ini) => handleChangeArray(ini, id)} name="issuingauthority" ></CInput>
                            </td>
                            )
                          },
                          'dateofissue':
                          (item)=>{
                            var id = item.id
                            return (
                              <td>
                              <CInput value={form[id-1].dateofissue} onChange={(ini) => handleChangeArray(ini, id)} name="dateofissue" type="date" ></CInput>
                              </td>
                            )
                          },   
                          'dateofexpiry':
                          (item)=>{
                            var id = item.id
                            return (
                            <td>
                                <CInput value={form[id-1].dateofexpiry} onChange={(ini) => handleChangeArray(ini, id)} name="dateofexpiry" type="date" ></CInput>
                            </td>                              
                            )
                          },   
                          'action':
                          (item)=>(
                            <td>
                                    <CButton size="sm" onClick={handleTambahcertificate} color="success">+</CButton>{' '}
                                    <CButton size="sm" onClick={handleKurangCertificate} color="danger">-</CButton>                             
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
                          (item)=>{
                            var id = item.id
                            return (
                            <td>
                                <CInput onChange={(ini) => handleChangeArray2(ini, id)} name="date" type="date"></CInput>
                            </td>
                            )
                          },
                          'no':
                          (item)=>(
                            <td>
                                {item.id}
                            </td>
                          ),                          
                          'surveyingauthority':
                          (item)=>{
                            var id = item.id
                            return (
                            <td>
                                <CInput onChange={(ini) => handleChangeArray2(ini, id)} name="surveyingauthority" type="text"></CInput>
                            </td>
                            )                            
                          }, 
                          'place':
                          (item)=>{
                            var id = item.id
                            return (
                            <td>
                                <CInput onChange={(ini) => handleChangeArray2(ini, id)} name="place" type="text"></CInput>
                            </td>
                            )                             
                          },     
                          'action':
                          (item)=>(
                            <td>
                                    <CButton size="sm" onClick={handleTambahInformasi} color="success">+</CButton>{' '}
                                    <CButton size="sm" onClick={handleKurangInformasi} color="danger">-</CButton>                            
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
                      <CInputCheckbox onChange={handleCheck} custom id="inline-checkbox" name="defic"/>
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox">Yes</CLabel>
                    </CFormGroup>
                    </CCol>                    
            </CRow> 
            <CRow>
                  <CCol md="3"><CLabel>Ship Detained</CLabel></CCol>
                  <CCol md="3">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox onChange={handleCheck} custom id="inline-checkbox2" name="detain" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Yes</CLabel>
                    </CFormGroup>
                    </CCol>                    
            </CRow>
            <CRow>
                  <CCol md="3"><CLabel>Supporting Documentation</CLabel></CCol>
                  <CCol md="3">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox onChange={handleCheck} custom id="inline-checkboxx" name="support" />
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
                    <CInput value={datapengajuan.issuingoffice} onChange={handleChange} name="issuingoffice" type="text" placeholder="Masukkan Issuing Office"></CInput>
                  </CFormGroup>
                </CCol>                                                 
              </CRow> 
              <CRow>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Telephone</i></CLabel>
                    <CInput value={datapengajuan.telephone} onChange={handleChange} name="telephone" type="text" placeholder="Masukkan Telephone"></CInput>
                  </CFormGroup>
                </CCol> 
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi"><i>Telefax</i></CLabel>
                    <CInput value={datapengajuan.telefax} onChange={handleChange} name="telefax" type="text" placeholder="Masukkan Telefax"></CInput>
                  </CFormGroup>
                </CCol>                                                                 
              </CRow> 
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="tglinspeksi">Nama PSOC</CLabel>
                    <CInput value={datapengajuan.psoc} onChange={handleChange} name="psoc" type="text" placeholder="Masukkan Telephone"></CInput>
                  </CFormGroup>
                </CCol>                                                                 
              </CRow>
              <hr/>
              <div className="d-flex justify-content-between">
                  <CButton onClick={handleKembali} color="danger">Kembali</CButton>
                  <div>
                  <Simpan kirimSimbol={handleSimbol} disabled={disabled} />{' '}
                  <CButton disabled={disabled} onClick={handleSelanjutnya} color="info">Selanjutnya</CButton>
                  </div>
              </div>                                                                                                                                                                    
    </>
  )
}
export default Aform

