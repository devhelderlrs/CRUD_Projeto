class ClientesModel{
    constructor(nome, sexo, cpf, cnpj, endereco, email, telefone, foto, pedidos){
        this.nome = nome;
        this.sexo = sexo;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.foto = foto;
        this.pedidos = pedidos;
    }
}

export default ClientesModel;