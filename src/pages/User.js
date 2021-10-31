import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function User() {
    const history = useHistory();
    const [userInputs, setStudent] = useState({
        name: '',
        number: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setStudent({...userInputs, [e.target.name]: e.target.value })
    }

    const save = (e) => {
        e.preventDefault();
        
        const data = {
            name:userInputs.name,
            number:userInputs.number,
        }

        axios
          .post(`http://quiz-sys.dynamicx.lk/api/add-user`, data)
          .then((res) => {
            if (res.data.status === 200) {
              swal("Success!", res.data.message, "success");
              setStudent({
                name: "",
                number: "",
                error_list: [],
              });
              history.push("/quiz");
              // // history.push('/quiz');
              // browserHistory.push('/quiz');
            } else if (res.data.status === 422) {
              setStudent({ ...userInputs, error_list: res.data.validate_err });
            }
          });
    }

    return (
        <div>
            <div className="app1">
                
                    <form onSubmit={save} >
                        <div className="form-group mb-3">
                            <input type="text" name="name" onChange={handleInput} value={userInputs.name} className="form-control" placeholder="Full Name" />
                            <span className="text-danger">{userInputs.error_list.name}</span>
                        </div>
                        <div className="form-group mb-3">
                            <input type="text" name="number" onChange={handleInput} value={userInputs.number}  className="form-control" placeholder="Contact Number"/>
                            <span className="text-danger">{userInputs.error_list.number}</span>
                        </div>
                        <center><button type="submit" className="btn btn-danger">START THE GAME</button></center>      
                    </form>
                
            </div>
        </div>
    );

}

export default User
