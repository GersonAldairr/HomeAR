const inputs = document.querySelectorAll(".code input");
const error = document.getElementById("error");

const codigoCorrecto = "1234";

inputs.forEach((input, index) => {

    input.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/g, "").slice(0,1);

        if (this.value !== "" && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        const codigo = [...inputs].map(i => i.value).join("");

        if (codigo.length === 4) {

            if (codigo === codigoCorrecto) {

                error.textContent = "";

                setTimeout(() => {
                    window.location.href = "profile.html";
                }, 500);

            } else {

                error.textContent = "Código incorrecto.";

                inputs.forEach(i => i.value = "");
                inputs[0].focus();

            }

        }

    });

    input.addEventListener("keydown", function(e){

        if(e.key === "Backspace" && this.value === "" && index > 0){
            inputs[index - 1].focus();
        }

    });

});