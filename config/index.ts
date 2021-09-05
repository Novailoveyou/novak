const dev = process.env.NODE_ENV === 'development'
const prod = process.env.NODE_ENV === 'production'

const routes = {
  front: {
    root: dev
    ? process.env.DEV_ROOT_FRONT_URL
    : process.env.PROD_ROOT_FRONT_URL,
    home: '/'
  },
  back: {
    root: dev
    ? process.env.DEV_ROOT_BACK_URL
    : process.env.PROD_ROOT_BACK_URL,
    home: '/'
  },
}

const gtmId = ''

const themeColor = '#445FF8'

export { dev, prod, routes, gtmId, themeColor }