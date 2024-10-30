import { HashRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Events from "./Events"
import Art from "./Art"
import DJs from "./DJs"

function App() {
  return (
    <>
      <HashRouter>
        <div className="p-5 flex flex-col items-center justify-center">
          <div className='pb-10'>
            <Link to="/"><img className="max-w-80 w-full link" src="tush.svg"></img></Link>
          </div>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/art" element={<Art/>} />
              <Route path="/djs" element={<DJs/>} />
            </Routes>
        </div>
      </HashRouter>
    </>
  )
}
export default App
