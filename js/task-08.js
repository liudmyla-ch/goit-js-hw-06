const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = formRef.email.value;
  const password = formRef.password.value;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  
  event.currentTarget.reset();
});
