import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import './assets/styles/main.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior,
  }
)
