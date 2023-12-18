// Based on how Remix recommends handling environment variables
// https://remix.run/docs/en/main/guides/envvars

// None of these are secrets, but all of them are required
// Throughout the app server and client side
declare global {
  interface Window {
    ENV: {
      SANITY_STUDIO_PROJECT_ID: string
      SANITY_STUDIO_DATASET: string
      SANITY_STUDIO_API_VERSION: string
      SANITY_FRONTEND_URL: string
      SANITY_STUDIO_URL: string
    }
  }
}

const {
  SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET,
  SANITY_STUDIO_API_VERSION,
} = typeof document === 'undefined' ? process.env : window.ENV

export const projectId = SANITY_STUDIO_PROJECT_ID ?? 'hq4hqv5o'
export const dataset = SANITY_STUDIO_DATASET ?? 'production'
export const apiVersion = SANITY_STUDIO_API_VERSION ?? '2023-11-15'

export const projectDetails = () => ({
  projectId,
  dataset,
  apiVersion,
})

// Enable stega on production deploys, but NOT the non-production domain
// Allow the production Studio to access non-production domains cross-origin

// Vercel provides multiple URLs for a single deployment:
// www.your-production-domain.com
// <git-repo-slug>-git-<branch>-<username>.vercel.app
// <git-repo-slug>-<sha>-<username>.vercel.app

// TODO: Replace with YOUR production domain
// This is used to enable stega on any URL except this one
export const PRODUCTION_URL = 'https://ecommerce-production-ad8b.up.railway.app'

// With the logic below we enable stega only on the non-production domain
export const frontendUrl =
  typeof document === 'undefined'
    ? process.env.NODE_ENV === 'production'
      ? PRODUCTION_URL
      : process.env.SANITY_FRONTEND_URL!
    : window.ENV.SANITY_FRONTEND_URL!

export const studioUrl =
  typeof document === 'undefined'
    ? process.env.NODE_ENV === 'production'
      ? PRODUCTION_URL
      : process.env.SANITY_STUDIO_URL!
    : window.ENV.SANITY_STUDIO_URL!

export const stegaEnabled =
  new URL(studioUrl).hostname !== new URL(PRODUCTION_URL).hostname
