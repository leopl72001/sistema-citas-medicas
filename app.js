// Usuario simulado
const validUser = {
  email: "paciente@test.com",
  password: "123456"
};

// Almacenamiento de citas
let appointments = [];

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  if (email === validUser.email && password === validUser.password) {
    message.innerHTML = `<div class="success">Inicio de sesión exitoso</div>`;

    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("dashboardSection").classList.remove("hidden");

  } else {
    message.innerHTML = `<div class="error">Credenciales incorrectas</div>`;
  }
}

// AGENDAR CITA
function bookAppointment() {
  const name = document.getElementById("patientName").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const reason = document.getElementById("reason").value;

  const message = document.getElementById("appointmentMessage");

  // Validación básica
  if (!name || !doctor || !date || !time || !reason) {
    message.innerHTML = `<div class="error">Todos los campos son obligatorios</div>`;
    return;
  }

  // Crear cita
  const newAppointment = {
    name,
    doctor,
    date,
    time,
    reason
  };

  appointments.push(newAppointment);

  message.innerHTML = `<div class="success">Cita agendada correctamente</div>`;

  // Limpiar formulario
  document.getElementById("patientName").value = "";
  document.getElementById("doctor").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("reason").value = "";

  renderAppointments();
}

// MOSTRAR CITAS
function renderAppointments() {
  const table = document.getElementById("appointmentsTable");
  table.innerHTML = "";

  appointments.forEach((appt) => {
    const row = `
      <tr>
        <td>${appt.name}</td>
        <td>${appt.doctor}</td>
        <td>${appt.date}</td>
        <td>${appt.time}</td>
        <td>${appt.reason}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

// LOGOUT
function logout() {
  document.getElementById("loginSection").classList.remove("hidden");
  document.getElementById("dashboardSection").classList.add("hidden");

  document.getElementById("loginMessage").innerHTML = "";
  document.getElementById("appointmentMessage").innerHTML = "";
}
