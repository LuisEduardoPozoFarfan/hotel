import React from "react"
import "./Error404.scss"

export function Error404() {
    return (
        <div class="container">
            <h1 class="error-code">404</h1>
            <h2 class="error-message">¡Oh no! Página no encontrada</h2>
            <p class="info">
                Parece que la página que estás buscando no está disponible. 
                Pero no te preocupes, ¡aún podemos ayudarte a encontrar lo que necesitas!
            </p>
            <a href="/" class="btn">Volver a la página principal</a>
        </div>
    )
}