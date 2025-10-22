const add = (valor) => {
  document.getElementById("pantalla").value += valor;
};

const calcular = () => {
  try {
    const result = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = result;
  } catch (e) {
    document.getElementById("pantalla").value = "Error";
  }
};

const borrar = () => {
  document.getElementById("pantalla").value = "";
};
