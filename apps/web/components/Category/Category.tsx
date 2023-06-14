export const Category = () => {
  return (
    <div aria-labelledby="category-heading">
      <div className="mx-auto max-w-7xl px-3 py-12 xl:px-0">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-700"
          >
            Our Services
          </h2>
          <a href="#" className="hidden text-2xl font-normal sm:block">
            Learn more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="aspect-h-1 aspect-w-2 sm:aspect-h-1 sm:aspect-w-1 group overflow-hidden rounded-lg sm:row-span-2">
            <img
              src="/images/pexels-tembela-bohle-1102874.jpeg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Prototyping & Design
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="aspect-h-1 aspect-w-2 sm:aspect-none group overflow-hidden rounded-lg sm:relative sm:h-full">
            <img
              src="/images/pexels-lumn-167703.jpeg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Repair & Restoration
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="aspect-h-1 aspect-w-2 sm:aspect-none group overflow-hidden rounded-lg sm:relative sm:h-full">
            <img
              src="images/pexels-wallace-chuck-2973392.jpeg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    Sewing Production
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a href="#" className="text-md block font-normal">
            Learn more
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
