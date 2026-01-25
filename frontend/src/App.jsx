import {Route, Routes} from "react-router";
import CreateNote from "./pages/CreateNote.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";
import Home from "./pages/Home.jsx"
import Test from "./pages/test.jsx";

const App = () => {
  return (
    <div className="relative h-full w-full bg-base-300">
      <div className="absolute h-full w-full pointer-events-none
        bg-[radial-gradient(#e5e7eb80_1px,transparent_1px)] 
        [background-size:48px_48px] 
        [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"   
      ></div>
      <Routes> //membuat routing untuk halaman utama, membuat catatan baru, dan detail catatan
         <Route path="/" element={<Home />} /> //route untuk halaman utama
         <Route path="/create" element={<CreateNote />} />
         <Route path="/note/:id" element={<NoteDetail />} />         
      </Routes>
    </div>
  )
}

export default App;