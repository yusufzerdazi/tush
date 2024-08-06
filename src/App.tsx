function App() {
  return (
    <>
      <div className="p-5 flex flex-col items-center justify-center">
        <div className='pb-10'>
          <img className="max-w-80 w-full" src="tush.png"></img>
        </div>
        <section className='max-w-screen-md text-center pb-10'>
          <h2 className='text-3xl '><b>What is TUSH?</b></h2>
          <p className='text-lg'>
          We are a new music event space (founded in London) seeking to create a fun, inclusive and supportive artistic environment for all our friends (old and new!) from all backgrounds & cultures and of all genders & sexualities to dance, vibe and thrive ✨ We want everyone to feel welcome, including all those who identify as "They", "She" or "He", to bring people together as "Us".
          </p>
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
