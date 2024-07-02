import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppLayoutContext } from "../../Layouts/MainLayout";

export default function Question_Edit() {
  const { API } = useContext(AppLayoutContext);
  const [test_text, setTest_text] = useState("");
  const [subject_id, setSubject_id] = useState("");
  const [correct_answer, setCorrect_answer] = useState("");
  const [additive_answer, setAdditive_answer] = useState([]);
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios(`${API}/api/users/subjects/all`)
      .then((res) => {
        setDatas(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAdditiveAnswerChange(e) {
    const value = e.target.value;
    const arrayValues = value.split(",").map((item) => item.trim());
    setAdditive_answer(arrayValues);
  }

  function handlerClick(e) {
    e.preventDefault();

    axios
      .put(`${API}/api/test-update/${id}`, {
        test_text: test_text,
        subject_id: subject_id,
        correct_answer: correct_answer,
        additive_answer: additive_answer,
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/Question_Index");
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
                    <h1>Test o'zgartirmoq</h1>
                    <Link to="/Question_Index" class="btn btn-primary">
                      Orqaga
                    </Link>
                  </div>
                  <div class="card">
                    <form action="">
                      <div class="card-body">
                        <div class="form-group">
                          <label for="name">Savol</label>
                          <input
                            onChange={(e) => setTest_text(e.target.value)}
                            type="text"
                            class="form-control"
                            id="name"
                          />
                        </div>

                        <div class="form-group">
                          <label for="categoriya">Fan</label>
                          <select
                            onChange={(e) => setSubject_id(e.target.value)}
                            class="form-control"
                            id="categoriya"
                          >
                            <option value="tanla">Tanlang...</option>
                            {datas.map((data) => {
                              return (
                                <option value={data._id} key={data._id}>
                                  {data.name}
                                </option>
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
                          <label for="option">Variantlar</label>
                          <input
                            onChange={handleAdditiveAnswerChange}
                            type="text"
                            class="form-control"
                            id="option"
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
