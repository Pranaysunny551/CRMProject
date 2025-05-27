
function loadFeedbackCollection() {
    document.getElementById("main-content").innerHTML =`
        <div class="container-fluid fb-collection">
            <div class="header text-center mt-2">
                <h2 class="fs-5">Feedback Collection</h2>
                <p class="fs-6"><small>Collecting Valuable Customer Feedback</small></p>
            </div>
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="card shadow summary-card mb-3">
                        <div class="card-body">
                            <h5 class="card-title fs-5">Total Feedback</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="card-text fw-semibold">124</h3>
                                </div>
                                <img src="./images/feedback-loop.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow summary-card mb-3">
                        <div class="card-body">
                            <h5 class="card-title fs-5">Positive Feedback</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="card-text fw-semibold">89</h3>
                                </div>
                                <img src="./images/feedback.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow summary-card mb-3">
                        <div class="card-body">
                            <h5 class="card-title fs-5">Pending Responses</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="card-text fw-semibold">18</h3>
                                </div>
                                <img src="./images/review.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card shadow summary-card mb-3">
                        <div class="card-body">
                            <h5 class="card-title fs-5">Negative Feedback</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 class="card-text fw-semibold">17</h3>
                                </div>
                                <img src="./images/bad-review.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="card shadow mt-1">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Customer Name</th>
                                        <th>Product</th>
                                        <th>Rating</th>
                                        <th>Feedback</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Narendher</td>
                                        <td>HG Toned Milk</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>Very fresh and good quality milk</td>
                                        <td>2025-Jan-06</td>
                                        <td><span class="btn btn-sm btn-outline-dark">Respond</span></td>
                                    </tr>
                                    <tr>
                                        <td>Rana Goud</td>
                                        <td>HG Curd</td>
                                        <td>⭐⭐⭐⭐⭐</td>
                                        <td>Good quality and Very fresh Curd</td>
                                        <td>2025-Jan-08</td>
                                        <td><span class="btn btn-sm btn-outline-dark">Respond</span></td>
                                    </tr>
                                    <tr>
                                        <td>Prashanth</td>
                                        <td>Dodla Milk</td>
                                        <td>⭐⭐⭐</td>
                                        <td>it'k ok, but it different to other Milks</td>
                                        <td>2025-Jan-10</td>
                                        <td><span class="btn btn-sm btn-outline-dark">Respond</span></td>
                                    </tr>
                                    <tr>
                                        <td>Santhosh</td>
                                        <td>HG Ghee(500gm)</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>Very fresh and good quality Ghee</td>
                                        <td>2025-Jan-10</td>
                                        <td><span class="btn btn-sm btn-outline-dark">Respond</span></td>
                                    </tr>
                                    <tr>
                                        <td>Rajesh</td>
                                        <td>Fresh Paneer</td>
                                        <td>⭐⭐⭐⭐⭐</td>
                                        <td>Fresh and good quality Paneer</td>
                                        <td>2025-Jan-12</td>
                                        <td><span class="btn btn-sm btn-outline-dark">Respond</span></td>
                                    </tr>
                                    <tr>
                                        <td>Shiva Kumar</td>
                                        <td>Dodla Cow Milk</td>
                                        <td>⭐⭐⭐</td>
                                        <td>Its good but package is damaged</td>
                                        <td>2025-Jan-19</td>
                                        <td><span class="btn btn-sm btn-outline-dark">Respond</span></td>
                                    </tr>
                                    <tr>
                                        <td>Aravind Goud</td>
                                        <td>Dodla Curd</td>
                                        <td>⭐⭐⭐⭐</td>
                                        <td>Very fresh and good quality Curd</td>
                                        <td>2025-Jan-20</td>
                                        <td><span class="btn btn-sm btn-outline-dark">Respond</span></td>
                                    </tr>
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
            </div>

            <div class="row mt-4">
                    <div class="col-md-6">
                        <div class="card shadow mb-4 mt-3">
                            <div class="card-header bg-success-subtle text-success-emphasis">
                                <h5 class="fs-5 mb-0">Recent Positive Feedback</h5>
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <div>
                                                <h6 class="mb-1 fw-bold">Dodla Cream Milk</h6>
                                                <p class="mb-1 fw-medium">"The best milk we've ever tasted! Creamy and fresh."</p>
                                            </div>
                                            <img src="./images/happy-face.png" alt="">
                                        </div>
                                        <small class="fw-semibold">From: Ajith Kumar (Retail) </small><small class="ml-2 fw-semibold">Rating :</small><small class="text-success mx-2 fw-bold">5 stars</small>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <div>
                                                <h6 class="mb-1 fw-bold">Delivery Service</h6>
                                                <p class="mb-1 fw-medium">"Always on time and the products arrive in perfect condition."</p>
                                            </div>
                                            <img src="./images/happy-face.png" alt="">
                                        </div>
                                        <small class="fw-semibold">From: Rajreddy (Wholesale) </small><small class="ml-2 fw-semibold">Rating :</small><small class="text-success mx-2 fw-bold">5 stars</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card shadow mb-4 mt-3">
                            <div class="card-header bg-danger-subtle text-danger-emphasis">
                                <h5 class="fs-5 mb-0">Recent Negative Feedback</h5>
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <div>
                                                <h6 class="mb-1 fw-bold">Dodla Gold Milk</h6>
                                                <p class="mb-1 fw-medium">"Too sweet for my taste, would prefer a less sugary option."</p>
                                            </div>
                                            <img src="./images/sad-face.png" alt="">
                                        </div>
                                        <small class="fw-semibold">From: Narendher (Subscription) </small><small class="ml-2 fw-semibold">Rating :</small><small class="text-danger mx-2 fw-bold">2 stars</small>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <div>
                                                <h6 class="mb-1 fw-bold">Paneer Packaging</h6>
                                                <p class="mb-1 fw-medium">"Hard to open and the lids without making a mess."</p>
                                            </div>
                                            <img src="./images/sad-face.png" alt="">
                                        </div>
                                        <small class="fw-semibold">From: Santhosh Kumar (Retail) </small><small class="ml-2 fw-semibold">Rating :</small><small class="text-danger mx-2 fw-bold">1 stars</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="card shadow mt-4 mb-3">
                    <div class="card-header d-flex justify-content-center bg-primary-subtle ">
                        <h4 class="fs-4 fw-bold m-0">Feedback Collections</h4>
                    </div>
                    
                    <div class="card-body">
                        <div class="row mb-4">
                            <div class="col-md-4 mb-4">
                                <div class="card shadow task-card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <h5 class="card-title mb-0 fs-5">Email Feedbacks</h5>
                                            <span class="badge bg-success-subtle text-success fs-6">Active</span>
                                        </div>
                                        <p class="card-text">Send email surveys to our subscription customers to gather feedback on product quality and delivery service.</p>
                                        <div class="mb-3">
                                            <span class="fw-bold">Last Sent:</span> May 10, 2023
                                        </div>
                                        <div class="d-flex justify-content-between mt-4">
                                            <button class="btn btn-sm button-1 btn-outline-primary fw-semibold">View Results</button>
                                            <button class="btn btn-sm button-2 btn-primary fw-semibold">Send New</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card shadow task-card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <h5 class="card-title mb-0 fs-5">Retail Feedbacks</h5>
                                            <span class="badge bg-success-subtle text-success fs-6">Active</span>
                                        </div>
                                        <p class="card-text">Collect physical feedback cards from retail locations with QR code linking to online survey.</p>
                                        <div class="mb-3">
                                            <span class="fw-bold">Response Rate:</span> 42%
                                        </div>
                                        <div class="d-flex justify-content-between mt-5">
                                            <button class="btn btn-sm button-1 btn-outline-primary fw-semibold">View Results</button>
                                            <button class="btn btn-sm button-2 btn-primary fw-semibold">Send New</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="card shadow task-card h-100">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <h5 class="card-title mb-0 fs-5">Phone Interviews</h5>
                                            <span class="badge bg-success-subtle text-success fs-6">Active</span>
                                        </div>
                                        <p class="card-text">Conduct phone interviews with wholesale buyers to get detailed feedback on our products and service.</p>
                                        <div class="mb-3">
                                            <span class="fw-bold">Last Conducted:</span> April 15, 2023
                                        </div>
                                        <div class="d-flex justify-content-between mt-4">
                                            <button class="btn btn-sm button-1 btn-outline-primary fw-semibold">View Results</button>
                                            <button class="btn btn-sm button-2 btn-success fw-semibold">Schedule New</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>

        </div>
    `;

}