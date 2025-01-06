function Events() {
  return (
    <>
      <section className='max-w-screen-lg w-full text-center pb-10'>
        <h1 className='text-5xl pb-2'><b>Events</b></h1>
        <div>
          <a className="link" href="https://ra.co/events/1976590">
            <h2 className='text-3xl pb-2'>01/11/2024: Poison Peach</h2>
          </a>
          <div id="default-carousel" className="relative w-full" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="k.png" style={{display: "block"}} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="y.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="a.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
              </div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
          </div>
          <p className='text-lg'>
          Our Halloween launch party included Hard House, Tech House & Techno DJs, immersive lighting and a unique art exhibition. We raised £300 for CALM - a mental health charity.
          </p>
        </div>
      </section>
    </>
  )
}
export default Events
