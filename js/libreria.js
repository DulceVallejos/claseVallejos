const miBtn = document.querySelector("#cBtn");
miBtn.addEventListener('click', () =>{
    Toastify({
        text: "Debes iniciar sesión para comprar este producto",
        duration: 3000,
        newWindow: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#1A5276",
          color:"white",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    
/*Swal.fire({
    title: "Consulta realizada con éxito!",
    text: "par",
    icon: "success",
    button: "Ok",
  });*/
})



