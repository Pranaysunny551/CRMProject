
function loadComplaintDetails() {
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid complait-details">
            <div class="header text-center">
                <h2 class="">Customer Complaint Resolution</h2>
            </div>
            <div class="row">
                <div class="col-md-12 mx-auto">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="complaint-header">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h4 class="mb-0">Spoiled Milk Delivery</h4>
                                    <span class="badge bg-warning-subtle text-warning-emphasis fs-6">In Progress</span>
                                </div>
                                <p class="mb-1"><strong>Complaint ID:</strong> #DF-2023-0015</p>
                                <p class="mb-1"><strong>Received:</strong> 2 hours ago</p>
                                <p class="mb-1"><strong>Customer:</strong> Regular delivery subscriber</p>
                                <p class="mb-0"><strong>Date of Incident:</strong> 15th May 2025</p>
                            </div>
                            
                            <div class="card mb-4">
                                <div class="card-header bg-light">
                                    <h5 class="mb-0">Complaint Details</h5>
                                </div>
                                <div class="card-body">
                                    <p>Customer reported receiving curdled milk in their regular delivery on 15th May. The milk had an unusual smell and texture, indicating spoilage despite being within the printed expiration date.</p>
                                    
                                    <div class="alert alert-warning">
                                        <strong>Customer Expectations:</strong> Immediate replacement of spoiled product and assurance about future delivery quality.
                                    </div>
                                </div>
                            </div>
                            
                            <div class="card shadow mb-4">
                                <div class="card-header bg-success-subtle text-center">
                                    <h5 class="mb-0 fs-5">Recommended Resolution Actions</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-md-6 mb-3">
                                            <div class="card shadow action-card action-card-1 h-100" onclick="selectAction('replace')">
                                                <div class="card-body text-center">
                                                    <h5 class="fs-5 fw-bold"><i class="bi bi-arrow-repeat"></i> Replace Product</h5>
                                                    <p class="">Arrange for immediate replacement of spoiled milk in next delivery</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="card shadow action-card action-card-2 h-100" onclick="selectAction('refund')">
                                                <div class="card-body text-center">
                                                    <h5 class="fs-5 fw-bold"><i class="bi bi-cash-stack"></i> Partial Refund</h5>
                                                    <p class="">Refund cost of spoiled items to customer's account</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="card shadow action-card action-card-3 h-100" onclick="selectAction('credit')">
                                                <div class="card-body text-center">
                                                    <h5 class="fs-5 fw-bold"><i class="bi bi-credit-card"></i> Account Credit</h5>
                                                    <p class="">Add credit to customer's account for future purchases</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="card shadow action-card action-card-4 h-100" onclick="selectAction('investigate')">
                                                <div class="card-body text-center">
                                                    <h5 class="fs-5 fw-bold"><i class="bi bi-search"></i> Quality Investigation</h5>
                                                    <p class="">Initiate quality control investigation with delivery team</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                    <div id="actionDetails" class="mt-4">
                                        <h5 class="fs-5 fw-bold">Selected Action Details</h5>
                                        <div class="mb-3">
                                            <label for="resolutionNotes" class="form-label">Resolution Notes</label>
                                            <textarea class="form-control" id="resolutionNotes" rows="3" placeholder="Add details about the resolution..."></textarea>
                                        </div>
                                        <button class="btn btn-primary">Submit Resolution</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div    
            </div>
        </div>

    `;

    $(" ")
}