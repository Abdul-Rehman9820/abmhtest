import { createMySQLConnection } from '@/util/mysqlConnection';
import { NextResponse } from 'next/server';


export async function GET(req, res) {
  try {
    const connection = await createMySQLConnection();

    const query = 'SELECT * FROM ABMH_Doctors';

    // Wrap the query logic in a Promise
    const executeQuery = () => {
      return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
          if (err) {
            console.error('Error executing SELECT query:', err);
            connection.end();
            reject(err);
            return;
          }
          console.log('Query results100:', results);
          resolve(results);
        });
      });
    };

    // Await the query execution
    const results = await executeQuery();

    // Close the connection after the query is done
    connection.end();

    return NextResponse.json({ status: 200, data: results });



  } catch (e) {
    console.error('Error:', e);
    return NextResponse.json(
      { message: 'Server error, please try again!' ,
      status: 500 }
    );
  }
}



// post api for single user 

export async function POST(req, content) {
  
  try {

    const connection = await createMySQLConnection();

     const body = await req.json(); // Get the search value from the URL

     const usersearch = body.usersearch;

    async function executefetchQuery(connection, usersearch) {


      return new Promise((resolve, reject) => {

        const query = 'SELECT * FROM ABMH_Doctors WHERE DoctorName LIKE ?';

        const wildcardedusersearch = `%${usersearch}%`; 

    
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



    // return NextResponse.json({ status:200,messgeid: id  });
    return NextResponse.json({  messege:"data fetc suc" ,status:200, data: results });


  } catch (e) {

    return NextResponse.json({ status:500,messgeid: "not working api"  });
  }

}

