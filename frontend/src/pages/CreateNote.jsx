import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const CreateNote = () => { 
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  
  return (
    <div>
      <div>
        <div>
          <Link>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateNote