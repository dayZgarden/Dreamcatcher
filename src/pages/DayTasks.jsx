import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const DayTasks = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dateFromState = location?.state ? location?.state?.date : null;

  const [tasks, setTasks] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (!dateFromState) {
      navigate("/calendar");
    }
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
    const formData = new FormData(e.target);
    const newTask = {
      name: formData.get("taskName"),
      description: formData.get("taskDescription"),
      time: formData.get("taskTime"),
    };

    // Add task to tasks array
    setTasks([...tasks, newTask]);
  };

  
  

  return (
    <div className="min-h-screen bg-black">
      <div className="p-8 h-full">
        <div className="mx-auto  w-full max-w-[76rem] h-full">
          <button onClick={handleModalOpen} className="p-4 bg-blue-300 rounded-md ">Add New Task</button>
          <button onClick={()=> navigate('/calendar')} className="p-4 bg-blue-300 rounded-md ">Back to Calendar</button>
          {modalOpen && ( 
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-md">
                <h1 className="text-2xl font-semibold">Add New Task</h1>
                <form onSubmit={handleFormSubmission} className="flex flex-col">

                  <label className="text-lg font-semibold">Task Name</label>
                  <input name="taskName" className="border-2 border-black rounded-md p-2" type="text" />
                  

                  <label className="text-lg font-semibold">Task Description</label>
                  <input name="taskDescription" className="border-2 border-black rounded-md p-2" type="text" />

                  <label className="text-lg font-semibold">Task Time</label>
                  <input name="taskTime" className="border-2 border-black rounded-md p-2" type="time" />

                  <button className="bg-blue-300 rounded-md p-2 mt-4">Add Task</button>
                </form>
              </div>
            </div>
          )}
          <div className="flex w-full flex-wrap">
            {tasks?.map((task, index) => (
              <h1
                key={index}
                className="hover:border-black m-1 rounded-md bg-red-300 border-2 border-transparent transition-all duration-150  flex  w-[20%] text-[20px] font-semibold  h-[20vh] items-center justify-center"
              >
                {task.name} - {task.description} - {task.time}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTasks;
