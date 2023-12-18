import {z} from 'zod'

export const recordZ = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.string(),
  images: z.any(),
  description: z.string().nullable(),
  releaseDate: z.string(),
  status: z.string(),
  price: z.any(),
})

export type RecordDocument = z.infer<typeof recordZ>

export const recordsZ = z.array(recordZ)

export const recordStubZ = z.object({
  _id: z.string(),
  _type: z.string(),
  title: z.string().nullable(),
  releaseDate: z.string().nullable(),
  slug: z.string().nullable(),
  artist: z.string().nullable(),
  images: z.any().nullable(),
})

export const recordStubsZ = z.array(recordStubZ)

export type RecordStub = z.infer<typeof recordStubZ>
