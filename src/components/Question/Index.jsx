import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppLayoutContext } from "../../Layouts/MainLayout";

export default function Question_Index() {
  const { API } = useContext(AppLayoutContext);
  const [list, setList] = useState(false);
  const [questionTests, setQuestionTests] = useState([]);
  const [count, setCount] = useState(false);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    async function fetchTests() {
      try {
        const res = await axios.get(`${API}/api/test/all`);
        setQuestionTests(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTests();
  }, [count]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API}/api/users/subjects/all`);
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
      .delete(`${API}/api/delete-test/${id}`)
      .then((res) => {
        setCount(count - 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <body
      className={
        list
          ? "light light-sidebar theme-white sidebar-mini"
          : "light light-sidebar theme-white"
      }
    >
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <div className="main-content">
            <section className="section">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h4>Testlar</h4>
                      <Link to="/Question_Create" className="btn btn-primary">
                        Test qo'shmoq
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div
                          id="table-1_wrapper"
                          className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                        >
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                className="table table-striped dataTable no-footer"
                                id="table-1"
                                role="grid"
                                aria-describedby="table-1_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      className="text-center sorting_asc"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      ariaSort="ascending"
                                      aria-label="#: activate to sort column descending"
                                    >
                                      #
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Savol
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      level
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Fan
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      To'gri javob
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      aria-label="Action: activate to sort column ascending"
                                    >
                                      Holat
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {questionTests.map((question, index) => (
                                    <tr
                                      role="row"
                                      className="odd"
                                      key={question._id}
                                    >
                                      <td className="sorting_1">{index + 1}</td>
                                      <td>{question.test_text}</td>
                                      <td>{question.level}</td>
                                      <td>
                                        {categories[question.subject_id] ||
                                          "Noma'lum"}
                                      </td>
                                      <td>{question.correct_answer}</td>
                                      <td className="d-flex">
                                        <Link
                                          to={"/Question_Edit/" + question._id}
                                          className="btn btn-success"
                                        >
                                          Edit
                                        </Link>
                                        <button
                                          onClick={() => {
                                            window.confirm(
                                              "Rostdan o'chirmoqchimisiz"
                                            ) && handlerDelete(question._id);
                                          }}
                                          className="btn btn-danger"
                                        >
                                          O'chirish
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="table-1_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 1 to 1 of 1 entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="table-1_paginate"
                              >
                                <ul className="pagination">
                                  <li
                                    className="paginate_button page-item previous disabled"
                                    id="table-1_previous"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx="0"
                                      tabIndex="0"
                                      className="page-link"
                                    >
                                      Previous
                                    </a>
                                  </li>
                                  <li className="paginate_button page-item active">
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx="1"
                                      tabIndex="0"
                                      className="page-link"
                                    >
                                      1
                                    </a>
                                  </li>
                                  <li
                                    className="paginate_button page-item next disabled"
                                    id="table-1_next"
                                  >
                                    <a
                                      href="#"
                                      aria-controls="table-1"
                                      data-dt-idx="2"
                                      tabIndex="0"
                                      className="page-link"
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
