import styled from 'styled-components';

const TaskFormWrapper = styled.div`
  font-family: Inter, sans-serif;
  width: 267px;
  max-height: 200px;
  background-color: #fff;
  margin-top: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
      font-size: 12px;
      color: #343434;
      font-weight: 500;
      
    }

    input[type="text"],
    select {
      min-width: 126px;
      min-height: 42px;
      margin-top: 8px;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      border: 1px solid #F6F6F6;
      border-radius: 4px;
      font-size: 14px;
      color: #343434;
      background-color: #F6F6F6; 
      font-weight: 600;
      -webkit-appearance: none; 
      -moz-appearance: none;
      appearance: none;
      background-repeat: no-repeat;
      background-position: right center;
      padding-right: 70px; 

    }

    input[type="text"] {
    @media (min-width: 767px) {
      min-width: 340px;
      min-height: 46px;
    }}

    select {
      @media (min-width: 767px) {
        min-width: 163px;
        padding: 15px
      }}

    

    button[type="submit"] {
      min-width: 135px;
      height: 42px;
      padding: 15px auto;
      border-radius: 8px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
      font-size: 14px;
      margin-top: 10px;
    }


  }

  button[type="button"] {
    min-width: 118px;
    height: 42px;
    padding: 15px auto;
    border-radius: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;

    @media (min-width: 767px) {
      min-width: 144px;
      min-height: 48px;
    }

  }


  button[type="submit"].addBtn {
    @media (min-width: 767px) {
      min-width: 182px;
      min-height: 48px;
    }
  }

  input[type="checkbox"] {
    display: none;
  }
  
  input[type="checkbox"] + span::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #000; 
    background-color: #fff; 
    margin-right: 10px; 

  }
  input.lowCheck:checked + span::before {
    border: 3px solid #BFDFFF; 
  }
  
  input.midCheck:checked + span::before {
    border: 3px solid #FFDCA0; 
  }
  
  input.highCheck:checked + span::before {
    border: 3px solid #FFA0B3; 
  }
  


  input.lowCheck + span::before {
    border: 2px solid #72C2F8; 
    background-color: #72C2F8; 
  }
  input.midCheck + span::before {
    border: 2px solid #F3B249; 
    background-color: #F3B249; 
  }
  input.highCheck + span::before {
    border: 2px solid #EA3D65; 
    background-color: #EA3D65; 
    
  }

  input.lowCheck + span::before,
  input.midCheck + span::before,
  input.highCheck + span::before { 
  content: "";
  display: inline-block;
  width: 10px; 
  height: 10px; 
  border-radius: 50%;
  margin-right: 5px; 
  font-weight:600;
  cursor: pointer;


}

span.Check {
  font-size: 12px;
  @media (min-width: 767px) {
    font-size: 14px;
  }
}




`;

const TimeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

`;

export { TaskFormWrapper, TimeDiv };