import React, { lazy, useEffect, useState } from 'react'
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

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = (props) => {
  const SPREADSHEET_ID = '1Fh2giaKIDx1bsk31cLqGMuwtsyymAUsHCJywXuPSLJE';
  const SHEET_ID = '22166995';
  const CLIENT_EMAIL = 'mockup-helpdesk-kapal@helpdesk-kapal.iam.gserviceaccount.com';
  const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDaW5+lRch6l7kS\naeH8i+jCgkL8wl3evi8aJycZareM3Lc4Kt6bjl1SNsvR6hWGnzIfwkioK6v6vPs+\nOycRUy6fKdCy/G3Yby5sPG7gLAVRrIS1WxqM79sbWZhwbyNFfRCTJOYhXwVXDGkH\nrttd/hDYQW1iXlEdrfBdrfllXgdYWNF9nTR/Ll4ePDuc9+YS0OQyYaAWwoc3ah6U\nCbSopHszL+w5EH/DK9hlu9IjPxREi8k9MntmXGu4HJPYrdnBhZTwJWZ/qIMvWBcc\nAFrNEHNyzps0KPSau3vMJN0PQ0idEmMVk5spGJJbIUBmdsKsnf4z/ZONOyvSNjMD\nhnIUYzYBAgMBAAECggEAI7J65PAFmFUZgnMg6MKOqM3W2a+E3RdGaAYilDsoCrVC\nlsIbZl7dzsT6iTS1lC6OaTa/3g5VrUYb5M6S0nhA1PBnF/vAkXOLqVIv5iIMNI/5\nmhRswMGtlkkNbMQehguuHAAaRzZbjyGOQh1J65HPeysnEL/OjwWSmB4K+ZFnrf95\nwanpNFROc2DMWVRiKJghyO2tb4zSolGO919z/VPIa+IguRG57utEVX6SY+XqGuHY\nDZo48h14qhsQaq74QsCUXO24diCXIRZq3uJMVS6ShW4aXfhoxqTSiC9bpVYOHH7F\nfgYNFex3SzrAMPEnyVuyqUBfhe+ZpG6vtxxsd6o64QKBgQD6V/GR+75iyyKWT/AE\nOQeLA/2gNzHuQlShKLfciCLTDHTUkSORLyeh0ILv4bs5i/2/x/vgiozPHoPR1joB\n3+zQrskJjrwcfMX7xytxdEVSMFvrHRNGjWX7ZsPuLCDkPphuwFMq7c3CfWxiqmLx\nSzdhdZDoUh3JJYv6u6PUjjDGRQKBgQDfSqqQD8Enoa52wJzA/z7NVA90NSWYjDuL\n1DRHW9EWHovEkmkDZffOYxItp3CADFQMPieulkUCEFsxyqaeitdwEJE7KJ56DzHQ\np8+4qdH4fxNzioWU17m7iI2ecYyvhr2THQQmu/7xhBphrzzyJpYQs9axGfiND8Tu\nBe89zYcajQKBgQDccQZSIxhhzDgXnipevY0r14bFRvUbtaLqCn3knqfzqdtStr9X\n/+rpLT+vVdlUcjYuYz4jWj1lwJwY8YhA0Fqq4845MUvp1eFMtPRHQjgsiFLYdNDd\nZnNv7e0H1CneclQt6gMSITb3VRRUyW64xR/uHOVN/ckmr35UelhoOhEu9QKBgQCR\nFNyZ2gKwk3beJewz4iSWGOYppVaWNZeDFRAaxWenLZW21UJyONC4QtrO2xpXuKrr\ngX8bCvwviR0XzwpPvPqaD8mtXIkL2c+OOVrYK08IXNjwm7KLsVc2qFUL+89jRPLs\nIVBPMptFpYXWrpu04qlilNcMH0nFrddQqH5385CzCQKBgQD5LelQOIOKy+ejyykt\n/CRoP8I9rToRI3TG7/lrBiMnofab06m69NbX3KkR89eXg8sICSY+4O5gTvcghG4D\nXBAMr261yQrRumvwWCxv7nty8px+D7CIyVbF6hR2CAlE3nPF0u7rRBjPI9+l7i/1\nUyMtgMmcd4mjPWws8Amjk2LZ6w==\n-----END PRIVATE KEY-----\n';
  
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);  
  const [tambah, setTambah] = useState("")
  const [datatarikan, setDatatarikan] = useState(
    {
      array : []
    }
  )
  const [data, setData] = useState({
    array : [
      {
        id:"..",
        namakapal:"Loading..",
        tempatdetensi:"Loading..",
        tanggalmulai:"Loading..",
        tanggalselesai:"Loading..",
      },    
    ]
  })
  const handleTambah = () => {
      props.history.push({pathname: '/helpkapal/form', jenis:"baru"})
      localStorage.setItem("jenis", "baru")
  }
  const fetchdata =  async () => {
    try{
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[SHEET_ID];
      const log = await sheet.getRows();
      const hayoo = log.filter((item) => {
        return item.duplicate == "1"
      })
      var arrayisi = []
      var i 
      var id = 1
      for (i=0;i<hayoo.length;i++){
        var objectisi = 
        {
          id:hayoo[i].id,
          nomorid:hayoo[i].nomorid,
          namakapal:hayoo[i].namakapal,
          tempatdetensi:hayoo[i].tempatinspeksi,
          tanggalmulai:hayoo[i].tglinspeksi,
          tanggalselesai:hayoo[i].daterelease
        }
        arrayisi.push(objectisi)
      }
      setData({
          array:arrayisi
        })
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    fetchdata()
  },[]); 
  return (
    <>
    <CCard>
      <CCardHeader>
        <h4>Helpdesk Detensi Kapal</h4>
      </CCardHeader>
      <CCardBody>
        <CDataTable
          fields={fieldviavalen}
          items={data.array}
          addTableClasses="josss"
          overTableSlot={<div className="d-flex justify-content-end pb-2"><CButton onClick={handleTambah.bind(this)} color="info"> Tmbah + </CButton></div>}   
          scopedSlots = {{
            'action':
              (item)=>{
                var id = item.nomorid               
                const jaja = () => {
                  props.history.push({pathname: '/helpkapal/form', nomorid: id, jenis:"lama"})
                  localStorage.setItem("jenis", "lama")
                  localStorage.setItem("nomorid", id)
                }
                return (
                <td>
                    <CButton onClick={jaja} size="sm" color="success">→</CButton>
                </td>
                )
              },
              'no':
              (item)=>(
                <td>
                    {item.id}
                </td>
              ),              
          }}
        />    
      </CCardBody>
    </CCard>
    </>
  )
}

export default Dashboard