import React, { useState } from 'react';

import InputMask from 'react-input-mask';

import api from '../../services/api';
import apiViacep from '../../services/api-cep';


import { useHistory } from 'react-router-dom';

import { toast } from "react-toastify";

import './style.scss';


export default function Cadastro() {
    const [nome, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [rg, setRg] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [rua, setRua] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('')


    const history = useHistory();




    const handdleEndereco = (cep) => {
        apiViacep.get(cep + '/json', {

        }).then((response => {
            if (response.data.erro) {
                toast.error("Digite um cep válido")
            }
            const endereco = response.data;

            setRua(endereco.logradouro);
            setComplemento(endereco.complemento);
            setBairro(endereco.bairro);
            setCidade(endereco.localidade);
            setUf(endereco.uf);
        }))
        // .catch((error) => {



        // });
    }



    const validaCPF = (strCPF) => {
        let soma;
        let resto;
        let cpf = ""

        for (let i = 0; i < strCPF.toString().length; i++) {
            let char = strCPF.substring(i, i + 1);
            if (char !== "." && char !== "-")
                cpf += char;
        }
        soma = 0;
        if (cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999")
            return false;

        for (let i = 1; i <= 9; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;



        if ((resto === 10) || (resto === 11))
            resto = 0;
        if (resto !== parseInt(cpf.substring(9, 10)))
            return false;



        soma = 0;
        for (let i = 1; i <= 10; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11))
            resto = 0;
        if (resto !== parseInt(cpf.substring(10, 11)))
            return false;

        return true;


    }


    const verificaCampos = (campo, qtd) => {
        const validador = campo.replace(/[^0-9]+/g, '');
        return (validador !== "" && validador.length === qtd)
    }

    const verificaCPF = (e) => {
        const campo = e.target.value
        const cpf = campo.replace(/[^0-9]+/g, '');


        if (!verificaCampos(campo, 11)) {
            e.target.focus()
            toast.warn("Por favor, digite um cpf com 11 dígitos")
        } else {
            if (!validaCPF(cpf)) {
                e.target.focus()
                toast.warn("Opa! Esse CPF não é válido")
            }
        }
    }

    const verificaTelefone = (e) => {
        const campo = e.target.value
        if (!verificaCampos(campo, 10)) {
            e.target.focus()
            toast.warn("Digita um telefone válido")
        }
    }



    const handdleCep = (e) => {
        //remove tudo que não for número
        const cepSemMascara = cep.replace(/[^0-9]+/g, '');
        //Valida se o cep tem 8 dígitos
        (cepSemMascara !== "" && cepSemMascara.length === 8) ? (handdleEndereco(cepSemMascara)) : toast.warn("Cep não preenchido completamente");
    }

    async function handleRegister(e) {

        e.preventDefault();

        const cliente = {
            cpf,
            rg,
            telefone,

            usuario: {
                nome,
                email,
                senha
            },
            endereco: {

                cidade,
                complemento,
                numero,
                bairro,
                rua,
                uf,
                cep
            }

        }


        try {
            await api.post('clientes', cliente)
            toast.success("Cadastro realizado com sucesso");
            history.push("/login")

        } catch (err) {
            toast.error('Erro no cadastro, tente novamente')
        }

    }

    function validarSenha() {
        let senha1 = document.getElementById('senha').value;
        let senha2 = document.getElementById('rep_senha').value;
        if (senha1 !== '' && senha2 !== '') {
            if (senha1 === senha2) {
                document.getElementById('confirmacao').style.color = '#008B45'
                document.getElementById('confirmacao').innerHTML = "Senhas conferem"
            } else {
                document.getElementById('confirmacao').style.color = '#FF6347'
                document.getElementById('confirmacao').innerHTML = "Senhas não conferem"
            }
        } else {
            document.getElementById('confirmacao').style.color = ''
            document.getElementById('confirmacao').innerHTML = ''
        }
    }



    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1> Faça seu cadastro</h1>

                    <form name="formCadastro" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Nome"
                            required
                            value={nome}
                            onChange={e => setName(e.target.value)}
                        />
                        <input type="email"
                            placeholder="E-mail"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Senha"
                            type="password"
                            onKeyUp={validarSenha}
                            id="senha"
                            required
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        <input
                            placeholder="Confirme a senha"
                            type="password"
                            onKeyUp={validarSenha}
                            id="rep_senha"
                            required
                        />
                        <tr>
                            <td colSpan="2">
                                <p id="confirmacao">

                                </p>
                            </td>
                        </tr>
                        <InputMask
                            mask="999.999.999-99"
                            type="text"
                            placeholder="Cpf"
                            required
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                            onBlur={e => { verificaCPF(e) }}
                        />
                        <InputMask
                            type="text"
                            placeholder="Rg"
                            mask="99.999.999-9"
                            required
                            value={rg}
                            onChange={e => setRg(e.target.value)}
                        />
                        <InputMask
                            mask="(99) 99999-9999"
                            placeholder="Telefone"
                            type="tel"
                            required
                            onBlur={e => { verificaTelefone(e) }}
                            value={telefone}
                            // onChange={e => setTelefone(e.target.value)}
                        />
                        <InputMask
                            mask="99999-999"
                            placeholder="Cep"
                            required
                            value={cep}
                            onChange={e => setCep(e.target.value)}
                            onBlur={e => handdleCep(e)}
                        />
                        <div className="input-group">
                            <input
                                style={{ width: 290 }}
                                placeholder="Rua"
                                value={rua}
                                required
                                onChange={e => setRua(e.target.value)}
                            />
                            <input
                                style={{ width: 80 }}
                                type="number"
                                placeholder="Nº"
                                required
                                value={numero}
                                onChange={e => setNumero(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                style={{ width: 190 }}
                                placeholder="Complemento"
                                value={complemento}
                                onChange={e => setComplemento(e.target.value)}
                            />
                            <input
                                style={{ width: 180 }}
                                placeholder="Bairro"
                                value={bairro}
                                onChange={e => setBairro(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                style={{ width: 290 }}
                                placeholder="Cidade"
                                required
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                            />
                            <input
                                style={{ width: 80 }}
                                placeholder="UF"
                                required
                                maxLength="2"
                                value={uf}
                                onChange={e => setUf(e.target.value)}
                            />
                        </div>


                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </section>
            </div>
        </div>
    )
}