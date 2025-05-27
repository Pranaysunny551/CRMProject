
function loadInquiryDetails() {
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid c-inquiries">
        <div class="row">
            <div class="col-lg-8">
                <div class="card shadow mb-4 inquiry-card status-pending">
                    <div class="card-header bg-primary-subtle">
                        <h5 class="mb-0 fs-5">Inquiry Details #DF-125</h5>
                    </div>
                    <div class="card-body">
                        <div class="mb-4">
                            <h6 class="fw-bold fs-5">Customer Information</h6>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <p class="fw-medium"><strong>Name:</strong> Revanth</p>
                                    <p class="fw-medium"><strong>Email:</strong> revanth@example.com</p>
                                </div>
                                <div class="col-md-6">
                                    <p class="fw-medium"><strong>Phone:</strong> (+91) 923-4567-576</p>
                                    <p class="fw-medium"><strong>Customer Since:</strong> January 2024</p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-4">
                            <h6 class="fw-semibold text-decoration-underline">Inquiry Details :</h6>
                            <div class="mt-3">
                                <p class="fw-medium"><strong>Subject:</strong> Milk delivery delay</p>
                                <p class="fw-medium"><strong>Date:</strong> May 13, 2025</p>
                                <p><strong>Message:</strong></p>
                                <div class="alert alert-light fw-medium">
                                    <p>Hello, my regular milk delivery scheduled for June 14th hasn't arrived yet. This is the second time this month there's been a delay. I rely on your products for my café and these delays are causing problems with my business. Can you please look into this and provide an update?</p>
                                </div>
                            </div>
                        </div>

                        <div class="mb-4">
                            <h6 class="fw-semibold fs-5">Previous Interactions</h6>
                            <div class="mt-3">
                                <div class="card mb-2">
                                    <div class="card-body p-3">
                                        <div class="d-flex justify-content-between">
                                            <strong>Jan 2, 2025</strong>
                                            <span class="badge bg-success-subtle text-success fs-6">Resolved</span>
                                        </div>
                                        <p class="mb-1">First delivery delay reported</p>
                                        <p class="text-muted small">Response: We apologize for the delay due to vehicle maintenance. Your account has been credited with a 10% discount on your next order.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button id="responseButton" class="btn btn-outline-dark mb-3">Respond</button>

                        <div id="responseForm" style="display:none">
                            <h6  class="fw-semibold fs-5">Response</h6>
                            <form class="mt-3">
                                <div class="mb-3">
                                    <label for="responseType" class="form-label">Response Type</label>
                                    <select class="form-select" id="responseType">
                                        <option selected>Select response type</option>
                                        <option>Delivery Issue</option>
                                        <option>Product Quality</option>
                                        <option>Subscription Change</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="responseMessage" class="form-label">Your Response</label>
                                    <textarea class="form-control" id="responseMessage" rows="3" placeholder="Type your response here..." required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Resolution</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="resolution" id="resolutionPending" checked>
                                        <label class="form-check-label" for="resolutionPending">
                                            Keep as Pending
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="resolution" id="resolutionResolved">
                                        <label class="form-check-label" for="resolutionResolved">
                                            Mark as Resolved
                                        </label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="compensation" class="form-label">Compensation (if applicable)</label>
                                    <select class="form-select" id="compensation">
                                        <option selected>Select compensation option</option>
                                        <option>10% Discount on Next Order</option>
                                        <option>Free Product on Next Delivery</option>
                                        <option>Account Credit</option>
                                        <option>No Compensation</option>
                                    </select>
                                </div>
                                <button id="submitButton" type="submit" class="btn  button-1">Submit Response</button>
                                <button id="saveDraft" type="button" class="btn  button-1">Save Draft</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card shadow mb-4">
                    <div class="card-header bg-primary-subtle">
                        <h5 class="mb-0 fs-5">Quick Actions</h5>
                    </div>
                    <div class="card-body">
                        <button class="btn button-2 text-success w-100 mb-2">
                            <i class="fas fa-phone me-2"></i>Call Customer
                        </button>
                        <button class="btn button-2 text-primary w-100 mb-2">
                            <i class="fas fa-envelope me-2"></i>Email Customer
                        </button>
                        <button class="btn button-2 text-warning-emphasis w-100 mb-2">
                            <i class="fas fa-truck me-2"></i>Check Delivery Status
                        </button>
                        <button class="btn button-2 text-success-emphasis w-100 mb-2">
                            <i class="fas fa-history me-2"></i>View Order History
                        </button>
                        <button class="btn button-2 text-danger-emphasis w-100">
                            <i class="fas fa-ban me-2"></i>Ignore Issue
                        </button>
                    </div>
                </div>

                <div class="card shadow mb-4">
                    <div class="card-header bg-light">
                        <h5 class="mb-0">Customer Details</h5>
                    </div>
                    <div class="card-body">
                        <div class="text-center mb-3">
                            <img src="./images/profile.png" class="rounded-circle" alt="Customer Image">
                            <h5 class="mt-2">Revanth</h5>
                            <p class="text-muted">Premium Customer</p>
                        </div>
                        <div class="mb-3">
                            <h6 class="text-decoration-underline">Contact Information</h6>
                            <p class="mb-1 fw-medium"><i class="fas fa-envelope me-2"></i>revanth@example.com</p>
                            <p class="mb-1 fw-medium"><i class="fas fa-phone me-2"></i>(+91) 9123-4567-576</p>
                            <p class="fw-medium"><i class="fas fa-map-marker-alt me-2"></i>beside Uppal Bustand, shanthi nagar, Uppal, Sec.</p>
                        </div>
                        <div class="mb-3">
                            <h6 class="text-decoration-underline">Subscription Details</h6>
                            <p class="mb-1"><strong>Plan:</strong> Premium</p>
                            <p class="mb-1"><strong>Delivery Day:</strong> Wednesdays</p>
                            <p><strong>Next Delivery:</strong> May 21, 2025</p>
                        </div>
                        <div>
                            <h6>Customer Notes</h6>
                            <div class="alert alert-warning small">
                                <p class="mb-0">Customer runs a small café. Very particular about delivery times. Has reported 2 delivery issues in the past month.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    $(document).ready(function(){
        $("#responseButton").click(function(e) {
            $("#responseForm").show(); 
            $(this).hide();
        });

        $("#submitButton").click(function(e){
            $("#responseForm").hide();
            $("#responseButton").show();

            alert("Your response has been submitted successfully!");
        });

        $("#saveDraft").click(function(e){
            $("#responseForm").hide();
            $("#responseButton").show();

            alert("Your response has been Draft!");
        });
       });
}