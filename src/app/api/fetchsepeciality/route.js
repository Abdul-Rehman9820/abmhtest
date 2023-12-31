import { createMySQLConnection } from '@/util/mysqlConnection';
import { NextResponse } from 'next/server';


// post api for single user 

export async function POST(req, res) {


    try {
      const connection = await createMySQLConnection();
  
      const query = 'SELECT * FROM abmh_specialty WHERE is_specialityactive = 1 ORDER BY specialty_name ASC';
  
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

            // console.log('Query results100:', results);

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