function Art() {
  return (
    <>
      <section className='max-w-screen-lg w-full text-center pb-10'>
        <h1 className='text-5xl pb-2'><b>Art</b></h1>

        <p className="pb-5">Exhibition in collab with <a className="link" href="https://linktr.ee/spiltmilklondon"><b>Spilt Milk</b></a> on 01/11/2024.</p>
        <p className="pb-5">Prints available to purchase upon request. Email us <a className="link" href="mailto:contact@tushspace.com">here</a> :)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <img src="/mobyslick.jpg"></img>
          </div>
          <div>
            <img  src="/robinmooneye.jpg"></img>
          </div>
          <div>
            <img src="/samuelmccrackenartworks.jpg"></img>
          </div>
          <div>
            <img  src="/kkayarts.jpg"></img>
          </div>
        </div>
      </section>
    </>
  )
}
export default Art
