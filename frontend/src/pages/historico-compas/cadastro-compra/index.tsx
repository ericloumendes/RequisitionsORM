import React, { useState } from "react"
import './index.css'
import Btn from "../../../components/Btn";
import { useNavigate } from "react-router-dom";

export default function CadastroCompra(){

  const navigate = useNavigate();

    const [data, setData] = useState({
        forn_id: '',
        prod_id: '',
        prod_quantidade: ''
      });

      type dataItem = {
        forn_status: boolean;
        prod_status: boolean;
        forn_id: number,
        prod_id: number,
        prod_quantidade: number
      }

    const MudancaField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData({
          ...data,
      [e.target.id]: e.target.value

      });
    }

    const EnvioData = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      try {
        let produtoExists = false;
        let fornecedorExists = false;
        if (data.forn_id === '' || data.prod_id === ''){
          alert("Campo de cadastro invalido")
          throw new Error('Campo de cadastro invalido!')
        }
        else {
          const response = await fetch("http://localhost:5000/produto/");
          const jsonData: dataItem[] = await response.json();
          console.log(jsonData)

          jsonData.forEach(item => {
            if (data.prod_id === item.prod_id.toString() && item.prod_status === true){
              produtoExists = true;
            }
          })

          if (produtoExists == false){
            alert('Produto não existe!')
            throw new Error('Produto inexistente')
          }

          const response1 = await fetch("http://localhost:5000/fornecedor/");
          const jsonData1: dataItem[] = await response1.json();
          console.log(jsonData1)

          jsonData1.forEach(item => {
            if (data.forn_id === item.forn_id.toString() && item.forn_status === true){
              fornecedorExists = true;
            }
          })

          if (fornecedorExists == false){
            alert('Fornecedor não existe!')
            throw new Error('Fornecedor inexistente')
          }
        }
        const response = await fetch('http://localhost:5000/historico-compras/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        setData({
          forn_id: '',
          prod_id: '',
          prod_quantidade: ''
        });

        navigate('/hist-compras');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };


    return (
        <div>
            <div className="ProdTitle">
                <h1>Cadastro de compra</h1>
            </div>
        <center>
        <div>
        <form onSubmit={EnvioData}>
        <div>
        <input
          type="number"
          id="forn_id"
          name="forn_id"
          placeholder="Id do fornecedor"
          value={data.forn_id}
          onChange={MudancaField}
        />
      </div>
      <div>
        <input
          type="number"
          id="prod_id"
          name="prod_id"
          placeholder="Id do produto"
          value={data.prod_id}
          onChange={MudancaField}
        />
      </div>
      <div>
        <input
          type="number"
          id="prod_quantidade"
          name="prod_quantidade"
          placeholder="Quantidade comprada"
          value={data.prod_quantidade}
          onChange={MudancaField}
        />
      </div>
      <Btn label="Enviar" typeOf={"submit"} />
    </form>
    </div>
    </center>
        </div>
    )
}