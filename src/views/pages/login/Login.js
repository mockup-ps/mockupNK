import React, {useState, useEffect}  from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Tujuh} from './tujuh.svg'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CAlert,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Login = (props) => {
  const [value, setValue] = useState({email: '', password: '', submitting: false})

  const handleSubmit = e => {
    e.preventDefault();
    setValue(prevState => ({...prevState, submitting : true }));
    props.onSubmit(value.email, value.password);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValue(prevState => ({...prevState, [name]: value }));
  }; 
  useEffect(() => {
    fetch('https://office.kemenkeu.go.id/api/Task/paging?date=16-11-2020&limit=100&offset=0').then(r => r.text()).then(result => {
      console.log("mantab", result)
    // var obj = JSON.parse(result)
      // var datanya = obj.listData
      // var i 
      // for (i=0;i<datanya.length;i++){
      //   var angka = parseInt(datanya[i].NormaWaktu)
      //   jumlah += angka
      // }
      // document.getElementById('output').innerHTML = jumlah;
    })
  });


  /* setNilai(prevState => ({...prevState, [name] : value, totalkemasan : value })); */
  console.log("username", value.email)
  console.log("password", value.password)
  return (
    <>
    <div className="c-app flex-row align-items-center imagu">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-2">
                <CCardBody className="d-flex align-items-center" >
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Harap Masukkan Username dan Password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={handleChange.bind(this)} name="email" type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput onChange={handleChange.bind(this)} name="password" type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton onClick={handleSubmit.bind(this)} color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-black bg-secondary pt-2 d-md-down-none" style={{ width: '90%', backgroundColor:"#101e36"}} >
                <CCardBody>
                  <div>
                    <div className="pb-3"><Tujuh/></div>
                    <h1><b>Mockup INSW</b></h1>
                    <h3><i>Helpdesk Kapal</i></h3>
                    <div className="pt-2">
                    <p>Konten yang ada di website ini hanya mockup dan bersifat restricted hanya untuk pihak berwenang</p>
                    </div>                   
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </>
  )
}

export default Login
