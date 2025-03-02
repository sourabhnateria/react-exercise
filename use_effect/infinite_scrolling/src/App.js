import React , {useState , useEffect} from 'react' ;

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]); // State to hold the data
  const [page , setPage] = useState(1); //state to track the current page
  const [loading, setLoading] = useState(false);//state to track loading status


  //function to fetch data 
  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      const newDate =await response.json();
      setData((prevData)=> [...prevData, ...newDate]);
    } catch(error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  //useEffect to fetch data when the page number changes
  useEffect(() =>{
    fetchData(page);
  },[page]);

  //scroll event handler
  const handleScroll = () =>{
    if(
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && <p>Loading more data...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
