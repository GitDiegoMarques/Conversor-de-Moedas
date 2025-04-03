function BRL() {
        valor = parseFloat(prompt("Converter Wons Para REAL"));
        
        let valorConvertido = valor * 0.040;
        
        let valorFormatado = valorConvertido.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"

        });

        console.log(valorFormatado);
        alert(valorFormatado);

    
}

function USD() {

    valor = parseFloat(prompt("Converter Wons Para DOLAR"));
    
    let valorConvertido = valor * 5.88;
    
    let valorFormatado = valorConvertido.toLocaleString("pt-BR", {
        style: "currency",
        currency: "USD"

    });

    console.log(valorFormatado);
    alert(valorFormatado);

}

function EUR() {

    valor = parseFloat(prompt("Converter Wons Para EURO"));
    
    let valorConvertido = valor * 5.88;
    
    let valorFormatado = valorConvertido.toLocaleString("pt-BR", {
        style: "currency",
        currency: "EUR"

    });

    console.log(valorFormatado);
    alert(valorFormatado);

}


