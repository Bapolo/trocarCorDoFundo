document.addEventListener("DOMContentLoaded", () =>
    {
        const button = document.querySelector("button")
        const body = document.querySelector("body")

        body.style.backgroundColor = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
 
        button.addEventListener("click", () =>
        {                
           body.style.backgroundColor = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`         
        })
    
    
    })