import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MagneticReconnection = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState([
    [33947.125, 7],
    [33947.25, 6],
    [33947.375, 6],
    [33947.5, 4],
    [33947.625, 3],
    [33947.75, 4],
    [33947.875, 4]
  ]);

  // Function to classify storm and handle audio playback
  const classifyStorm = (hp) => {
    if (hp < 3) {
      return ['Normal', 'No Storm'];
    } else if (hp === 4) {
      return ['G0 Storm', 'Active Storm', ''];
    } else if (hp === 5) {
      return ['G1 Storm', 'Minor Storm', 'Data Impact'];
    } else if (hp === 6) {
      return ['G2 Storm', 'Moderate Storm', ''];
    } else if (hp === 7) {
      // Play audio after a delay of 2 seconds
      setTimeout(() => {
        const audio = new Audio("./audio.mp3");
        audio.play();
      }, 2000);
      
      return ['G3 Storm', 'Strong Storm', 'Loss of Data'];
    } else if (hp === 8) {
      return ['G4 Storm', 'Severe Storm', 'Malfunctioning of Satellite'];
    } else if (hp === 9) {
      return ['G5 Storm', 'Extreme Storm', 'Satellite Lost'];
    } else {
      return 'No Significant Storm';
    }
  };

  // Uncomment and modify as needed for fetching data
  // const location = useLocation();
  // const pathParts = location.pathname.split('/');
  // const currentPage = pathParts[pathParts.length - 1]; // Get the last part of the path

  // Uncomment and modify as needed for fetching data
  // useEffect(() => {
  //   setUrl(currentPage);

  //   fetch('/data.json') // Adjust the filename as necessary
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(jsonData => {
  //       console.log(jsonData); // Log the fetched data for debugging
  //       setData(jsonData[currentPage] || []); // Set data based on current page
  //     })
  //     .catch(error => console.error('Error fetching data:', error));

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`API_URL/${url}`); // Replace with actual API URL
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [currentPage]);

    
            
        <div className="backdrop-blur-lg rounded-lg shadow-md space-y-10 my-10 mx-6 py-10 lg:mx-24">
        <div className="container mx-auto my-10 px-6 lg:px-24 space-y-12">
            {/* Table to display data */}
            <table className="min-w-full border">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Value</th>
                        <th className="py-2 px-4 border-b">Count</th>
                        <th className="py-2 px-4 border-b">Classification</th>  
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="">
                            <td className="py-2 px-4 border-b">{item[0]}</td> 
                            <td className="py-2 px-4 border-b">{item[1]}</td> 
                            <td className="py-2 px-4 border-b">{classifyStorm(item[1])[0]}</td> 
                            <td className="py-2 px-4 border-b">{classifyStorm(item[1])[1]}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Uncomment and modify as needed for other item types */}
            {data.map((item, index) => (
                <div key={index} className="mb-12">
                    {/* Example rendering logic for other item types */}
                    {/* This part can be customized based on your actual data structure */}
                </div>
            ))}
        </div>
    </div>
};

export default MagneticReconnection;
