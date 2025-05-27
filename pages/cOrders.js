
function loadOrders(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid c-orders">
        <div class="header">
            <h2 class="">Customers Orders</h2>
            <p class="fs-6"><small>Efficiently Manage Dairy Farm Products Of Customer Orders</small></p>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow pt-2">
                    <div class="card-body mt-0">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product</th>
                                    <th>(₹)Amount</th>
                                    <th>Payment Status</th>
                                    <th>Order Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5001</td>
                                    <td>Toned Milk(10L)</td>
                                    <td>840</td>
                                    <td><span class="badge bg-dark-subtle text-secondary fs-6" style="width: 80px">COD</span></td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 100px">Received</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5002</td>
                                    <td>HG Ghee(2kg)</td>
                                    <td>1210</td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 80px">Paid</span></td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 100px">Received</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5003</td>
                                    <td>Paneer(5k)</td>
                                    <td>1780</td>
                                    <td><span class="badge mt-1 bg-success-subtle text-success fs-6" style="width: 80px">Paid</span></td>
                                    <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 100px">Cancelled</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5004</td>
                                    <td>HG Milk(5L)</td>
                                    <td>430</td>
                                    <td><span class="badge mt-1 bg-warning-subtle text-warning fs-6" style="width: 80px">Partial</span></td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 100px">Received</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5005</td>
                                    <td>HG Ghee(1kg)</td>
                                    <td>750</td>
                                    <td><span class="badge mt-1 bg-primary-subtle text-primary fs-6" style="width: 80px">Pending</span></td>
                                    <td><span class="badge bg-info-subtle text-secondary fs-6" style="width: 100px">Processing</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5006</td>
                                    <td>D Curd(5kg)</td>
                                    <td>480</td>
                                    <td><span class="badge mt-1 bg-dark-subtle text-secondary fs-6" style="width: 80px">COD</span></td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 100px">Received</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5007</td>
                                    <td>HG Curd(7k)</td>
                                    <td>610</td>
                                    <td><span class="badge mt-1 bg-success-subtle text-success fs-6" style="width: 80px">Paid</span></td>
                                    <td><span class="badge bg-success-subtle text-success fs-6" style="width: 100px">Received</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5008</td>
                                    <td>HG Toned Milk(10L)</td>
                                    <td>1210</td>
                                    <td><span class="badge mt-1 bg-primary-subtle text-primary fs-6" style="width: 80px">Pending</span></td>
                                    <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 100px">Cancelled</span></td>
                                    <td>
                                        <div class="dropdown action-dropdown">
                                            <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="material-icons-outlined text-dark">more_vert</span>
                                            </a>
                                            <ul class="dropdown-menu text-center bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View Details</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Invoice</a></li>
                                                <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Status</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="d-flex pb-3 justify-content-end align-items-center position-sticky">
                        <div class="btn-group me-4" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary pt-2"><span class="material-icons-outlined">keyboard_double_arrow_left</span></button>
                            <button type="button" class="btn btn-outline-primary">1</button>
                            <button type="button" class="btn btn-outline-primary">2</button>
                            <button type="button" class="btn btn-outline-primary">3</button>
                            <button type="button" class="btn btn-outline-primary pt-2"><span class="material-icons-outlined">keyboard_double_arrow_right</span></button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
            
    </div>
    `;
}