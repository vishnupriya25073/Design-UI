import React from 'react'

function Page() {
  return (
    <div className=' App row d-flex '>
        <div className=' column col-3 col-md-8 col-lg-9 col-sm-1 bg-dark'>
           <p>Sidebar</p>
        </div>
        <div className='column col-9  col-md-4 col-lg-3 col-sm-11 bg-blue'>
         <p>Main</p>
        </div>
    </div>
  )
}

export default Page;