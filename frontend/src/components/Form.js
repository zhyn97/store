import React from 'react'

export default function Form({title, handleClick}) {
  const [login, setLogin] = React.useState('')
  const [pass, setPass] = React.useState('')

  return (
    <div>
        <input
          type="email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder='login'
        />
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder='password'
        />
        <button
         onClick={() => handleClick(login, pass)}
        >
            {title}
        </button>
    </div>
  )
}
