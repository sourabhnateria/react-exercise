import React, {useState, useEffect} from 'react';

function Datafetchingexample (){
  const [data, setdata] = useState (null);
  const [loading, setloading] = useState(true);
  const [error, seterror ]=useState (null);

  useEffect (()=> {
    //function to fetch data
    const fetchdata = async()=>{
      try{
        //set loading to true while data is being fetched
        setloading(true);

        //fetch data from an api (replace url with your api endpoint)
        const response = await 
        fetch ('https://google.com/data');
        const result = await response.json ();

        //update state with fetched data 
        setdata (result);
        seterror (null);
      }catch (error) {
        //handle errors
        seterror('error fetching data :' + error.message);
        setdata(null);
      } finally{
        //set loading to false after data fetch(whether successful or not)
        setloading (false);
      }

    };

    //call the fetch data function 
    fetchdata();
  },[] );//empty dependency array means this effect runs once after the initial render

  //render basesd on data , loading state, and errors
  return(
    <div>
      {loading && <p>loading data .... </p>}
      {error && <p style ={{ color :'red'}}>{error}</p>}
      {data && (
        <div>
          <h1>data fetched successfully</h1>
          {/*render yout data here */}
          <pre>
            {JSON.stringify(data, null)}
          </pre>
        </div>   
      )}
    </div>
  );
  
}

export default Datafetchingexample ;