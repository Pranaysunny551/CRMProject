
function loadProductDash(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid ">
            <div class="row">
                <div class="col-md-3">
                    <div class="card shadow bg-success-subtle">
                    <div class="card-body">
                        <h5 class="card-title fs-5">Milk Collected</h5>
                        <p class="card-text">10,000 Liters</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow bg-primary-subtle">
                    <div class="card-body">
                        <h5 class="card-title fs-5">Production Volume</h5>
                        <p class="card-text">8,500 Liters</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow bg-warning-subtle">
                    <div class="card-body">
                        <h5 class="card-title fs-5">Quality Compliance</h5>
                        <p class="card-text">98%</p>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow bg-info-subtle">
                    <div class="card-body">
                        <h5 class="card-title fs-5">On-Time Delivery</h5>
                        <p class="card-text">95%</p>
                    </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-7">
                    <div class="card shadow">
                    <div class="card-body">
                        <h4 class="card-title text-center">Production Trends</h4>
                        <canvas id="productionChart"></canvas>
                    </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card shadow">
                    <div class="card-body">
                        <h4 class="card-title text-center mb-3">Product Distribution</h4>
                        <canvas id="productDistributionChart"></canvas>
                    </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="card shadow">
                    <h4 class="card-header text-center bg-success-subtle">Collection List</h4>
                    <div class="card-body">
                        <table class="table">
                        <thead>
                            <tr>
                            <th>Supplier Name</th>
                            <th>Milk Quantity</th>
                            <th>Fat %</th>
                            <th>SNF %</th>
                            <th>Collection Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Healthy Farms</td>
                            <td>1,000 Liters</td>
                            <td>4.5%</td>
                            <td>8.5%</td>
                            <td>2025-03-12</td>
                            </tr>
                            <tr>
                            <td>FVillage Farms</td>
                            <td>1,500 Liters</td>
                            <td>4.0%</td>
                            <td>8.8%</td>
                            <td>2025-03-12</td>
                            </tr>
                            <tr>
                            <td>Ashok Farms</td>
                            <td>700 Liters</td>
                            <td>4.8%</td>
                            <td>9.5%</td>
                            <td>2025-03-12</td>
                            </tr>
                            <tr>
                            <td>Pure Farms</td>
                            <td>500 Liters</td>
                            <td>4.2%</td>
                            <td>8.3%</td>
                            <td>2025-03-12</td>
                            </tr>
                            <tr>
                            <td>Abhi Farms</td>
                            <td>1,100 Liters</td>
                            <td>4.5%</td>
                            <td>8.1%</td>
                            <td>2025-03-12</td>
                            </tr>
                            <tr>
                            <td>Ragu Farms</td>
                            <td>1,000 Liters</td>
                            <td>4.1%</td>
                            <td>9.3%</td>
                            <td>2025-03-12</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const productionChart = new Chart(document.getElementById('productionChart'), {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Milk Production',
            data: [5000, 6000, 7000, 8000, 9000],
            borderColor: 'blue',
            fill: false,
          }]
        },
        options: {
                  responsive: true, 
                  plugins: {
                      legend: {
                          position: 'bottom'
                      }
                  }
              }
      });
  
      const productDistributionChart = new Chart(document.getElementById('productDistributionChart'), {
        type: 'pie',
        data: {
          labels: ['Milk', 'Curd', 'Ghee', 'Paneer'],
          datasets: [{
            data: [45, 30, 15, 10],
            backgroundColor: ['#4295f5', '#61e88a', '#e89761', '#e86161'],
          }]
        },
        options: {
                  responsive: true, 
                  aspectRatio: 1.4, 
                  plugins: {
                      legend: {
                          position: 'bottom'
                      }
                  }
              }
      });
}