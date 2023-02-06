import { useState } from "react"
import { Navigate } from "react-router-dom"


export default function About() {
    const [ user, setUser] = useState('Yixin')

    if (!user) {
        return <Navigate to='/' replace={true} />
    }

    return (
        <div className="About">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo, adipisci ipsam illo quo repellendus placeat tempora, 
                pariatur sint fugiat ducimus molestiae rerum voluptas, 
                accusamus necessitatibus molestias iure quidem? Quam, laboriosam.
            </p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    )
}