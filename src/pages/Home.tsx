// import React, { useState, useEffect } from "react";
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
//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [editedValue, setEditedValue] = useState("");
//   const [editedIndex, setEditedIndex] = useState(-1);

//   useEffect(() => {
//     axios
//       .get("https://assets.alippo.com/catalog/static/data.json")
//       .then((response) => setData(response.data));
//   }, []);

//   const openEditModal = (index: number, value: string | null) => {
//     setEditedValue(value || ""); // Use the value if it exists, otherwise use an empty string
//     setEditedIndex(index);
//     setEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setEditModalOpen(false);
//   };

//   const handleEditSubmit = () => {
//     // Update the local data directly does not in API because there is no Id's for data
//     const newData = [...data];
//     newData[editedIndex].name = editedValue;
//     setData(newData);

//     // Close the modal
//     closeEditModal();
//   };

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
//                   <TableData>{Rowdata.name}</TableData>
//                   <TableData>{Rowdata.age}</TableData>
//                   <TableData>{Rowdata.city}</TableData>
//                   <TableData>{Rowdata.pinCode}</TableData>
//                   <TableData>
//                     <EditBtn onClick={() => openEditModal(index, Rowdata.name)}>
//                       Edit
//                     </EditBtn>{" "}
//                     <DeleteBtn>Delete</DeleteBtn>
//                   </TableData>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </TablesForm>
//       </MainContainer>

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <div className="edit-modal">
//           <input
//             type="text"
//             value={editedValue}
//             onChange={(e) => setEditedValue(e.target.value)}
//           />
//           <button onClick={handleEditSubmit}>Save</button>
//           <button onClick={closeEditModal}>Cancel</button>
//         </div>
//       )}
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
  GreenBtn,
  RedBtn,
  EditModalOverlay,
  EditModal,
  InputFeild,
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
    setEditedValue(value || "");
    setEditedIndex(index);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const handleEditSubmit = () => {
    const newData = [...data];
    newData[editedIndex].name = editedValue;
    setData(newData);
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
                    <GreenBtn
                      onClick={() => openEditModal(index, Rowdata.name)}
                    >
                      Edit
                    </GreenBtn>{" "}
                    <RedBtn>Delete</RedBtn>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </Table>
        </TablesForm>
      </MainContainer>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditModalOverlay>
          <EditModal>
            <InputFeild
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
            <GreenBtn onClick={handleEditSubmit}>Save</GreenBtn>
            <RedBtn onClick={closeEditModal}>Cancel</RedBtn>
          </EditModal>
        </EditModalOverlay>
      )}
    </>
  );
}

export default Home;
