window.onload = function() {
    const name = prompt("Masukkan nama kamu:");
    if (name) {
      document.getElementById("welcomeName").innerText = name;
    }
  
    const now = new Date();
    document.getElementById("currentTime").innerText = now.toString();
  };

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nama = document.getElementById("name").value.trim();
    const tanggal = document.getElementById("birthdate").value;
    const pesan = document.getElementById("messageText").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
  
    if (!nama || !tanggal || !pesan || !gender) {
      alert("Harap isi semua kolom sebelum submit!");
      return;
    }
  
    const kelamin = gender.value;
  
    document.getElementById("output").innerHTML = `
      <p><b>Current time:</b> ${new Date().toString()}</p>
      <p><b>Nama:</b> ${nama}</p>
      <p><b>Tanggal Lahir:</b> ${tanggal}</p>
      <p><b>Jenis Kelamin:</b> ${kelamin}</p>
      <p><b>Pesan:</b> ${pesan}</p>
    `;
  });
  