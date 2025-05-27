
function loadDistributors(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid distributors">
            <div class="header">
                <h2 class="">Distributors</h2>
                <p class="fs-6"><small>Analyze Distributor Sales Contributions</small></p>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <button class="btn bg-primary-subtle fw-medium" onclick="loadPage('distributors-view', this)">View Details</button>                
            </div>
            <div class="row distributor-cards">
            <div class="col-md-4">
                <div class="card shadow distributor-card">
                    <div class="d-flex justify-content-start align-items-center p-2">
                        <img src="./images/profile2.png" alt="Distributor 1">
                        <h4>RajaRam</h4>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fs-5">Green Valley Dairy</h5>
                        <p class="card-text">
                        <strong>Location:</strong> Boduppal, Hyd<br>
                        <strong>Contact:</strong> +1 123 456 7890<br>
                        <strong>Email:</strong> info@greenvalleydairy.com
                        </p>
                        <a href="#" class="btn fw-medium">View Details</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow distributor-card">
                    <div class="d-flex justify-content-start align-items-center p-2">
                        <img src="./images/profile2.png" alt="Distributor 1">
                        <h4>Ramgopal</h4>
                    </div>
                <div class="card-body">
                    <h5 class="card-title fs-5">Fresh Milk </h5>
                    <p class="card-text">
                    <strong>Location:</strong> Ramanthapur, HYd<br>
                    <strong>Contact:</strong> +2 123 456 7890<br>
                    <strong>Email:</strong> sales@freshmilk.com
                    </p>
                    <a href="#" class="btn fw-medium">View Details</a>
                </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow distributor-card">
                    <div class="d-flex justify-content-start align-items-center p-2">
                        <img src="./images/profile2.png" alt="Distributor 1">
                        <h4>Jithendher</h4>
                    </div>
                <div class="card-body">
                    <h5 class="card-title fs-5">Organic Dairy</h5>
                    <p class="card-text">
                    <strong>Location:</strong> Tharnaka, Hyd<br>
                    <strong>Contact:</strong> +3 123 456 7890<br>
                    <strong>Email:</strong> contact@organicdairy.com
                    </p>
                    <a href="#" class="btn fw-medium">View Details</a>
                </div>
                </div>
            </div>
            </div>

            <div class="row mt-4">
            <div class="col-md-4">
                <div class="card shadow distributor-card">
                    <div class="d-flex justify-content-start align-items-center p-2">
                        <img src="./images/profile2.png" alt="Distributor 1">
                        <h4>Narendher</h4>
                    </div>
                <div class="card-body">
                    <h5 class="card-title fs-5">Golden Milk </h5>
                    <p class="card-text">
                    <strong>Location:</strong> LB Nagar, Hyd<br>
                    <strong>Contact:</strong> +4 987 654 3210<br>
                    <strong>Email:</strong> support@goldenmilk.com
                    </p>
                    <a href="#" class="btn fw-medium">View Details</a>
                </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow distributor-card">
                    <div class="d-flex justify-content-start align-items-center p-2">
                        <img src="./images/profile2.png" alt="Distributor 1">
                        <h4>Sathish Kumar</h4>
                    </div>
                <div class="card-body">
                    <h5 class="card-title fs-5">Pure Dairy</h5>
                    <p class="card-text">
                    <strong>Location:</strong> Boinpally, Hyd<br>
                    <strong>Contact:</strong> +5 123 456 7890<br>
                    <strong>Email:</strong> info@puredairy.com
                    </p>
                    <a href="#" class="btn fw-medium">View Details</a>
                </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card shadow distributor-card">
                    <div class="d-flex justify-content-start align-items-center p-2">
                        <img src="./images/profile2.png" alt="Distributor 1">
                        <h4>Suresh Reddy</h4>
                    </div>
                <div class="card-body">
                    <h5 class="card-title fs-5">Healthy Farms</h5>
                    <p class="card-text">
                    <strong>Location:</strong> Begumpet, Hyd<br>
                    <strong>Contact:</strong> +6 123 456 7890<br>
                    <strong>Email:</strong> sales@healthyfarms.com
                    </p>
                    <a href="#" class="btn fw-medium">View Details</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;
}
