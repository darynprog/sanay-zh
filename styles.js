function convertAndCalculate() {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();
    const base = parseInt(document.getElementById('base').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    const operation = document.getElementById('operation').value;

    try {
        // Сандарды ондыққа түрлендіру
        const decimalNum1 = parseInt(num1, base);
        const decimalNum2 = parseInt(num2, base);

        // Егер түрлендіру жарамсыз болса, қате көрсету
        if (isNaN(decimalNum1) || isNaN(decimalNum2)) {
            throw new Error("Сандар дұрыс енгізілмеген немесе негізге сәйкес емес!");
        }

        // Математикалық амал қолдану
        let result;
        switch (operation) {
            case "+":
                result = decimalNum1 + decimalNum2;
                break;
            case "-":
                result = decimalNum1 - decimalNum2;
                break;
            case "*":
                result = decimalNum1 * decimalNum2;
                break;
            case "/":
                if (decimalNum2 === 0) throw new Error("Нөлге бөлуге болмайды!");
                result = Math.floor(decimalNum1 / decimalNum2);
                break;
            default:
                throw new Error("Белгісіз амал!");
        }

        // Нәтижені соңғы негізге түрлендіру
        let finalResult = result.toString(toBase).toUpperCase();

        document.getElementById('result').innerHTML = `Нәтиже: <strong>${finalResult}</strong>`;
    } catch (error) {
        document.getElementById('result').innerHTML = `<span class="error">Қате: ${error.message}</span>`;
    }
}