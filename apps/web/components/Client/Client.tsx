export type ClientProps = {
  clients: {
    imgUrl: string
    alt: string
  }[]
}

export const Client = ({ clients }: ClientProps) => {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-700">
          {`Our Clients`}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {clients?.map((client, index) => (
            <img
              key={`client-${index}`}
              className="col-span-2 object-contain lg:col-span-1"
              src={client.imgUrl}
              alt={client.alt}
              width={174}
              height={108}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
