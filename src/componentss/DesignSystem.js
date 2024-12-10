import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DesignSystem() {
  const [getdata, setGetdata] = useState()

  useEffect(() => {
    Getdata();
  }, [])

  const Getdata = async () => {
    await axios.get("http://localhost:3500/post")
      .then((res) => {
        setGetdata(res.data)
      })
  }

  return (
    <>
      <div className="container text-white ">
      <h3 className="bg-dark py-3 text-center text-white font-semibold mb-0">
          All links in one bookmark for <code>designers</code>
        </h3>
        <div className="row w-100 ">
          {getdata ? getdata.map((x) => {
            return (
              <div className="design col-12 col-sm-6 col-md-4 col-lg-3 mb-4 py-5" key={x.id}>
                <div>
                  <img className="img-top py-1"
                style={{ height: "200px", objectFit: "cover" ,borderRadius:"15px"}}
               src={x.image} alt="/" />
                  <div className="card-body">
                    <h5 className="card-title text-xl fs-5 font-semibold py-2">{x.title}</h5>
                    <p className="card-text fs-6" style={{ height: "40px" }}>{x.description}</p>
                  </div>
                  
                </div>
              </div>
            )
          }) : null}
        </div>
      </div>
    </>
  )
}

export default DesignSystem;
