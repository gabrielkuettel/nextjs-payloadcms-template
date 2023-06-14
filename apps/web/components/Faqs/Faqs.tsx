const faqs = [
  {
    id: 1,
    question: 'What is BARE BOULDER?',
    answer:
      'Bare Boulder Company was established by a team of professional technical gear designers and creative entrepreneurs who specialize in high quality custom Prototype Designs, Sewing Production, Repair and Restoration of all soft goods such as, Technical Outdoor Gear, Camping Gear, Hunting Gear, Handbags, Backpacks, Leather Bags, Purses, Travel Bags, Sleeping Bag, Tents, Soft Covers, Soft Cases, Belts, Down Jackets, Ski Jackets, Garments, Footwear, Luggage, Wet suits, Casual Wear and more…'
  },
  {
    id: 2,
    question: 'How much does Bare Boulder charge for repair and restoration?',
    answer: `Prices vary by item.
      We charge a minimum of $20 for any repair.
      Shop Hourly Rate is $65
      For Prototyping quotes please contact us. http://www.bareboulder.com/contact-us`
  },
  {
    id: 3,
    question: 'Do you fix and replace zippers?',
    answer: `Yes, At Bare Boulder we can replace zippers on all types of Garments and Technical Outdoor Gear,
      including Handbags, Jackets, Purses, Backpacks, Leather Bags,Leather Jackets, Messenger Bags, Day Bags,
      Travel Bags, Suitcases, Pants, Ski Jackets, Sleeping Bags, Tents, Ski Garments, Down garments, Hunting Garments, or any Soft Items.`
  },
  {
    id: 4,
    question: 'Technical Gear that can be repaired:',
    answer: `Tent covers and poles, Sleeping Bags, Car seats, Vehicle covers, Tubing, Hunting Gear and more..  `
  },
  {
    id: 5,
    question: `What items don’t you repair?`,
    answer: `We hope to help all customers, please inquire if you do not see an item listed within the website`
  }
  // More questions...
]

export const Faqs = () => {
  return (
    <div className="rounded-xl bg-white">
      <div className="mx-auto max-w-7xl px-3 py-8 sm:py-12 lg:px-10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-700">
          Frequently asked questions
        </h2>
        <p className="mt-6 max-w-2xl text-lg font-light leading-7 text-gray-600">
          {`Can't find the answer you're looking for? Reach out to our support team by`}{' '}
          <a href="#" className="font-semibold text-blue-500">
            {'sending an email'}
          </a>{' '}
          {`and we'll get back to you.`}
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-semibold leading-7 text-gray-700">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base font-light leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
