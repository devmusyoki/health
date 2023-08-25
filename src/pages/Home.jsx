import React from 'react'

const Home = () => {
  return (
    <>
     <div>
      <input type="text" name="firstname" required/>
     </div>

     <div>
      <input type="text" name="lastname" required/>
     </div>
     
     <div>
        <label>Text Box</label>
        <textarea></textarea>
      </div>

     <div>
        <label>Text Box</label>
        <textarea></textarea>
      </div>
    </>
  )
}

export default Home