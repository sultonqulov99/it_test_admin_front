import "../../assets/css/app.min.css"
import "../../assets/bundles/datatables/datatables.min.css"
import "../../assets/bundles/datatables/DataTables-1.10.16/css/dataTables.bootstrap4.min.css"
import "../../assets/css/style.css"
import "../../assets/css/components.css"
import "../../assets/css/custom.css"
import USER_IMG from"../../assets/img/user.png"
import img_logo from "../../assets/img/It live logO.png"
export default function Question_Edit() {
    return(
<body>
  {/* <!-- <div class="loader"></div> --> */}
  <div id="app">
    <div class="main-wrapper main-wrapper-1">
      {/* <!-- Main Content --> */}
      <div class="main-content">
        <section class="section">
       
          <div class="row">
            <div class="col-10">
                    <div class=" d-flex justify-content-between align-items-center">
                        <h1>Test o'zgartirmoq</h1>
                        <a href="./index.html" class="btn btn-primary">Orqaga</a>
                    </div>
                <div class="card">
                    <form action="">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="name">Savol</label>
                                <input type="text" class="form-control" id="name" />
                            </div>
                          
                           
                            <div class="form-group">
                                <label for="categoriya">Fan</label>
                                <select class="form-control" id="categoriya">
                                  <option>Matematika</option>
                                  <option>Dasturlash</option>
                                  <option>English</option>
                                </select>
                              </div>
                              <div class="form-group">
                                <label for="answer">To'g'ri javob</label>
                                <input type="text" class="form-control" id="answer" />
                            </div>
                            <div class="form-group">
                              <label for="option">Variantlar</label>
                              <input type="text" class="form-control" id="option" />
                          </div>
                           
                            <div class="form-group">
                                <button type="submit" class="btn btn-success">Saqlash</button>
                            </div>
                        </div>   
                    </form>
                </div>
    
              </div>
          </div>
        </section>
      </div>
      
    </div>
  </div>

</body>

    )
}