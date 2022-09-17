import React, { useState ,useRef } from "react";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import Item from "./Item";



const All = () => {
  const [allData, setData] = useState([]);
    const countrySearchRef = useRef();
    const regionRef = useRef()





  const getData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setData(data);
  };


const regionHandel = (e)=>{
const regionvalue = regionRef.current.value;

if(regionvalue === 'All'){
    getData()
}else if(regionvalue.trim()){
    const fetchRegion = async ()=>{
        const res = await fetch(`https://restcountries.com/v3.1/region/${regionvalue}`);
        const data = await res.json()
        setData(data);

    }
    try {
        fetchRegion()
    } catch (error) {
        console.log(error)
    }
}

}

  const searchCountry =(e)=>{
    const searchValue = e.target.value

    
    if(searchValue){
        const fetchSearch = async()=>{
            const res = await fetch(`https://restcountries.com/v2/name/${searchValue}`)
            const singleData = await res.json()
            console.log(singleData)
            setData(singleData)
        }
        try {
            fetchSearch()
            
        } catch (error) {
            console.log(error)
        }
    }else{
        getData();
    }
    
  }

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);



  return (
    <>
      <div className="main">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 370,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
            ref={countrySearchRef}
            onChange={searchCountry}
          />
        </Paper>
        <div className="selector custom-dropdown big ">
          <select ref={regionRef} onChange={regionHandel} >
            <option>All</option>
            <option>africa</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Americas</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div className="main-content">

      

        {allData.map((e) => {
          return <Item key={e.cca2} name={e.name.common}  flgImage={e.flags.png} capital={e.capital} population={e.population} region={e.region}/>;
        })}
      </div>
      
    </>
  );
};

export default All;
