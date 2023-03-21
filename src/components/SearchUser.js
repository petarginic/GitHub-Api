import React from 'react'

const SearchUser = ({value,changeValue,fetchData}) => {

  return (
    <>
    <div className="input-group mb-3 w-50 d-flex justify-center align-center">
        <input type="text" className="form-control" placeholder="Github username" value={value} onChange={(e) => changeValue(e.target.value)} />
        <div className="input-group-append">
            <button className="btn btn-primary ml-1" type="button" onClick={() => fetchData()}>Search</button>
        </div>
    </div>
    </>
  )
}

export default SearchUser