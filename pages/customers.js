function loadCustomers(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid customers">
        <div class="header">
            <h2 class="">Customers</h2>
            <p class="fs-6"><small>Manage Your Dairy Farms Customers Efficiently</small></p>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="card c-icons shadow p-3 mt-3">
                    <img src="./images/customers-gif.GIF">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="c-icons">
                            <a href="#Online"><img src="./images/online-icon.png"></a>
                        </div>
                        <div>
                            <h4 class="fw-bold mt-2">Online Customers</h4>
                            <h3 class="fw-bold">269</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card shadow p-3 mt-3">
                    <img src="./images/store.GIF">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="c-icons">
                            <a href="#Retail"><img src="./images/retail-icon.png"></a>
                        </div>
                        <div>
                            <h4 class="fw-bold mt-2">Retail Customers</h4>
                            <h3 class="fw-bold">176</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card c-icons shadow p-3 mt-3">
                    <img src="./images/bulk-gif.JFIF">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="c-icons">
                            <a href="#Bulk"><img src="./images/bulk-icon.png"></a>
                        </div>
                        <div>
                            <h4 class="fw-bold mt-2">Bulk Customers</h4>
                            <h3 class="fw-bold">211</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>

        <div class="row mt-3" id="Online">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="card-header text-center bg-primary-subtle">
                        <h4>Online Customers</h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover mt-2">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Purchased</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>santhu755@gmail.com</td>
                                    <td>Uppal</td>
                                    <td>40,778</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>rameshetika@gmail.com</td>
                                    <td>LB Nagar</td>
                                    <td>38,568</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>rathod123@gmail.com</td>
                                    <td>Ameerpet</td>
                                    <td>58,794</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0004</td>
                                    <td>radhikachippa@gmail.com</td>
                                    <td>Boduppal</td>
                                    <td>45,550</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0005</td>
                                    <td>rahul223@gmail.com</td>
                                    <td>Tharnaka</td>
                                    <td>25,978</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0006</td>
                                    <td>ramakrishna@gmail.com</td>
                                    <td>Nagole</td>
                                    <td>34,778</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0007</td>
                                    <td>prashanth12@gmail.com</td>
                                    <td>Boinpally</td>
                                    <td>48,738</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
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
         <div class="row" id="Retail">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="card-header text-center bg-primary-subtle">
                        <h4>Retail Customers</h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover mt-2">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Purchased</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>santhu755@gmail.com</td>
                                    <td>Uppal</td>
                                    <td>40,778</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>rameshetika@gmail.com</td>
                                    <td>LB Nagar</td>
                                    <td>38,568</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>rathod123@gmail.com</td>
                                    <td>Ameerpet</td>
                                    <td>58,794</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0004</td>
                                    <td>radhikachippa@gmail.com</td>
                                    <td>Boduppal</td>
                                    <td>45,550</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0005</td>
                                    <td>rahul223@gmail.com</td>
                                    <td>Tharnaka</td>
                                    <td>25,978</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0006</td>
                                    <td>ramakrishna@gmail.com</td>
                                    <td>Nagole</td>
                                    <td>34,778</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0007</td>
                                    <td>prashanth12@gmail.com</td>
                                    <td>Boinpally</td>
                                    <td>48,738</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
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
        <div class="row" id="Bulk">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="card-header text-center bg-primary-subtle">
                        <h4>Bulk Customers</h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover mt-2">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Purchased</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0001</td>
                                    <td>santhu755@gmail.com</td>
                                    <td>Uppal</td>
                                    <td>40,778</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0002</td>
                                    <td>rameshetika@gmail.com</td>
                                    <td>LB Nagar</td>
                                    <td>38,568</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0003</td>
                                    <td>rathod123@gmail.com</td>
                                    <td>Ameerpet</td>
                                    <td>58,794</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0004</td>
                                    <td>radhikachippa@gmail.com</td>
                                    <td>Boduppal</td>
                                    <td>45,550</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0005</td>
                                    <td>rahul223@gmail.com</td>
                                    <td>Tharnaka</td>
                                    <td>25,978</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0006</td>
                                    <td>ramakrishna@gmail.com</td>
                                    <td>Nagole</td>
                                    <td>34,778</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>0007</td>
                                    <td>prashanth12@gmail.com</td>
                                    <td>Boinpally</td>
                                    <td>48,738</td>
                                    <td>
                                        <button class="btn btn-outline-primary" style="font-size: 12px">View</button>
                                    </td>
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
    </div>
    `;
}