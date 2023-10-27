	

import {user} from '@/util/db'

import { NextResponse } from 'next/server'



export  function GET(req, res) {
  try {

     const data = user ;

    return NextResponse.json({data} , { status: 200 });


  }catch (e) {
      return NextResponse.json(
          { message: "Server error, please try again!" },
          { status: 500 }
      )
  }
}


// export { getUsersRenamed };


