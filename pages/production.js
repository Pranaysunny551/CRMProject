function loadProduction() {
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid production">
          <div class="header mb-3">
            <h2 class="">Production</h2>
            <p class="fs-6"><small>Track Batch Production for Quality Assurance</small></p>
          </div>
          <div class="row">
              <div class="col-md-3 warehouse-btn">
                <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('milk-production', this)" class="text-decoration-none text-dark">Dodla Milk</a></h4>
              </div>
              <div class="col-md-3 warehouse-btn">
                <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('curd-production', this)" class="text-decoration-none text-dark">Dodla Curd</a></h4>
              </div>
              <div class="col-md-3 warehouse-btn">
                <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('ghee-production', this)" class="text-decoration-none text-dark">Dodla Ghee</a></h4>
              </div>
              <div class="col-md-3 warehouse-btn">
                <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('paneer-production', this)" class="text-decoration-none text-dark">Dodla Paneer</a></h4>
              </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card shadow">
                <h4 class="card-header text-center bg-primary-subtle">Batch-wise Production</h4>
                <div class="card-body">
                  <div class="mb-1 d-flex justify-content-end">
                    <div class="w-50 form-group">
                      <input type="text" class="form-control" id="searchInput" placeholder="Search by Batch ID or Product Type...">
                      <span class="material-icons-outlined icon">search</span>
                    </div>
                  </div>
                  <hr class="m-0"/>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Batch ID</th>
                        <th>Product Type</th>
                        <th>Quantity</th>
                        <th>Production Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>5037002</td>
                        <td>Milk</td>
                        <td>1,000 Liters</td>
                        <td>2025-03-09</td>
                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 106px">Completed</span></td>
                      </tr>
                      <tr>
                        <td>5037003</td>
                        <td>Ghee</td>
                        <td>500 Kg</td>
                        <td>2025-03-09</td>
                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 106px">Completed</span></td>
                      </tr>
                      <tr>
                        <td>5037004</td>
                        <td>Curd</td>
                        <td>800 Kg</td>
                        <td>2025-03-09</td>
                        <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 106px">In Progress</span></td>
                      </tr>
                      <tr>
                        <td>5037005</td>
                        <td>Paneer</td>
                        <td>500 Kg</td>
                        <td>2025-03-09</td>
                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 106px">Completed</span></td>                         
                     </tr>
                     <tr>
                        <td>5037006</td>
                        <td>Milk</td>
                        <td>1,000 Liters</td>
                        <td>2025-03-12</td>
                       <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 106px">In Progress</span></td>
                      </tr>
                      <tr>
                        <td>5037007</td>
                        <td>Ghee</td>
                        <td>500 Kg</td>
                        <td>2025-03-12</td>
                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 106px">Completed</span></td>
                      </tr>
                      <tr>
                        <td>5037008</td>
                        <td>Curd</td>
                        <td>800 Kg</td>
                        <td>2025-03-12</td>
                        <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 106px">In Progress</span></td>
                      </tr>
                      <tr>
                        <td>5037009</td>
                        <td>Paneer</td>
                        <td>500 Kg</td>
                        <td>2025-03-12</td>
                        <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 106px">In Progress</span></td>                       
                     </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
}