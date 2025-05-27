
function loadMilkProduction(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid milk-production">
        <div class="header mb-3">
            <h2 class="">Milk Production</h2>
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
                        <p class="text-warning fw-medium"><i class="fas fa-exclamation-circle"></i> 15% low on Toned</p>
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
            <div class="card-header bg-success-subtle">
                <h4 class="mb-0 text-center"><i class="fas fa-chart-line me-2"></i>Weekly Production Overview</h4>
            </div>
            <div class="card-body">
                <canvas id="productionChart" height="250"></canvas>
            </div>
        </div>

       
        <h3 class="mb-2 text-center"><i class="fas fa-boxes me-2"></i>Milk Categories</h3>
        <hr class="m-0"/>
        <div class="row">
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card h-100">
                    <div class="card-header bg-info-subtle text-center">
                        <h5 class="card-title mb-0">Cow Milk</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-row">
                            <img src="./images/dodla-cow-milk.png" alt="">
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
                                            <td>500ml</td>
                                            <td>120</td>
                                            <td>320</td>
                                        </tr>
                                        <tr>
                                            <td>1 Liter</td>
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

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card h-100">
                    <div class="card-header bg-primary-subtle text-center">
                        <h5 class="card-title mb-0">Toned Milk</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-row">
                            <img src="./images/dodla-toned.png" alt="">
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
                                            <td>500ml</td>
                                            <td>65</td>
                                            <td>180</td>
                                        </tr>
                                        <tr>
                                            <td>1 Liter</td>
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

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card h-100">
                    <div class="card-header bg-secondary-subtle text-center">
                        <h5 class="card-title mb-0">Standardised Milk</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-row">
                            <img src="./images/dodla-sd-milk.png" alt="">
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
                                            <td>500ml</td>
                                            <td>75</td>
                                            <td>130</td>
                                        </tr>
                                        <tr>
                                            <td>1 Liter</td>
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

            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card h-100">
                    <div class="card-header bg-warning-subtle text-center">
                        <h5 class="card-title mb-0">Full Cream Milk</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-row">
                            <img src="./images/dodla-cream.png" alt="">
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
                                            <td>500ml</td>
                                            <td>5</td>
                                            <td>180</td>
                                        </tr>
                                        <tr>
                                            <td>1 Liter</td>
                                            <td>45</td>
                                            <td>120</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="bg-warning-subtle d-flex justify-content-end">
                        <a href="#productionTable"><button class="btn btn-light bg-warning-subtle fw-medium">View Details</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card h-100">
                    <div class="card-header bg-dark-subtle text-center">
                        <h5 class="card-title mb-0">Doble Toned Milk</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-row">
                            <img src="./images/dodla-double-toned.png" alt="">
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
                                            <td>500ml</td>
                                            <td>65</td>
                                            <td>180</td>
                                        </tr>
                                        <tr>
                                            <td>1 Liter</td>
                                            <td>45</td>
                                            <td>120</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="bg-dark-subtle d-flex justify-content-end">
                        <a href="#productionTable"><button class="btn btn-sm btn-light bg-dark-subtle fw-medium">View Details</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card product-card h-100">
                    <div class="card-header bg-success-subtle text-center">
                        <h5 class="card-title mb-0">Gold Milk</h5>
                    </div>
                    <div class="card-body">
                        <div class="d-flex flex-row">
                            <img src="./images/dodla-sd-gold.png" alt="">
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
                                            <td>500ml</td>
                                            <td>65</td>
                                            <td>180</td>
                                        </tr>
                                        <tr>
                                            <td>1 Liter</td>
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

        <div class="card mt-4" id="productionTable">
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
                                <td>Cow Milk</td>
                                <td>1 Liter</td>
                                <td>85</td>
                                <td>#CM230615</td>
                                <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                            </tr>
                            <tr>
                                <td>2025-03-25</td>
                                <td>Toned Milk</td>
                                <td>500g</td>
                                <td>42</td>
                                <td>#TM230616</td>
                                <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                            </tr>
                            <tr>
                                <td>2025-03-25</td>
                                <td>SD Milk</td>
                                <td>1 Kg</td>
                                <td>28</td>
                                <td>#SM230617</td>
                                <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                            </tr>
                            <tr>
                                <td>2025-03-25</td>
                                <td>FC Milk</td>
                                <td>500ml</td>
                                <td>65</td>
                                <td>#FM230611</td>
                                <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                            </tr>
                            <tr>
                                <td>2025-03-25</td>
                                <td>Gold Milk</td>
                                <td>500ml</td>
                                <td>120</td>
                                <td>#GM230612</td>
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
                        label: 'Cow Milk',
                        data: [120, 110, 130, 125, 140, 100, 85],
                        backgroundColor: 'rgba(8, 22, 143, 0.7)',
                        borderColor: 'rgba(8, 22, 143, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Toned Milk',
                        data: [88, 55, 70, 65, 75, 110, 120],
                        backgroundColor: 'rgba(8, 106, 27, 0.7)',
                        borderColor: 'rgba(8, 106, 27, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'SD Milk',
                        data: [30, 28, 59, 99, 38, 60, 55],
                        backgroundColor: 'rgba(251, 167, 3, 0.7)',
                        borderColor: 'rgba(251, 167, 3, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'FC Milk',
                        data: [40, 78, 98, 42, 83, 66, 80],
                        backgroundColor: 'rgba(66, 183, 247, 0.7)',
                        borderColor: 'rgba(66, 183, 247, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Gold Milk',
                        data: [88, 68, 49, 48, 77, 99, 47],
                        backgroundColor: 'rgba(33, 178, 149, 0.7)',
                        borderColor: 'rgba(33, 178, 149, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'DT Milk',
                        data: [40, 77, 110, 77, 97, 35, 120],
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