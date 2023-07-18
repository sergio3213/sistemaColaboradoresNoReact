async function handleButtonPesquisar() {
  const inputPesquisa = document.querySelector(".inputPesquisUsuarios").value;
  const divElementsUsuarios = document.querySelector(".divElementsUsuarios");
  try {
    divElementsUsuarios.innerHTML = "";
    const resposta = await axios.get(
      `http://localhost:21009/buscarUsuarioPorUsuario?usuario=${inputPesquisa}&token=${localStorage.getItem(
        "cre"
      )}`
    );
    if (resposta.data.length === 0) {
      alert("Não existe usuário com esse nome!");
    }

    resposta.data.map((data) => {
      const elementH1Nome = document.createElement("h2");
      elementH1Nome.classList.add("elementH1Nome");
      elementH1Nome.innerHTML = data.usuario.toUpperCase();
      divElementsUsuarios.appendChild(elementH1Nome);

      const elementNome = document.createElement("input");
      elementNome.classList.add("elementNome");

      elementNome.value = data.usuario;
      elementNome.setAttribute("autocomplete", "off");
      divElementsUsuarios.appendChild(elementNome);

      divElementsUsuarios.appendChild(document.createElement("br"));
      divElementsUsuarios.appendChild(document.createElement("br"));

      const elementSenha = document.createElement("input");
      elementSenha.type = "password";
      elementSenha.classList.add("elementSenha");

      elementSenha.setAttribute("autocomplete", "off");
      elementSenha.placeholder = "Digíte a nova senha...";
      divElementsUsuarios.appendChild(elementSenha);

      divElementsUsuarios.appendChild(document.createElement("br"));
      divElementsUsuarios.appendChild(document.createElement("br"));

      const selectTipo = document.createElement("select");
      selectTipo.classList.add("selectTipo");
      if (data.tipo === "1") {
        selectTipo.value = "1";
      } else {
        selectTipo.value = "0";
      }
      divElementsUsuarios.appendChild(selectTipo);

      if (data.tipo === "1") {
        const optionTipo1 = document.createElement("option");
        optionTipo1.value = "1";
        optionTipo1.text = "master";
        optionTipo1.selected = true;
        selectTipo.appendChild(optionTipo1);

        const optionTipo2 = document.createElement("option");
        optionTipo2.value = "0";
        optionTipo2.text = "comum";
        selectTipo.appendChild(optionTipo2);
      } else {
        const optionTipo1 = document.createElement("option");
        optionTipo1.value = "1";
        optionTipo1.text = "master";
        selectTipo.appendChild(optionTipo1);

        const optionTipo2 = document.createElement("option");
        optionTipo2.value = "0";
        optionTipo2.text = "comum";
        optionTipo2.selected = true;
        selectTipo.appendChild(optionTipo2);
      }
      divElementsUsuarios.appendChild(document.createElement("br"));
      divElementsUsuarios.appendChild(document.createElement("br"));

      async function handleInputSalvar() {
        try {
          const resposta = await axios.put(
            `http://localhost:21009/editaUsuario?id=${data.id}&usuario=${
              elementNome.value
            }&senha=${elementSenha.value}&tipo=${
              selectTipo.value
            }&token=${localStorage.getItem("cre")}`
          );
          alert(resposta.data.message);
        } catch (err) {
          alert(err.response.data.message);
        }
      }
      const inputButton = document.createElement("input");
      inputButton.classList.add("inputButton");
      inputButton.type = "button";
      inputButton.value = "salvar";
      inputButton.onclick = handleInputSalvar;
      divElementsUsuarios.appendChild(inputButton);

      async function handleButtonDeletar() {
        var caixaConfirmacao = window.confirm(
          "Você tem certeza que deseja deletar o Usuário?"
        );
        if (caixaConfirmacao) {
          try {
            const resposta = await axios.delete(
              `http://localhost:21009/deletaUsuario?token=${localStorage.getItem(
                "cre"
              )}&id=${data.id}`
            );
            alert(resposta.data.message);
          } catch (err) {
            console.log(err.response.data.message);
          }
        }
      }
      const inputButtonDeletar = document.createElement("button");
      inputButtonDeletar.innerHTML = "Deletar";
      inputButtonDeletar.classList.add("buttonDeletar")
      inputButtonDeletar.onclick = handleButtonDeletar;
      divElementsUsuarios.appendChild(inputButtonDeletar);

      divElementsUsuarios.appendChild(document.createElement("br"));
      const penultimaDiv = document.createElement("div");
      penultimaDiv.style.height = "20vh";
      divElementsUsuarios.appendChild(penultimaDiv);
      divElementsUsuarios.appendChild(document.createElement("hr"));
      const divFinal = document.createElement("div");
      divFinal.style.height = "10vh";
      divElementsUsuarios.appendChild(divFinal);
    });
  } catch (err) {
    alert(err.response.data.message);
  }
}
