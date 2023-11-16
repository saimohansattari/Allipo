import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 50px;
  height: 100vh;
  background-color: #0b0d22;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Reusable table styled components
export const TablesForm = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  border: 1px solid white;
  height: 80vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
`;

export const TableHeader = styled.th`
  background-color: rgb(255, 255, 255);
  color: black;
  padding: 12px;
  text-align: left;
  position: sticky;
`;

export const TableData = styled.td`
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  padding: 10px;
  text-align: center;
`;

//Reusable styled Buttons
export const EditBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: green;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: Red;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
`;
