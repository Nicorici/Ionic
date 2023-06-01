import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ReactDataGrid, { Row } from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

const columns = [
  { key: 'patientName', name: 'Patient Name' },
  { key: 'patientSSN', name: 'Patient SSN' },
  { key: 'patientAge', name: 'Patient Age' },
  { key: 'studyID', name: 'Study ID' },
  { key: 'studyDate', name: 'Study Date' },
];

const data = [
  { id: 1, patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
   { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  { patientName: 'John Doe', patientSSN: '123-45-6789', patientAge: 35, studyID: 'ABC123', studyDate: '2023-05-26' },
  // Add more data rows as needed
];

const Dashboard: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<ReadonlyArray<typeof Row>>([]);

  const handleRowSelect = (rows: ReadonlyArray<typeof Row>) => {
    setSelectedRows(rows);
  };

  const rowGetter = (index: number) => {
    return data[index];
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ReactDataGrid
          columns={columns}
        //   rowGetter={rowGetter}
          rowsCount={data.length}
          rowSelection={{
            showCheckbox: true,
            enableShiftSelect: true,
            onRowsSelected: handleRowSelect,
            onRowsDeselected: handleRowSelect,
            selectBy: {
              keys: { rowKey: 'id', values: selectedRows.map((row) => row.row.id) },
            },
          }}
          rowStyle={(index) => ({
            borderBottom: '1px solid #ccc',
            backgroundColor: selectedRows.some((row) => row.row.id === data[index].id) ? '#e0e0e0' : 'white',
          })}
        />
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;