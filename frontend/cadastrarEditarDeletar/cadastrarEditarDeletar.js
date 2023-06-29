const decodedToken = jwt_decode(localStorage.getItem('cre'));

document.querySelector(".spanUsuarioCadastraEditaDeleta").innerText=`Usuario: ${decodedToken.usuario}`

console.log(decodedToken)