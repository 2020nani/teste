import styled from 'styled-components';
export const Container = styled.div `
width:96vw;
margin-left:2vw;
margin-bottom:2vh;
display : flex;
flex-direction:column;
background-color:white;
border-radius: 5px;
box-shadow: 4px 4px 8px 4px  rgba(58, 59, 69, .15);

table{
    width:90vw;
    margin-left: 2vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
    
}
th{
    display:flex;
    align-items: flex-start;
    font-size: 1.2rem;
    border-bottom: 1px solid #E3E6F0;
    border-top: 1px solid #E3E6F0;
    
}
td{
    display: flex;
    flex-direction: row;
    text-align: flex-start;
    font-size: 1.2rem;
    border-bottom: 1px solid #E3E6F0;
    p{
      width:10vw;
    }
    button{
      width:10vw;
      margin-left:40vw;
      border: none;
      background-color:white;
      color: blue
      
    }
    
    
}
@media(min-width: 700px) {
  width: 100vw
  margin-left: 0;
  font-size: 10px;
}
`

export const HeaderTabela = styled.div `
width: 96vw;
display : flex;
justify-content:flex-start;
background-color:#F8F9FC;
border-radius: 3px;
box-shadow: 4px 4px 8px 4px  rgba(58, 59, 69, .15);
h1{
  margin-left: 1vw;
  color:blue
}

`