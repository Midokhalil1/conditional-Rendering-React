import { useState } from "react";

function Hero() {
    const [user, setUser] = useState()
    console.log({user})
const handleLogin = () => {
setUser({ firstName: 'Mido', email: 'mido@khalil.com',admin: true})
}
if(!user) {
        return <button onClick={handleLogin}>Login</button>
    }
const handleLogout = () => {
    setUser()
}
    return (
<>
        <h1> Hello {user.firstName}</h1>
        <button onClick={handleLogout}>Log out</button>
    
    </>
    )
}


export default Hero 