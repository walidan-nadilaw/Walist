import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='bg-base-200 border-b border-base-content/10 relative z-0'>
      <div className='mx-auto max-w-6xl px-4 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-4xl font-bold italic tracking-tight font-serif text-primary'>
            Walist
          </h1>
          <div className='flex items-center gap-4'>
            <Link to={'/create'} className='btn btn-primary'>
            <PlusIcon className='size-5'/>
            <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Navbar