function loadRevenue(){
    document.getElementById("main-content").innerHTML = `
       <div class="container-fluid revenue">
            <div class="header">
                    <h2 class="">Revenue</h2>
                    <p class="fs-6"><small>Track Income from Milk, Curd, and Other Products</small></p>
                </div>
            <div class="row revenue-cards">
            <div class="col-md-3">
                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <h4 class="card-title fw-bold">Total Revenue</h4>
                            <div class="d-flex justify-content-between">
                                <p class="card-text fs-5 fw-medium">₹48,25,000</p>
                                <span class="material-icons-outlined text-success fs-1">trending_up</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mt-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold">This Month</h4>
                        <div class="d-flex justify-content-between">
                            <p class="card-text fs-5 fw-medium">₹5,47,000</p>
                            <span class="material-icons-outlined text-success fs-1">trending_up</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mt-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold">Last Month</h4>
                        <div class="d-flex justify-content-between">
                            <p class="card-text fs-5 fw-medium">₹4,75,500</p>
                            <span class="material-icons-outlined text-success fs-1">trending_up</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mt-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold">Avg. Revenue</h4>
                        <div class="d-flex justify-content-between">
                            <p class="card-text fs-5 fw-medium">₹20,450</p>
                            <span class="material-icons-outlined text-success fs-1">trending_up</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
            <div class="col-md-7">
                <div class="card shadow">
                    <h4 class="card-header text-center bg-primary-subtle">Revenue Trends (Last 12 Months)</h4>
                <div class="card-body chart">
                    <canvas id="revenueChart" width="100%" height="60%"></canvas>
                </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card shadow">
                    <h4 class="card-header text-center fs-4 fw-bold mb-4 bg-primary-subtle">Top Selling Products</h4>
                    <div class="card-body pt-1">
                        <table class="table">
                        <thead>
                            <tr>
                            <th>Product</th>
                            <th>Quantity Sold</th>
                            <th>Revenue</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>HG Toned Milk</td>
                                    <td>1,200 Liters</td>
                                    <td>₹96,000</td>
                                </tr>
                                <tr>
                                    <td>HG Ghee</td>
                                    <td>200 Kg</td>
                                    <td>₹1,60,000</td>
                                </tr>
                                <tr>
                                    <td>HG Cow Milk</td>
                                    <td>800 Liters</td>
                                    <td>₹64,000</td>
                                </tr>
                                <tr>
                                    <td>HG Curd</td>
                                    <td>1,200 Kg</td>
                                    <td>₹1,08,000</td>
                                </tr>
                                
                                <tr>
                                    <td>Dodla Ghee</td>
                                    <td>120 Kg</td>
                                    <td>₹96,000</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3 mb-3">
                <div class="col-md-4">
                    <div class="card shadow h-100">
                    <div class="p-1">
                        <h5 class="text-center fs-5">Revenue Breakdown by Product</h5>
                        <canvas id="revenueByProductChart" width="300" height="200"></canvas>
                    </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card shadow h-100">
                        <h4 class="card-header text-center fs-4 bg-primary-subtle">Detailed Revenue Data</h4>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                    <th>Date</th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price(₹)</th>
                                    <th>Total(₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2025-01-05</td>
                                        <td>HG Cow Milk</td>
                                        <td>1200 Liters</td>
                                        <td>80/L</td>
                                        <td>96,000</td>
                                    </tr>
                                    <tr>
                                        <td>2025-01-05</td>
                                        <td>HG Toned Milk</td>
                                        <td>1000 Liters</td>
                                        <td>85/L</td>
                                        <td>85,000</td>
                                    </tr>
                                    <tr>
                                        <td>2025-01-06</td>
                                        <td>HG Pure Ghee</td>
                                        <td>50 Kg</td>
                                        <td>800/Kg</td>
                                        <td>40,000</td>
                                    </tr>
                                    <tr>
                                        <td>2025-01-06</td>
                                        <td>Paneer</td>
                                        <td>30 Kg</td>
                                        <td>660/Kg</td>
                                        <td>19,800</td>
                                    </tr>
                                    <tr>
                                        <td>2025-01-06</td>
                                        <td>HG Curd</td>
                                        <td>1400 Kg</td>
                                        <td>90/Kg</td>
                                        <td>₹1,26,000</td>
                                    </tr>
                                    <tr>
                                        <td>2025-01-07</td>
                                        <td>Dodla Milk</td>
                                        <td>800 Liters</td>
                                        <td>90/Kg</td>
                                        <td>₹85,000</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    `;

    const ctx = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Revenue ($)',
                data: [2000, 3000, 2500, 4000, 3500, 5000, 4500, 6000, 5500, 7000],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Allow the chart to resize freely
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    position: 'bottom', // Position the legend at the bottom
                }
            }
        }
    });


    // Revenue Breakdown by Product Chart
    const productCtx = document.getElementById('revenueByProductChart').getContext('2d');
    const revenueByProductChart = new Chart(productCtx, {
      type: 'pie',
      data: {
        labels: ['Milk', 'Curd', 'Paneer', 'Ghee'],
        datasets: [{
          label: 'Revenue (₹)',
          data: [126000, 101500, 150200, 94800],
          backgroundColor: [
            'rgba(199, 79, 105)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)'
          ],
          borderColor: [
            'rgb(211, 38, 75)',
            'rgb(27, 136, 210)',
            'rgb(217, 167, 39)',
            'rgb(53, 210, 210)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'bottom',
          },
        }
      }
    });
}

