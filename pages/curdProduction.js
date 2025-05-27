
function loadCurdProduction(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid curd-production">
            <div class="header mb-3">
                <h2 class="">Curd Production</h2>
                <p class="fs-6"><small>Track Batch Production for Quality Assurance</small></p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 warehouse-btn">
                  <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('milk-production', this)" class="text-decoration-none text-dark">Dodla Milk</a></h4>
                </div>
                <div class="col-lg-3 col-md-6 warehouse-btn">
                  <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('curd-production', this)" class="text-decoration-none text-dark">Dodla Curd</a></h4>
                </div>
                <div class="col-lg-3 col-md-6 warehouse-btn">
                  <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('ghee-production', this)" class="text-decoration-none text-dark">Dodla Ghee</a></h4>
                </div>
                <div class="col-lg-3 col-md-6 warehouse-btn">
                  <h4 class="fw-bold text-center bg-info-subtle p-2"><a href="#" onclick="loadPage('paneer-production', this)" class="text-decoration-none text-dark">Dodla Paneer</a></h4>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-lg-3 col-md-6 mb-1">
                    <div class="card shadow summary-card h-75">
                        <div class="card-body">
                            <h3 class="card-title text-muted fs-4">Total Production</h3>
                            <h4 class="card-text fs-5">1,245</h4>
                            <p class="text-success fw-medium"><i class="fas fa-arrow-up"></i> 12% from last week</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-1">
                    <div class="card shadow summary-card h-75">
                        <div class="card-body">
                            <h3 class="card-title text-muted fs-4">Today's Output</h3>
                            <h4 class="card-text fs-5">987</h4>
                            <p class="text-success fw-medium"><i class="fas fa-arrow-up"></i> 5% from yesterday</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-1">
                    <div class="card shadow summary-card h-75">
                        <div class="card-body">
                            <h3 class="card-title text-muted fs-4">Stock Available</h3>
                            <h4 class="card-text fs-5">856</h4>
                            <p class="text-warning fw-medium"><i class="fas fa-exclamation-circle"></i> 15% low on Thick(C)</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-1">
                    <div class="card shadow summary-card h-75">
                        <div class="card-body">
                            <h3 class="card-title text-muted fs-4">Quality Rate</h3>
                            <h4 class="card-text fs-5">98.7%</h4>
                            <p class="text-success fw-medium"><i class="fas fa-check-circle"></i> Within standards</p>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div class="card shadow mb-4">
                <div class="card-header bg-primary-subtle">
                    <h4 class="mb-0 text-center"><i class="fas fa-chart-line me-2"></i>Weekly Production Overview</h4>
                </div>
                <div class="card-body">
                    <canvas id="productionChart" height="250"></canvas>
                </div>
            </div>
    
           
            <h3 class="mb-2 text-center"><i class="fas fa-boxes me-2"></i>Curd Categories</h3>
            <hr class="m-0"/>
            <div class="row">
                <div class="col-md-6 col-lg-6 mb-4">
                    <div class="card product-card h-100">
                        <div class="card-header bg-info-subtle text-center">
                            <h5 class="card-title mb-0">Dodla Curd</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <img src="./images/dodla-curd.png" alt="">
                                <div class="table-responsive w-100">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Today</th>
                                                <th>Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>500gms</td>
                                                <td>120</td>
                                                <td>320</td>
                                            </tr>
                                            <tr>
                                                <td>1 Kg</td>
                                                <td>85</td>
                                                <td>210</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                        <div class="bg-info-subtle d-flex justify-content-end">
                            <a href="#productionTable"><button class="btn btn-sm btn-light bg-info-subtle fw-medium">View Details</button></a>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-6 col-lg-6 mb-4">
                    <div class="card product-card h-100">
                        <div class="card-header bg-primary-subtle text-center">
                            <h5 class="card-title mb-0">Thick Curd</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <img src="./images/dodla-thick-curd.png" alt="">
                                <div class="table-responsive w-100">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Today</th>
                                                <th>Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>500gms</td>
                                                <td>65</td>
                                                <td>180</td>
                                            </tr>
                                            <tr>
                                                <td>1 Kg</td>
                                                <td>45</td>
                                                <td>120</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="bg-primary-subtle d-flex justify-content-end">
                            <a href="#productionTable"><button class="btn btn-sm btn-light bg-primary-subtle fw-medium">View Details</button></a>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-6 col-lg-6 mb-4">
                    <div class="card product-card h-100">
                        <div class="card-header bg-secondary-subtle text-center">
                            <h5 class="card-title mb-0">Curd(5-10Kg)</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <img src="./images/dodla-bucket-curd.png" alt="">
                                <div class="table-responsive w-100">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Today</th>
                                                <th>Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>5 Kg</td>
                                                <td>75</td>
                                                <td>130</td>
                                            </tr>
                                            <tr>
                                                <td>10 Kg</td>
                                                <td>55</td>
                                                <td>100</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="bg-secondary-subtle d-flex justify-content-end">
                            <a href="#productionTable"><button class="btn btn-sm btn-light bg-secondary-subtle fw-medium">View Details</button></a>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-6 col-lg-6 mb-4">
                    <div class="card product-card h-100">
                        <div class="card-header bg-success-subtle text-center">
                            <h5 class="card-title mb-0">Curd(100-200gms)</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <img src="./images/dodla-curd-cup.png" alt="">
                                <div class="table-responsive w-100">
                                    <table class="table table-sm">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Today</th>
                                                <th>Stock</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>100gms</td>
                                                <td>65</td>
                                                <td>180</td>
                                            </tr>
                                            <tr>
                                                <td>200gms</td>
                                                <td>45</td>
                                                <td>120</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="bg-success-subtle d-flex justify-content-end">
                            <a href="#productionTable"><button class="btn btn-sm btn-light bg-success-subtle fw-medium">View Details</button></a>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="card shadow mt-4" id="productionTable">
                <div class="card-header bg-primary-subtle text-center">
                    <h4 class="mb-0">Recent Production Activity</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Product</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Batch No.</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Curd</td>
                                    <td>1 Kg</td>
                                    <td>85</td>
                                    <td>#CM230615</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Curd</td>
                                    <td>500gms</td>
                                    <td>42</td>
                                    <td>#TM230616</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Thick Curd</td>
                                    <td>1 Kg</td>
                                    <td>28</td>
                                    <td>#SM230617</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Thick Curd</td>
                                    <td>500gms</td>
                                    <td>65</td>
                                    <td>#FM230611</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Curd</td>
                                    <td>5 Kg</td>
                                    <td>85</td>
                                    <td>#CM230615</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Curd</td>
                                    <td>10 Kg</td>
                                    <td>42</td>
                                    <td>#TM230616</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Thick Curd</td>
                                    <td>5 Kg</td>
                                    <td>28</td>
                                    <td>#SM230617</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Thick Curd</td>
                                    <td>10 Kg</td>
                                    <td>65</td>
                                    <td>#FM230611</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Curd</td>
                                    <td>100gms</td>
                                    <td>42</td>
                                    <td>#TM230616</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Thick Curd</td>
                                    <td>200gms</td>
                                    <td>28</td>
                                    <td>#SM230617</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        `;
    
        const ctx = document.getElementById('productionChart').getContext('2d');
            const productionChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                        
                        {
                            label: 'Curd',
                            data: [80, 28, 59, 99, 38, 100, 95],
                            backgroundColor: 'rgba(251, 167, 3, 0.7)',
                            borderColor: 'rgba(251, 167, 3, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Thick Curd',
                            data: [40, 78, 98, 42, 83, 66, 80],
                            backgroundColor: 'rgba(66, 183, 247, 0.7)',
                            borderColor: 'rgba(66, 183, 247, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Curd 5-10Kg',
                            data: [88, 68, 49, 48, 77, 99, 47],
                            backgroundColor: 'rgba(33, 178, 149, 0.7)',
                            borderColor: 'rgba(33, 178, 149, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Curd 100-200gms',
                            data: [40, 77, 100, 77, 47, 67, 120],
                            backgroundColor: 'rgba(220, 53, 69, 0.7)',
                            borderColor: 'rgba(220, 53, 69, 1)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Quantity Produced'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Day of Week'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'bottom', 
                        }
                    }
                }
            });
    }