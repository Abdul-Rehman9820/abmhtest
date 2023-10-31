
'use client'
 
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';


const SearchDATA = () => {


                    const searchParams = useSearchParams()
                
                    const search = searchParams.get('doc') // get from url




                    const [data, setData] = useState([]);

                    useEffect(() => {


                        async function fetchData() {
                            try {
                                const response = await fetch("http://localhost:3000/api/mysql", {
                                    method: "POST",
                                    body: JSON.stringify({
                                        usersearch: search,
                                    }),
                                });

                                if (!response.ok) {
                                    throw new Error("Network response was not ok");
                                }

                                const result = await response.json();

                                setData(result.data);

                                console.log(result.data);

                            } catch (error) {
                                console.error(error);
                            }
                        }


                        fetchData();


                        
                    }, []);

 
    return (

        <>


            <div className="parentdiv">

                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.DoctorProfileImage} alt="Avatar" />
                        <div className="container">
                            <h4><b>{item.DoctorName}</b></h4>
                            <p>{item.DoctorSpeciality}</p>
                        </div>
                    </div>
                ))}

            </div>


        </>
    
    );



};

export default SearchDATA;
