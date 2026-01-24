import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { ArrowLeft, Loader2Icon, Trash2Icon } from 'lucide-react';

const NoteDetail = () => { //bikin komponen NoteDetail untuk halaman detail catatan
  const [loading, setLoading] = useState(true)
  const [note, setNote] = useState(null);
  const [save, setSave] = useState(false); 

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);

      } catch (error) {
          console.error("error in feching note", error);
          if(error.response?.status === 429){ //error.response?.status ga tau ngapain
            setIsRateLimited(true);
          }else {
            toast.error("Failed to load notes");
          }
      } finally{ setLoading(false); }
    }

    fetchNote();
  }, [id] ); // fungsinya [id] di situ untuk apa?

  const handleDelete = async () => {
    if (!window.confirm("are you sure want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("note deleted successfully");
      navigate("/");

    } catch (error) {
      console.error("error in deleting note", error);
      toast.error("failed to delete note");
    }
  }

  const handleSave = async () => {
    if(!note.title.trim() || !note.content.trim()){
      toast.error("lengkapi title dan content");
      return;
    }

    setSave(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("note updated successfully");
      navigate("/");

    } catch (error) {
      console.error("error in saving note", error);
      if(error.response.status === 429 ){
        toast.error("slow dowwnn, you're updating too fast", {
          duration: 4000
        });
      }else{ toast.error("failed to save note!"); }  
    }
  }

  if(loading){
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Loader2Icon className='animate-spin size-20'/>
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-8 max-w-2xl'>
        <div >
          <div className='flex items-center justify-between mb-6'>
            <Link to="/" className='btn btn-ghost'>
              <ArrowLeft className='size-4'/>
              Back to notes
            </Link>

            <button onClick={handleDelete} className='btn btn-error btn-outline'>
              <Trash2Icon className='size-4'/>
              Delete Note
            </button>
          </div>

          <div className='card bg-base-100'>
            <div className='card-body'>

              <div className='form-control mb-2'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input
                  placeholder='note title'
                  className='input input-bordered'
                  value={note?.title || "loading..."}
                  onChange={(e) => {setNote({...note, title: e.target.value })}} 
                /> 
                {/* apa maksudnya ...note? apa fungsi e di sini? */}
              </div>

              <div className='form-control mb-2'>
                <label className='label'>
                  <span className='label-text'>Content</span>
                </label>
                <textarea 
                  placeholder='insert your content here'
                  value={note?.content || "loading..."}
                  className='textarea textarea-bordered h-32'
                  onChange={(e)=>setNote({...note, content: e.target.value})}
                />
              </div>

              <div className='card-actions justify-end'>
                <button className='btn btn-primary' disabled={save} onClick={handleSave}>
                  {save? "Saving..." : "save changes" }
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetail