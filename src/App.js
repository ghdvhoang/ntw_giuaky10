import { useState } from 'react';
import './App.css';

function App() {
  const initialJobs = [
    { name: "Bò" },
    { name: "Cún" },
    { name: "Bông" },
    { name: "Bon" }
  ]; 

  const [jobs, setJobs] = useState(initialJobs); 
  const [job, setJob] = useState('')   // input
  const [editingIndex, setEditingIndex] = useState(null); 

  const handleSubmit = () =>{
    setJobs(prev => [...prev, { name: job } ]
    )
    setJob('')
  }
  const handleDelete = (index) =>{
    setJobs( prevJobs =>  prevJobs.filter(( _, i) => i !== index))
  }
  const handleEditClick = (index) => {
    setEditingIndex(index)
  }

  return (
    <div>
      <div className='input-title'>
        <h1>Bảng tên nhân viên</h1>
        <input
          value={job}
          placeholder="biệt danh của bạn là gì"
          onChange={ event => setJob(event.target.value)}/>
        <button onClick={handleSubmit}> Tạo bảng tên</button>
      </div>
      <div className="column">
        <ul>
        {jobs.map((job, index) => (
          <li
          key={index}>
          <div class="task-container">
            <div className="li-wrap">
              <span class="task-text">Hello My name is</span>
              <button class="delete-button" onClick = { () => handleDelete(index)}>
                x
              </button>
          </div>
          {editingIndex === index ? (
            <input 
              type="text" 
              value={job.name}
              onChange={(e) => {
                const newJobs = [...jobs];
                newJobs[index].name = e.target.value;
                setJobs(newJobs);
              }}/>
            ) : ( <span onClick={() => handleEditClick(index)}>{job.name}</span>
          )}
    </div>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
