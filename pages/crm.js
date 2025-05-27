
function loadcrmpage(){
    document.getElementById("main-content").innerHTML = `
            <div class="container-fluid crm-dashboard">
                <div class="header">
                    <h2 class="">CRM Dashboard</h2>
                    <p class="fs-6"><small>Dairy Farms Customer Interactions and Sales Reports</small></p>
                </div>
                <div class="row p-1 crm-cards">
                    <div class="col-md-3">
                        <div class="card summary-card p-3 shadow text-center align-items-center">
                            <img src="./images/customers-icon.png"/>
                            <div class="mt-2">
                                <h4 class="fw-bold">Total Customers</h4>
                                <h3>565</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card summary-card p-3 shadow text-center align-items-center">
                            <img src="./images/lead-crm.WEBP "/>
                            <div class="mt-2">
                                <h4 class="fw-bold">New Leads</h4>
                                <h3>85</h3>
                            </div>    
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card summary-card p-3 shadow text-center align-items-center">
                            <img src="./images/active-crm.WEBP "/>
                            <div class="mt-2">
                                <h4 class="fw-bold">Active</h4>
                                <h3>230</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card summary-card p-3 shadow text-center align-items-center">
                            <img src="./images/lost-crm.png"/>
                            <div class="mt-2">
                                <h4 class="fw-bold">Lost Customers</h4>
                                <h3>12</h3>
                            </div    
                        </div>
                    </div>


                </div>

                <div class="row mt-3 mb-3">
                    <div class="col-md-6">
                        <div class="card shadow mt-3 p-3 top-sellings h-100">
                            <div class="pt-1 pb-1">
                                <h4 class="fw-bold text-dark">Top Selling Product</h4>
                            </div>
                            <hr class="text-dark fw-bold m-0"/>

                            <div class="top-sales paypal mt-3 p-2 d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-row align-items-center">
                                    <div>
                                        <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal2"><img src="images/dcurd2.png" alt=""></a>
                                    </div>
                                    <div class="p-2">
                                        <h6 class="fw-semibold">Dodla Curd</h6>
                                    </div>
                                
                                </div>
                                <h5><i class='bx bx-rupee'></i>40,567</h5>
                            </div>
                            <div class="top-sales paypal mt-2 p-2 d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-row align-items-center">
                                    <div>
                                        <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal1"><img src="images/dodla1.png" alt=""></a>
                                    </div>
                                    <div class="p-2">
                                        <h6>Dodla SD Milk</h6>
                                    </div>                                
                                </div>
                                <h5><i class='bx bx-rupee'></i>37,234</h5>
                            </div>
                            <div class="top-sales paypal mt-2 p-2 d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-row align-items-center">
                                    <div>
                                        <img src="images/hghee3.png" alt="">
                                    </div>
                                    <div class="p-2">
                                        <h6>HT Cow Ghee</h6>
                                    </div>
                                
                                </div>
                                <h5><i class='bx bx-rupee'></i>28,857</h5>
                            </div>
                            <div class="top-sales paypal mt-2 p-2 d-flex flex-row justify-content-between align-items-center">
                                <div class="d-flex flex-row align-items-center">
                                    <div>
                                        <img src="images/heri7.png" alt="">
                                    </div>
                                    <div class="p-2">
                                        <h6>HT Cream Milk</h6>
                                    </div>
                                
                                </div>
                                <h5><i class='bx bx-rupee'></i>34,475</h5>
                            </div>
                            
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="card shadow mt-3 p-3 h-100">
                            <div class="events d-flex p-1 flex-row justify-content-between">
                                <h4 class="fw-bold">Upcoming Events</h4>
                                <button class="btn btn-sm">See All</button>
                            </div>
                            <hr class="text-dark fw-bold m-0"/>

                            <div class="events p-2 mt-1 d-flex flex-row justify-content-between align-items-center">
                                <div class="event-icons d-flex flex-row align-items-center">
                                    <div class="mr-3">
                                        <img src="./images/big-sale.jpg" alt="" class="">
                                    </div>
                                    <h5 class="mx-2">MARCH, 29,30</h5>
                                </div>
                                <p class="">Big Billing Day Sale</p>
                            </div>
                            <hr class="text-dark fw-bold m-0"/>

                            <div class="events p-2 mt-1 d-flex flex-row justify-content-between align-items-center">
                                <div class="event-icons d-flex flex-row align-items-center">
                                    <div class="mr-3">
                                        <img src="./images/ten-sale.jpg" alt="" class="">
                                    </div>
                                    <h5 class="mx-2">JUN, 30 SUN</h5>
                                </div>
                                <p class="">10% Disc on Curd</p>
                            </div>
                            <hr class="text-dark fw-bold m-0"/>

                            <div class="events p-2 mt-1 d-flex flex-row justify-content-between align-items-center">
                                <div class="event-icons d-flex flex-row align-items-center">
                                    <div class=" mr-3">
                                        <img src="./images/summer-sale.jpg" alt="" class="">
                                    </div>
                                    <h5 class="mx-2">JULY, 3,4</h5>
                                </div>
                                <p class="">Summer Sale</p>
                            </div>
                            <hr class="text-dark fw-bold m-0"/>

                            <div class="events p-2 mt-1 d-flex flex-row justify-content-between align-items-center">
                                <div class="event-icons d-flex flex-row align-items-center">
                                    <div class=" mr-3">
                                        <img src="./images/augest-sale.jpg" alt="" class="">
                                    </div>
                                    <h5 class="mx-2">AUG, 15, SUN</h5>
                                </div>
                                <p class="">5% Disc on Butter</p>
                            </div>
                            <hr class="text-dark fw-bold m-0"/>

                            <div class="events p-2 mt-1 d-flex flex-row justify-content-between align-items-center">
                                <div class="event-icons d-flex flex-row align-items-center">
                                    <div class=" mr-3">
                                        <img src="./images/special-offer.jpg" alt="" class="">
                                    </div>
                                    <h5 class="mx-2">OCT, 19,20</h5>
                                </div>
                                <p class="">5% Off on Heritage</p>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div class="row mt-3">                 
                    <!-- Customer Table -->
                    <div class="col-md-12">
                        <div class="card shadow mt-3">
                            <div class="card-body overflow-y-hidden">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>CUSTOMERS</th>
                                            <th>PAYMENT</th>
                                            <th>PAID BY </th>
                                            <th>STATUS</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Krishnakanth</td>
                                            <td>₹750(Milk-10L) </td>
                                            <td>Gpay</td>
                                            <td><span class="badge bg-success-subtle fs-6 text-success" style="width: 85px">Paid</span></td>
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
                                            <td>Harshadh</td>
                                            <td>1200(C-Ghee-1Kg)</td>
                                            <td>Phonepay</td>
                                            <td><span class="badge bg-warning-subtle fs-6 text-warning" style="width: 85px">Pending</span></td>
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
                                            <td>Malhothra</td>
                                            <td>600(C-Ghee-500gms)</td>
                                            <td>PayPal</td>
                                            <td><span class="badge bg-danger-subtle fs-6 text-danger"  style="width: 85px">Failed</span></td>
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
                                            <td>Manohar</td>
                                            <td>1500(Ghee-1Kg & milk-3L)</td>
                                            <td>Card</td>
                                            <td><span class="badge bg-success-subtle fs-6 text-success"  style="width: 85px">Paid</span></td>
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
                                            <td>Soujanya</td>
                                            <td>550(Ghee-500gms)</td>
                                            <td>Gpay</td>
                                            <td><span class="badge bg-success-subtle fs-6 text-success" style="width: 85px">Paid</span></td>
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
                                            <td>Sai Krishna</td>
                                            <td>340(Paneer-2kg)</td>
                                            <td>PayPal</td>
                                            <td><span class="badge bg-warning-subtle fs-6 text-warning" style="width: 85px">Pending</span></td>
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
                <div class="row mt-4">
                    <div class="col-md-7">
                        <div class="card p-3 shadow">
                            <h4 class="text-center">Sales Performance</h4>
                            <canvas id="salesChart"></canvas>
                        </div>
                    </div>
                    <div class="pie-chart col-md-5">
                        <div class="card p-3 shadow">
                            <h4 class="text-center mb-3">Customer Distribution</h4>
                            <canvas id="customerPieChart" width="300" height="300"></canvas>
                        </div>
                    </div>
                </div>
            </div>

     
        `;



        
        // Load Chart.js
        
        const ctxSales = document.getElementById("salesChart").getContext("2d");
        new Chart(ctxSales, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [{
                    label: "Sales ($)",
                    data: [5000, 7000, 8000, 12000, 15000, 18000],
                    borderColor: "blue",
                    fill: false
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom' 
                    }
                }
            }
        });

        const ctxPie = document.getElementById("customerPieChart").getContext("2d");
        new Chart(ctxPie, {
            type: "pie",
            data: {
                labels: ["New Customers", "Returning Customers", "Lost Customers"],
                datasets: [{
                    data: [30, 60, 10],
                    backgroundColor: ["#36A2EB", "#7c52Fa", "#f26f45"]
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
    };