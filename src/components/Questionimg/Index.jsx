import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import USER_IMG from "../../assets/img/user.png";
import img_logo from "../../assets/img/It live logO.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Questionimg_Index() {
  const [list, setList] = useState(false);
  const [questionTests, setQuestionTests] = useState([]);
  const [count, setCount] = useState(false);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    axios
      .get("https://it-test-backend.onrender.com/api/testImg/all")
      .then((res) => {
        setQuestionTests(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://it-test-backend.onrender.com/api/users/subjects/all"
        );
        const categoryMap = {};
        res.data.data.forEach((category) => {
          categoryMap[category._id] = category.name;
        });
        setCategories(categoryMap);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  function handlerDelete(id) {
    axios
      .delete(`https://it-test-backend.onrender.com/api/delete-testImg/${id}`)
      .then((res) => {
        setCount(count - 1);
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
      {/* <!-- <div class="loader"></div> --> */}
      <div id="app">
        <div class="main-wrapper main-wrapper-1">
          {/* <!-- Main Content --> */}
          <div class="main-content">
            <section class="section">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header d-flex justify-content-between">
                      <h4>Rasmli Testlar</h4>
                      <Link to="/Questionimg_Create" class="btn btn-primary">
                        Test qo'shmoq
                      </Link>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <div
                          id="table-1_wrapper"
                          class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                        >
                          <div class="row">
                            <div class="col-sm-12">
                              <table
                                class="table table-striped dataTable no-footer"
                                id="table-1"
                                role="grid"
                                aria-describedby="table-1_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      class="text-center sorting_asc"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-sort="ascending"
                                      aria-label="
                              #
                            : activate to sort column descending"
                                    >
                                      #
                                    </th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Rasmli savol
                                    </th>

                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Level
                                    </th>

                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Fan
                                    </th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Savol{" "}
                                    </th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      To'g'ri javob{" "}
                                    </th>

                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Action: activate to sort column ascending"
                                    >
                                      Holat
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {questionTests.map((el, index) => {
                                    return (
                                      <tr role="row" class="odd">
                                        <td class="sorting_1">{index + 1}</td>
                                        <td>
                                          <img
                                            src={
                                              "https://it-test-backend.onrender.com/" +
                                              el.img
                                            }
                                            alt=""
                                            width="80"
                                            height="50"
                                          />
                                        </td>
                                        <td>{el.level}</td>
                                        <td>
                                          {categories[el.subject_id] ||
                                            "Noma'lum"}
                                        </td>
                                        <td>{el.question_text}</td>
                                        <td>{el.correct_answer}</td>

                                        <td class="d-flex">
                                          <a
                                            href="./edit.html"
                                            class="btn btn-success"
                                          >
                                            Edit
                                          </a>
                                          <a
                                            onClick={() => {
                                              window.confirm(
                                                "Rostdan o'chirmoqchimisiz"
                                              ) && handlerDelete(el._id);
                                            }}
                                            class="btn btn-danger"
                                          >
                                            O'chirish
                                          </a>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-sm-12 col-md-5">
                              <div
                                class="dataTables_info"
                                id="table-1_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 1 to 1 of 1 entries
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-7">
                              <div
                                class="dataTables_paginate paging_simple_numbers"
                                id="table-1_paginate"
                              >
                                <ul class="pagination">
                                  <li
                                    class="paginate_button page-item previous disabled"
                                    id="table-1_previous"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx="0"
                                      tabindex="0"
                                      class="page-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li class="paginate_button page-item active">
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx="1"
                                      tabindex="0"
                                      class="page-link"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li
                                    class="paginate_button page-item next disabled"
                                    id="table-1_next"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx="2"
                                      tabindex="0"
                                      class="page-link"
                                    >
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
