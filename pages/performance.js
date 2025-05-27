
function loadPerformance(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid performance">
        <div class="header">
            <h2 class="">Sales Performance</h2>
            <p class="fs-6"><small>Tracking and Monitoring Of Dairy Farm Sales Team</small></p>
        </div>
        <div class="row performance-cards">
            <div class="col-md-4">
                <div class="card shadow p-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="fw-bold">Total Revenue</h4>
                            <p class="fs-5 fw-bold">₹20,76,373</p>
                        </div>
                        <h4 class="text-success mx-3">+12%</h4>
                    </div>
                </div>    
            </div>
            <div class="col-md-4">
                <div class="card shadow p-3">    
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="fw-bold">Total Sales</h4>
                        <p class="fs-5 fw-bold">6,373</p>
                    </div>
                    <h4 class="text-success mx-3">-5%</h4>
                </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow p-3">    
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="fw-bold">Avg Order(₹)</h4>
                        <p class="fs-5 fw-bold">₹1373</p>
                    </div>
                    <h4 class="text-success mx-3">+20%</h4>
                </div>
                </div>
            </div>
                
        </div>
        <div class="row mt-3">
            <div class="col-md-5">
                <div class="card shadow p-2 mt-3">
                    <img src="./images/sales-perf-gif.GIF" height="338px">
                </div>
            </div>

            <div class="col-md-7">
                <div class="card shadow mt-3">
                    <div class="card-header text-center bg-success-subtle">
                        <h4 class="card-title">Monthly Sales Performance</h4>
                    </div>
                    <div class="card-body">
                        <canvas id="salesPerformanceChart"></canvas>
                    </div>
                </div>
            </div>

        </div>
        <div class="row mt-3">
            <div class="col-md-12">
              <div class="card shadow">
                <div class="card-header text-center bg-success-subtle">
                    <h4>Best Performance</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Deals Closed</th>
                                <th>Revenue Generated</th>
                                <th>Conversion Rate</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ramgopal varma</td>
                                <td>25</td>
                                <td>₹50,000</td>
                                <td>85%</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Rohith Sharma</td>
                                <td>20</td>
                                <td>₹45,000</td>
                                <td>78%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mahender</td>
                                <td>18</td>
                                <td>₹40,000</td>
                                <td>72%</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Sathosk kumar</td>
                                <td>15</td>
                                <td>₹35,000</td>
                                <td>68%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>    
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="card shadow p-2 mt-3">
                    <div class="card-body">
                        <h4 class="card-title text-center mb-2">Team-wise Comparison</h4>
                        <canvas id="teamComparisonChart" style="width: 500px; height: 90px;"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="card shadow mt-3">
                    <img class="border rounded" src="./images/sales-team-image.WEBP" style="height:354px">
                </div>
            </div>
        </div>
    </div>
    `;

    const ctx = document.getElementById('teamComparisonChart').getContext('2d');

    // Create the chart
    const teamComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D'],
            datasets: [{
                label: 'Sales Performance',
                data: [75, 55, 85, 65],
                backgroundColor: [
                    'rgba(220, 108, 240, 0.2)',
                    'rgba(235, 239, 100, 0.2)',
                    'rgba(123, 235, 131, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgb(150, 21, 161)',
                    'rgb(203, 209, 43)',
                    'rgb(46, 184, 66)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        
                    }
                },
                
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });

    const salesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Sales Performance (%)',
            data: [65, 59, 80, 81, 56, 55, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true
        }]
    };

    // Chart configuration
    const config = {
        type: 'line', // You can change this to 'bar' if needed
        data: salesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Performance (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
                
            }
        }
    };

    // Render the chart
    const salesPerformanceChart = new Chart(
        document.getElementById('salesPerformanceChart'),
        config
    );
}