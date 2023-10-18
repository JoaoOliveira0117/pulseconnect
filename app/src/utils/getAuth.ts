import { NextRequest } from "next/server"
import Cookies from 'js-cookie'

const getAuth = (req?: NextRequest) => {
  let cookie: string | undefined = ""
  if (req) {
    cookie = req.cookies.get("jwt")?.value
  } else {
    cookie = Cookies.get("jwt")
  }
  
  return cookie
}

export default getAuth