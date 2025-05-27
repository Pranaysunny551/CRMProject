
function loadInventory(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid">
        <div class="header text-center">
            <h2 class="fs-2">Detailed Inventory</h2>
        </div>
        <div class="row mt-4">
            <div class="col-md-12 filter-section">
                <div class="card shadow-lg p-3 ">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="statusFilter" class="form-label">Filter by Status</label>
                            <select class="form-select" id="statusFilter">
                                <option value="">All</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Low Stock">Low Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="productFilter" class="form-label">Filter by Product</label>
                            <select class="form-select" id="productFilter">
                                <option value="">All</option>
                                <option value="Milk">Milk</option>
                                <option value="Cheese">Curd</option>
                                <option value="Butter">Paneer</option>
                                <option value="Yogurt">Ghee</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="dateFilter" class="form-label">Filter by Date</label>
                            <input type="date" class="form-control" id="dateFilter">
                        </div>
                        <div class="col-md-3">
                            <button class="btn btn-outline-success mt-4 fw-medium" onclick="applyFilters()">Apply Filters</button>
                        </div>
                    </div>
                    
                    <div class="d-flex justify-content-end align-items-center mt-3">
                        <div class="mb-3">
                            <input type="text" class="form-control w-100" id="searchInput" placeholder="Search products...">
                        </div>
                    </div>
                    <hr/>
                    <table class="table overflow-x-auto">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Last Updated</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="inventoryTable" class="align-items-center">
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="./images/dodla-cow-milk.png" alt="" width="50px" height="50px">
                                        Dodla Cow Milk
                                    </div>
                                </td>
                                <td>500 Liters</td>
                                <td>05/03/2025</td>
                                <td><span class="text-success fw-bold">In Stock</span></td>
                                <td>
                                    <div class="dropdown action-dropdown">
                                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="material-icons-outlined text-dark">more_vert</span>
                                        </a>
                                        <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i>Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i>Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="./images/dodla-toned.png" alt="" width="50px" height="50px">
                                        Dodla Toned Milk
                                    </div>
                                </td>
                                <td>500 Liters</td>
                                <td>05/03/2025</td>
                                <td><span class="text-success fw-bold">In Stock</span></td>
                                <td>
                                    <div class="dropdown action-dropdown">
                                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="material-icons-outlined text-dark">more_vert</span>
                                        </a>
                                        <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i>Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i>Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="./images/dodla-sd-milk.png" alt="" width="50px" height="50px">
                                        Dodla SD Milk
                                    </div>
                                </td>
                                <td>500 Liters</td>
                                <td>05/03/2025</td>
                                <td><span class="text-success fw-bold">In Stock</span></td>
                                <td>
                                    <div class="dropdown action-dropdown">
                                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="material-icons-outlined text-dark">more_vert</span>
                                        </a>
                                        <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i>Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i>Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="./images/dodla-curd.png" alt="" width="50px" height="50px">
                                        Dodla Curd
                                    </div>
                                </td>
                                <td>50 Kg</td>
                                <td>01/03/2025</td>
                                <td><span class="text-warning fw-bold">Low Stock</span></td>
                                <td>
                                    <div class="dropdown action-dropdown">
                                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="material-icons-outlined text-dark">more_vert</span>
                                        </a>
                                        <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i>Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i>Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="./images/dodla-thick-curd.png" alt="" width="50px" height="50px">
                                        Dodla Thick Curd
                                    </div>
                                </td>
                                <td>50 Kg</td>
                                <td>01/03/2025</td>
                                <td><span class="text-warning fw-bold">Low Stock</span></td>
                                <td>
                                    <div class="dropdown action-dropdown">
                                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="material-icons-outlined text-dark">more_vert</span>
                                        </a>
                                        <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i>Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i>Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="./images/dghee3.png" alt="" width="50px" height="50px">
                                        Dodla Ghee
                                    </div>
                                </td>
                                <td>150 Kg</td>
                                <td>01/02/2025</td>
                                <td><span class="text-danger fw-bold">Out of Stock</span></td>
                                <td>
                                    <div class="dropdown action-dropdown">
                                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="material-icons-outlined text-dark">more_vert</span>
                                        </a>
                                        <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i>Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i>Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="./images/dodla-bucket-curd.png" alt="" width="50px" height="50px">
                                        Dodla Curd 10Kg
                                    </div>
                                </td>
                                <td>300 Liters</td>
                                <td>05/03/2025</td>
                                <td><span class="text-success fw-bold">In Stock</span></td>
                                <td>
                                    <div class="dropdown action-dropdown">
                                        <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="material-icons-outlined text-dark">more_vert</span>
                                        </a>
                                        <ul class="dropdown-menu bg-secondary-subtle" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i>Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i>Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    `;
    
    
}