import React, { useState } from "react"
import './index.css'
import Btn from "../../../components/Btn";
import { useNavigate } from "react-router-dom";

export default function EditarProduto(){

  const navigate = useNavigate();

    const [data, setData] = useState({
        prod_id: '',
        prod_nome: '',
        prod_preco: '',
        prod_status: ''
      });

      type dataItem = {
        prod_id: number,
        prod_nome: string,
        prod_preco: number,
        prod_status: number
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
        if (data.prod_id === '' || data.prod_nome === '' || data.prod_preco === '' || (data.prod_status !== '0' && data.prod_status !== "1")){
          alert("Campo de cadastro invalido")
          throw new Error('Campo de cadastro invalido!')
        }
        else {
          const response = await fetch("http://localhost:5000/produto/");
          const jsonData: dataItem[] = await response.json();
          console.log(jsonData)
        }
        const response = await fetch(`http://localhost:5000/produto/${data.prod_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        setData({
          prod_id: '',
          prod_nome: '',
          prod_preco: '',
          prod_status: ''
        });

        navigate('/');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };


    return (
        <div>
            <div className="ProdTitle">
                <h1>Edição de produto</h1>
            </div>
        <center>
        <div>
        <form onSubmit={EnvioData}>
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
          type="text"
          id="prod_nome"
          name="prod_nome"
          placeholder="Nome do produto"
          value={data.prod_nome}
          onChange={MudancaField}
        />
      </div>
      <div>
        <input
          type="number"
          id="prod_preco"
          name="prod_preco"
          placeholder="Preço do produto"
          value={data.prod_preco}
          onChange={MudancaField}
        />
      </div>
      <div>
        <input
        type="number"
          id="prod_status"
          name="prod_status"
          placeholder="Status do produto"
          value={data.prod_status}
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