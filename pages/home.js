function loadHomepageData(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid home">
        <div class="row mb-3">
            <div class="col-md-6 col-lg-3">
                <div class="card overview shadow p-3 mt-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="fw-bold">Production</h4>
                            <h5 class="fw-bold fs-5">80.56 <small class="text-muted fs-6">Tonnes</small></h5>
                        </div>
                        <span class="material-icons-outlined icon text-info fs-1">shopping_bag</span>
                    </div>
                    <p class="fw-bold text-secondary mb-0">Total Production</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="card overview shadow p-3 mt-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="fw-bold">Users</h4>
                            <h5 class="fw-bold fs-5">565 </h5>
                        </div>
                        <span class="material-icons-outlined icon text-info fs-1">groups</span>
                    </div>
                    <p class="fw-bold text-secondary mb-0">Total Users</p>
                </div>
            </div>    
                
            <div class="col-md-6 col-lg-3">
                <div class="card overview shadow p-3 mt-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="fw-bold">Revenue</h4>
                            <h5 class="fw-bold fs-5">₹48,25,000</h5>
                        </div>
                        <a href="#" onclick="loadPage('revenue', this)"><span class="material-icons-outlined icon text-info fs-1">currency_rupee</span></a>
                    </div>
                    <p class="fw-bold text-secondary mb-0">Total Revenue</p>
                </div>
            </div>
                
            <div class="col-md-6 col-lg-3">
                <div class="card overview shadow p-3 mt-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="fw-bold">Total Sales</h4>
                            <h5 class="fw-bold fs-5">8,768</h5>
                        </div>
                        <a href="#" onclick="loadPage('sales-dash', this)"><span class="material-icons-outlined icon text-info fs-1">troubleshoot</span></a>
                    </div>
                    <p class="fw-bold text-secondary mb-0">Today Total Sales</p>
                </div>
            </div>   
                
        </div>   
        
        <div class="row">
            <div class="col-md-7">
                <div class="card shadow mt-3">
                    <div class="card-header bg-primary-subtle">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="text-center w-100">
                                <h4 class="text-center mb-1">Sales Report</h4>
                            </div>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-bar-chart-line-fill"></i> Last Day</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-bar-chart-line-fill"></i> Last Month</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-bar-chart-line-fill"></i> Last Year</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div class="card-body">
                        <div class="chart">
                            <canvas id="salesChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5">
                <div class="card shadow mt-3">
                    <div class="card-header d-flex justify-content-between align-items-center bg-primary-subtle">
                        <div class="text-center w-100">
                            <h4 class="text-center mb-1">Purchase Report</h4>
                        </div>
                        <div class="dropdown action-dropdown">
                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="material-icons-outlined text-dark">more_vert</span>
                            </a>
                            <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                <li><a class="dropdown-item" href="#"><i class="bi bi-pie-chart-fill"></i> Last Day</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-pie-chart-fill"></i> Last Month</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-pie-chart-fill"></i> Last Year</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="chart">
                            <canvas id="purchasePieChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-md-6">
                <div class="card statistics shadow mt-3 p-4">
                    <div class="d-flex pt-1 pb-2 flex-row justify-content-between align-items-center">
                        <h3>Orders Statistics</h3>
                        <div class="dropdown action-dropdown">
                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="material-icons-outlined text-dark">more_vert</span>
                            </a>
                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="total-oreders p-2 pl-1 pr-1 d-flex flex-row justify-content-between align-items-center">
                        <div>
                            <h1>2,055</h1>
                            <p>Total Orders</p>
                        </div>
                        <div class="orders-pers d-flex justify-content-center align-items-center">
                            <div class="text-center">
                                <h4>55%<i class='up bx bxs-chevrons-up'></i></h4>
                                <p>Last Month</p>
                            </div>
                        </div>
                    </div>

                    <div class="statistics milk-icon mt-3 pt-1 d-flex flex-row justify-content-between">
                        <div class="d-flex flex-row">
                            <div class="static-icons">
                                <span class="material-icons-outlined">loyalty</span>
                            </div>
                            <div>
                                <h6>Farm Milk</h6>
                                <p>All Milk Categories</p>
                            </div>
                        </div>
                        <h5 class="mt-1">68.5k</h5>
                        <h4 class="fs-5">87%<i class='up bx bxs-chevrons-up'></i></h4>
                    </div>

                    <div class="statistics Ghee-icon mt-3 d-flex flex-row justify-content-between">
                        <div class="d-flex flex-row">
                            <div class="static-icons">
                                <span class="material-icons-outlined">auto_awesome</span>
                            </div>
                            <div>
                                <h6>Farm Ghee</h6>
                                <p>All Ghee Categories</p>
                            </div>
                        </div>
                        <h5 class="mt-1">20.7k</h5>
                        <h4 class="fs-5">45%<i class='down bx bxs-chevrons-down'></i></h4>
                    </div>

                    <div class="statistics curd-icon mt-3 d-flex flex-row justify-content-between">
                        <div class="d-flex flex-row">
                            <div class="static-icons">
                                <span class="material-icons-outlined">verified</span>
                            </div>
                            <div>
                                <h6>Farm Curd</h5>
                                <p>All Curd Categories</p>
                            </div>
                        </div>
                        <h5 class="mt-1">85.6k</h6>
                        <h4 class="fs-5">92%<i class='up bx bxs-chevrons-up'></i></h4>
                    </div> 

                    <div class="statistics paneer-icon mt-3 d-flex flex-row justify-content-between">
                        <div class="d-flex flex-row">
                            <div class="static-icons">
                                <span class="material-icons-outlined">star_rate</span>
                            </div>
                            <div>
                                <h6>Farm Paneer</h6>
                                <p>All Paneer Categories</p>
                            </div>
                        </div>
                        <h5 class="mt-1">50.4k</h6>
                        <h4 class="fs-5">65%<i class='up bx bxs-chevrons-up'></i></h4>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card shadow mt-3 p-4">
                    <div class="d-flex flex-row justify-content-between align-items-center">
                        <h3>Transactions</h3>
                        <div class="dropdown action-dropdown">
                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="material-icons-outlined text-dark">more_vert</span>
                            </a>
                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="transactions paypal mt-3 d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-row">
                            <div class="money-icons">
                                <span class="material-icons-outlined">paypal</span>
                            </div>
                            <div>
                                <h6>Paypal</h6>
                                <p>Send Money</p>
                            </div>
                        </div>
                        <h4>+62.9<i class='bx bx-rupee'></i></h4>
                    </div>
                    
                    <div class="transactions paypal mt-3 d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-row">
                            <div class="money-icons">
                                <span class="material-icons-outlined">wallet</span>
                            </div>
                            <div>
                                <h6>Wallet</h6>
                                <p>Mac'D</p>
                            </div>
                        </div>
                        <h4>+25.4<i class='bx bx-rupee'></i></h4>
                    </div>

                    <div class="transactions paypal mt-3 d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-row">
                            <div class="money-icons">
                                <span class="material-icons-outlined">donut_small</span>
                            </div>
                            <div>
                                <h6>Transfer</h6>
                                <p>Refund</p>
                            </div>
                        </div>
                        <h4>+15.7<i class='bx bx-rupee'></i></h4>
                    </div>

                    <div class="transactions paypal mt-3 d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-row">
                            <div class="money-icons">
                                <span class="material-icons-outlined">double_arrow</span>
                            </div>
                            <div>
                                <h6>UPI</h6>
                                <p>Send Money</p>
                            </div>
                        </div>
                        <h4>+120.9<i class='bx bx-rupee'></i></h4>
                    </div>

                    <div class="transactions paypal mt-3 d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-row">
                            <div class="money-icons">
                                <span class="material-icons-outlined">credit_card</span>
                            </div>
                            <div>
                                <h6>Credit Card</h6>
                                <p>Ordered Items</p>
                            </div>
                        </div>
                        <h4>+70.2<i class='bx bx-rupee'></i></h4>
                    </div>

                    <div class="transactions paypal mt-3 d-flex flex-row justify-content-between align-items-center">
                        <div class="d-flex flex-row">
                            <div class="money-icons">
                                <span class="material-icons-outlined">payments</span>
                            </div>
                            <div>
                                <h6>Master Card</h6>
                                <p>Ordered Items</p>
                            </div>
                        </div>
                        <h4>+62.3<i class='bx bx-rupee'></i></h4>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row mt-2">                 
            <!-- Orders Table -->
            <div class="orders-table col-md-12">
                <div class="card shadow mt-3 overflow-x-auto">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>AMOUNT</th>
                                    <th>ORDER STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Toned Milk</td>
                                    <td>Milk</td>
                                    <td>840</td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 106px">Completed</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fresh Ghee</td>
                                    <td>Ghee</td>
                                    <td>1200</td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 106px">Completed</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cow Milk</td>
                                    <td>Milk</td>
                                    <td>450</td>
                                    <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 106px">Cancelled</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dodla Curd</td>
                                    <td>Card</td>
                                    <td>700/1500</td>
                                    <td><span class="badge bg-info-subtle text-dark text-muted fs-6" style="width: 106px">Confirmed</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dodla Ghee</td>
                                    <td>Ghee</td>
                                    <td>600</td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 106px">Completed</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Creamed Milk</td>
                                    <td>Milk</td>
                                    <td>550</td>
                                    <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 106px">Processing</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu bg-info-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                            </ul>
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

//===Menu Dropdown===//

const allMenu = document.querySelectorAll('main .content-data .head');

allMenu.forEach(item => {
    const menuIcon = item.querySelector('.icon');
    const menuLink = item.querySelector('.menu-link');

    menuIcon.addEventListener('click', function() {
        menuLink.classList.toggle('show');
    })
})

window.addEventListener('click', function(e){

    allMenu.forEach(item => {
        const icon = item.querySelector('.icon');
        const menuLink =item.querySelector('.menu-link');
        
        if(e.target !== icon){
            if(e.target !== menuLink){
                if(menuLink.classList.contains('show')){
                    menuLink.classList.remove('show');
                }
            }
        }
        
    })
});
//=====Sale Report Chart=====//


const ctx = document.getElementById('salesChart').getContext('2d');


const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Monthly Sales (₹)",
        data: [5000, 7000, 8000, 12000, 15000, 11000, 9000, 13000, 17000, 14000, 18000, 20000],
        backgroundColor: "rgba(207, 239, 241, 0.6)", 
        borderColor: "rgb(54, 235, 235)",
        borderWidth: 2
    }]
};

// Chart Configuration
const config = {
    type: "bar",  // Change to "line" for a line chart
    data: salesData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            }
        }
    }
};


const salesChart = new Chart(ctx, config);

//====Purchase Chart=====//


const purchasePieCtx = document.getElementById('purchasePieChart').getContext('2d');


const purchasePieData = {
    labels: ["Buffalo Milk", "Cow Milk", "Curd", "Panner", "ButterMilk"],
    datasets: [{
        label: "Purchase Breakdown (₹)",
        data: [5000, 3000, 2000, 1500, 1000], // Example values
        backgroundColor: [
            "rgba(255, 99, 132, 0.7)",   
            "rgba(54, 162, 235, 0.7)",   
            "rgba(255, 206, 86, 0.7)",   
            "rgba(75, 192, 192, 0.7)",   
            "rgba(153, 102, 255, 0.7)"   
        ],
        borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 2
    }]
};

// Pie Chart Configuration
const purchasePieConfig = {
    type: 'doughnut',
    data: purchasePieData,
    options: {
        responsive: true,
        cutout: '70%',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            }
        }
    }
};

// Create Pie Chart
const purchasePieChart = new Chart(purchasePieCtx, purchasePieConfig);
}