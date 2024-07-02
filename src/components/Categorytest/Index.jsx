import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/Kmachilik.css";
import "../../assets/css/custom.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppLayoutContext } from "../../Layouts/MainLayout";

export default function Catigorytest_Index() {
  const { API } = useContext(AppLayoutContext);
  const [list, setList] = useState(false);
  const [data, setData] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/api/users/status/all`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  function hendelDelete(id) {
    axios
      .delete(`${API}/api/status-delete/${id}`)
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
                <div class="col-11">
                  <div class="card">
                    <div class="card-header d-flex justify-content-between">
                      <h4>Kategoriyalar</h4>
                      <Link class="btn btn-primary" to="/Catigorytest_Create">
                        {" "}
                        Kategory qo'shmoq
                      </Link>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <div
                          id="table-1_wrapper"
                          class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                        ></div>
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
                                  {" "}
                                  Nomi
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
                              {data.map((el, index) => {
                                let yil = new Date(el.createdAt).getFullYear();
                                let oy = new Date(el.createdAt).getMonth();
                                let kun = new Date(el.createdAt).getDate();
                                return (
                                  <tr role="row" class="odd">
                                    <td class="sorting_1">{index + 1}</td>
                                    <td>{el.name}</td>
                                    <td>
                                      {kun}.{oy + 1}.{yil}
                                    </td>
                                    <td class="d-flex">
                                      <Link
                                        to={"/Catigorytest_Edit/" + el._id}
                                        class="btn btn-success"
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
            </section>
          </div>
        </div>
      </div>
    </body>
  );
}
