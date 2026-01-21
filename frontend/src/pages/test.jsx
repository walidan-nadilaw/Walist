import React from 'react'

const Test = () => {
  return (
    <p>This part is normal, but 
        <span style={{color: 'blue', fontWeight: 'bold'}}>
            this part is styled
        </span> 
        with CSS.
    </p>
  )
}

export default Test