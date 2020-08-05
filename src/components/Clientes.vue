<template>
  <div>
    <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">{{msg}}</h1>
      </div>
    </div>

    <form>
      <div class="form-group col-md-6">
        <label for="nome">Nome</label>
        <input type="hidden" id="id" name="id" />
        <input type="text" class="form-control" v-model="cliente.nome" id="nome" name="nome" placeholder="Digite o nome: " />
        <span> {{cliente.nome}}</span>
      </div>

      <div class="form-group col-md-6">
        <label for="nome">Telefone</label>
        <input
          type="text"
          class="form-control"
          id="telefone"
          name="telefone"
          v-model="cliente.telefone"
          placeholder="Digite o telefone: "
        />
      </div>

      <div class="form-group col-md-6">
        <label for="nome">Endereco</label>

        <input
          type="text"
          class="form-control"
          id="endereco"
          name="endereco"
          v-model="cliente.endereco"
          placeholder="Digite o endereco: "
        />
      </div>
      <button v-on:click="salvar()" type="button" class="btn btn-primary">Enviar</button>

      <div style="color:red">{{mensagem}}</div>
    </form>
    <hr />

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Endereco</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" v-bind:key="cliente.id">
          <td>{{cliente.id}}</td>
          <td>{{cliente.nome}}</td>
          <td>{{cliente.telefone}}</td>
          <td>{{cliente.endereco}}</td>
          <td>
            <button v-on:click="editar(cliente)" class="btn btn-primary">Editar</button>
          </td>
          <td>
            <button v-on:click="excluir(cliente.id)" class="btn btn-danger">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Clientes",
  props: {
    msg: String
  },
  data() {
    return {
      clientes: [],
      mensagem: "",
      nome: "",
      cliente: {nome:"", telefone:"", endereco:""}
    };
  },
  methods: {
    lista() {
       this.cliente = {nome:"", telefone:"", endereco:""}
      axios.get("https://localhost:44335/clientes").then(res => {
        console.log(res);
        this.clientes = res.data;
      });
    },

    salvar() {

      if(this.clientes.id){
        this.alterar()
        return
      }
      axios
        .post("https://localhost:44335/clientes", this.cliente)
        
        .then(() => {
          this.lista();
        });
    },

    excluir(id) {
      if (confirm("Confirmar a exclusão ?" + id)) {
        axios.delete("https://localhost:44335/clientes/" + id).then(() => {
          this.lista();
        });
      }
    },
    editar(cliente) {
      
      this.cliente = cliente;
    },
    alterar() {
     
       axios.put(
          "https://localhost:44335/clientes/" + this.cliente.id,
          this.cliente
        )
        .then(() => {
          this.lista();
         
        });
    }
  },

  created() {
    this.lista();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
