// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   MainContainer,
//   TablesForm,
//   TableHeader,
//   TableData,
//   Table,
//   TableHead,
//   EditBtn,
//   DeleteBtn,
// } from "../components/Styledcomponents";

// function Home() {
//   const [data, setData] = useState<any[]>([]);
//   useEffect(() => {
//     axios
//       .get("https://assets.alippo.com/catalog/static/data.json")
//       .then((response) => setData(response.data));
//   }, []);
//   return (
//     <>
//       <MainContainer>
//         <TablesForm>
//           <Table>
//             <TableHead>
//               <tr>
//                 <TableHeader>SL. No</TableHeader>
//                 <TableHeader>Name</TableHeader>
//                 <TableHeader>Age</TableHeader>
//                 <TableHeader>City</TableHeader>
//                 <TableHeader>Pin code</TableHeader>
//                 <TableHeader>Actions</TableHeader>
//               </tr>
//             </TableHead>
//             <tbody>
//               {data?.map((Rowdata, index) => (
//                 <tr key={index}>
//                   <TableData>{index + 1}</TableData>
//                   {/* In the API there is no Id's for data */}
//                   <TableData>{Rowdata.name}</TableData>
//                   <TableData>{Rowdata.age}</TableData>
//                   <TableData>{Rowdata.city}</TableData>
//                   <TableData>{Rowdata.pinCode}</TableData>
//                   <TableData>
//                     <EditBtn>Edit</EditBtn> <DeleteBtn>Delete</DeleteBtn>
//                   </TableData>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </TablesForm>
//       </MainContainer>
//     </>
//   );
// }

// export default Home;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MainContainer,
  TablesForm,
  TableHeader,
  TableData,
  Table,
  TableHead,
  EditBtn,
  DeleteBtn,
} from "../components/Styledcomponents";

function Home() {
  const [data, setData] = useState<any[]>([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedValue, setEditedValue] = useState("");
  const [editedIndex, setEditedIndex] = useState(-1);

  useEffect(() => {
    axios
      .get("https://assets.alippo.com/catalog/static/data.json")
      .then((response) => setData(response.data));
  }, []);

  const openEditModal = (index: number, value: string | null) => {
    setEditedValue(value || ""); // Use the value if it exists, otherwise, use an empty string
    setEditedIndex(index);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleEditSubmit = () => {
    // Update the local data directly
    const newData = [...data];
    newData[editedIndex].name = editedValue;
    setData(newData);

    // Close the modal
    closeEditModal();
  };

  return (
    <>
      <MainContainer>
        <TablesForm>
          <Table>
            <TableHead>
              <tr>
                <TableHeader>SL. No</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Age</TableHeader>
                <TableHeader>City</TableHeader>
                <TableHeader>Pin code</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </TableHead>
            <tbody>
              {data?.map((Rowdata, index) => (
                <tr key={index}>
                  <TableData>{index + 1}</TableData>
                  <TableData>{Rowdata.name}</TableData>
                  <TableData>{Rowdata.age}</TableData>
                  <TableData>{Rowdata.city}</TableData>
                  <TableData>{Rowdata.pinCode}</TableData>
                  <TableData>
                    <EditBtn onClick={() => openEditModal(index, Rowdata.name)}>
                      Edit
                    </EditBtn>{" "}
                    <DeleteBtn>Delete</DeleteBtn>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </Table>
        </TablesForm>
      </MainContainer>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="edit-modal">
          <input
            type="text"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button onClick={handleEditSubmit}>Save</button>
          <button onClick={closeEditModal}>Cancel</button>
        </div>
      )}
    </>
  );
}

export default Home;
