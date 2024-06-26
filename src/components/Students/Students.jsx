import React, { useEffect, useState } from "react";
import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import img from '../../assets/img/banner/user.png'
import axios from "axios";

export default function Students() {
    const [list, setList] = useState(false)
    const [data, setData] = useState([])
    const [categories, setCategories] = useState({});
    console.log(data)

    useEffect( () => {
      axios.get("https://it-test-backend.onrender.com/api/users").then(res => {
        setData(res.data.data)
      }).catch(error => {
        console.log(error)
      })
    },[])

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const res = await axios.get("https://it-test-backend.onrender.com/api/users/status/all");
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
                      <h4>Foydalanuvchilar</h4>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <div
                          id="table-1_wrapper"
                          class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                        >
                          <div class="row">
                            <div class="col-sm-12 col-md-6">
                              <div
                                class="dataTables_length"
                                id="table-1_length"
                              >
                                
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                              <div
                                id="table-1_filter"
                                class="dataTables_filter"
                              >
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    class="form-control form-control-sm"
                                    placeholder=""
                                    aria-controls="table-1"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
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
                                      style={{ width: "34.9219px;" }}
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
                                      style={{ width: "174.219px;" }}
                                    >
                                      Ism
                                    </th>

                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px;" }}
                                    >
                                      Familya
                                    </th>

                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px;" }}
                                    >
                                      Ta'lim dargohi
                                    </th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Telefon
                                    </th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                      style={{ width: "174.219px" }}
                                    >
                                      Rasmi
                                    </th>
                                    <th
                                      class="sorting"
                                      tabindex="0"
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
                                  {
                                    data.map(el => {
                                      let yil = new Date(el.createdAt).getFullYear()
                                      let oy = new Date(el.createdAt).getMonth()
                                      let kun = new Date(el.createdAt).getDate()

                                      return <tr role="row" class="odd">
                                      <td class="sorting_1">1</td>
                                      <td>{el.surname}</td>
                                      <td>{el.name}</td>
                                      <td>{categories[el.status_id] || "Noma'lum"}</td>
                                      <td>{el.contact}</td>
                                      <td>
                                        <img
                                          src={el.img === "itLive.jpg" ? img : "https://it-test-backend.onrender.com/" + el.img }
                                          alt="error"
                                          style={{ width: "30px" }}
                                        />
                                      </td>
                                      <td>{kun}.{oy+1}.{yil}</td>
                                    </tr>
                                    })
                                  }
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
