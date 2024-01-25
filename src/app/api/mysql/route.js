import { createMySQLConnection } from '@/util/mysqlConnection';
import { NextResponse } from 'next/server';





// post api for single user 

export async function POST(req, content) {


  const connection = await createMySQLConnection();

  try {


    const body = await req.json(); // Get the search value from the URL

    const usersearch = body.usersearch;

    const stype = body.stype;



    var results = [];

    if (stype == "search") {


      var wildcardedusersearch = `%${usersearch}%`;

      results = await connection.promise().query('SELECT abmh_doctors.*, abmh_specialty.specialty_slug,abmh_specialty.specialty_name FROM abmh_doctors LEFT JOIN abmh_specialty ON abmh_doctors.SpecialtyID = abmh_specialty.id WHERE ( abmh_doctors.isactive = 1 AND (abmh_doctors.DrFullName LIKE ?) ) ORDER BY abmh_doctors.DoctorFName ASC', [wildcardedusersearch]); // Use promise-based query

      if (results[0].length === 0) {

        var forDoctorid = await connection.promise().query('SELECT doctorfilterspeciality.*, abmh_specialty.specialty_name,abmh_specialty.SpecialtyLaymanDisc FROM doctorfilterspeciality LEFT JOIN abmh_specialty ON doctorfilterspeciality.DoctorSpeciaTableID = abmh_specialty.id WHERE ( abmh_specialty.specialty_name LIKE ? OR abmh_specialty.SpecialtyLaymanDisc LIKE ?)', [wildcardedusersearch, wildcardedusersearch]); // Use promise-based query

        console.log(forDoctorid);

        // Extracting DoctorSpeciaTableID from the results of the first query
        const doctorSpeciaTableIDs = forDoctorid[0].map(result => result.DoctorTableID);

        // Now you have an array of DoctorSpeciaTableID values
        console.log(doctorSpeciaTableIDs);

        // Check if there are DoctorSpeciaTableID values
        if (doctorSpeciaTableIDs.length > 0) {
          // Construct the second query using parameterized query
          const secondQuery = 'SELECT DISTINCT abmh_doctors.* FROM abmh_doctors WHERE abmh_doctors.isactive = 1 AND abmh_doctors.id IN (?) ORDER BY abmh_doctors.DoctorFName ASC';

          // Use the extracted DoctorSpeciaTableID values as parameters
          results = await connection.promise().query(secondQuery, [doctorSpeciaTableIDs]);

          console.log(results);
        } else {
          console.log('No DoctorSpeciaTableID values found.');
        }

      }


    } else {

      // for filter serch 
      const colorsArray = usersearch.split(',');
      const formattedColors = colorsArray.map(color => `'${color}'`).join(",");
      // for filter serch 
      results = await connection.promise().query('SELECT DISTINCT abmh_doctors.* FROM abmh_doctors LEFT JOIN doctorfilterspeciality ON abmh_doctors.id = doctorfilterspeciality.DoctorTableID WHERE abmh_doctors.isactive = 1 AND doctorfilterspeciality.DoctorSpeciaTableID IN (' + formattedColors + ') ORDER BY abmh_doctors.DoctorFName ASC', []); // Use promise-based query

      //  console.log(results);

    }


    return NextResponse.json({ messege: "data fetc suc", status: 200, data: results[0] });



  } catch (e) {

    return NextResponse.json({ status: 500, messgeid: "not working api" });

  } finally {

    connection.end();

  }

}

