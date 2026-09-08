import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

/** One entry per page. seoKey drives useSeoMeta; navLabel drives SiteHeader/SiteFooter nav. */
const pages = [
  { path: '/', name: 'home', component: HomePage, seoKey: 'home', navLabel: 'Home' },
  { path: '/events', name: 'events', component: () => import('../pages/EventsPage.vue'), seoKey: 'events', navLabel: 'Events' },
  { path: '/meet-the-artists', name: 'artists', component: () => import('../pages/ArtistsPage.vue'), seoKey: 'artists', navLabel: "Meet the Artists" },
  { path: '/about-us', name: 'about', component: () => import('../pages/AboutPage.vue'), seoKey: 'about', navLabel: 'About Us' },
] as const

export const primaryNav = pages.map((page) => ({ path: page.path, label: page.navLabel }))

export const routes: RouteRecordRaw[] = [
  ...pages.map((page) => ({
    path: page.path,
    name: page.name,
    component: page.component,
    meta: { seoKey: page.seoKey },
  } as RouteRecordRaw)),
  {
    // Not in `pages` -- it's not a top-level nav item. Prerendered paths for
    // this route are added explicitly in vite.config.ts's includedRoutes.
    path: '/commissions/:slug',
    name: 'commission',
    component: () => import('../pages/CommissionPage.vue'),
    meta: { seoKey: 'commission' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFoundPage.vue'),
    meta: { seoKey: 'notFound' },
  },
]

export const scrollBehavior = (_to: unknown, _from: unknown, savedPosition: { top: number } | null) => {
  return savedPosition || { top: 0 }
}
