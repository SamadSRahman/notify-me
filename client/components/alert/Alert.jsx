import React from 'react'
import { Alert, AlertTitle } from '@mui/material'
import { useRecoilState } from 'recoil'
import { isAuthErrorVisibleAtom } from '../../recoilStore/store'

export default function AlertBanner(props) {
    const [isAuthErrorVisible, setIsAuthErrorVisible] = useRecoilState(isAuthErrorVisibleAtom)
  return (
    <Alert severity="error"
    onClose={() => {setIsAuthErrorVisible(false)}}
     style={{ border:'1px solid #D9BABA', marginBottom:'10px'}}
     >
       <AlertTitle>{props.alertTitle}</AlertTitle>
     {props.alertMessage}
     </Alert>

  )
}
