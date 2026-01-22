import { useEffect, useState } from 'react'
import toast from "react-hot-toast"

import Navbar from '../components/Navbar';
import RateLimitUI from '../components/RateLimitUI';
import NoteNotfound from '../components/NoteNotfound';
import NoteCard from '../components/NoteCard';
import api from '../lib/axios';

const Home = () => { //bikin komponen Home untuk halaman utama
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchNotes = async () =>{
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);

      } catch (error) {
        console.error("error fetching notes");
        if(error.response?.status === 429){ //error.response?.status ga tau ngapain
          setIsRateLimited(true);
        }else {
          toast.error("Failed to load notes");
        }
        
      } 
      finally {setLoading(false);}
    }  

    fetchNotes();

  },[]);

  return <div className="min-h-screen">
    <Navbar/>

    {isRateLimited && <RateLimitUI/>}

    <div className='max-w-7xl mx-auto p-4 mt-6'>
      {loading && <div className='text-center text-primary py-10'>Loading notes...</div> }

      {!loading && notes.length === 0 && !isRateLimited && <NoteNotfound/>} 
      {/*kenapa kalau kondisinya ditambah !loading , notesnya muncul dua kali lebih lama?*/}
      {/* apakah .length attribute array? */}

      {notes.length > 0 && !isRateLimited && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
          {/* apa itu notes.map? buat apa key? apa maksudnya note={note}? bagaimana cara kerja dan setNotes dan useState?*/}
        </div>
      )}
    </div>


  </div>
};

export default Home
