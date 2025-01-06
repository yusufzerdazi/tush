import { Carousel } from "flowbite-react"

function Events() {
  return (
    <>
      <section className='max-w-screen-lg w-full text-center pb-10'>
        <h1 className='text-5xl pb-2'><b>Events</b></h1>
        <div>
          <a className="link" href="https://ra.co/events/1976590">
            <h2 className='text-3xl pb-2'>01/11/2024: Poison Peach</h2>
          </a>
          <div className="h-600 sm:h-800 md:h-1000">
            <Carousel>
              <img src="k.png" alt="..." />
              <img src="y.png" alt="..." />
              <img src="a.png" alt="..." />
            </Carousel>
          </div>
          <p className='text-lg pt-5'>
          Our Halloween launch party included Hard House, Tech House & Techno DJs, immersive lighting and a unique art exhibition. We raised £300 for CALM - a mental health charity.
          </p>
        </div>
      </section>
    </>
  )
}
export default Events
