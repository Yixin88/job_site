import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.</p>

        <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
