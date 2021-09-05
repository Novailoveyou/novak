import { dev } from '@/config/index'

const routes = {
  front: {
    root: dev
      ? process.env.DEV_ROOT_FRONT_URL
      : process.env.PROD_ROOT_FRONT_URL,
    home: '/'
  },
  back: {
    root: dev ? process.env.DEV_ROOT_BACK_URL : process.env.PROD_ROOT_BACK_URL,
    home: '/'
  }
}

export default routes
