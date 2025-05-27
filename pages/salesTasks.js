function loadSalesTasks(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid sales-tasks">
            <div class="header">
                <h2 class="">Sales Tasks</h2>
                <p class="fs-6"><small>Plan Promotions and Campaigns for Better Reach</small></p>
            </div>
            <div class="row g-3 mb-3">
                <div class="col-md-6">
                    <div class="card shadow task-card h-100 mb-3">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Customer Follow-ups</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between ">
                                <h6 class="card-text fs-5"><strong>Description:</strong> Follow up with customers who showed interest in products.</h6>
                                <img class="m-2" src="./images/follow-up.png" alt="" height="120px" width="250px" style="border-radius:10px">
                            </div>
                            <p class="card-text fs-5"><strong>Assigned To:</strong> Sales Team</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-02-25</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="fw-bold text-danger">Pending</span></p>
                            <a href="#" class="btn btn-outline-dark mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow task-card h-100 mb-3 mt-3">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Launch Social Media Campaign</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between ">
                                <h6 class="card-text fs-5 px-2"><strong>Description:</strong> Create and launch a new social media campaign for dairy products.</h6>
                                <img src="./images/marketing-gif.GIF" alt="" height="135px" width="250px" style="border-radius:10px">
                            </div>
                            <p class="card-text fs-5"><strong>Assigned To:</strong> Marketing Team</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-03-25</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="fw-bold text-warning">In Progress</span></p>
                            <a href="#" class="btn btn-outline-dark mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-3">
                <div class="col-md-6">
                    <div class="card shadow task-card h-100 mb-3">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Monthly Sales Report</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h6 class="card-text fs-5"><strong>Description:</strong> Prepare and submit the monthly sales report.</h6>
                                <img class="m-2" src="./images/reports-submit-gif.GIF" alt="" height="130px" width="250px" style="border-radius:10px">
                            </div>
                            <p class="card-text fs-5"><strong>Assigned To:</strong> Sales Team</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-02-28</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="fw-bold text-warning">In Progress</span></p>
                            <a href="#" class="btn btn-outline-dark mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow task-card h-100 mb-3 mt-3">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Customer Referral Program</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h6 class="card-text fs-5"><strong>Description:</strong> Promote the referral program to existing customers.</h6>
                                <img class="m-2" src="./images/reffer-img.JFIF" alt="" height="130px" width="250px" style="border-radius:10px">
                            </div>
                            <p class="card-text fs-5"><strong>Assigned To:</strong>  Marketing Team</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-02-25</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="fw-bold text-danger">Pending</span></p>
                            <a href="#" class="btn btn-outline-dark mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}