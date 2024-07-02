import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { AppLayoutContext } from "../../Layouts/MainLayout";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Results() {
  const { API } = useContext(AppLayoutContext);
  const [status, setStatus] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000");
  

  useEffect(() => {
    axios
      .get(`${API}/api/users/status/all`)
      .then((res) => {
        setStatus(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function clickSelect(statusId) {
    axios
      .get(`${API}/api/admin/statusId/${statusId}`)
      .then((res) => {
        setSubjects(res.data.data);
        setLoading(true)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleClick = (subjectId) => {
    axios
      .get(`${API}/api/users/subjects/${subjectId}`)
      .then((res) => {
        if(res.data.data.length){
          setSelectedSubject(res.data.data);
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main-content">
      <section className="section">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h4>Umumiy natijalar</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="table-1_wrapper"
                    className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                  >
                    <div className="row mb-3 align-items-center">
                      <div className="col-3">
                        <div class="form-group">
                          <label>Status</label>
                          <select
                            onClick={(e) => clickSelect(e.target.value)}
                            class="form-control"
                          >
                            <option>Tanlang...</option>
                            {status.map((el) => {
                              return <option value={el._id}>{el.name}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-3">
                        <div class="form-group">
                          <label>Subject</label>
                          <select
                            onClick={(e) => handleClick(e.target.value)}
                            class="form-control"
                          >
                            <option>Tanlang...</option>
                            {subjects.map((el) => {
                              return <option value={el._id}>{el.name}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <div class="form-group w-50 me-auto">
                          <label>Search</label>
                          <input type="text" class="form-control" placeholder="name"/>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        {loading ? ( // Show loading message if loading state is true
                          <div className="d-flex justify-content-center">
                            <BeatLoader
                              color={color}
                              loading={loading}
                              cssOverride={override}
                              size={30}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                          </div>
                        ) : (
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
                                  aria-label="
                              #
                            : activate to sort column descending"
                                  style={{ width: "34.9219px;" }}
                                >
                                  T/R
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table-1"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "174.219px;" }}
                                >
                                  Ism
                                </th>

                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table-1"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "174.219px;" }}
                                >
                                  Familya
                                </th>

                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table-1"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "174.219px;" }}
                                >
                                  IQ
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table-1"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "174.219px;" }}
                                >
                                  Foiz
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table-1"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "174.219px;" }}
                                >
                                  Ball
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table-1"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "174.219px;" }}
                                >
                                  Kalit
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table-1"
                                  rowSpan="1"
                                  colSpan="1"
                                  aria-label="Task Name: activate to sort column ascending"
                                  style={{ width: "174.219px;" }}
                                >
                                  Urunishlar
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedSubject &&
                                selectedSubject.map((select, index) => (
                                  <tr
                                    key={select.user_id._id}
                                    className="values"
                                  >
                                    <td>{index + 1}</td>
                                    <td>{select.user_id.name}</td>
                                    <td>{select.user_id.surname}</td>
                                    <td>
                                      {Math.floor(
                                        (select.ball * 50) / 75 +
                                          (select.key * 50) / 15 -
                                          select.attempts
                                      )}
                                    </td>
                                    <td>
                                      {Math.floor(
                                        (select.ball * 50) / 75 +
                                          (select.key * 50) / 15
                                      )}
                                    </td>
                                    <td>{select.ball}</td>
                                    <td>{select.key}</td>
                                    <td>{select.attempts}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        )}
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
                          Showing 1 to {selectedSubject.length} of{" "}
                          {selectedSubject.length} entries
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
  );
}
