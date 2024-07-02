import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import { AppLayoutContext } from "../../Layouts/MainLayout";

export default function Catigorytest_Edit() {
  const { API } = useContext(AppLayoutContext);
  const { id } = useParams();
  const [list, setList] = useState(false);
  const [text, setText] = useState();
  let navigate = useNavigate();

  function hedel_Edit(e) {
    e.preventDefault();
    axios
      .put(`${API}/api/status-update/${id}`, {
        name: text,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/Catigorytest_Index");
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
          <div class="navbar-bg"></div>
          <div class="main-content">
            <section class="section">
              <div class="row">
                <div class="col-10">
                  <div class=" d-flex justify-content-between align-items-center">
                    <h1>Kategoriya O'zgartirmoq</h1>
                    <Link to="/Catigorytest_Index" class="btn btn-primary">
                      Orqaga
                    </Link>
                  </div>
                  <div class="card">
                    <form action="">
                      <div class="card-body">
                        <div class="form-group">
                          <label>Kurs nomi</label>
                          <input
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <button
                            onClick={hedel_Edit}
                            type="submit"
                            class="btn btn-success"
                          >
                            Oz'gartirish
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
