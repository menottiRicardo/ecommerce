import AddToCart from './cart/add-to-cart'
import Price from './Price'

export function ProductDescription({
  title,
  description,
  price,
}: {
  title: string
  description?: string | null
  price: string
}) {
  return (
    <div className="flex flex-col justify-start gap-3 h-full">
      <div className="mb-3 flex flex-col border-b pb-3 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price amount={price} />
        </div>
      </div>

      {description ? (
        <p className="mb-3 text-sm leading-tight dark:text-white/[60%]">
          {description}
        </p>
      ) : null}

      <AddToCart />
    </div>
  )
}
