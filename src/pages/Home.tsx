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
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
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

  const openDeleteModal = (index: number) => {
    setEditedIndex(index);
    setDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleEditSubmit = () => {
    const newData = [...data];
    newData[editedIndex].name = editedValue;
    setData(newData);
    closeEditModal();
  };

  const handleDeleteSubmit = () => {
    const newData = [...data];
    newData.splice(editedIndex, 1);
    setData(newData);
    closeDeleteModal();
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
                    </GreenBtn>

                    <RedBtn onClick={() => openDeleteModal(index)}>
                      Delete
                    </RedBtn>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </Table>
        </TablesForm>
      </MainContainer>

      {/* Edit Modal Form pop-up */}
      {isEditModalOpen && (
        <EditModalOverlay>
          <EditModal>
            <label>Edit Name 'column 1'</label>
            <InputFeild
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
            <br />
            <br />
            <GreenBtn onClick={handleEditSubmit}>Save</GreenBtn>
            <RedBtn onClick={closeEditModal}>Cancel</RedBtn>
          </EditModal>
        </EditModalOverlay>
      )}

      {/* Delete Modal from pop-up */}
      {isDeleteModalOpen && (
        <EditModalOverlay>
          <EditModal>
            <p>Are you sure delete this Row ?</p>
            <br />
            <br />
            <GreenBtn onClick={handleDeleteSubmit}>Yes</GreenBtn>
            <RedBtn onClick={closeDeleteModal}>No</RedBtn>
          </EditModal>
        </EditModalOverlay>
      )}
    </>
  );
}

export default Home;
