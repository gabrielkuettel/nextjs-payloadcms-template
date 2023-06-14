export const ImageGrid = () => {
  return (
    <div>
      <div className="p-3 md:px-0 md:py-12">
        <h2
          id="cause-heading"
          className="text-center text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl"
        >
          {`Portfolio`}
        </h2>
        <p className="mt-4 text-center  text-lg font-light text-gray-700">
          {`Some examples of the work we've done`}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 px-3 md:grid-cols-4 xl:px-0">
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-tembela-bohle-1102874.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-robert-bogdan-910122.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-vinta-supply-co-_-nyc-842958.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-oziel-gómez-868097.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-lalu-fatoni-732632.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-анастасия-8365688.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-lumn-167703.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-pixabay-259756.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-skylar-kang-6044266.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-wallace-chuck-2973392.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-vinta-supply-co-_-nyc-843194.jpeg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover"
              src="/images/pexels-godisable-jacob-978665.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
