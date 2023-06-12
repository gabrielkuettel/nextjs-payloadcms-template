import Link from 'next/link'
import Image from 'next/image'

type FooterProps = {
  companyLogoUrl?: string
  companyName?: string
}

export function Footer({ companyName, companyLogoUrl }: FooterProps) {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex items-center justify-center lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{companyName}</span>
            <Image
              width={32}
              height={32}
              className="h-10 w-auto"
              src={companyLogoUrl ?? ''}
              alt="logo-footer"
              unoptimized
            />
          </Link>
        </div>
        <p className="mt-10 text-center text-lg font-light leading-5 text-gray-500">
          &copy; Copyright 2023 by {companyName || 'Your Company'}
          <br />
          (303) 955-1884
          <br />
          409 South Public RD#C Lafayette, Colorado 80026
        </p>
      </div>
    </footer>
  )
}
