import { createMySQLConnection } from '@/util/mysqlConnection';
import { NextResponse } from 'next/server';


// single profile api  start

export async function GET(req, content) {
  
  try {

    const connection = await createMySQLConnection();

    const  id  = content.params.id;

    async function executeDeleteQuery(connection, id) {
      return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM ABMH_Doctors WHERE id = ?';
    
        connection.query(query, [id], (err, result) => {
          if (err) {
            console.error('Error executing DELETE query:', err);
            reject(err);
            return;
          }
          resolve(result);
        });
      });
    }

    const results = await executeDeleteQuery(connection, id);

    connection.end();


    console.log(id);

    // return NextResponse.json({ status:200,messgeid: id  });
    return NextResponse.json({ idwas: id, messege:"data fetc suc" ,status:200, data: results });


  } catch (e) {

    return NextResponse.json({ status:500,messgeid: "not working api"  });
  }

}

// single profile api  end



// delete api  start

export async function DELETE(req, content) {
  
    try {
  
      const connection = await createMySQLConnection();
  
      const  id  = content.params.id;
  
      async function executeDeleteQuery(connection, id) {
        return new Promise((resolve, reject) => {
          const query = 'DELETE FROM mfiusers WHERE id = ?';
      
          connection.query(query, [id], (err, result) => {
            if (err) {
              console.error('Error executing DELETE query:', err);
              reject(err);
              return;
            }
            resolve(result);
          });
        });
      }

      const results = await executeDeleteQuery(connection, id);

      connection.end();

  
      console.log(id);
  
      // return NextResponse.json({ status:200,messgeid: id  });
      return NextResponse.json({ idwas: id, messege:"deleted suc" ,status:200 });
  
  
    } catch (e) {
  
      return NextResponse.json({ status:500,messgeid: "not working api"  });
    }
  
  }

  // delete api  end
