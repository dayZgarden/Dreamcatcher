import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

  const navigate = useNavigate()

  return (
    <>
      <h1>Landing</h1>
      <button onClick={() => navigate('/calendar')}>Go to Calendar</button>
    </>
  )
}
