import {Link} from '@remix-run/react'
import urlBuilder from '@sanity/image-url'
import {ChevronLeftIcon} from 'lucide-react'

import {dataset, projectId} from '~/sanity/projectDetails'
import type {RecordDocument} from '~/types/record'

import {Gallery} from './gallery'
import {ProductDescription} from './product-description'

type RecordProps = {
  data: RecordDocument
}

export function Record(props: RecordProps) {
  const {images, description, price} = props.data
  return (
    <div className="mx-auto md:w-9/12 px-1">
      <Link to="/">
        <button className="flex items-center py-2 cursor-pointer">
          <ChevronLeftIcon /> Go back
        </button>
      </Link>
      <div className="flex flex-col rounded-lg md:border md:border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Gallery
            images={
              images.map((image: any) => ({
                src: urlBuilder({projectId, dataset})
                  // @ts-ignore
                  .image(image.asset._ref)
                  .height(1000)
                  .width(1000)
                  .url(),
                altText: image.altText,
              })) as any
            }
          />
        </div>

        <div className="basis-full lg:basis-2/6 mt-4 md:mt-0">
          <ProductDescription
            {...props.data}
            description={description as string}
            price={price}
          />
        </div>
      </div>
    </div>
  )
}
