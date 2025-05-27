
function loadInvestments() {
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid investments">
        <div class="header text-center bg-primary-subtle mt-2">
          <h2 class="fs-5">INVESTMENTS</h2>
        </div>
        <div class="d-flex justify-content-end flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-2 border-bottom">
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                    <button type="button" class="btn btn-sm btn-outline-secondary">Day</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Week</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary active">Month</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Year</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-success">
                    <i class="fas fa-download me-1"></i> Export Report
                </button>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="card shadow h-100">
                    <div class="card-body">
                        <div>
                          <h5 class="card-title fw-bold mb-3 fs-5">Total Purchased</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="mb-2">12,450 L</h4>
                                <small class="text-success"><i class="fas fa-caret-up me-1"></i> 5.2% from last month</small>
                            </div>
                            <div class="bg-primary bg-opacity-10 p-2 rounded">
                                <i class="fas fa-weight-hanging text-primary fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="card shadow h-100">
                    <div class="card-body">
                        <div>
                          <h5 class="card-title fw-bold mb-3  fs-5">Total Investment</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="mb-2">₹487,500</h4>
                                <small class="text-success"><i class="fas fa-caret-up me-1"></i> 8.7% from last month</small>
                            </div>
                            <div class="bg-success bg-opacity-10 p-2 rounded">
                                <i class="fas fa-rupee-sign text-success fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="card shadow h-100">
                    <div class="card-body">
                        <div>
                          <h4 class="card-title fw-bold mb-3 fs-5">Avg. Milk Price</h4>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="mb-2">₹32/L</h4>
                                <small class="text-danger"><i class="fas fa-caret-down me-1"></i> 1.2% from last month</small>
                            </div>
                            <div class="bg-warning bg-opacity-10 p-2 rounded">
                                <i class="fas fa-tag text-warning fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="card shadow h-100">
                    <div class="card-body">
                        <div>
                          <h4 class="card-title fw-bold mb-3 fs-5">Active Suppliers</h4>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 class="mb-2">24</h4>
                                <small class="text-success"><i class="fas fa-plus me-1"></i> 2 new this month</small>
                            </div>
                            <div class="bg-info bg-opacity-10 p-2 rounded">
                                <i class="fas fa-truck text-info fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 mb-3">
                <div class="card shadow h-100">
                    <div class="card-header d-flex justify-content-between align-items-center bg-info-subtle">
                        <div class="w-100 d-flex justify-content-center">
                            <span class="fw-bold fs-5">Milk Purchases from Suppliers</span>
                        </div>
                        
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table align-middle">
                                <thead class="table-light">
                                    <tr>
                                        <th>Supplier</th>
                                        <th class="text-end">Quantity (L)</th>
                                        <th class="text-end">Rate (₹/L)</th>
                                        <th class="text-end">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="./images/profile.png" class="rounded-circle me-2 object-fit-cover" width="35" height="35">
                                                <div>Green Pastures Farm</div>
                                            </div>
                                        </td>
                                        <td class="text-end">1,250</td>
                                        <td class="text-end">32.00</td>
                                        <td class="text-end fw-bold">₹40,000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="./images/profile2.png" class="rounded-circle me-2 object-fit-cover" width="35" height="35">
                                                <div>Happy Cows Dairy</div>
                                            </div>
                                        </td>
                                        <td class="text-end">980</td>
                                        <td class="text-end">31.00</td>
                                        <td class="text-end fw-bold">₹30,380</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="./images/profile3.jpg" class="rounded-circle me-2 object-fit-cover" width="30" height="30">
                                                <div>Organic Valley</div>
                                            </div>
                                        </td>
                                        <td class="text-end">1,500</td>
                                        <td class="text-end">34.00</td>
                                        <td class="text-end fw-bold">₹51,000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="./images/profile4.jpg" class="rounded-circle me-2 object-fit-cover" width="30" height="30">
                                                <div>Milk & Honey Co.</div>
                                            </div>
                                        </td>
                                        <td class="text-end">2,000</td>
                                        <td class="text-end">30.00</td>
                                        <td class="text-end fw-bold">₹60,000</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <img src="./images/profile5.jpg" class="rounded-circle me-2 object-fit-cover" width="30" height="30">
                                                <div>Fresh Meadows</div>
                                            </div>
                                        </td>
                                        <td class="text-end">1,720</td>
                                        <td class="text-end">33.00</td>
                                        <td class="text-end fw-bold">₹56,760</td>
                                    </tr>
                                </tbody>
                                <tfoot class="">
                                    <tr>
                                        <th>Total</th>
                                        <th class="text-end text-success">7,450</th>
                                        <th class="text-end">Avg. 32.2</th>
                                        <th class="text-end">₹238,140</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="bottom mt-2 d-flex justify-content-between">
                            <small class="text-muted fw-medium">Showing 5 of 24 active suppliers. Last updated: Today, 10:45 AM</small>
                            <button class="btn btn-sm fw-medium">View All</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 mb-3 mt-3">
                <div class="card shadow h-100">
                    <div class="card-header d-flex justify-content-between align-items-center bg-info-subtle">
                        <div class="w-100 d-flex justify-content-center">
                            <span class="fw-bold fs-5">Raw Material Investments</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="nav nav-tabs mb-2" id="rawMaterialTabs" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="milk-tab" data-bs-toggle="tab" data-bs-target="#milk" type="button" role="tab">
                                    <i class="fas fa-wine-bottle me-1"></i> Milk
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="curd-tab" data-bs-toggle="tab" data-bs-target="#curd" type="button" role="tab">
                                    <i class="fas fa-blender me-1"></i> Curd
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="ghee-tab" data-bs-toggle="tab" data-bs-target="#ghee" type="button" role="tab">
                                    <i class="fas fa-oil-can me-1"></i> Ghee
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="paneer-tab" data-bs-toggle="tab" data-bs-target="#paneer" type="button" role="tab">
                                    <i class="fas fa-cheese me-1"></i> Paneer
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content border-0" id="rawMaterialTabContent">
                            <div class="tab-pane fade show active" id="milk" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-sm align-middle">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Package Type</th>
                                                <th class="text-end">Quantity</th>
                                                <th class="text-end">Cost/Unit</th>
                                                <th class="text-end">Total Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-primary bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-wine-bottle text-primary"></i>
                                                        </div>
                                                        <div>500ml Pouch</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">5,000</td>
                                                <td class="text-end">₹5.20</td>
                                                <td class="text-end fw-bold">₹26,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-primary bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-wine-bottle text-primary"></i>
                                                        </div>
                                                        <div>1 Liter Bottle</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">3,000</td>
                                                <td class="text-end">₹8.50</td>
                                                <td class="text-end fw-bold">₹25,500</td>
                                            </tr>
                                            <tr>
                                              <td>
                                                  <div class="d-flex align-items-center">
                                                      <div class="bg-primary bg-opacity-10 p-2 rounded me-2">
                                                          <i class="fas fa-wine-bottle text-primary"></i>
                                                      </div>
                                                      <div>200ml Pouch</div>
                                                  </div>
                                              </td>
                                              <td class="text-end">2,000</td>
                                              <td class="text-end">₹2.20</td>
                                              <td class="text-end fw-bold">₹4,400</td>
                                          </tr>
                                          
                                        </tbody>
                                        <tfoot class="table-secondary">
                                            <tr>
                                                <th colspan="3">Subtotal</th>
                                                <th class="text-end">₹55,900</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="alert alert-info mt-3">
                                    <i class="fas fa-info-circle me-2"></i>
                                    <strong>Note:</strong> Milk packaging costs include bottles, caps, labels, and sterilization.
                                </div>
                            </div>
                            <div class="tab-pane fade" id="curd" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-sm align-middle">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Package Type</th>
                                                <th class="text-end">Quantity</th>
                                                <th class="text-end">Cost/Unit</th>
                                                <th class="text-end">Total Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-success bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-blender text-success"></i>
                                                        </div>
                                                        <div>200g Cup</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">8,000</td>
                                                <td class="text-end">₹3.75</td>
                                                <td class="text-end fw-bold">₹30,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-success bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-blender text-success"></i>
                                                        </div>
                                                        <div>500g Tub</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">4,000</td>
                                                <td class="text-end">₹7.25</td>
                                                <td class="text-end fw-bold">₹29,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-success bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-blender text-success"></i>
                                                        </div>
                                                        <div>1 Kg Bucket</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">1,500</td>
                                                <td class="text-end">₹12.00</td>
                                                <td class="text-end fw-bold">₹18,000</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="table-secondary">
                                            <tr>
                                                <th colspan="3">Subtotal</th>
                                                <th class="text-end">₹77,000</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="ghee" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-sm align-middle">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Package Type</th>
                                                <th class="text-end">Quantity</th>
                                                <th class="text-end">Cost/Unit</th>
                                                <th class="text-end">Total Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-warning bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-oil-can text-warning"></i>
                                                        </div>
                                                        <div>200g Jar</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">3,000</td>
                                                <td class="text-end">₹15.00</td>
                                                <td class="text-end fw-bold">₹45,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-warning bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-oil-can text-warning"></i>
                                                        </div>
                                                        <div>500g Tin</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">2,000</td>
                                                <td class="text-end">₹32.50</td>
                                                <td class="text-end fw-bold">₹65,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-warning bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-oil-can text-warning"></i>
                                                        </div>
                                                        <div>1 Kg Can</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">1,000</td>
                                                <td class="text-end">₹60.00</td>
                                                <td class="text-end fw-bold">₹60,000</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="table-secondary">
                                            <tr>
                                                <th colspan="3">Subtotal</th>
                                                <th class="text-end">₹170,000</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="alert alert-warning mt-3">
                                    <i class="fas fa-exclamation-triangle me-2"></i>
                                    <strong>Notice:</strong> Ghee packaging costs are higher due to premium glass containers.
                                </div>
                            </div>
                            <div class="tab-pane fade" id="paneer" role="tabpanel">
                                <div class="table-responsive">
                                    <table class="table table-sm align-middle">
                                        <thead class="table-light">
                                            <tr>
                                                <th>Package Type</th>
                                                <th class="text-end">Quantity</th>
                                                <th class="text-end">Cost/Unit</th>
                                                <th class="text-end">Total Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-danger bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-cheese text-danger"></i>
                                                        </div>
                                                        <div>200g Pack</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">4,000</td>
                                                <td class="text-end">₹8.00</td>
                                                <td class="text-end fw-bold">₹32,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-danger bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-cheese text-danger"></i>
                                                        </div>
                                                        <div>500g Pack</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">2,500</td>
                                                <td class="text-end">₹18.00</td>
                                                <td class="text-end fw-bold">₹45,000</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="d-flex align-items-center">
                                                        <div class="bg-danger bg-opacity-10 p-2 rounded me-2">
                                                            <i class="fas fa-cheese text-danger"></i>
                                                        </div>
                                                        <div>1 Kg Pack</div>
                                                    </div>
                                                </td>
                                                <td class="text-end">1,200</td>
                                                <td class="text-end">₹32.00</td>
                                                <td class="text-end fw-bold">₹38,400</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="table-secondary">
                                            <tr>
                                                <th colspan="3">Subtotal</th>
                                                <th class="text-end">₹115,400</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-7 col-md-7 mt-3">
                <div class="card shadow h-100">
                    <div class="card-header bg-primary-subtle text-center">
                        <span class="fw-bold fs-5">Monthly Milk Purchases (Liters)</span>
                    </div>
                    <div class="card-body">
                        <div class="chart-container">
                            <canvas id="milkPurchaseChart"></canvas>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-5 mt-3">
                <div class="card shadow h-100">
                    <div class="card-header bg-primary-subtle text-center">
                        <span class="fw-bold fs-5">Investment Distribution</span>
                    </div>
                    <div class="card-body">
                        <div class="chart-container">
                            <canvas id="investmentPieChart"></canvas>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 mt-4 mb-4">
                <div class="card shadow">
                    <div class="card-header bg-primary-subtle text-center">
                        <span class="fw-bold fs-4">Investment Summary & Analysis</span>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="mb-3">Key Insights</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
                                        <span class="fw-medium fs-5">Total Milk Purchased This Month</span>
                                        <span class="badge text-primary rounded-pill fs-6">12,450 L</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
                                        <span class="fw-medium fs-5">Total Curd Purchased This Month</span>
                                        <span class="badge text-primary rounded-pill fs-6">13,240 L</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
                                        <span class="fw-medium fs-5">Total Packaging Investment</span>
                                        <span class="badge text-success rounded-pill fs-6">₹414,900</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
                                        <span class="fw-medium fs-5">Most Expensive Packaging</span>
                                        <span class="badge text-warning rounded-pill fs-6">Ghee (₹170,000)</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <span class="fw-medium fs-5">Highest Volume Product</span>
                                        <span class="badge text-secondary rounded-pill fs-6">Curd (13,500 units)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h5 class="mb-3">Monthly Trends</h5>
                                <div class="alert alert-success">
                                    <i class="fas fa-arrow-up me-2"></i>
                                    <strong>Positive:</strong> Milk purchases increased by 5.2% compared to last month
                                </div>
                                <div class="alert alert-warning">
                                    <i class="fas fa-exclamation-triangle me-2"></i>
                                    <strong>Watch:</strong> Average milk price decreased by 1.2% this month
                                </div>
                                <div class="alert alert-info">
                                    <i class="fas fa-lightbulb me-2"></i>
                                    <strong>Recommendation:</strong> Consider negotiating better rates with top 3 suppliers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const milkCtx = document.getElementById('milkPurchaseChart').getContext('2d');
        const milkChart = new Chart(milkCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Milk Purchased (Liters)',
                    data: [8500, 9200, 10100, 11300, 12450, 13200, 14500, 12800, 11800, 10500, 9700, 11000],
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y.toLocaleString() + ' liters';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Liters'
                        },
                        ticks: {
                            callback: function(value) {
                                return value.toLocaleString();
                            }
                        }
                    }
                }
            }
        });

        const investCtx = document.getElementById('investmentPieChart').getContext('2d');
        const investChart = new Chart(investCtx, {
            type: 'pie',
            data: {
                labels: ['Milk Packaging', 'Curd Packaging', 'Ghee Packaging', 'Paneer Packaging', 'Other'],
                datasets: [{
                    data: [51500, 77000, 170000, 115400, 73600],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1.4,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += '₹' + context.raw.toLocaleString();
                                return label;
                            }
                        }
                    }
                }
            }
        });
}