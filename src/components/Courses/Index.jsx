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

export default function Courses_index() {
  const [list, setList] = useState(false);
  const [qongiroq, setqongiroq] = useState(true);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [count, setcount] = useState(0);

  useEffect(() => {
    axios("https://it-test-backend.onrender.com/api/users/subjects/all")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://it-test-backend.onrender.com/api/users/status/all"
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

  function hendelDelete(id) {
    axios
      .delete(`https://it-test-backend.onrender.com/api/subject-delete/${id}`)
      .then((res) => {
        setcount(count - 1);
      })
      .catch((error) => {
        alert(error.response.data.message);
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
                      <h4>Fanlar</h4>
                      <Link to={"/Courses_Create"} className="btn btn-primary">
                        Fan qo'shmoq
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
                                      aria-sort="ascending"
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
                                      Fan Nomi
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Level
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowSpan="1"
                                      colSpan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Kategoriya
                                    </th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Status: activate to sort column ascending"
                                    >
                                      Sana
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
                                  {data.map((el, index) => {
                                    console.log(el)
                                    let yil = new Date(el.createdAt).getFullYear()
                                    let oy = new Date(el.createdAt).getMonth()
                                    let kun = new Date(el.createdAt).getDate()
                                    return <tr role="row" className="odd" key={el._id}>
                                        <td className="sorting_1">{index + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.level ? el.level : 1}</td>
                                        <td>
                                          {categories[el.status_id] || "Noma'lum"}
                                        </td>
                                        <td>{kun}.{oy+1}.{yil}</td>
                                        <td className="d-flex">
                                          <Link
                                            to={"/Courses_Edit/" + el._id}
                                            className="btn btn-success"
                                          >
                                            Edit
                                          </Link>
                                          <a
                                            onClick={() => {
                                              window.confirm(
                                                "Rostdan o'chirmoqchimisiz"
                                              ) && hendelDelete(el._id);
                                            }}
                                            href="#"
                                            className="btn btn-danger"
                                          >
                                            O'chirish
                                          </a>
                                        </td>
                                      </tr>
                                  })}
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
                                Showing 1 to {data.length} of {data.length}{" "}
                                entries
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
