import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:100vh;
`;

export const ContainerInterna = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  height:40vh;
  padding: 20px 0;
  width:95%;
`;

export const FormModal  = styled.form`
margin:1rem;
margin-left:0;
[type=text]{
  display: block;
  padding: .5rem;
  background: transparent;
  vertical-align: middle;
  width: 100%;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  font-size: .95rem;
}

[type=text]:focus {
  outline: none;
  border: 1px solid #1E6BD6;
} 
label {
  font-weight: 600;
  font-size: .9rem;
  display: block;
  margin: .5rem 0;
}
input {  
  &::placeholder {
    color: #999;
  }
}
button {
  margin-left: 7.5px;
  margin-top:1rem;
  color: #fff;
  font-size: 16px;
  background: #00e971;
  height: 40px;
  border: 0;
  border-radius: 5px;
  width: 100%;
}

label[for="visualisar"],
input[name="visualisar"]{
  display:block;
}
label[title="editar"],
input[title="editar"],
button[title="visualisar"]{
  display:none !important;
}

button[title="editar"]{
  display:block;
}
a {
  font-size: 16;
  font-weight: bold;
  color: #999;
  text-decoration: none;
}
`;
export const Form = styled.form`
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: auto;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 100px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 4px 4px 4px 4px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #00e971;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;

export const Buscar = styled.form`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: auto;
    max-height:100px;
    margin: 10px 0 40px;
  }
  ul{
    list-style: none;
    width: 100%;
    padding:0;
    display:inline-flex;
    justify-content: center;
    align-content: center;
    margin: 5px 0;
  }

  ul li {
    margin:5px;
  }

  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 15px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
    border-radius: 4px 4px 4px 4px;
    color: #777;
    font-size: 15px;
    width: 90%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #00e971;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    cursor:poiter;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
`;

export const Cadastrar = styled.a`
background: #00e971;
font-size: 35px;
height: 40px;
color: #fff;
text-align: center;
padding: 0 10px;
border-radius: 50%;
cursor:poiter;
a[title="Cadastrar"]{
  color: #fff;
  font-weight: 900;
  cursor:poiter;
}
`;

export const Table = styled.table`
width: 100%;
background: #fff;
padding: 0 5px;
border-spacing: 1px;
border: 1px solid #dddddd;
border-radius: 4px;
margin-bottom: 20px;
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;  
}

td,th {  
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`;

export const Icon = styled.i`
img{
  width:20px;
  height:20px;
  margin: 0 4px;
  cursor:pointer;
}
`;

export const Section = styled.section`
  display: block;
  align-items: center;
  justify-content: center;
  margin:10px;
  h1{
    text-align:center;
    color:#00e971;
  }
  p{
    text-align:center;
  }
`;