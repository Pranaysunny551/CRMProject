
function loadCustomerComplaints(){
    document.getElementById("main-content").innerHTML= `
        <div class="container-fluid c-complaints">
            <div class="header text-center mt-2">
                <h2 class="fs-5">Complaints Management</h2>
                <p class="fs-6"><small>Quick & Effective Complaint Resolution</small></p>
            </div>
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="card shadow mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title fs-5 fw-bold">Complaints</h6>
                                    <h4 class="mb-0">42</h4>
                                </div>
                                <img src="./images/complaint.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title fs-5 fw-bold">Pending</h6>
                                    <h4 class="mb-0">15</h4>
                                </div>
                                <img src="./images/folder-web.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title fs-5 fw-bold">In Progress</h6>
                                    <h4 class="mb-0">8</h4>
                                </div>
                                <img src="./images/loading.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow mb-3">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6 class="card-title fs-5 fw-bold">Resolved</h6>
                                    <h4 class="mb-0">19</h4>
                                </div>
                                <img src="./images/hand-with-light-bulb.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4 shadow">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-0 fs-4">Recent Complaints</h5>
                        <div class="dropdown">
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by: Newest First
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Newest First</a></li>
                                <li><a class="dropdown-item" href="#">Oldest First</a></li>
                                <li><a class="dropdown-item" href="#">Highest Priority</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card mb-3 complaint-card priority-high status-pending">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="card-title fs-5">Spoiled Milk Delivery</h5>
                                    <p class="card-text fw-semibold">Customer reported receiving curdled milk in their regular delivery on 15th June.</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge text-danger me-2 fs-6">Pending</span>
                                        <small class="text-muted fw-semibold">Complaint ID: #DF-2023-0015</small>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <small class="text-muted fw-semibold">Received: 2 hours ago</small><br>
                                    <button class="btn btn-sm btn-outline-primary mt-2" onclick="loadPage('complaint-details')">Resolve</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 complaint-card priority-medium status-in-progress">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="card-title fs-4">Late Delivery</h5>
                                    <p class="card-text fw-semibold">Regular morning delivery arrived 3 hours late, affecting customer's business.</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge text-warning me-2 fs-6">In Progress</span>
                                        <small class="text-muted fw-semibold">Complaint ID: #DF-2023-0014</small>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <small class="text-muted fw-semibold">Received: 1 day ago</small><br>
                                    <button class="btn btn-sm btn-outline-primary mt-2">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 complaint-card priority-low status-resolved">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="card-title fs-4">Incorrect Quantity</h5>
                                    <p class="card-text fw-semibold">Customer received 10 bottles instead of the ordered 12 bottles.</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge text-success fs-6 me-2">Resolved</span>
                                        <small class="text-muted fw-semibold">Complaint ID: #DF-2023-0013</small>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <small class="text-muted fw-semibold">Resolved: 3 days ago</small><br>
                                    <button class="btn btn-sm btn-outline-primary fw-medium mt-2">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 complaint-card priority-high status-pending">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h5 class="card-title fs-4">Allergic Reaction</h5>
                                    <p class="card-text fw-semibold">Customer reported allergic reaction possibly from milk contamination.</p>
                                    <div class="d-flex align-items-center">
                                        <span class="badge text-danger fs-6 me-2">Pending</span>
                                        <small class="text-muted fw-semibold">Complaint ID: #DF-2023-0016</small>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <small class="text-muted fw-semibold">Received: 30 minutes ago</small><br>
                                    <button class="btn btn-sm btn-outline-primary mt-2 fw-medium">Resolve</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-sm btn-outline-dark">View All</button>
                    </div>
                </div>
            </div>

            <div class="card mb-4 d-none" id="resolutionForm">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Resolve Complaint</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="complaintId" class="form-label">Complaint ID</label>
                            <input type="text" class="form-control" id="complaintId" value="#DF-2023-0015" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="complaintDetails" class="form-label">Complaint Details</label>
                            <textarea class="form-control" id="complaintDetails" rows="3" readonly>Spoiled milk delivered on 15th June. Customer reported curdled milk in their regular delivery.</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="resolutionAction" class="form-label">Resolution Action</label>
                            <select class="form-select" id="resolutionAction">
                                <option selected>Select action...</option>
                                <option>Replace product</option>
                                <option>Issue refund</option>
                                <option>Provide discount</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="resolutionNotes" class="form-label">Resolution Notes</label>
                            <textarea class="form-control" id="resolutionNotes" rows="3" placeholder="Enter details of the resolution..."></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="followUp" class="form-label">Follow Up Required</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="followUp">
                                <label class="form-check-label" for="followUp">
                                    Schedule follow-up with customer
                                </label>
                            </div>
                        </div>
                        <div class="mb-3" id="followUpDateContainer" style="display: none;">
                            <label for="followUpDate" class="form-label">Follow Up Date</label>
                            <input type="date" class="form-control" id="followUpDate">
                        </div>
                        <button type="submit" class="btn btn-success">Mark as Resolved</button>
                        <button type="button" class="btn btn-outline-secondary">Save as In Progress</button>
                        <button type="button" class="btn btn-outline-danger">Cancel</button>
                    </form>
                </div>
            </div>

            <div class="row mb-4">
                <div class="col-md-6">
                    <div class="card shadow">
                        <div class="card-header text-center">
                            <h5 class="mb-0 fs-5">Complaints by Type</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="complaintTypeChart" height="200"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow">
                        <div class="card-header text-center">
                            <h5 class="mb-0 fs-5">Monthly Complaints Trend</h5>
                        </div>
                        <div class="card-body">
                            <canvas id="monthlyTrendChart" height="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    `;

    const typeCtx = document.getElementById('complaintTypeChart').getContext('2d');
        const typeChart = new Chart(typeCtx, {
            type: 'doughnut',
            data: {
                labels: ['Quality Issues', 'Delivery Problems', 'Quantity Errors', 'Billing Issues', 'Allergic Reactions'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#dc3545',
                        '#fd7e14',
                        '#ffc107',
                        '#0dcaf0',
                        '#20c997'
                    ]
                }]
            },
            options: {
                responsive: true,
                aspectRatio: 1.9,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                }
            }
        });

        const trendCtx = document.getElementById('monthlyTrendChart').getContext('2d');
        const trendChart = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Complaints',
                    data: [12, 19, 15, 8, 10, 14],
                    fill: false,
                    borderColor: '#0d6efd',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
}