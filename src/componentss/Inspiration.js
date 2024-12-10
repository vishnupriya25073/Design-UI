import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import { Link } from 'react-router-dom';
import { Outlet } from "react-router"
function Inspiration() {
  const [getdata, setGetdata] = useState()

  useEffect(() => {
    Getdata();
  }, [])

  const Getdata = async () => {
    await axios.get("http://localhost:3900/post")
      .then((res) => {
        setGetdata(res.data)
      })
  }

  return (
    <>
      <div className="Inspiration text-white mt-0 ">
        <div className="row w-100">
          {getdata ? getdata.map((x) => {
            return (
              <div className="design col-12 col-sm-6 col-md-4 col-lg-3 mb-4 py-5 " key={x.id}>
                <div>
                {/* <Link
                    to={`/DesignInspiration/${x.id}`}
                    className="text-white text-decoration-none fs-5" 
                  > */}
                  <img className="img-top py-1"
                style={{ height: "200px", objectFit: "cover" ,borderRadius:"15px"}}
               src={x.image} alt="/" />
               {/* </Link> */}
                  <div className="card-body">
                    <h5 className="card-title text-xl fs-5 font-semibold py-2">{x.title}</h5>
                    <p className="card-text fs-6" style={{ height: "40px" }}>{x.description}</p>
                  </div>
                  <Outlet/>
                </div>
              </div>
            )
          }) : null}
        </div>
      </div>
    </>
  )
}

export default Inspiration;
