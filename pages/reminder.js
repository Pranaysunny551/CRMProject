
function loadReminder(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid reminder">
        <div class="header text-center mt-2">
            <h2 class="fs-5">Subscription Management</h2>
            <p class="fs-6"><small>Easy Subscription Management for Dairy Deliveries</small></p>
        </div>
       
        <div class="row mb-4">
            <div class="col-xl-3 col-md-6 mb-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="font-weight-bold fs-5 mb-2">
                            All Subscriptions</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="h4 mb-0 font-weight-bold text-gray-800">142</div>
                            </div>
                            <img src="./images/activities.gif" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="font-weight-bold fs-5 mb-2">Expiring Soon</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="h4 mb-0 font-weight-bold text-gray-800">15</div>
                            </div>
                            <img src="./images/expired.gif" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="font-weight-bold fs-5 mb-2">
                            Pending Renewals</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="h4 mb-0 font-weight-bold text-gray-800">8</div>
                            </div>
                            <img src="./images/file.gif" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h5 class="text-xs font-weight-bold fs-5 mb-2">
                            Monthly Revenue</h5>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div class="h4 mb-0 font-weight-bold text-gray-800">1,44,215</div>
                            </div>
                            <img src="./images/revenue-growth.gif" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="m-0 font-weight-bold fs-5">All Subscriptions</h5>
                <div>
                    <select class="form-select form-select-sm" style="width: 180px;">
                        <option>Filter by Status</option>
                        <option>Active</option>
                        <option>Expired</option>
                        <option>Pending</option>
                    </select>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Subscription ID</th>
                                <th>Plan</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="tableBody">
                            
                        </tbody>
                    </table>
                </div>
                
                <div class="d-flex pb-3 justify-content-end align-items-center position-sticky">
                    <div class="btn-group me-4" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-sm btn-outline-primary"><span class="material-icons-outlined">keyboard_double_arrow_left</span></button>
                        <button type="button" class="btn btn-sm btn-outline-primary">1</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">2</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">3</button>
                        <button type="button" class="btn btn-sm btn-outline-primary"><span class="material-icons-outlined">keyboard_double_arrow_right</span></button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow mt-4">
            <div class="card-header text-center bg-primary-subtle">
                <h5 class="m-0 font-weight-bold fs-5">Subscriptions Expiring Soon (Next 7 Days)</h5>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Plan</th>
                                <th>End Date</th>
                                <th>Days Left</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vamshi Krishna</td>
                                <td>Standard Quarterly</td>
                                <td>01 May 2025</td>
                                <td><span class="badge bg-warning-subtle fs-6 text-dark">3 days</span></td>
                                <td><button class="btn btn-sm btn-primary">Send Reminder</button></td>
                            </tr>
                            <tr>
                                <td>Bhargavi</td>
                                <td>Premium Monthly</td>
                                <td>02 May 2025</td>
                                <td><span class="badge bg-warning-subtle fs-6 text-dark">4 days</span></td>
                                <td><button class="btn btn-sm btn-primary">Send Reminder</button></td>
                            </tr>
                            <tr>
                                <td>Santhosh Kumar</td>
                                <td>Basic Monthly</td>
                                <td>03 May 2025</td>
                                <td><span class="badge bg-warning-subtle fs-6 text-dark">5 days</span></td>
                                <td><button class="btn btn-sm btn-primary">Send Reminder</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `;

    const object = [
        {
            name : "Savitri",
            url : "https://randomuser.me/api/portraits/women/45.jpg",
            email : "savitri@example.com",
            sub_id : "#SUB-7845",
            plan : "Premium Quarterly",
            start_date : "15 Mar 2025",
            end_date : "15 May 2025",
            status : "Active",
            action : "",
        },

        {
            name : "Rahul Etikyala",
            url : "https://randomuser.me/api/portraits/men/32.jpg",
            email : "rahul@example.com",
            sub_id : "#SUB-7846",
            plan : "Basic Monthly",
            start_date : "01 Apr 2025",
            end_date : "01 Jun 2025",
            status : "Active",
            action : "",
        },

        {
            name : "Bhavani",
            url : "https://randomuser.me/api/portraits/women/68.jpg",
            email : "bhavani@example.com",
            sub_id : "#SUB-7847",
            plan : "Premium Annual",
            start_date : "10 Apr 2025",
            end_date : "10 Jul 2025",
            status : "Active",
            action : "",
        },

        {
            name : "Narender Nani",
            url : "https://randomuser.me/api/portraits/men/75.jpg",
            email : "narender@example.com",
            sub_id : "#SUB-7848",
            plan : "Stadard Quarterly",
            start_date : "05 Feb 2025",
            end_date : "29 Apr 2025",
            status : "Expire",
            action : "",
        },

        {
            name : "Lahari",
            url : "https://randomuser.me/api/portraits/women/32.jpg",
            email : "lahari@example.com",
            sub_id : "#SUB-7849",
            plan : "Basic Monthly",
            start_date : "02 Mar 2025",
            end_date : "02 Jun 2025",
            status : "Pending",
            action : "",
        },
        
    ]

    function complaintList() {
        var data = "";

        for (let index = 0; index < object.length; index++) {
            const element = object[index];
            data += `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <img src=`+element.url+` class="user-img me-3">
                        <div>
                            <div class="fw-bold">`+element.name+`</div>
                            <div class="text-muted small">`+element.email+`</div>
                        </div>
                    </div>
                </td>
                <td>`+element.sub_id+`</td>
                <td>`+element.plan+`</td>
                <td>`+element.start_date+`</td>
                <td>`+element.end_date+`</td>
                <td><span class="badge bg-success-subtle 
                    `+(element.status == "Active"? 'bg-success-subtle' :(element.status == "Pending"? 'bg-warning-subtle':'bg-danger-subtle'))+` 
                    `+(element.status == "Active"?'text-success':(element.status == "Pending"?'text-warning':'text-danger'))+` 
                    fw-bold fs-6" style="width: 80px;">`+element.status+`</span></td>
                <td>
                    <div class="dropdown action-dropdown">
                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            <span class="material-icons-outlined text-dark">more_vert</span>
                        </a>
                        <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View All</a></li>
                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Manage</a></li>
                            <li><a class="dropdown-item" href="#"><i class="bi bi-clipboard-data-fill"></i> Reports</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
             `;
        } 

        document.getElementById("tableBody").innerHTML = data;

    }

    complaintList();
}