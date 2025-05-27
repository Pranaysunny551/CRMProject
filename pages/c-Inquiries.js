
function loadCustomerInquiries() {
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid c-inquiries">
            <div class="header text-center mt-2">
            <h2 class="fs-5">Inquiries Management</h2>
            </div>
            <div class="row mb-4">
                <div class="col-md-4">
                    <div class="card shadow mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title fs-4 fw-bold">Total Inquiries</h6>
                                    <h2 class="card-text">42</h2>
                                </div>
                                <img src="./images/checklist.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title fs-4 fw-bold">Pending</h6>
                                    <h2 class="card-text">15</h2>
                                </div>
                                <img src="./images/file.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title fs-4 fw-bold">Resolved</h6>
                                    <h2 class="card-text">27</h2>
                                </div>
                                <img src="./images/handshake.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header bg-primary-subtle">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 fs-4 m-0">Pending Inquiries</h5>
                        <div class="dropdown m-0">
                            <div class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by: Newest
                            </div>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Newest</a></li>
                                <li><a class="dropdown-item" href="#">Oldest</a></li>
                                <li><a class="dropdown-item" href="#">Customer Name</a></li>
                                <li><a class="dropdown-item" href="#">Priority</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Customer</th>
                                    <th>Subject</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#DF-125</td>
                                    <td>Revanth</td>
                                    <td>Milk delivery delay</td>
                                    <td>2025-05-01</td>
                                    <td><span class="badge bg-warning-subtle text-warning-emphasis fs-6">Pending</span></td>
                                    <td>
                                        <button class="btn btn-sm  button-1" onclick="loadPage('inquiry-details', this)">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#DF-124</td>
                                    <td>Vikramarka</td>
                                    <td>Product quality concern</td>
                                    <td>2025-05-01</td>
                                    <td><span class="badge bg-warning-subtle text-warning-emphasis fs-6">Pending</span></td>
                                    <td>
                                        <button class="btn btn-sm button-1">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#DF-123</td>
                                    <td>Mohan Reddy</td>
                                    <td>Subscription change request</td>
                                    <td>2025-05-01</td>
                                    <td><span class="badge bg-warning-subtle text-warning-emphasis fs-6">Pending</span></td>
                                    <td>
                                        <button class="btn btn-sm  button-1">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#DF-122</td>
                                    <td>Adhithya Nayak</td>
                                    <td>Product quality concern</td>
                                    <td>2025-05-01</td>
                                    <td><span class="badge bg-warning-subtle text-warning-emphasis fs-6">Pending</span></td>
                                    <td>
                                        <button class="btn btn-sm  button-1">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#DF-121</td>
                                    <td>Kishan Reddy</td>
                                    <td>Subscription change request</td>
                                    <td>2025-05-01</td>
                                    <td><span class="badge bg-warning-subtle text-warning-emphasis fs-6">Pending</span></td>
                                    <td>
                                        <button class="btn btn-sm button-1">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
            </div>

        </div>
    `;
}