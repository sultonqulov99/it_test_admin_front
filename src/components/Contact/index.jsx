import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Content() {
  const [list, setList] = useState(false);
  const [questionTests, setQuestionTests] = useState([]);
  const [count, setCount] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/contacts")
      .then((res) => {
        setQuestionTests(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);

  function handlerDelete(id) {
    axios
      .delete(`http://localhost:8080/api/delete-contact/${id}`)
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
                      <h4>Xabarlar</h4>
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
                                      F.I.O
                                    </th>

                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      Phone
                                    </th>

                                    <th
                                      class="sorting"
                                      tabindex="0"
                                      aria-controls="table-1"
                                      rowspan="1"
                                      colspan="1"
                                      aria-label="Task Name: activate to sort column ascending"
                                    >
                                      text
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
                                        <td>{el.fullName}</td>
                                        <td>{el.contact}</td>
                                        <td>
                                          {el.text ||
                                            "Noma'lum"}
                                        </td>

                                        <td class="d-flex">
                                          <a
                                            onClick={() =>{
                                              window.confirm("Rostdan o'chirmoqchimisiz", ) &&
                                              handlerDelete(el._id)
                                            }
                                            }
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
                                Showing 1 to {questionTests.length} of 1 entries
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
