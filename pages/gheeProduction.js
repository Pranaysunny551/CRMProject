
function loadGheeProduction(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid ghee-production">
            <div class="header mb-3">
                <h2 class="">Ghee Production</h2>
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
                            <h4 class="card-text fs-5">235</h4>
                            <p class="text-success fw-medium"><i class="fas fa-arrow-up"></i> 12% from last week</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-1">
                    <div class="card shadow summary-card h-75">
                        <div class="card-body">
                            <h3 class="card-title text-muted fs-4">Today's Output</h3>
                            <h4 class="card-text fs-5">187</h4>
                            <p class="text-success fw-medium"><i class="fas fa-arrow-up"></i> 5% from yesterday</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-1">
                    <div class="card shadow summary-card h-75">
                        <div class="card-body">
                            <h3 class="card-title text-muted fs-4">Stock Available</h3>
                            <h4 class="card-text fs-5">256</h4>
                            <p class="text-warning fw-medium"><i class="fas fa-exclamation-circle"></i> 15% low on Buffalo(G)</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-1">
                    <div class="card shadow summary-card h-75">
                        <div class="card-body">
                            <h3 class="card-title text-muted fs-4">Quality Rate</h3>
                            <h4 class="card-text fs-5">91.7%</h4>
                            <p class="text-success fw-medium"><i class="fas fa-check-circle"></i> Within standards</p>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div class="card shadow mb-4">
                <div class="card-header bg-info-subtle">
                    <h4 class="mb-0 text-center"><i class="fas fa-chart-line me-2"></i>Weekly Production Overview</h4>
                </div>
                <div class="card-body">
                    <canvas id="productionChart" height="250"></canvas>
                </div>
            </div>
    
           
            <h3 class="mb-2 text-center"><i class="fas fa-boxes me-2"></i>Ghee Categories</h3>
            <hr class="m-0"/>
            <div class="row">
                <div class="col-md-6 col-lg-6 mb-4">
                    <div class="card product-card h-100">
                        <div class="card-header bg-info-subtle text-center">
                            <h5 class="card-title mb-0">Cow Ghee</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <img src="./images/cow-ghee.webp" alt="">
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
                                                <td>40</td>
                                                <td>30</td>
                                            </tr>
                                            <tr>
                                                <td>1 Liter</td>
                                                <td>35</td>
                                                <td>44</td>
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
                            <h5 class="card-title mb-0">Buffalo Ghee</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <img src="./images/buffalo-ghee.webp" alt="">
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
                                                <td>55</td>
                                                <td>40</td>
                                            </tr>
                                            <tr>
                                                <td>1 Liter</td>
                                                <td>34</td>
                                                <td>30</td>
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
                            <h5 class="card-title mb-0">Aroma Ghee</h5>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row">
                                <img src="./images/aroma-ghee.webp" alt="">
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
                                                <td>25</td>
                                                <td>40</td>
                                            </tr>
                                            <tr>
                                                <td>1 Liter</td>
                                                <td>47</td>
                                                <td>60</td>
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
                                    <td>Cow Ghee</td>
                                    <td>1 Liter</td>
                                    <td>85</td>
                                    <td>#CM230615</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Buffalo Ghee</td>
                                    <td>500g</td>
                                    <td>42</td>
                                    <td>#TM230616</td>
                                    <td><span class="badge bg-success-subtle text-dark fs-6" style="width: 120px;">Completed</span></td>
                                </tr>
                                <tr>
                                    <td>2025-03-25</td>
                                    <td>Aroma Ghee</td>
                                    <td>1 Kg</td>
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
                            label: 'Cow Ghee',
                            data: [120, 110, 130, 125, 140, 100, 85],
                            backgroundColor: 'rgba(8, 22, 143, 0.7)',
                            borderColor: 'rgba(8, 22, 143, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Buffalo Ghee',
                            data: [88, 55, 70, 65, 75, 110, 120],
                            backgroundColor: 'rgba(8, 106, 27, 0.7)',
                            borderColor: 'rgba(8, 106, 27, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Aroma Ghee',
                            data: [40, 78, 98, 42, 83, 66, 80],
                            backgroundColor: 'rgba(66, 183, 247, 0.7)',
                            borderColor: 'rgba(66, 183, 247, 1)',
                            borderWidth: 1
                        },
                        
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