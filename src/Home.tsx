import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <section className='max-w-screen-lg text-center pb-10'>
                <h1 className='text-5xl '><b>Welcome to TUSH</b></h1>
                <p className='text-lg'>
                    We are a new music event space (founded in London) seeking to create a fun, inclusive and supportive artistic environment for all our friends from all backgrounds & cultures and of all genders & sexualities to dance, vibe and thrive ✨ We want everyone to feel welcome, including all those who identify as "They", "She" or "He", to bring people together as "Us".
                </p>
            </section>
            <section className='max-w-screen-md w-full text-center pb-10'>
                <Link to="events"><h2 className='text-3xl pb-2 link'><b>Events</b></h2></Link>
                <Link to="djs"><h2 className='text-3xl pb-2 link'><b>DJs</b></h2></Link>
                <Link to="art"><h2 className='text-3xl pb-2 link'><b>Art</b></h2></Link>
                <a href="https://instagram.com/tush_space"><h2 className='text-3xl pb-2 link'><b>Instagram</b></h2></a>
            </section>
        </>
    )
}
export default Home