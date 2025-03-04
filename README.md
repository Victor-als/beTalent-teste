# BeTalent - Tabela de Funcionários

O projeto conssite em uma tabela de funcionarios que permite ser feita uma busca por nome, cargo e numero de telefone.

### Observações:
Ao baixar o db.json do repositório disponibilizado, notei que havia apenas 9 funcionários, enquanto no layout deveriam ser 10. Por isso, adicionei o funcionário que faltava. Além disso, como no Figma foram incluídas 12 imagens para fotos de funcionários, acrescentei mais dois funcionários ao db.json. Para acomodar essa mudança, implementei um scroll na tabela.

Também adicionei um indicador de carregamento enquanto os dados são obtidos e uma mensagem de "Nenhum funcionário encontrado" caso a busca não retorne resultados.

# Imagem da tela.
![image](https://github.com/user-attachments/assets/9738845c-5873-42fa-8dc9-19280504c2c8)
![image](https://github.com/user-attachments/assets/8dd43a14-74d1-4363-863b-0f1c365fc80a)
![image](https://github.com/user-attachments/assets/5f9c5cf7-15a8-4db8-9502-f7d7ef5f97ac)
![image](https://github.com/user-attachments/assets/17c79a8c-0470-4344-a96d-28effa5a3ba9)





- ## Tenologias usadas no projeto.

- React.Js (vite)
- CSS
- Axios
- TypeScript

## Para rodar o projeto localmente

1. Clone o repositório:

```sh
$ git clone https://github.com/Victor-als/beTalent-teste
```
2. Instale as dependências:
```sh
npm install
```
3. Rode o Json Server?
```sh
 json-server --watch db.json --port 5000
```
4. Para rodar o projeto localmente:
```sh
npm run dev
```


