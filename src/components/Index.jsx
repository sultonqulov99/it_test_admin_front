import "../assets/css/style.css";
import "../assets/css/custom.css";
import "../assets/css/components.css";
import "../assets/css/app.min.css";
import "../assets/css/Kmachilik.css";
import banner from "../assets/img/banner/1.png";
import banner2 from "../assets/img/banner/2.png";
import banner3 from "../assets/img/banner/3.png";
import banner4 from "../assets/img/banner/4.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AppLayoutContext } from "../Layouts/MainLayout";

export default function Index() {
  const { API } = useContext(AppLayoutContext);
  const [list, setList] = useState(false);
  const [category, setCategory] = useState([]);
  const [fanlar, setFanlar] = useState([]);
  const [questionTests, setQuestionTests] = useState([]);
  const [questionImgTests, setQuestionImgTests] = useState([]);
  const token = window.localStorage.getItem("token");

  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  } else {
    let decoded = jwtDecode(token);
    let currentUnixTime = Math.floor(Date.now() / 1000);

    let timeDifference = decoded.exp - currentUnixTime;

    if (timeDifference > 0) {
      console.log("JWT hali amal qilishga ruhsat berilgan");
    } else {
      console.log("JWT muddati tugagan");
      localStorage.removeItem("token");
      navigate("/login");
    }
  }

  useEffect(() => {
    async function fetchTests() {
      try {
        const res = await axios.get(`${API}/api/test/all`);
        setQuestionTests(res.data.data);
        const res1 = await axios(`${API}/api/users/subjects/all`);
        setFanlar(res1.data.data);
        const res2 = await axios.get(`${API}/api/users/status/all`);
        setCategory(res2.data.data);
        const res3 = await axios.get(`${API}/api/testImg/all`);
        setQuestionImgTests(res3.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTests();
  }, []);
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
              <div class="row ">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="card">
                    <div class="card-statistic-4">
                      <div class="align-items-center justify-content-between">
                        <div class="row ">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                              <h5 class="font-15">Kategoriyalar</h5>
                              <h2 class="mb-3 font-18">{category.length}</h2>
                              <p class="mb-0">
                                <span class="col-green">10%</span> Increase
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                            <div class="banner-img">
                              <img src={banner} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="card">
                    <div class="card-statistic-4">
                      <div class="align-items-center justify-content-between">
                        <div class="row ">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                              <h5 class="font-15"> Fanlar</h5>
                              <h2 class="mb-3 font-18">{fanlar.length}</h2>
                              <p class="mb-0">
                                <span class="col-orange">09%</span> Decrease
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                            <div class="banner-img">
                              <img src={banner2} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="card">
                    <div class="card-statistic-4">
                      <div class="align-items-center justify-content-between">
                        <div class="row ">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                              <h5 class="font-15">Testlar</h5>
                              <h2 class="mb-3 font-18">
                                {questionTests.length}
                              </h2>
                              <p class="mb-0">
                                <span class="col-green">18%</span>
                                Increase
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                            <div class="banner-img">
                              <img src={banner3} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="card">
                    <div class="card-statistic-4">
                      <div class="align-items-center justify-content-between">
                        <div class="row ">
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                            <div class="card-content">
                              <h5 class="font-15">Rasmli test</h5>
                              <h2 class="mb-3 font-18">
                                {questionImgTests.length}
                              </h2>
                              <p class="mb-0">
                                <span class="col-green">42%</span> Increase
                              </p>
                            </div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                            <div class="banner-img">
                              <img src={banner4} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row"></div>
            </section>
          </div>
        </div>
      </div>
    </body>
  );
}
