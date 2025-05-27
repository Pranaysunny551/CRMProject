
function loadLiveStock(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid stock-view mt-2">
        <div class="header text-center bg-primary-subtle">
            <h2 class="fs-5">Live Milk  Stock Inventory</h2>
        </div>
        <div class="row mb-3">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Cow Milk(500ml)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-cow-milk.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 80(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 50(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 30(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla SD Milk(500ml)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-sd-milk.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 110(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 80(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 30(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Full Cream Milk(500ml)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-cream.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 70(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 50(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 20(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Cream Gold(500ml)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-Cream-Gold.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 120(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 90(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 30(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Toned Milk(500ml)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-toned.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 90(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 70(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 20(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Double Toned(500ml)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-double-toned.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 120(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 80(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 40(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                    </div>
                </div>
            </div>
        </div>

        <div class="header text-center bg-primary-subtle mt-4">
            <h2 class="fs-5">Live Curd Stock Inventory</h2>
        </div>
        <div class="row mb-5">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Curd(500gms)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-curd.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 80(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 50(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 30(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Thick Curd(500gms)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-thick-curd.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 80(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 50(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 30(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Curd(200gms)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-curd-cup.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 80(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 50(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 30(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Curd(100gms)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dcurd7.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 80(L)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 50(L)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 30(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-03-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Curd(10Kg)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-bucket-curd.png" alt="">
                        <div class="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>In Stock</th>
                                        <th>Out Stoke</th>
                                        <th>Present Stock</th>
                                        <th>Expiry Date</th>
                                    </tr>
                                </thead>
                                <tbody class="fw-medium fs-5 text-center">
                                    <tr>
                                        <td>40(Kg)</td>
                                        <td>10(Kg)</td>
                                        <td>30(Kg)</td>
                                        <td>2025-03-15</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Thick Curd(10Kg)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dodla-bucket-curd2.png" alt="">
                        <div class="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>In Stock</th>
                                        <th>Out Stoke</th>
                                        <th>Present Stock</th>
                                        <th>Expiry Date</th>
                                    </tr>
                                </thead>
                                <tbody class="fw-medium fs-5 text-center">
                                    <tr>
                                        <td>40(Kg)</td>
                                        <td>20(Kg)</td>
                                        <td>20(Kg)</td>
                                        <td>2025-03-15</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="header text-center bg-primary-subtle mt-5">
            <h2 class="fs-5">Live Ghee Stock Inventory</h2>
        </div>
        <div class="row mb-3">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Ghee(500gms)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dghee3.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 35(Kg)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 20(Kg)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 10(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-05-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Cow Ghee(1Kg)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dghee5.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 50(Kg)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 40(Kg)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 10(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-05-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Ghee(100gms)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/dghee6.png" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 30(Kg)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 10(Kg)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 20(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-05-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-center bg-success-subtle">
                        <h5>Dodla Amora Ghee(600gms)</h5>
                    </div>
                    <div class="card-body d-flex flex-row">
                        <img src="./images/aroma-ghee.webp" alt="">
                        <dl class="row ml-2">
                            <dt class="col-sm-6">In Stock</dt>
                            <dd class="col-sm-6">: 40(Kg)</dd>

                            <dt class="col-sm-6">Out Stoke</dt>
                            <dd class="col-sm-6">: 20(Kg)</dd>

                            <dt class="col-sm-6">Present Stock</dt>
                            <dd class="col-sm-6">: 20(L)</dd>

                            <dt class="col-sm-6">Expiry Date</dt>
                            <dd class="col-sm-6">: 2025-05-15</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    const array = [1, 2, 3, 4, 5] = array[0, 1, 2, 3, 4]

    {
        [
            {

            }
        ]
    }

    [
        {
            
        }
    ]
}