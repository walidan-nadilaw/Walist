import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';

import api from '../lib/axios';

const CreateNote = () => { 
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!title.trim() || !content.trim){
      toast.error("Lengkapi title dan content");
      return;
    }

    setLoading(true); 
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("note created successfully");
      navigate("/");

    } catch (error) {
      console.error("error creating note", error);
      if(error.response.status === 429){
        toast.error("slow dowwwn, you're creating notes too fast!", {
          duration: 4000,
        })
      } else{
        toast.error("failed to create note");
      }

    } finally {setLoading(false);

    }
  }

  
  return (
    <div className='min-h-screen bg-base-300'>
      <div className='container mx-auto px-4 py-8'> {/*apa fungsi container?*/}
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeft className='size-5'/>
            Back to Notes
          </Link>

          <div className='card bg-base-100'>
            <div className='card-body'>

              <h2 className='card-title mb-2'> Create New Note</h2>

              <form onSubmit={handleSubmit}>

                <div className='form-control mb-4'> {/* buat apa class form control */}
                  <label className='label'>
                    <span className='label-text'>Title</span> {/* apa itu label-text dan apa itu label? */}
                  </label>
                  <input
                    type="text"
                    placeholder="title"
                    className='input input-bordered'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)} // apa itu target value
                  />
                </div>

                <div className='form-control mb-4'>
                  <label className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea
                    placeholder='Write your note here...'
                    className='textarea textarea-bordered h-32' // apa itu textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    // gimana cara bikin text di dalam sini lebih besar?
                  />
                </div>

                <div className='card-actions justify-end'> {/* apa itu card actions? */}
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating..." : "Create Notes"}
                  </button>

                </div>  

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNote