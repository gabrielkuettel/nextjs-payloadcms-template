export const AboutUs = () => {
  return (
    <div aria-labelledby="cause-heading">
      <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2
            id="cause-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            {`About Us`}
          </h2>
          <p className="mt-3 text-xl font-light text-white">
            {`Bare Boulder Design is a Premium Design, Development & Repair company for soft goods,
            garments, outdoor technical gear, bags, leather goods, ski gear, jackets and camping gear.
            Serving customers all over the USA and Canada. We offer professional prototype and design services
            to meet all of your product development and product prototyping needs.`}
          </p>
        </div>
      </div>
    </div>
  )
}
