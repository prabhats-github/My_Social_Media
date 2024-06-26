import React from 'react'
import st from './Index.module.css'

const Index = () => {
  return (
    <div id={st.maindiv}>
      <div className={st.mysocial}><h5>My_Social_Media</h5></div>
      <input type="text"  className={st.search} placeholder='Search for Posts'/>
    </div>
  )
}

export default Index