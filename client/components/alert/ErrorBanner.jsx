import React from 'react'
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CloseIcon from "@mui/icons-material/Close";
import { Text } from '@shopify/polaris'
import { isAlertVisibleAtom } from '../../recoilStore/store';
import { useRecoilState } from 'recoil';

export default function ErrorBanner({alertMessage}) {
    const [isErrorVisible, setIsErrorVisible] = useRecoilState(isAlertVisibleAtom)
  return (
    <div className="alert  ">
    <Text id="alertTitle">
      <strong>
        <ReportGmailerrorredIcon fontSize="small" />
        Empty Fields
      </strong>
      <CloseIcon
        onClick={() => setIsErrorVisible(false)}
        style={{ cursor: "pointer" }}
        fontSize="small"
      />
    </Text>
    <Text>{alertMessage} </Text>
  </div>
  )
}
