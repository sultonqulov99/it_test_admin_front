import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";

import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AppLayoutContext } from "../../Layouts/MainLayout";
export default function Courses_Edit() {
  const { API } = useContext(AppLayoutContext);
  const [list, setList] = useState(false);
  const [fan_nomi, setfan_nomi] = useState("");
  const [file, setFile] = useState("");
  const { id } = useParams();
  let navigate = useNavigate();

  function handlerClick(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", fan_nomi);
    formData.append("fileName", file);
    axios
      .put(`${API}/api/subject-update/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
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
                    <h1>Fanni O'zgartirmoq</h1>
                    <Link to="/Courses_index" class="btn btn-primary">
                      Orqaga
                    </Link>
                  </div>
                  <div class="card">
                    <form action="">
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
                          <button
                            onClick={handlerClick}
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
