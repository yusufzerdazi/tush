function App() {
  return (
    <>
      <div className="p-5 flex flex-col items-center justify-center">
        <div className='pb-10'>
          <img className="max-w-80 w-full" src="tush.png"></img>
        </div>
        <section className='max-w-screen-md w-full text-center pb-10'>
          <h2 className='text-3xl pb-2'><b>Upcoming Events</b></h2>
          <iframe className='w-full' src="https://ra.co/widget/eventlisting?promoter=147421" height="400" />
        </section>
        <section className='max-w-screen-md text-center pb-10'>
          <h2 className='text-3xl '><b>What is TUSH?</b></h2>
          <p className='text-lg'>
          We are a new music event space (founded in London) seeking to create a fun, inclusive and supportive artistic environment for all our friends (old and new!) from all backgrounds & cultures and of all genders & sexualities to dance, vibe and thrive ✨ We want everyone to feel welcome, including all those who identify as "They", "She" or "He", to bring people together as "Us".
          </p>
        </section>
        <section className='max-w-screen-md text-center pb-10'>
          <h2 className='text-3xl '><b>Our Principles</b></h2>
          <p className='text-lg'><b>BEHAVE</b> - Actively promote inclusive behaviours at our events, with zero tolerance to discrimination, making sure we lead by example. (Including basic rave etiquette!)</p>
          <p className='text-lg'><b>PROMOTE</b> - Seek to consistently involve a diverse team of artists / DJs at our events. Make space for artists to promote their own music where possible.</p>
          <p className='text-lg'><b>SUPPORT</b> - Pledge a % of profits or ask for donations on the evening to causes that support the community: e.g. charities for LGBTQ+ rights, POC, mental health, suicide prevention, women’s rights, environmental causes, etc.</p> 
        </section>
        <section>
          <a className="px-1 hover:opacity-70" href="https://instagram.com/tush_space" title="LinkedIn">
            <i className="fab fa-instagram fa-3x"/>
          </a>
        </section>
      </div>
    </>
  )
}

export default App
