// iteracion 1.1
const btn$$ = document.querySelector("#btnToClick");

btn$$.addEventListener("click", function () {

    console.log("Botón pulsado.");
    
});

// iteracion 1.2
const input$$ = document.querySelector("input");

input$$.addEventListener("focus", function () {

    console.log(input$$.value);
    
});

// iteracion 1.3
const input2$$ = document.querySelector("input");

input2$$.addEventListener("input", function () {

    console.log(input2$$.value);
    
});