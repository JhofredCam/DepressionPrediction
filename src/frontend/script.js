document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();  // Evita que la página se recargue

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
            alert("Depresión: " + JSON.stringify(result));
        } catch (error) {
            console.error("Error al enviar datos:", error);
            alert("Hubo un error al enviar los datos.");
        }
    });
});
