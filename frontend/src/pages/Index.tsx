import React from 'react'
import Navbar from '../components/Navbar'

const Index = () => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  };
  const likeComment = () => {
    fetch("http://localhost:8000/api/likecomment", { method: "POST", headers, credentials: "include" })
  }
  return (
    <div>
      <Navbar />
      <button onClick={likeComment}>likeComment</button>
    </div>
  )
}

export default Index
