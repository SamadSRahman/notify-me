import { useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import {
  segStyleAtom,
  segmentsAtom,
  selectedSegmentsAtom,
  isAlertVisibleAtom,
} from "../../recoilStore/store";
import { useRecoilState, useSetRecoilState } from "recoil";
import useFetch from "../../hooks/useFetch";
import CircularProgress from "@mui/material/CircularProgress";

export default function SegmentSelector() {
  let segs = [];
  const [segments, setSegments] = useRecoilState(segmentsAtom);
  const [selectedSegments, setSelectedSegments] =
    useRecoilState(selectedSegmentsAtom);
  const [segStyle, setSegStyle] = useRecoilState(segStyleAtom);
  const  setIsAlertVisible = useSetRecoilState(isAlertVisibleAtom);

  const handleSelect = (event, newValue) => {
    //Automcomplete function to display selected segments as tags
    setSelectedSegments(newValue);
    setSegStyle({});
    setIsAlertVisible;
  };
  const useDataFetcher = (initialState, url, options) => {
    const fetch = useFetch();
    const fetchData = async () => {
      const result = await (await fetch(url, options)).json();
      let dataFromApi = result.segments;
      segs = dataFromApi.map((ele) => ele.name);
      setSegments(segs);
    };
    return  fetchData;
  };
  const getSegment = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  const  fetchSegments = useDataFetcher(
    [], 
    "/api/getSegment",
    getSegment
  );
  useEffect(() => {
    if (segments.length === 0) fetchSegments();
  }, []);

  return (
    <div className="productSelectorContainer">
      <Autocomplete
        id="auto"
        onChange={handleSelect}
        options={segments}
        getOptionLabel={(option) => option}
        multiple
        value={selectedSegments}
        style={{ width: "90%", marginTop: "-20px", outline: "none" }}
        renderInput={(params) => (
          <>
            <label className="toTag">To*</label>
            <TextField
              {...params}
              value={""}
              size="small"
              id="segmentsField"
              variant="filled"
              style={segStyle}
              placeholder={selectedSegments.length > 0 ? "" : "Select Segments"}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {segments.length === 0 ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          </>
        )}
      />
    </div>
  );
}
