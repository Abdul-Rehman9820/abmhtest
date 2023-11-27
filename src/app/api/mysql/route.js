import { createMySQLConnection } from '@/util/mysqlConnection';
import { NextResponse } from 'next/server';


// post api for single user 

export async function POST(req, content) {
  
  try {

    const connection = await createMySQLConnection();

     const body = await req.json(); // Get the search value from the URL

     const usersearch = body.usersearch;

     const stype = body.stype;

    async function executefetchQuery(connection, usersearch, stype) {


      if(stype == "search"){


        return new Promise((resolve, reject) => {


          // for filter serch 
          const colorsArray = usersearch.split(',');
          const formattedColors = colorsArray.map(color => `'${color}'`).join(",");
          // for filter serch 
  
          const query = 'SELECT abmh_doctors.*, abmh_specialty.specialty_slug,abmh_specialty.specialty_name FROM abmh_doctors LEFT JOIN abmh_specialty ON abmh_doctors.SpecialtyID = abmh_specialty.id WHERE ( abmh_doctors.isactive = 1 AND (abmh_doctors.DrFullName LIKE ? OR abmh_specialty.specialty_name LIKE ? OR abmh_specialty.specialty_slug IN (' + formattedColors + ')) ) ORDER BY abmh_doctors.DoctorFName ASC';
  
          const wildcardedusersearch = `%${usersearch}%`; 
  
          
      
          connection.query(query, [wildcardedusersearch,wildcardedusersearch], (err, result) => {
            if (err) {
              console.error('Error executing query:', err);
              reject(err);
              return;
            }
            resolve(result);
          });
        });
  


      }else{



        return new Promise((resolve, reject) => {


          // for filter serch 
          const colorsArray = usersearch.split(',');
          const formattedColors = colorsArray.map(color => `'${color}'`).join(",");
          // for filter serch 
  
          const query = 'SELECT DISTINCT abmh_doctors.* FROM abmh_doctors LEFT JOIN doctorfilterspeciality ON abmh_doctors.id = doctorfilterspeciality.DoctorTableID WHERE abmh_doctors.isactive = 1 AND doctorfilterspeciality.DoctorSpeciaTableID IN (' + formattedColors + ') ORDER BY abmh_doctors.DoctorFName ASC';
        
      
          connection.query(query, [], (err, result) => {
            if (err) {
              console.error('Error executing query:', err);
              reject(err);
              return;
            }
            resolve(result);
          });
        });



      }




    }

    const results = await executefetchQuery(connection, usersearch,stype);

    connection.end();



    // return NextResponse.json({ status:200,messgeid: id  });
    return NextResponse.json({  messege:"data fetc suc" ,status:200, data: results });


  } catch (e) {

    return NextResponse.json({ status:500,messgeid: "not working api"  });
  }

}

