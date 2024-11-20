import React, { useState } from "react"
import './index.css'
import Btn from "../../../components/Btn";
import { useNavigate } from "react-router-dom";

export default function CadastroFornecedor(){

  const navigate = useNavigate();

    const [data, setData] = useState({
        forn_nome: '',
        forn_nomeFantasia: '',
        forn_cnpj: '',
        forn_status: ''
      });

      type dataItem = {
        forn_nome: string,
        forn_nomeFantasia: string,
        forn_cnpj: string,
        forn_status: number
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
        if (data.forn_nome === '' || data.forn_nomeFantasia === '' || data.forn_cnpj === `` || (data.forn_status !== '0' && data.forn_status !== "1")){
          alert("Campo de cadastro invalido")
          throw new Error('Campo de cadastro invalido!')
        }
        else {
          const response = await fetch("http://localhost:5000/fornecedor/");
          const jsonData: dataItem[] = await response.json();
          console.log(jsonData)

          jsonData.forEach(item => {
            if (data.forn_nome === item.forn_nome.toString()){
              alert('Esse produto ja existe!')
              throw new Error('Produto ja existente!')
            }
          })
        }
        const response = await fetch('http://localhost:5000/fornecedor/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        setData({
          forn_nome: '',
          forn_nomeFantasia: '',
          forn_cnpj: '',
          forn_status: ''
        });

        navigate('/fornecedor');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };


    return (
        <div>
            <div className="ProdTitle">
                <h1>Cadastro de fornecedor</h1>
            </div>
        <center>
        <div>
        <form onSubmit={EnvioData}>
        <div>
        <input
          type="text"
          id="forn_nome"
          name="forn_nome"
          placeholder="Nome do fornecedor"
          value={data.forn_nome}
          onChange={MudancaField}
        />
      </div>
      <div>
        <input
          type="text"
          id="forn_nomeFantasia"
          name="forn_nomeFantasia"
          placeholder="Nome fantasia"
          value={data.forn_nomeFantasia}
          onChange={MudancaField}
        />
      </div>
      <div>
        <input
          type="text"
          id="forn_cnpj"
          name="forn_cnpj"
          placeholder="Cnpj do fornecedor"
          value={data.forn_cnpj}
          onChange={MudancaField}
        />
      </div>
      <div>
        <input
        type="number"
          id="forn_status"
          name="forn_status"
          placeholder="Status do fornecedor"
          value={data.forn_status}
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