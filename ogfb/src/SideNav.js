import {useState, useEffect} from 'react'

export default function SideNav () {

  const [myStatus, setStatus] = useState("");

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      return data['activity'];
    }
    
    fetchData()
    .then(randomStatus => setStatus(randomStatus))
    .catch(console.error);
    
  }, [])

  return(
    <div className="sideNav">
        <h5>My Current Status:</h5>
        <p>{myStatus}</p>
    </div>
  );
}