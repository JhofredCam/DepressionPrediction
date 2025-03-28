document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const resultadoDiv = document.getElementById("resultado");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Capturar valores del formulario
        
        const data = {
            age: parseInt(document.querySelector("input[placeholder='Edad']").value),
            academic_pressure: parseInt(document.querySelector("select[name='academic_pressure']").value),
            study_satisfaction: parseInt(document.querySelector("select[name='study_satisfaction']").value),
            dietary_habits: document.querySelector("select[name='dietary_habits']").value,
            suicidal_thoughts: document.querySelector("select[name='suicidal_thoughts']").value,
            work_study_hours: parseInt(document.querySelector("input[placeholder='Horas de estudio o trabajo']").value),
            financial_stress: parseInt(document.querySelector("select[name='financial_stress']").value),
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log(result)
            if (!response.ok) {
                throw new Error(result.mensaje || "Error en la solicitud");
            }
            if (result == 0){
                 var text = "Vas bien, sigue cuidándote."
                }else{
                    var text = "Considera ayuda profesional." 
                }

            // Mostrar el resultado en el div
            resultadoDiv.innerHTML = `${text}`;
            resultadoDiv.classList.remove("hidden");

        } catch (error) {
            resultadoDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
            resultadoDiv.classList.remove("hidden");
        }
    });
});
