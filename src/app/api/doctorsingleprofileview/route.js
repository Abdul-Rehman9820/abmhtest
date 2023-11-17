import { createMySQLConnection } from '@/util/mysqlConnection';
import { NextResponse } from 'next/server';


// post api for single user 

export async function POST(req, content) {
  
  try {

    const connection = await createMySQLConnection();

     const body = await req.json(); // Get the search value from the URL
    
     const usersearch = body.usersearch;


    async function executefetchQuery(connection, usersearch) {


      return new Promise((resolve, reject) => {


        const query = 'SELECT abmh_doctors.*, abmh_specialty.specialty_slug,abmh_specialty.specialty_name FROM abmh_doctors LEFT JOIN abmh_specialty ON abmh_doctors.SpecialtyID = abmh_specialty.id WHERE ( abmh_doctors.DoctorNameSlug = ? AND abmh_doctors.isactive = 1 ) ';

        const wildcardedusersearch = usersearch; 

        
    
        connection.query(query, [wildcardedusersearch], (err, result) => {
          if (err) {
            console.error('Error executing query:', err);
            reject(err);
            return;
          }
          resolve(result);
        });
      });


    }

    const results = await executefetchQuery(connection, usersearch);

    connection.end();


    return NextResponse.json({  messege:"data fetc suc" ,status:200, data: results });


  } catch (e) {

    return NextResponse.json({ status:500,messgeid: "not working api"  });
  }

}

