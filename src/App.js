import React from 'react';

import { mountRootParcel } from 'single-spa';
import StudentForm from './StudentForm';



function App() {
  const mountStudentForm = () => {
    const studentFormParcel = mountRootParcel(
      StudentForm,
      {
        domElement: document.getElementById('student-form-container')
      }
    );
    studentFormParcel.mount();
  };

  return (
    <div className="App">
      <h1>StudentApp2</h1>
      <button onClick={mountStudentForm}>Load Student Form</button>
      <div id="student-form-container"></div>
    </div>
  );
}

export default App;
