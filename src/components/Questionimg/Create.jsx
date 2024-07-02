import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";

import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AppLayoutContext } from "../../Layouts/MainLayout";
export default function Questionimg_Create() {
  const { API } = useContext(AppLayoutContext);
  const [level, setLevel] = useState("");
  const [test_text, setTest_text] = useState("");
  const [subject_id, setSubject_id] = useState("");
  const [correct_answer, setCorrect_answer] = useState("");
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();
  const uploadImage = useRef(null);

  useEffect(() => {
    axios(`${API}/api/users/subjects/all`)
      .then((res) => {
        setDatas(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handlerClick(e) {
    e.preventDefault();
    const formData = new FormData();
    let banner = uploadImage.current.files[0];
    formData.append("file", banner);
    formData.append("question_text", test_text);
    formData.append("level", level);
    formData.append("subject_id", subject_id);
    formData.append("correct_answer", correct_answer);

    axios
      .post(`${API}/api/testImgAdd`, formData, {
        headers: {
          "Content-Type": "application/multi-part",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/Questionimg_Index");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <body>
      <div id="app">
        <div class="main-wrapper main-wrapper-1">
          <div class="main-content">
            <section class="section">
              <div class="row">
                <div class="col-10">
                  <div class=" d-flex justify-content-between align-items-center">
                    <h1>Rasmli Test Yaratmoq</h1>
                    <Link to="/Questionimg_Index" class="btn btn-primary">
                      Orqaga
                    </Link>
                  </div>
                  <div class="card">
                    <form action="" method="POST" enctype="multipart/form-data">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="image">Test uchun Rasm</label>
                          <input
                            ref={uploadImage}
                            type="file"
                            class="form-control"
                            id="image"
                          />
                        </div>
                        <div class="form-group">
                          <label for="question">Savol</label>
                          <input
                            onChange={(e) => setTest_text(e.target.value)}
                            type="text"
                            class="form-control"
                            id="question"
                          />
                        </div>
                        <div class="form-group">
                          <label for="level">Level</label>
                          <input
                            onChange={(e) => setLevel(e.target.value)}
                            type="number"
                            class="form-control"
                            id="level"
                          />
                        </div>

                        <div class="form-group">
                          <label for="categoriya">Fan</label>
                          <select
                            onChange={(e) => setSubject_id(e.target.value)}
                            class="form-control"
                            id="categoriya"
                          >
                            {datas.map((data) => {
                              return (
                                <option value={data._id}>{data.name}</option>
                              );
                            })}
                          </select>
                        </div>
                        <div class="form-group">
                          <label for="answer">To'g'ri javob</label>
                          <input
                            onChange={(e) => setCorrect_answer(e.target.value)}
                            type="text"
                            class="form-control"
                            id="answer"
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
