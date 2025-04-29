const validation = () => {
  const validateNumbers = (e) => {
    e.target.value = e.target.value.replace(/\D+/g, "");
  };

  const validateEmailChars = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, "");
  };

  const numberInputs = [
    ".calc-item.calc-square",
    ".calc-item.calc-count",
    ".calc-item.calc-day",
  ];

  numberInputs.forEach((selector) => {
    const input = document.querySelector(selector);
    input.addEventListener("input", validateNumbers);
  });

  const emailInputs = ["form1-email", "form2-email", "form3-email"];

  emailInputs.forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("input", validateEmailChars);
  });
};

export default validation;
