
import React from 'react';
import StudentForm from './StudentForm';

function App() {
  const handleSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="App">
      <h1>StudentApp2</h1>
      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;