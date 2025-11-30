import {Route, Routes} from "react-router";
import CreateNote from "./pages/CreateNote.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";
import Home from "./pages/Home.jsx"
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
      {/* <button onClick={() => toast.success("Congratulations")} className="btn bg-neutral-950 btn-outline">
        Click here
      </button> */}
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>

      <Routes> //membuat routing untuk halaman utama, membuat catatan baru, dan detail catatan
         <Route path="/" element={<Home />} /> //route untuk halaman utama
         <Route path="/create" element={<CreateNote />} />
         <Route path="/note/:id" element={<NoteDetail />} />         
      </Routes>
    </div>
  )
}

export default App;