import React, { lazy, useEffect, useState } from 'react'
import { AnimationWrapper } from 'react-hover-animation'
import {ReactComponent as Empat} from './lima.svg'
import {ReactComponent as Sepuluh} from './sepuluh.svg'
import {ReactComponent as Tujuh} from './tujuh.svg'
import {ReactComponent as Ssmizin} from './ssmizin.svg'
import {ReactComponent as Ssmpabean} from './ssmpabean.svg'
import {ReactComponent as Validasidmd} from './validasidmd.svg'
import {ReactComponent as Kepkuota} from './kepkuota.svg'
import {ReactComponent as Datadmd} from './datadmd.svg'
import {ReactComponent as Lhv} from './lhv.svg'
import {
  CBadge,
  CSelect,
  CFormGroup,
  CLabel,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CWidgetProgressIcon,
  CLink,
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

const Beranda = (props) => {
  const [view, setView] = useState(1);
  const [value, setValue] = useState(0)
  const handleChange = (e) => {
    setView(e.target.value)
  }
  return (
    <>
      <div className="d-flex flex-row-reverse pb-3 pt-1">
        <div>
        <div className="d-flex align-items-center">
          <div className="pr-3">
          <CLabel htmlFor="text-input">Simulated View as : </CLabel>
          </div>
          <div>
          <CSelect onChange={handleChange.bind(this)}>
          <option value="1">Pelaku Usaha</option>
          <option value="2">Kemenko</option>
          <option value="3">K/L</option>
          <option value="4">Surveyor</option>
          <option value="6">Kemenperin</option>           
          <option value="5">Admin Teknis</option>          
          </CSelect>             
          </div>
          </div>         
        </div>
      </div>   
    <CRow>
      {
        view == 1 ?
        <>
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Rencana"
                text="Kebutuhan Impor"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Empat/>
                  <CLink to='/RKI'class="stretched-link"></CLink>
            </CWidgetProgressIcon>
        </AnimationWrapper> 
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Single Submission"
                text="Perizinan"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Ssmizin/>
                  <CLink to=''class="stretched-link"></CLink>
            </CWidgetProgressIcon>
        </AnimationWrapper>   
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Single Submission"
                text="Kepabeanan"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Ssmpabean/>
                  <CLink to=''class="stretched-link"></CLink>
            </CWidgetProgressIcon>
        </AnimationWrapper>               
        </>
        :view == 3 ?
        <>
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Data Demand"
                text="Neraca Komoditi"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Datadmd/>
                  <CLink to='/datademand'class="stretched-link"></CLink>
        </CWidgetProgressIcon>
        </AnimationWrapper>   
        </>                       
        :view == 2 ?
        <> 
    <AnimationWrapper className="col-3"> 
    <CWidgetProgressIcon
            header="Cleansing / Intercept"
            text="Neraca Komoditas Sementara"
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Validasidmd/>
              <CLink to='/monitoring'class="stretched-link"></CLink>              
        </CWidgetProgressIcon>
    </AnimationWrapper>             
    <AnimationWrapper className="col-3"> 
    <CWidgetProgressIcon
            header="Keputusan Rakortas"
            text="Neraca omoditas Terlegitimasi"
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Kepkuota/>
              <CLink to='/kuotaimpor'class="stretched-link"></CLink>              
        </CWidgetProgressIcon>
    </AnimationWrapper>
    <AnimationWrapper className="col-3"> 
    <CWidgetProgressIcon
            header="Dashboard"
            text="Neraca Komoditas"
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Tujuh/>
              <CLink to='/monitoring'class="stretched-link"></CLink>              
        </CWidgetProgressIcon>
    </AnimationWrapper>     
    </>  
    : view == 4 ?
    <>
    <AnimationWrapper className="col-3">
    <CWidgetProgressIcon
            header="Laporan"
            text="Hasil Verifikasi  "
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Lhv/>
              <CLink to='/lhv'class="stretched-link"></CLink>
    </CWidgetProgressIcon>
    </AnimationWrapper>  
    </> 
    : view == 5 ?
    <>
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Rencana"
                text="Kebutuhan Impor"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Empat/>
                  <CLink to='/RKI'class="stretched-link"></CLink>
            </CWidgetProgressIcon>
        </AnimationWrapper> 
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Single Submission"
                text="Perizinan"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Ssmizin/>
                  <CLink to=''class="stretched-link"></CLink>
            </CWidgetProgressIcon>
        </AnimationWrapper>   
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Single Submission"
                text="Kepabeanan"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Ssmpabean/>
                  <CLink to=''class="stretched-link"></CLink>
            </CWidgetProgressIcon>
        </AnimationWrapper>  
        <AnimationWrapper className="col-3">
        <CWidgetProgressIcon
                header="Data Demand"
                text="Neraca Komoditi"
                style={{backgroundColor:'#17335e'}}
                inverse
                value="0"
                >
                  <Datadmd/>
                  <CLink to='/datademand'class="stretched-link"></CLink>
        </CWidgetProgressIcon>
        </AnimationWrapper>   
        <AnimationWrapper className="col-3"> 
    <CWidgetProgressIcon
            header="Validasi"
            text="Data Demand"
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Validasidmd/>
              <CLink to='/monitoring'class="stretched-link"></CLink>              
        </CWidgetProgressIcon>
    </AnimationWrapper>             
    <AnimationWrapper className="col-3"> 
    <CWidgetProgressIcon
            header="Keputusan"
            text="Kuota Impor"
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Kepkuota/>
              <CLink to='/kuotaimpor'class="stretched-link"></CLink>              
        </CWidgetProgressIcon>
    </AnimationWrapper>
    <AnimationWrapper className="col-3"> 
    <CWidgetProgressIcon
            header="Dashboard"
            text="Neraca Komoditi"
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Tujuh/>
              <CLink to='/monitoring'class="stretched-link"></CLink>              
        </CWidgetProgressIcon>
    </AnimationWrapper>                    
    <AnimationWrapper className="col-3">
    <CWidgetProgressIcon
            header="Laporan"
            text="Hasil Verifikasi  "
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Lhv/>
              <CLink to='/lhv'class="stretched-link"></CLink>
    </CWidgetProgressIcon>
    </AnimationWrapper>     
    </> 
    : 
    <AnimationWrapper className="col-3">
    <CWidgetProgressIcon
            header="Daftar Pengajuan"
            text="Rencana Kebutuhan Impor"
            style={{backgroundColor:'#17335e'}}
            inverse
            value="0"
            >
              <Lhv/>
              <CLink to='/kemenperin'class="stretched-link"></CLink>
    </CWidgetProgressIcon>
    </AnimationWrapper>                 
      }    
    </CRow>       
    </>
  )
}

export default Beranda
