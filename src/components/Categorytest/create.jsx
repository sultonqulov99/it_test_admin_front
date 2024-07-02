import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import { AppLayoutContext } from "../../Layouts/MainLayout";

export default function Catigorytest_Create() {
  const { API } = useContext(AppLayoutContext);
  const [list, setList] = useState(false);
  const [text, setText] = useState("");
  let navigate = useNavigate();
  function hedelClick(e) {
    e.preventDefault();
    axios
      .post(`${API}/api/statusAdd`, {
        name: text,
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/Catigorytest_Index");
        }
      })
      .catch((err) => {
        console.log(err);
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
                    <h1>Kategoriya Yaratmoq</h1>
                    <Link to="/Catigorytest_Index" class="btn btn-primary">
                      Orqaga
                    </Link>
                  </div>
                  <div class="card">
                    <form>
                      <div class="card-body">
                        <div class="form-group">
                          <label>Kategoriya nomi</label>
                          <input
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <button
                            onClick={hedelClick}
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
