import { FormEvent, useRef, useState } from "react"

// O useRef é ótimo para ser usado em sites com formularios longos, pois ele evita de renderizar toda a pagina assim que preenchemos o formulario
// Consulte o site react-hook-form.com
export const Refs: React.FC = () => {
    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)
    


function handleOnSubmit(event: FormEvent)
 {
    event.preventDefault()

    console.log(inputNameRef.current?.value)
    console.log(inputEmailRef.current?.value)
    console.log(inputPasswordRef.current?.value)
 }
    return (
        <form style={{ padding: '2rem'}} onSubmit={(event) => handleOnSubmit(event)}>

            <h1>useRef</h1>

            <br />
            <input type="text" placeholder="Nome Completo" ref={inputNameRef}/>
            <input type="email" placeholder="E-mail" ref={inputEmailRef}/>
            <input type="password" placeholder="Nome Completo" ref={inputPasswordRef}/>

            <br />
            <button type="submit">Submeter</button>
        
        </form>
    )
}