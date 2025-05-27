function loadLogDash(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid logistics mt-1">
        <div class="row pb-2">
                <div class=" col-md-6 col-lg-3">
                    <div class="card highlights shadow p-3">
                        <h5 class="fw-bold fs-5">On route vehicles</h5>
                        <div class="vehicles d-flex justify-content-between align-items-center">
                            <div class="count">
                                <h3>42</h3>
                            </div>
                            <span class="material-icons-outlined text-primary">local_shipping</span>
                        </div>
                        <div class="pars d-flex justify-content-start">
                            <h5>+18.2%</h5>
                            <p class="mx-2 fw-bold mb-0">than last week</p>
                        </div>
                    </div>
                </div>

                <div class=" col-md-6 col-lg-3">
                    <div class="card highlights shadow p-3">
                        <h5 class="fw-bold fs-5">Vehicles with error</h5>
                        <div class="vehicles d-flex justify-content-between align-items-center">
                            <div class="count">
                                <h3>8</h3>
                            </div>
                            <span class="material-icons-outlined text-warning">report_problem</span>
                        </div>
                        <div class="pars d-flex justify-content-start">
                            <h5>-8.7%</h5>
                            <p class="mx-2 fw-bold mb-0">than last week</p>
                        </div>
                        
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card highlights shadow p-3">
                        <h4 class="fw-bold fs-5">Deviated route</h4>
                        <div class="vehicles d-flex justify-content-between align-items-center">
                            <div class="count">
                                <h3>27</h3>
                            </div>
                            <span class="material-icons-outlined text-danger">remove_road</span>
                        </div>
                        <div class="pars d-flex justify-content-start">
                            <h5>+4.3%</h5>
                            <p class="mx-2 fw-bold mb-0">than last week</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="card highlights shadow p-3">
                        <h4 class="fw-bold fs-5">Late vehicles</h4>
                        <div class="vehicles d-flex justify-content-between align-items-center">
                            <div class="count">
                                <h3>10</h3>
                            </div>
                            <span class="material-icons-outlined">schedule</span>
                        </div>
                        <div class="pars d-flex justify-content-start">
                            <h5>-2.5%</h5>
                            <p class="mx-2 fw-bold mb-0">than last week</p>
                        </div>
                    </div>
                </div>

        
        </div>

        <div class="row">
            <div class="col-md-7">
                <div class="card shadow p-3 mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <h4>Vehicles Overview</h4>
                        <span class="material-icons-outlined">more_vert</span>
                    </div>

                    <div class="overview-chart d-flex mt-3 mb-1">
                        <div class="chart-1 bg-secondary-subtle p-1 px-2 col-sm-5">
                            <h6>On the way</h6>
                            <h6>39.7%</h6>
                        </div>
                        <div class=" bg-warning-subtle p-1 col-sm-3">
                            <h6>Unloading</h6>
                            <h6>28.9%</h6>
                        </div>
                        <div class=" bg-info-subtle p-1 col-sm-2">
                            <h6>Loading</h6>
                            <h6>19.4%</h6>
                        </div>
                        <div class="chart-2 bg-dark-subtle p-1 col-sm-2">
                            <h6>waiting</h6>
                            <h6>15.5%</h6>
                        </div>
                    </div>

                    <div class="mt-3 p-1">
                        <div class="d-flex p-2 align-items-center justify-content-between w-100">
                            <div class="d-flex align-items-center justify-content-center">
                                <span class="material-icons-outlined">directions_car</span>
                                <h5 class="mx-2 pt-1">On the way</h5>
                            </div>

                            <div class="mx-end d-flex flex-row">
                                <h5>2hr 10min</h5>
                                <h5 class="mx-4">39.7%</h5>
                            </div>
                        </div>
                        <hr class="m-0"/>

                        <div class="d-flex p-2 align-items-center justify-content-between w-100">
                            <div class="d-flex align-items-center justify-content-center">
                                <span class="material-icons-outlined">arrow_circle_down</span>
                                <h5 class="mx-2 pt-1">Unloading</h5>
                            </div>

                            <div class="mx-end d-flex flex-row">
                                <h5>3hr 15min</h5>
                                <h5 class="mx-4">28.9%</h5>
                            </div>
                        </div>
                        <hr class="m-0"/>

                        <div class="d-flex p-2 align-items-center justify-content-between w-100">
                            <div class="d-flex align-items-center justify-content-center">
                                <span class="material-icons-outlined">arrow_circle_up</span>
                                <h5 class="mx-2 pt-1">Loading</h5>
                            </div>

                            <div class="mx-end d-flex flex-row">
                                <h5>1hr 24min</h5>
                                <h5 class="mx-4">19.4%</h5>
                            </div>
                        </div>
                        <hr class="m-0"/>

                        <div class="d-flex p-2 align-items-center justify-content-between w-100">
                            <div class="d-flex align-items-center justify-content-center">
                                <span class="material-icons-outlined">schedule</span>
                                <h5 class="mx-2 pt-1">Waiting</h5>
                            </div>

                            <div class="mx-end d-flex flex-row">
                                <h5>5hr 19min</h5>
                                <h5 class="mx-4">15.5%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5">
                <div class="card shadow p-3 mt-3">
                    <div class="d-flex justify-content-center align-items-center">
                        <h4>Reasons for delivery exceptions</h4>
                    </div>

                    <div class="card-body">
                        <div id="chart-container">
                            <canvas id="deliveryExceptionsChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-5">
                <div class="card perfomance shadow p-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="fs-5">Delivery Performance</h5>
                            <p>12% Increase in this month</p>
                        </div>
                        <span class="material-icons-outlined">more_vert</span>
                    </div>

                    <div class="d-flex d-perf justify-content-between align-items-center mt-1">
                        <div class="d-flex justify-content-center align-items-center">
                            <span><i class='bx bx-package'></i></span>
                            <div class="mx-3">
                                <h6>Packages in transit</h6>
                                <h5>+25.8%</h5>
                            </div>
                        </div>

                        <h5>10k</h5>
                    </div>

                    <div class="d-flex d-perf justify-content-between align-items-center mt-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <span><i class='bx bxs-truck'></i></span>
                            <div class="mx-3">
                                <h6>Packages out for delivery</h6>
                                <h5>+4.3%</h5>
                            </div>
                        </div>

                        <h5>5k</h5>
                    </div>
                    <div class="d-flex d-perf justify-content-between align-items-center mt-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="material-icons-outlined">check_circle</span>
                            <div class="mx-3">
                                <h6>Packages delivered</h6>
                                <h5>-12.5%</h5>
                            </div>
                        </div>

                        <h5>15k</h5>
                    </div>
                    <div class="d-flex d-perf justify-content-between align-items-center mt-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="material-icons-outlined">percent</span>
                            <div class="mx-3">
                                <h6>Delivery success rate</h6>
                                <h5>+35.6%</h5>
                            </div>
                        </div>

                        <h5>95%</h5>
                    </div>
                    <div class="d-flex d-perf justify-content-between align-items-center mt-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="material-icons-outlined">query_builder</span>
                            <div class="mx-3">
                                <h6>Average delivery time</h6>
                                <h5>-2.18%</h5>
                            </div>
                        </div>

                        <h5>2.5 Days</h5>
                    </div>
                    <div class="d-flex d-perf justify-content-between align-items-center mt-2">
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="material-icons-outlined">people</span>
                            <div class="mx-3">
                                <h6>Customer satisfaction</h6>
                                <h5>+5.8%</h5>
                            </div>
                        </div>

                        <h5>4.0/5</h5>
                    </div>
                </div>
            </div>

            <div class="col-md-7">
                <div class="card shadow p-4">
                    <div class="text-center align-items-center mb-2">
                        
                        <h4>Shipment Statistics</h4>
                        <p>Total number of deliveries 23.8k</p>
                        
                    </div>
                    <div class="card-body mt-1 mb-3">
                        <canvas id="shipmentChart" height="300"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="card shadow-lg mt-3">
                    <div class="card-header text-center bg-primary-subtle">
                        <h4>On Route Vehicles</h4>
                    </div>
                    <div class="card-body overflow-y-hidden">
                        <table class="table">
                            <thead class="">
                                <tr>
                                    <th><input type="checkbox"></th>
                                    <th>Vehicle ID</th>
                                    <th>Starting Route</th>
                                    <th>Ending Route</th>
                                    <th>Warnings</th>
                                    <th>Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td class="fw-bold">ATS-V-5037</td>
                                    <td>Madhapur</td>
                                    <td>Raidurg</td>
                                    <td class="text-danger fw-bold">Delay due to weather</td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 40%;">40%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td class="fw-bold">ATS-V-5038</td>
                                    <td>Mettuguda</td>
                                    <td>Mulkajgiri</td>
                                    <td class="text-warning fw-bold">Fuel Problem</td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 45%;">45%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td class="fw-bold">ATS-V-5039</td>
                                    <td>SR Nagar</td>
                                    <td>Erragadda</td>
                                    <td class="text-primary fw-bold">On schedule</td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar " style="width: 90%;">90%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td class="fw-bold">ATS-V-5040</td>
                                    <td>JBS</td>
                                    <td>Begumpet</td>
                                    <td class="text-success fw-bold">No Warnings</td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar " style="width: 70%;">70%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td class="fw-bold">ATS-V-5041</td>
                                    <td>Nagole</td>
                                    <td>Lb Nagar</td>
                                    <td class="text-danger fw-bold">Traffic congestion</td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 35%;">35%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td class="fw-bold">ATS-V-5042</td>
                                    <td>Uppal</td>
                                    <td>Boduppal</td>
                                    <td class="text-primary fw-bold">On schedule</td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 90%;">90%</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `;
    //=========PIE CHART===========//
    const ctx = document.getElementById('deliveryExceptionsChart').getContext('2d');

    let hoverLabel = '';
    let hoverValue = '';

    const data = {
        labels: ['Incorrect Address', 'Weather Conditions', 'Federal Holidays', 'Damage During Transit'],
        datasets: [{
            data: [35, 25, 20, 20], 
            backgroundColor: ['#fc4903', '#03fc39', '#034efc', '#fcec03'], 
            borderWidth: 0, 
            borderColor: '#fff',
            hoverOffset: 8,
            
        }]
    };

    const deliveryExceptionsChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            cutout: '77%', 
            plugins: {
                legend: { position: 'bottom' },
                tooltip: { enabled: false } 
            },
            animation: { animateRotate: true },
            onHover: (event, chartElements) => {
                if (chartElements.length) {
                    let index = chartElements[0].index;
                    hoverLabel = data.labels[index];
                    hoverValue = data.datasets[0].data[index] + '%';
                } else {
                    hoverLabel = '';
                    hoverValue = '';
                }
                deliveryExceptionsChart.update();
            }
        },
        plugins: [{
            id: 'hoverCenterText',
            afterDraw: (chart) => {
                let width = chart.width, height = chart.height;
                let ctx = chart.ctx;
                ctx.save();
                ctx.font = "bold 19px sans-serif";
                ctx.background = "transparent"
                ctx.fillStyle = "#000";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";

                let textX = width / 2;
                let textY = height / 2;

                ctx.clearRect(textX - 40, textY - 25, 80, 50);

                if (hoverLabel && hoverValue) {
                    ctx.fillText(hoverLabel, textX, textY - 7);
                    ctx.fillText(hoverValue, textX, textY + 12);
                }

                ctx.restore();
            }
        }]
    }); 

    //===========Second Chart==============//

    
        var ctx2 = document.getElementById('shipmentChart').getContext('2d');
        var shipmentChart = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'],
                datasets: [
                    {
                        label: 'Shipment',
                        type: 'bar',
                        data: [30, 45, 35, 40, 38, 50, 48, 42, 46, 39],
                        backgroundColor: 'rgba(174, 212, 248, 0.6)',
                        borderColor: 'rgb(40, 125, 244)',
                        borderWidth: 1
                    },
                    {
                        label: 'Delivery',
                        type: 'line',
                        data: [25, 28, 27, 30, 29, 35, 32, 34, 31, 33],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'white',
                        pointBorderColor: 'blue',
                        pointRadius: 5,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
            }
        });
   

};