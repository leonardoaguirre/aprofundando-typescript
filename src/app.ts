function adicionarNumero(num1: number, num2: number) {
    return num1 + num2;
}

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) console.log(adicionarNumero(Number(input1.value), Number(input2.value)));
    })
}
