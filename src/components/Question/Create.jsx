import "../../assets/css/app.min.css";
import "../../assets/bundles/datatables/datatables.min.css";
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import "../../assets/css/custom.css";
import USER_IMG from "../../assets/img/user.png";
import img_logo from "../../assets/img/It live logO.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Question_Create() {
    const [level, setLevel] = useState("");
    const [test_text, setTest_text] = useState("");
    const [subject_id, setSubject_id] = useState("");
    const [correct_answer, setCorrect_answer] = useState("");
    const [additive_answer, setAdditive_answer] = useState([]);
    const [datas, setDatas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios("https://it-test-backend.onrender.com/api/users/subjects/all")
          .then((res) => {
            setDatas(res.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);

    function handleAdditiveAnswerChange(e) {
        const value = e.target.value;
        const arrayValues = value.split(",").map(item => item.trim());
        setAdditive_answer(arrayValues);
    }

    function handlerClick(e) {
        e.preventDefault();

        axios.post("https://it-test-backend.onrender.com/api/testAdd", {
            level: level,
            test_text: test_text,
            subject_id: subject_id,
            correct_answer: correct_answer,
            additive_answer: additive_answer
        }).then(res => {
            if (res.status === 201) {
                navigate("/Question_Index");
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div id="app">
            <div class="main-wrapper main-wrapper-1">
                <div class="main-content">
                    <section class="section">
                        <div class="row">
                            <div class="col-10">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h1>Test Yaratmoq</h1>
                                    <a href="./index.html" class="btn btn-primary">Orqaga</a>
                                </div>
                                <div class="card">
                                    <form>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="level">Level</label>
                                                <input onChange={(e) => setLevel(e.target.value)} type="number" class="form-control" id="level" />
                                            </div>
                                            <div class="form-group">
                                                <label for="name">Savol</label>
                                                <input onChange={(e) => setTest_text(e.target.value)} type="text" class="form-control" id="name" />
                                            </div>
                                            <div class="form-group">
                                                <label for="categoriya">Fan</label>
                                                <select onChange={(e) => setSubject_id(e.target.value)} class="form-control" id="categoriya">
                                                    {
                                                        datas.map(data => {
                                                            return <option value={data._id} key={data._id}>{data.name}</option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="answer">To'g'ri javob</label>
                                                <input onChange={(e) => setCorrect_answer(e.target.value)} type="text" class="form-control" id="answer" />
                                            </div>
                                            <div class="form-group">
                                                <label for="option">Variantlar</label>
                                                <input onChange={handleAdditiveAnswerChange} type="text" class="form-control" id="option" placeholder="Enter options separated by commas" />
                                            </div>

                                            <div class="form-group">
                                                <button onClick={handlerClick} type="submit" class="btn btn-success">Saqlash</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="settingSidebar">
                        <a href="javascript:void(0)" class="settingPanelToggle"> <i class="fa fa-spin fa-cog"></i>
                        </a>
                        <div class="settingSidebar-body ps-container ps-theme-default">
                            <div class="fade show active">
                                <div class="setting-panel-header">O'rnatish Panel</div>
                                <div class="p-15 border-bottom">
                                    <h6 class="font-medium m-b-10">Tema Tanlash </h6>
                                    <div class="selectgroup layout-color w-50">
                                        <label class="selectgroup-item">
                                            <input type="radio" name="value" value="1" class="selectgroup-input-radio select-layout" checked />
                                            <span class="selectgroup-button">Light</span>
                                        </label>
                                        <label class="selectgroup-item">
                                            <input type="radio" name="value" value="2" class="selectgroup-input-radio select-layout" />
                                            <span class="selectgroup-button">Dark</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="p-15 border-bottom">
                                    <h6 class="font-medium m-b-10">Sidebar Rang</h6>
                                    <div class="selectgroup selectgroup-pills sidebar-color">
                                        <label class="selectgroup-item">
                                            <input type="radio" name="icon-input" value="1" class="selectgroup-input select-sidebar" />
                                            <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip" data-original-title="Light Sidebar"><i class="fas fa-sun"></i></span>
                                        </label>
                                        <label class="selectgroup-item">
                                            <input type="radio" name="icon-input" value="2" class="selectgroup-input select-sidebar" checked />
                                            <span class="selectgroup-button selectgroup-button-icon" data-toggle="tooltip" data-original-title="Dark Sidebar"><i class="fas fa-moon"></i></span>
                                        </label>
                                    </div>
                                </div>
                                <div class="p-15 border-bottom">
                                    <h6 class="font-medium m-b-10">Tema Rangi</h6>
                                    <div class="theme-setting-options">
                                        <ul class="choose-theme list-unstyled mb-0">
                                            <li title="white" class="active">
                                                <div class="white"></div>
                                            </li>
                                            <li title="cyan">
                                                <div class="cyan"></div>
                                            </li>
                                            <li title="black">
                                                <div class="black"></div>
                                            </li>
                                            <li title="purple">
                                                <div class="purple"></div>
                                            </li>
                                            <li title="orange">
                                                <div class="orange"></div>
                                            </li>
                                            <li title="green">
                                                <div class="green"></div>
                                            </li>
                                            <li title="red">
                                                <div class="red"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="p-15 border-bottom">
                                    <div class="theme-setting-options">
                                        <label class="m-b-0">
                                            <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" id="mini_sidebar_setting" />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="control-label p-l-10">Mini Sidebar</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="p-15 border-bottom">
                                    <div class="theme-setting-options">
                                        <label class="m-b-0">
                                            <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input" id="sticky_header_setting" />
                                            <span class="custom-switch-indicator"></span>
                                            <span class="control-label p-l-10">Sticky Header</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="mt-4 mb-4 p-3 align-center rt-sidebar-last-ele">
                                    <a href="#" class="btn btn-icon icon-left btn-primary btn-restore-theme">
                                        <i class="fas fa-undo"></i> Qayta tiklash
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
