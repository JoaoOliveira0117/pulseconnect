import Cookies from 'js-cookie'

const getAuth = (jwt?: string) => {
  let cookie: string | undefined = jwt

  if (!cookie) {
    cookie = Cookies.get('jwt')
  }

  return cookie
}

export default getAuth
