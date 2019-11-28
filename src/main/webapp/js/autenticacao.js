//Classe
Autenticacao = function(){

}

//Metodo
Autenticacao.prototype.validarCampos = function(){
    elementUser = document.getElementById("txtUsuario");
    txtUser = elementUser.value;
    
    elementPass = document.getElementById("txtSenha");
    txtPass = elementPass.value;
    
    if (txtUser=="" || txtPass==""){
        window.alert("#Os campos usuario e senha devem ser digitados!#");
        return false;
    }
    
    return true;
}

aut = new Autenticacao();