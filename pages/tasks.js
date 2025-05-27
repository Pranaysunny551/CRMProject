function loadTasks(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid tasks">
            <div class="header">
                <h2 class="">Daily Tasks</h2>
                <p class="fs-6"><small>Organization Of Daily Farm Tasks with CRM</small></p>
            </div>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card shadow h-100 mb-3 mt-4">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Reminders for Subscriptions</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h6 class="card-text fs-5"><strong>Description:</strong> Send reminders to customers (Daily/Weekly milk delivery Plans).</h6>
                                <img class="mt-0" src="./images/reminder-img2.webp" alt="" height="110px" width="200px">
                            </div>
                            <p class="card-text fs-5 mt-2"><strong>Assigned To:</strong> Customer Support</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-02-25</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="badge bg-danger-subtle text-danger">Pending</span></p>
                            <a href="#" onclick="loadPage('reminder', this)" class="tasks-btn btn btn-outline-primary mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow h-100 mb-3 mt-4">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Customer Feedback Collection</h4>
                        </div>
                        <div class="card-body">
                             <div class="d-flex justify-content-between">
                                <h6 class="card-text fs-5"><strong>Description:</strong> Collect feedback and review from customers about product satisfaction.</h6>
                                <img src="./images/feedback-collect.png" alt="" height="120px">
                            </div>
                            <p class="card-text fs-5"><strong>Assigned To:</strong> Customer Support</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-02-28</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="badge bg-warning-subtle text-warning">In Progress</span></p>
                            <a href="#" onclick="loadPage('fb-collection', this)" class="btn btn-outline-primary mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-4 mt-3 mb-3">
                <div class="col-md-6">
                    <div class="card shadow h-100 mb-3">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Resolve Customer Complaints</h4>
                        </div>
                        <div class="card-body">
                             <div class="d-flex justify-content-between">
                                <h6 class="card-text fs-5"><strong>Description:</strong> Address and resolve customer complaints within 24 hours.</h6>
                                <img src="./images/resolve.JFIF" alt="" height="110px" width="220px">
                            </div>
                            <p class="card-text fs-5 mt-2"><strong>Assigned To:</strong> Customer Support</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-02-25</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="badge bg-danger-subtle text-danger">Pending</span></p>
                            <a href="#" onclick="loadPage('c-complaints', this)" class="btn btn-outline-primary mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow h-100 mb-3 mt-3">
                        <div class="card-header bg-success-subtle">
                            <h4 class="fs-4 fw-bold">Pending Customer Inquiries</h4>
                        </div>
                        <div class="card-body">
                             <div class="d-flex justify-content-between">
                                <h6 class="card-text fs-5"><strong>Description:</strong>   Address pending customer inquiries and provide solutions.</h6>
                                <img class="mt-0" src="./images/customer-talk-gif.GIF" alt="" height="120px" width="210px">
                            </div>
                            <p class="card-text fs-5"><strong>Assigned To:</strong> Customer Support</p>
                            <p class="card-text fs-5"><strong>Due Date:</strong> 2025-02-25</p>
                            <p class="card-text fs-5"><strong>Status:</strong> <span class="badge bg-warning-subtle text-warning">In Progress</span></p>
                            <a href="#" onclick="loadPage('c-inquiries', this)" class="btn btn-outline-primary mt-3 fw-medium">Update Progress</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}