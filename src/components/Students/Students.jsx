import React, { useContext, useEffect, useState } from "react";
import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import img from "../../assets/img/banner/user.png";
import axios from "axios";
import { AppLayoutContext } from "../../Layouts/MainLayout";

export default function Students() {
  const [list, setList] = useState(false);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [search, setSearch] = useState("");
  const { API } = useContext(AppLayoutContext);
  useEffect(() => {
    axios
      .get(`${API}/api/users?userName=${search}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API}/api/users/status/all`);
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
                      <h4>Foydalanuvchilar</h4>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div
                          id="table-1_wrapper"
                          className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <div
                                className="dataTables_length"
                                id="table-1_length"
                              ></div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div
                                id="table-1_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  Search:
                                  <input
                                    onChange={(e) => setSearch(e.target.value)}
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder="name"
                                    aria-controls="table-1"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
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
                                      rowspan="1"
                                      colspan="1"
                                      aria-sort="ascending"
                                      aria-label="#
                                          : activate to sort column descending"
                                      style={{ width: "34.9219px" }}
                                    >
                                      #
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Ism
                                    </th>

                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Familya
                                    </th>

                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Ta'lim dargohi
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Telefon
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Rasmi
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Sanasi
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {data.map((el, index) => (
                                    <tr key={index} role="row">
                                      <td className="sorting_1">{index + 1}</td>
                                      <td>{el.name}</td>
                                      <td>{el.surname}</td>
                                      <td>
                                        {categories[el.status_id] || "Noma'lum"}
                                      </td>
                                      <td>{el.contact}</td>
                                      <td>
                                        <img
                                          src={
                                            el.img
                                              ? `${API}/${el.img}`
                                              : img
                                          }
                                          alt="error"
                                          style={{ width: "30px" }}
                                        />
                                      </td>
                                      <td>
                                        {new Date(
                                          el.createdAt
                                        ).toLocaleDateString()}
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
                                  <li className="paginate_button page-item previous disabled">
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
                                  <li className="paginate_button page-item next disabled">
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
