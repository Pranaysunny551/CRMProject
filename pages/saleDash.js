function loadSalesDash(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid sales-M">
       <div class="row sales-cards">
          <div class="col-md-3">
            <div class="card shadow p-3 mt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="text-secondary fw-bold fs-5">Today Sales</h4>
                        <h5 class="fw-bold text-dark fs-5">210</h5>
                    </div>
                    <div class="c-icons">
                      <span class="material-icons-outlined text-dark fs-1">insights</span>
                    </div>  
                </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow p-3 mt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="text-secondary fw-bold fs-5">Weekly Sales</h4>
                        <h5 class="fw-bold text-dark fs-5">830</h5>
                    </div>
                    <div class="c-icons">
                      <span class="material-icons-outlined text-dark fs-1">signal_cellular_alt</span>
                    </div>  
                </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow p-3 mt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="text-secondary fw-bold fs-5">Monthly Sales</h4>
                        <h5 class="fw-bold text-dark fs-5">2455</h5>
                    </div>
                    <div class="c-icons">
                      <span class="material-icons-outlined text-dark fs-1">stacked_line_chart</span>
                    </div>  
                </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card shadow p-3 mt-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="text-secondary fw-bold fs-5">Yearly Sales</h4>
                        <h5 class="fw-bold text-dark fs-5">6375</h5>
                    </div>
                    <div class="c-icons">
                      <span class="material-icons-outlined text-dark fs-1">auto_graph</span>
                    </div>  
                </div>
            </div>
          </div>
       </div>

       <div class="row mt-3">
        <div class="col-md-7">
          <div class="card shadow mt-3 h-100">
            <div class="card-header bg-primary-subtle d-flex justify-content-between align-items-center">
              <h4 class="card-title fw-bold">Marketing Campaigns</h4>
              <div class="dropdown action-dropdown">
                  <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="material-icons-outlined text-dark">more_vert</span>
                  </a>
                  <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                      <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View All</a></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Manage</a></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-clipboard-data-fill"></i> Reports</a></li>
                  </ul>
              </div>
            </div>
            <div class="card-body p-2 mt-2">
              <table class="table">
                <thead>
                  <tr>
                    <th>Campaign</th>
                    <th>Status</th>
                    <th>Engagement</th>
                    <th>Last Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Social Media(YouTube) Ads</td>
                    <td><span class="badge bg-success-subtle text-success" style="width: 70px">Active</span></td>
                    <td>1,234</td>
                    <td>2026-JAN-30</td>
                  </tr>
                  <tr>
                      <td>Social Media(Instagram) Ads</td>
                      <td><span class="badge bg-success-subtle text-success" style="width: 70px">Active</span></td>
                      <td>932</td>
                      <td>2026-JAN-30</td>
                  </tr>
                  <tr>
                    <td>Email Campaign</td>
                    <td><span class="badge bg-warning-subtle text-warning" style="width: 70px">Pending</span></td>
                    <td>567</td>
                    <td>-</td>
                  </tr>
                  <tr>
                      <td>Email Campaign</td>
                      <td><span class="badge bg-danger-subtle text-danger" style="width: 70px">Ended</span></td>
                      <td>367</td>
                      <td>2025-JAN-30</td>
                    </tr>
                  <tr>
                    <td>Local Events</td>
                    <td><span class="badge bg-danger-subtle text-danger" style="width: 70px">Ended</span></td>
                    <td>890</td>
                    <td>2025-FEB-15</td>
                  </tr>
                  <tr>
                      <td>Social Media Ads</td>
                      <td><span class="badge bg-danger-subtle text-danger" style="width: 70px">Ended</span></td>
                      <td>564</td>
                      <td>2025-JAN-30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-md-5">
          <div class="card shadow mt-3 h-100">
            <div class="card-header bg-primary-subtle d-flex justify-content-between align-items-center">
              <h4 class="card-title fw-bold">Recent Orders</h4>
              <div class="dropdown action-dropdown">
                  <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="material-icons-outlined text-dark">more_vert</span>
                  </a>
                  <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                      <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                      <li><a class="dropdown-item" href="#" onclick="loadPage('c-orders', this)"><i class="bi bi-pencil"></i> Manage Orders</a></li>
                      <li><a class="dropdown-item" href="#"><i class="bi bi-clipboard-data-fill"></i> Reports</a></li>
                  </ul>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item d-flex flex-row">
                  <img src="./images/analyst-2.jpg">
                  <div class="">
                      <h5>Lalith Kumar <a href="">#5037002</a></h5>
                      <p class="fw-medium mb-0">20 Litters Milk and 10 Kg Paneer</p>
                  </div>
                </li>
                <li class="list-group-item d-flex flex-row">
                  <img src="./images/profile3.jpg">
                  <div class="">
                      <h5>Santhosh(B) <a href="">#5037021</a></h5>
                      <p class="fw-medium mb-0">15 Kg Ghee and 10 Litters Milk</p>
                  </div>
                </li>
                <li class="list-group-item d-flex flex-row">
                  <img src="./images/profile4.jpg">
                  <div class="">
                      <h5>Varun Dev <a href="">#5037031</a></h5>
                      <p class="fw-medium mb-0">10 Kg Curd and Standard Milk 5 litters</p>
                  </div>
                </li>
                <li class="list-group-item d-flex flex-row">
                  <img src="./images/profile5.jpg">
                  <div class="">
                      <h5>Prashanth <a href="">#5037034</a></h5>
                      <p class="fw-medium mb-0">30 Litters Toned Milk</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
}