
function loadMainInventory(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid main-inventory">
        <div class="header">
            <h2 class="">Inventory</h2>
            <p class="fs-6"><small>Centralized Warehouse Management for Dairy Products</small></p>
        </div>
        <div class="row">
          <div class=" col-md-6 col-lg-3 mb-3">
             <div class="card shadow">
                  <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="">
                              <div class="fw-bold fs-6 text-uppercase mb-1">
                                  Milk Inventory</div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">1,245 Liters</div>
                              <div class="mt-2 mb-0 text-muted text-xs">
                                  <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 12%</span>
                                  <span>Since last week</span>
                              </div>
                          </div>
                          <div class="">
                              <i class="fas fa-wine-bottle fa-2x text-primary product-icon"></i>
                          </div>
                      </div>
                  </div>
                  <div class="text-center mb-2 mx-2 d-flex justify-content-end">
                      <button class="btn btn-sm bg-success-subtle fw-medium" onclick="loadPage('live-stock')">View</button>
                  </div>
              </div>
          </div>
          <div class=" col-md-6 col-lg-3 mb-3">
             <div class="card shadow">
                  <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                            <div class="">
                                <div class="fw-bold fs-6 text-uppercase mb-1">
                                    Curd Inventory</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">325 Kg</div>
                                <div class="mt-2 mb-0 text-muted text-xs">
                                    <span class="text-success mr-2"><i class="fas fa-arrow-up"></i> 8%</span>
                                    <span>Since last week</span>
                                </div>
                            </div>
                            <div class="">
                                <i class="fas fa-blender fa-2x text-success product-icon"></i>
                            </div>
                      </div>
                  </div>
                  <div class="text-center mb-2 d-flex justify-content-end mx-2">
                      <button class="btn btn-sm bg-success-subtle fw-medium" onclick="loadPage('live-stock')">View</button>
                  </div>
              </div>
          </div>
          <div class=" col-md-6 col-lg-3 mb-3">
             <div class="card shadow">
                  <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="">
                                <div class="fw-bold fs-6 text-uppercase mb-1">
                                    Ghee_ Inventory</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">78 Kg</div>
                                <div class="mt-2 mb-0 text-muted text-xs">
                                    <span class="text-danger mr-2"><i class="fas fa-arrow-down"></i> 5%</span>
                                    <span>Since last week</span>
                                </div>
                            </div>
                            <div class="">
                                <i class="fas fa-jar fa-2x text-warning product-icon"></i>
                            </div>
                      </div>
                  </div>
                  <div class="text-center mb-2 mx-2 d-flex justify-content-end">
                      <button class="btn btn-sm bg-success-subtle fw-medium" onclick="loadPage('live-stock')">View</button>
                  </div>
              </div>
          </div>
          <div class=" col-md-6 col-lg-3 mb-3">
             <div class="card shadow">
                  <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="">
                                <div class="fw-bold fs-6 text-uppercase mb-1">
                                    Paneer Inventory</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">142 Kg</div>
                                <div class="mt-2 mb-0 text-muted text-xs">
                                    <span class="text-success mr-2"><i class="fas fa-arrow-up"></i>15%</span>
                                    <span>Since last week</span>
                                </div>
                            </div>
                            <div class="">
                                <i class="fas fa-cubes fa-2x text-paneer product-icon"></i>
                            </div>
                      </div>
                  </div>
                  <div class="text-center mb-2 mx-2 d-flex justify-content-end">
                      <button class="btn btn-sm bg-success-subtle fw-medium" onclick="loadPage('live-stock')">View</button>
                  </div>
              </div>
          </div>
        </div>
        
        <div class="row mb-3">
          <div class="col-md-12">
            <div class="card shadow">
              <div class="card-header bg-primary-subtle">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">Inventory Summary</h5>
                  <div>
                    <button class="btn btn-sm btn-light" id="refreshInventory">
                      <i class="fas fa-sync-alt"></i> Refresh
                    </button>
                    <button class="btn btn-sm btn-light" id="addNewItem" data-bs-toggle="modal" data-bs-target="#addProductModal">
                      <i class="fas fa-plus"></i> Add Item
                    </button>
                  </div>
                </div>
              </div>
              <div class="row mb-3 mt-3">
                <div class="col-md-4">
                  <select class="form-select" id="storageFilter">
                    <option value="">All Locations</option>
                    <option>Warehouse 1</option>
                    <option>Warehouse 2</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select class="form-select" id="categoryFilter">
                    <option value="">All Categories</option>
                    <option>Milk</option>
                    <option>Curd</option>
                    <option>Ghee</option>
                    <option>Paneer</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <div class="form-group mx-2">
                    <input type="text" class="form-control" placeholder="Search inventory..." id="inventorySearch">
                    <span class="material-icons-outlined icon">search</span>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive overflow-x-hidden">
                  <table class="table" id="inventoryTable">
                    <thead class="">
                      <tr>
                        <th>Batch ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Production Date</th>
                        <th>Expiry Date</th>
                        <th>Storage Location</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody id="inventoryTableBody">
                      <tr class="expiry-warning">
                        <td>5037002</td>
                        <td>Cow Milk (500ml)</td>
                        <td>Milk</td>
                        <td>250</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>5037003</td>
                        <td>Cow Milk (1L)</td>
                        <td>Milk</td>
                        <td>180</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>5037004</td>
                        <td>Toned Milk (500ml)</td>
                        <td>Milk</td>
                        <td>200</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>5037005</td>
                        <td>Toned Milk (1L)</td>
                        <td>Milk</td>
                        <td>130</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>5037006</td>
                        <td>SD Milk (500ml)</td>
                        <td>Milk</td>
                        <td>250</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>5037007</td>
                        <td>SD Milk (1L)</td>
                        <td>Milk</td>
                        <td>180</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>5037008</td>
                        <td>FC Milk (500ml)</td>
                        <td>Milk</td>
                        <td>250</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>5037009</td>
                        <td>FC Milk (1L)</td>
                        <td>Milk</td>
                        <td>180</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370010</td>
                        <td>Curd (500ml)</td>
                        <td>Curd</td>
                        <td>230</td>
                        <td>Kg</td>
                        <td>2025-03-28</td>
                        <td>2025-04-08</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370011</td>
                        <td>Curd (1L)</td>
                        <td>Curd</td>
                        <td>150</td>
                        <td>Kg</td>
                        <td>2025-03-28</td>
                        <td>2025-04-08</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370012</td>
                        <td>Thick Curd (500ml)</td>
                        <td>Curd</td>
                        <td>250</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-03-31</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370013</td>
                        <td>Thick Curd (1L)</td>
                        <td>Milk</td>
                        <td>120</td>
                        <td>Liters</td>
                        <td>2025-03-28</td>
                        <td>2025-04-10</td>
                        <td>Warehouse 1</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370014</td>
                        <td>Ghee (500gms)</td>
                        <td>Ghee</td>
                        <td>100</td>
                        <td>Kgs</td>
                        <td>2025-03-28</td>
                        <td>2025-06-31</td>
                        <td>Warehouse 2</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370015</td>
                        <td>Ghee (1Kg)</td>
                        <td>Ghee</td>
                        <td>60</td>
                        <td>Kgs</td>
                        <td>2025-03-28</td>
                        <td>2025-06-31</td>
                        <td>Warehouse 2</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370016</td>
                        <td>Aroma (500ml)</td>
                        <td>Milk</td>
                        <td>80</td>
                        <td>Kgs</td>
                        <td>2025-03-28</td>
                        <td>2025-07-31</td>
                        <td>Warehouse 2</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
                        </td>
                      </tr>
                      <tr class="expiry-warning">
                        <td>50370017</td>
                        <td>Paneer (500gms)</td>
                        <td>Paneer</td>
                        <td>180</td>
                        <td>Kgs</td>
                        <td>2025-03-28</td>
                        <td>2025-05-20</td>
                        <td>Warehouse 2</td>
                        <td>
                            <div class="dropdown action-dropdown">
                                <a class="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="material-icons-outlined text-dark">more_vert</span>
                                </a>
                                <ul class="dropdown-menu bg-success-subtle" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-eye"></i> View</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-pencil"></i> Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="bi bi-trash"></i> Delete</a></li>
                                </ul>
                            </div>
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
              <div class="card-footer text-muted fw-medium">
                Last updated: <span id="lastUpdated">March 25, 2025 14:30</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mb-3 mt-3">
          <div class="col-md-6">
            <div class="card shadow h-100">
              <div class="card-header bg-info-subtle">
                <h4 class="mb-0 text-center">Storage Capacity</h4>
              </div>
              <div class="card-body">
                <div class="mb-3">
                  <h6 class="fs-5 fw-bold">Cold Storage 1</h6>
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                  </div>
                  <small class="text-muted fw-medium">3,200/5,000 Liters capacity</small>
                </div>
                <div class="mb-3">
                  <h6 class="fs-5 fw-bold">Cold Storage 2</h6>
                  <div class="progress">
                    <div class="progress-bar bg-warning" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                  </div>
                  <small class="text-muted fw-medium">4,250/5,000 Liters capacity</small>
                </div>
                <div>
                  <h6 class="fs-5 fw-bold">Cold Storage 3</h6>
                  <div class="progress">
                    <div class="progress-bar bg-info" role="progressbar" style="width: 45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                  </div>
                  <small class="text-muted fw-medium">900/2,000 Kg capacity</small>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card shadow h-100">
              <div class="card-header bg-warning-subtle">
                <h4 class="mb-0 text-center">Expiry Alerts</h4>
              </div>
              <div class="card-body">
                <div class="alert alert-danger">
                  <strong>Urgent!</strong> Raw Milk (Batch: RM-2025-056) expires in 3 day!
                </div>
                <div class="alert alert-danger">
                  <strong>Warning!</strong> Pasteurized Milk (Batch: MILK-2025-001) expires in 5 days
                </div>
                <div class="alert alert-danger">
                  <strong>Warning!</strong> Probiotic Curd (Batch: CD-2025-112) expires in 15 days
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn bg-primary-subtle btn-sm fw-medium">View All Alerts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
            <div class="pie-chart col-lg-5 mt-3">
                <div class="card shadow mb-4">
                    <div class="card-header text-center bg-primary-subtle mb-2">
                        <h4 class="m-0 fw-bold">Inventory by Category</h4>
                    </div>
                    <canvas id="inventoryPieChart"  width="300" height="300"></canvas>
                    <div class="card-body">
                        <div class="mt-1 text-center small">
                            <span class="mr-2">
                                <i class="fas fa-circle text-primary"></i> Milk
                            </span>
                            <span class="mr-2">
                                <i class="fas fa-circle text-success"></i> Curd
                            </span>
                            <span class="mr-2">
                                <i class="fas fa-circle text-warning"></i> Ghee
                            </span>
                            <span class="mr-2">
                                <i class="fas fa-circle text-info"></i> Paneer
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 mt-3">
                <div class="card shadow mb-4">
                    <div class="card-header text-center bg-primary-subtle">
                        <h4 class="m-0 fw-bold">Stock Movement</h4>
                    </div>
                    <div class="card-body">
                        <div class="chart-area mb-1">
                            <canvas id="stockMovementChart" height="180"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
    `;

        const ctx = document.getElementById('inventoryPieChart').getContext('2d');
        const inventoryPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Milk', 'Curd', 'Ghee', 'Paneer'],
                datasets: [{
                    data: [1245, 325, 78, 142],
                    backgroundColor: ['#4e73df', '#1cc88a', '#f6c23e', '#36b9cc'],
                    hoverBackgroundColor: ['#2e59d9', '#17a673', '#dda20a', '#2c9faf'],
                    hoverBorderColor: "rgba(234, 236, 244, 1)",
                }],
            },
            options: {
                responsive: true,

                aspectRatio: 1.6, 
               
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });

        const ctx2 = document.getElementById('stockMovementChart').getContext('2d');
        const stockMovementChart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Milk (L)',
                        data: [1000, 1200, 1100, 1500, 1300, 1400, 1245],
                        borderColor: '#4e73df',
                        backgroundColor: 'rgba(78, 115, 223, 0.05)',
                        fill: true
                    },
                    {
                        label: 'Curd (Kg)',
                        data: [200, 250, 280, 300, 310, 320, 325],
                        borderColor: '#1cc88a',
                        backgroundColor: 'rgba(28, 200, 138, 0.05)',
                        fill: true
                    },
                    {
                        label: 'Ghee (Kg)',
                        data: [60, 65, 70, 72, 75, 76, 78],
                        borderColor: '#f6c23e',
                        backgroundColor: 'rgba(246, 194, 62, 0.05)',
                        fill: true
                    },
                    {
                        label: 'Paneer (Kg)',
                        data: [100, 110, 120, 130, 135, 140, 142],
                        borderColor: '#36b9cc',
                        backgroundColor: 'rgba(54, 185, 204, 0.05)',
                        fill: true
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },
                plugins: {
                  legend: {
                      position: 'bottom' 
                  }
                }
            }
        });
      
}