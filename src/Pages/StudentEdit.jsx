import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function StudentEdit() {
    let {id} = useParams();
   
    const [loading, setLoading] = useState(true);
  const [inputErrorList, setInputErrorList] = useState({});
  const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/students/${id}/edit`).then((res) => {
      console.log(res);
      setStudent(res.data.student);
      setLoading(false);
      
    }).catch(function (error) {
        if (error.response) {
         
          if (error.response.status === 404) {
            alert(error.response.data.message);
            setLoading(false);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
            setLoading(false);
          }
        }
      });
  }, [id]);

  if (loading) {
    return (
        <>
      <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
      </>
      
    );
  }

  const handleInput = (e) => {
    e.persist();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateStudent = (e) => {
    e.preventDefault();
    const data = {
      name: student.name,
      email: student.email,
      phone: student.phone,
      course: student.course,
    };        

    axios
      .put(`http://127.0.0.1:8000/api/students/${id}/edit`, data)
      .then((res) => {
        alert(res.data.message);
        setLoading(false);
        
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
            setLoading(false);
          }
          if (error.response.status === 404) {
            alert(error.response.data.message);
            setLoading(false);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
            setLoading(false);
          }
        }
      });
  };

  if(Object.keys(student).length === 0){
    return(
        <div classNameName="container">
            <h4>No such Student Id Found</h4>
        </div>
    )
  }

  return (
    <div>
      <div classNameName="container mt-5">
        <div classNameName="row">
          <div classNameName="col-md-12">
            <div classNameName="card">
              <div classNameName="card-header">
                <h4>
                  Edit students
                  <Link to="/students" classNameName="btn btn-danger float-end">
                    Back
                  </Link>
                </h4>
              </div>
              <div classNameName="card-body">
                <form onSubmit={updateStudent}>
                    
                  <div classNameName="mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={student.name}
                      onChange={handleInput}
                      classNameName="form-control"
                    />
                    <span classNameName="text-danger">{inputErrorList.name}</span>
                  </div>
                  
                  <div classNameName="mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={student.email}
                      onChange={handleInput}
                      classNameName="form-control"
                    />
                    <span classNameName="text-danger">{inputErrorList.email}</span>
                  </div>
                  
                  <div classNameName="mb-3">
                    <label>Course</label>
                    <input
                      type="text"
                      name="course"
                      value={student.course}
                      onChange={handleInput}
                      classNameName="form-control"
                    />
                    <span classNameName="text-danger">{inputErrorList.course}</span>
                  </div>
                  
                  <div classNameName="mb-3">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={student.phone}
                      onChange={handleInput}
                      classNameName="form-control"
                    />
                    <span classNameName="text-danger">{inputErrorList.phone}</span>
                  </div>
                  
                  <div classNameName="mb-3">
                    <button type="submit" classNameName="btn btn-primary">
                      update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentEdit;
