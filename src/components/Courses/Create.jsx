import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";

import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppLayoutContext } from "../../Layouts/MainLayout";

export default function Courses_Create() {
  const { API } = useContext(AppLayoutContext);
  const [list, setList] = useState(false);
  const [fan_nomi, setfan_nomi] = useState("");
  const [data, setData] = useState([]);
  const [status_id, setStatus_id] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios(`${API}/api/users/status/all`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function hedelSaqlash(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", fan_nomi);
    formData.append("status_id", status_id);
    formData.append("fileName", file);
    console.log(fan_nomi, file, status_id);

    axios
      .post(`${API}/api/subjectAdd`, formData, {
        headers: {
          "Content-Type": "application/multi-part",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/Courses_index");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <body
      class={
        list
          ? "light light-sidebar theme-white sidebar-mini"
          : "light light-sidebar theme-white"
      }
    >
      <div id="app">
        <div class="main-wrapper main-wrapper-1">
          <div class="main-content">
            <section class="section">
              <div class="row">
                <div class="col-10">
                  <div class=" d-flex justify-content-between align-items-center">
                    <h1>Fan Yaratmoq</h1>
                    <Link to="/Courses_index" class="btn btn-primary">
                      Orqaga
                    </Link>
                  </div>
                  <div class="card">
                    <form>
                      <div class="card-body">
                        <div class="form-group">
                          <label for="name">Fan nomi</label>
                          <input
                            onChange={(e) => setfan_nomi(e.target.value)}
                            type="text"
                            class="form-control"
                            id="name"
                          />
                        </div>
                        <div class="form-group">
                          <label for="name">Fan rasmi</label>
                          <input
                            onChange={(e) => setFile(e.target.files[0])}
                            type="file"
                            class="form-control"
                            id="name"
                          />
                        </div>
                        <div class="form-group">
                          <label for="categoriya">Kategoriya</label>
                          <select
                            onChange={(e) => setStatus_id(e.target.value)}
                            class="form-control"
                            id="categoriya"
                          >
                            {data.map((el) => {
                              return <option value={el._id}>{el.name}</option>;
                            })}
                          </select>
                        </div>

                        <div class="form-group">
                          <button
                            onClick={hedelSaqlash}
                            type="submit"
                            class="btn btn-success"
                          >
                            Saqlash
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </body>
  );
}
