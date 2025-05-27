function loadSuppliersList(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid suppliers-list">
        <div class="header">
            <h2 class="">Suppliers List</h2>
            <p class="fs-6"><small>Analyze Suppliers And Supply Chain Partners</small></p>
        </div>
       
        <div class="row mt-2 mb-3 g-3">
            <div class="col-md-4">
                <div class="card shadow mb-3">
                    <img src="./images/farm-1-gif.gif" alt="">
                    <div class="card-body">
                        <h4>Fresh Farms</h4>
                        <hr class="m-0 mb-2"/>
                        <dl class="row g-2">
                            <dt class="col-sm-3 mb-0">ID</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: #5037468</dd>
            
                            <dt class="col-sm-3 mb-0">Name</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Raguveer</dd>
            
                            <dt class="col-sm-3 mb-0">Email</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: raguveer@freshfarms.com</dd>

                            <dt class="col-sm-3 mb-0">Contact</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: 9846473764</dd>

                            <dt class="col-sm-3 mb-0">Address</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Dairy Lane, Rangareddy</dd>
                        </dl>
                    </div>
                    <div class="bg-primary-subtle d-flex justify-content-end">
                        <a href="#freshFarms" onclick="loadPage('suppliers-details', this)"><button class="btn btn-light bg-primary-subtle fw-medium border-0">View Details</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow mb-3">
                    <img src="./images/farm-4.webp" alt="">
                    <div class="card-body">
                        <h4>Golden Dairy Farms</h4>
                        <hr class="m-0 mb-2"/>
                        <dl class="row g-2">
                            <dt class="col-sm-3 mb-0">ID</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: #5037469</dd>
            
                            <dt class="col-sm-3 mb-0 mb-0">Name</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Vasanth</dd>
            
                            <dt class="col-sm-3 mb-0">Email</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: vasanth@goldendairy.com</dd>

                            <dt class="col-sm-3 mb-0">Contact</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: 7464737643</dd>

                            <dt class="col-sm-3 mb-0">Address</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Dairy Lane, Lb Nagar</dd>
                        </dl>
                    </div>
                    <div class="bg-primary-subtle d-flex justify-content-end">
                        <a href="#goldenDairyFarms" onclick="loadPage('suppliers-details', this)"><button class="btn btn-light bg-primary-subtle fw-medium border-0">View Details</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow mb-3">
                    <img src="./images/farm-3-gif.gif" alt="">
                    <div class="card-body">
                        <h4>Organic Milk Suppliers</h4>
                        <hr class="m-0 mb-2"/>
                        <dl class="row g-2">
                            <dt class="col-sm-3 mb-0">ID</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: #5037470</dd>
            
                            <dt class="col-sm-3 mb-0">Name</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Vijay</dd>
            
                            <dt class="col-sm-3 mb-0">Email</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: vijay@organicmilk.com</dd>

                            <dt class="col-sm-3 mb-0">Contact</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: 6306473764</dd>

                            <dt class="col-sm-3 mb-0">Address</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Dairy Lane, Uppal</dd>
                        </dl>
                    </div>
                    <div class="bg-primary-subtle d-flex justify-content-end">
                        <a href="#organicMilk" onclick="loadPage('suppliers-details', this)"><button class="btn btn-light bg-primary-subtle fw-medium border-0">View Details</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow mb-3">
                    <img src="./images/farm-5.jpg" alt="">
                    <div class="card-body">
                        <h4>Happy Cows Dairy</h4>
                        <hr class="m-0 mb-2"/>
                        <dl class="row g-2">
                            <dt class="col-sm-3 mb-0">ID</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: #5037471</dd>
            
                            <dt class="col-sm-3 mb-0">Name</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Shiva Kumar</dd>
            
                            <dt class="col-sm-3 mb-0">Email</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: shiva@happycows.com</dd>

                            <dt class="col-sm-3 mb-0">Contact</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: 8774567890</dd>

                            <dt class="col-sm-3 mb-0">Address</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Dairy Lane, Madchal</dd>
                        </dl>
                    </div>
                    <div class="bg-primary-subtle d-flex justify-content-end">
                        <a href="#happyCowsDairy"><button class="btn btn-light bg-primary-subtle fw-medium border-0">View Details</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow mb-3 ">
                    <img src="./images/farm-2-gif.gif" alt="">
                    <div class="card-body">
                        <h4>Pure Milk Farms</h4>
                        <hr class="m-0 mb-2"/>
                        <dl class="row g-2">
                            <dt class="col-sm-3 mb-0">ID</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: #5037472</dd>
            
                            <dt class="col-sm-3 mb-0">Name</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Aravind</dd>
            
                            <dt class="col-sm-3 mb-0">Email</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: aravind@puremilk.com</dd>

                            <dt class="col-sm-3 mb-0">Contact</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: 9334567890</dd>

                            <dt class="col-sm-3 mb-0">Address</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Dairy Lane, Sangareddy</dd>
                        </dl>
                    </div>
                    <div class="bg-primary-subtle d-flex justify-content-end">
                        <a href="#pureMilkFarms"><button class="btn btn-light bg-primary-subtle fw-medium border-0">View Details</button></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow mb-3">
                    <img src="./images/farm-7.jfif" alt="">
                    <div class="card-body">
                        <h4>Green Pastures Dairy</h4>
                        <hr class="m-0 mb-2"/>
                        <dl class="row g-2">
                            <dt class="col-sm-3 mb-0">ID</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: #5037473</dd>
            
                            <dt class="col-sm-3 mb-0">Name</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Vikram</dd>
            
                            <dt class="col-sm-3 mb-0">Email</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: vikram@greenfarms.com</dd>

                            <dt class="col-sm-3 mb-0">Contact</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: 6234567890</dd>

                            <dt class="col-sm-3 mb-0">Address</dt>
                            <dd class="col-sm-9 mb-0 fs-6 fw-medium">: Dairy Lane, Boduppal</dd>
                        </dl>
                    </div>
                    <div class="bg-primary-subtle d-flex justify-content-end">
                        <a href="#greenPasturesDairy"><button class="btn btn-light bg-primary-subtle fw-medium border-0">View Details</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}