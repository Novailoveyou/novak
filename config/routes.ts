import { dev } from '@/config/index'

const routes = {
  front: {
    // root: dev
    //   ? process.env.DEV_ROOT_FRONT_URL
    //   : process.env.PROD_ROOT_FRONT_URL,
    root: dev ? 'http://localhost:3000' : 'https://test.com',
    home: '/',
    solutions: '/solutions',
    about: '/about',
    products: '/products',
    support: '/support',
    contact: '/contact'
  },
  back: {
    root: dev ? process.env.DEV_ROOT_BACK_URL : process.env.PROD_ROOT_BACK_URL,
    // root: dev ? 'http://localhost:1337' : 'https://test.com',
    home: '/',
    categories: '/categories'
  }
}

export default routes
