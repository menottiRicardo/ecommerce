import groq from 'groq'

export const HOME_QUERY = groq`*[_id == "home"][0]{ title, siteTitle }`

export const RECORDS_QUERY = groq`*[_type == "art"][0...12]|order(title asc){
    _id,
    _type,
    title,
    releaseDate,
    "slug": slug.current,
    "artist": artist->name,
    images,
  } | order(releaseDate desc)`

export const RECORD_QUERY = groq`*[_type == "art" && slug.current == $slug][0]{
  _id,
  title,
  description,
  status,
  releaseDate,
  // GROQ can re-shape data in the request!
  "slug": slug.current,
  // for simplicity in this demo these are typed as "any"
  // we can make them type-safe with a little more work
  // https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod
  images,
  status,
  price,
}`
