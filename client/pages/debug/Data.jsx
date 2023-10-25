import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { useNavigate } from "raviger";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import LandingPage from "../LandingPage";
import { useRecoilState } from "recoil";
import { segmentsAtom, serverKeyAtom } from "../../recoilStore/store";
import CircularProgress from '@mui/material/CircularProgress';

let segs = [];
const useDataFetcher = (initialState, url, options) => {
  const [data, setData] = useState(initialState);
  const [segments, setSegments] = useRecoilState(segmentsAtom);
  const fetch = useFetch();

  const fetchData = async () => {
    setData("");
    const result = await (await fetch(url, options)).json();
    if ("serverKey" in result) {
      setData(result.serverKey);
    } else {
      setData(result.segments);
      let dataFromApi = result.segments;
      segs = dataFromApi.map((ele) => ele.name);
      setSegments(segs);
    }
  };

  return [data, fetchData, segments];
};

// const GetData = () => {
//   const navigate = useNavigate();
//   const [isLoaderVisible, setIsLoaderVisible] = useState(true)
//   const [serverKey, setServerKey] = useRecoilState(serverKeyAtom);
//   if(serverKey){
//     navigate('/createnotification')
//     return
//   }
  
//   const postOptions = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({ text: "Body of POST request" }),
//   };
//   const getServerKey = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "GET",
//   };
//   const getSegment = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "GET",
//   };

//   const [responseSegment, fetchSegment] = useDataFetcher(
//     "",
//     "/api/getSegment",
//     getSegment
//   );
//   const [responseDataPost, fetchContentPost] = useDataFetcher(
//     "",
//     "api",
//     postOptions
//   );
//   const [responseServerKey, fetchServerKey] = useDataFetcher(
//     "",
//     "/api/getServerKey",
//     getServerKey
//   );

//   useEffect(() => {
//     fetchContentPost();
//     fetchSegment();
//     fetchServerKey();
//   }, []);

//   useEffect(() => {
//     setServerKey(responseServerKey);
//   }, [responseServerKey]);

//   useEffect(() => {
//    setTimeout(()=>{
//     setIsLoaderVisible(false)
//    },2500)
//     // if (serverKey) 
//     //navigate("/createnotification");
//   }, [serverKey]);
const GetData = () => {
  const [serverKey,setServerKey] = useState("")
  const navigate = useNavigate();
  const postOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ text: "Body of POST request" }),
  };
  const getServerKey = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  const getSegment = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  };

  const [responseSegment, fetchSegment] = useDataFetcher(
    "",
    "/api/getSegment",
    getSegment
  );
  const [responseDataPost, fetchContentPost] = useDataFetcher(
    "",
    "api",
    postOptions
  );
  const [responseServerKey, fetchServerKey] = useDataFetcher(
    "",
    "/api/getServerKey",
    getServerKey
  );
  useEffect(() => {
    fetchContentPost();
    fetchSegment();
    fetchServerKey();
  }, []);
  useEffect(()=>{
setServerKey(responseServerKey)
  },[responseServerKey])
  useEffect(()=>{
if(serverKey.length===152)
navigate("/createnotification")
  },[])
  return (
    <>
      <Page>
    {/* {isLoaderVisible ?<CircularProgress color="inherit"/>:<LandingPage />} */}
    <LandingPage/>
      </Page>
    </>
  );
};

// const DataCard = ({ method, url, data }) => (
//   <>
//     <Layout.Section>
//       <LegacyCard sectioned>
//         <p>
//           {method} <code>{url}</code>: {data}
//         </p>
//       </LegacyCard>
//     </Layout.Section>
//   </>
// );

export default GetData;
