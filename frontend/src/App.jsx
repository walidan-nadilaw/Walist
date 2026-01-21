import {Route, Routes} from "react-router";
import CreateNote from "./pages/CreateNote.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";
import Home from "./pages/Home.jsx"
import Test from "./pages/test.jsx";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div className="relative h-full w-full bg-base-300">
      <Routes> //membuat routing untuk halaman utama, membuat catatan baru, dan detail catatan
         <Route path="/" element={<Home />} /> //route untuk halaman utama
         <Route path="/create" element={<CreateNote />} />
         <Route path="/note/:id" element={<NoteDetail />} />         
      </Routes>
    </div>
  )
}

export default App;