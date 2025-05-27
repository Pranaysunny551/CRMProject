function loadProductList(){
    document.getElementById("main-content").innerHTML=`
    <div class="container-fluid add-product mt-2">
        <div class="header text-center">
            <h2 class="fs-2">Product List</h2>
        </div>
        <div class="d-flex justify-content-end mt-2">
            <button onclick="loadPage('addProduct')" class="btn btn-outline-primary fw-medium">Add Product</button>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/heri1.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span> ₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>


            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/heri3.png" alt="">
                    <h5>HG (DT)Milk</h5>
                    <h6><span class="text-decoration-line-through">₹45 </span> ₹40</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/heri4.png" alt="">
                    <h5>HG (G)Milk</h5>
                    <h6><span class="text-decoration-line-through">₹43 </span>₹42</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/heri5.png" alt="">
                    <h5>HG A2 (FC)Milk</h5>
                    <h6><span class="text-decoration-line-through">₹56 </span>₹50</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/heri6.png" alt="">
                    <h5>HG Toned Milk(1L)</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/heri7.png" alt="">
                    <h5>HG (FC)Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hcurd1.png" alt="">
                    <h5>HG T Curd</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hcurd2.png" alt="">
                    <h5>HG N Curd</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hcurd3.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hcurd4.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hcurd5.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hcurd6.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hghee2.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hghee1.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hghee3.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/hghee4.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/arokya1.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card shadow p-3 text-center mt-3">
                    <img src="images/arokya2.png" alt="">
                    <h5>HG Toned Milk</h5>
                    <h6><span class="text-decoration-line-through">₹40 </span>₹37</h6>
                    <p><strong>Expire Date</strong>13-02-2025</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
            
    </div>
    `;
}