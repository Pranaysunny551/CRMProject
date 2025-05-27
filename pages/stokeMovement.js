function loadStockMovement() {
    document.getElementById("main-content").innerHTML = `
      <div class="container-fluid stock-view mt-2">
        <div class="header">
            <h2 class="">Stock Movement</h2>
            <p class="fs-6"><small>Real-Time Updates on Inventory Transfers</small></p>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="card-header bg-warning-subtle">
                       <h4 class="text-center fw-bold">Real-Time Stock Levels</h4>
                    </div>
                   <div class="card-body">
                     <table class="table">
                       <thead>
                         <tr>
                            <th>Batch ID</th>
                           <th>Product</th>
                           <th>Current Stock</th>
                           <th>Low Stock Alert</th>
                           <th>Expiry Alert</th>
                           <th>Date</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                            <td>5037002</td>
                           <td>Dodla Cow Milk</td>
                           <td>200 Liters</td>
                           <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 100px;">Low Stock</span></td>
                           <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 150px;">Expires in 2 days</span></td>
                           <td>2025-03-05</td>
                         </tr>
                         <tr>
                            <td>5037004</td>
                            <td>Dodla Toned Milk</td>
                            <td>300 Liters</td>
                            <td><span class="badge bg-success-subtle text-success fs-6" style="width: 100px;">In Stock</span></td>
                            <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 150px;">Expires in 3 days</span></td>
                            <td>2025-03-06</td>
                          </tr>
                         <tr>
                            <td>5037007</td>
                           <td>Dodla Curd</td>
                           <td>200 Kg</td>
                           <td><span class="badge bg-success-subtle text-success fs-6" style="width: 100px;">In Stock</span></td>
                           <td><span class="badge bg-success-subtle text-success fs-6"  style="width: 150px;">No Expiry</span></td>
                           <td>2025-03-25</td>
                         </tr>
                         <tr>
                            <td>5037009</td>
                            <td>HG Curd</td>
                            <td>100 Kg</td>
                            <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 100px;">Low Stock</span></td>
                            <td><span class="badge bg-success-subtle text-success fs-6"  style="width: 150px;">No Expiry</span></td>
                            <td>2025-03-20</td>
                          </tr>
                         <tr>
                            <td>5037013</td>
                           <td>Dodla Ghee</td>
                           <td>100 Kg</td>
                           <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 100px;">Low Stock</span></td>
                           <td><span class="badge bg-success-subtle text-success fs-6"  style="width: 150px;">No Expiry</span></td>
                           <td>2025-04-15</td>
                         </tr>
                         <tr>
                            <td>5037016</td>
                            <td>HG Ghee</td>
                            <td>20 Kg</td>
                            <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 100px;">Low Stock</span></td>
                            <td><span class="badge bg-danger-subtle text-danger fs-6"  style="width: 150px;">Expired</span></td>
                            <td>2025-03-03</td>
                          </tr>
                         <tr>
                            <td>5037021</td>
                           <td>Paneer</td>
                           <td>50 Kg</td>
                           <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 100px;">Low Stock</span></td>
                           <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 150px;">Expires in 5 days</span></td>
                           <td>2025-03-08</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="card-header bg-warning-subtle">
                       <h4 class="text-center fw-bold">Stock Inward Details</h4>
                    </div>
                   <div class="card-body">
                     <table class="table">
                       <thead>
                         <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Received Quantity</th>
                            <th>Supplier</th>
                            <th>Date Received</th>
                            <th>Remarks</th>
                         </tr>
                       </thead>
                       <tbody>
                        <tr>
                            <th>4041</th>
                            <td>Cow Milk</td>
                            <td>500 Liters</td>
                            <td>Fresh Farms</td>
                            <td>2025-03-01</td>
                            <td>Fresh batch received</td>
                        </tr>
                        <tr>
                            <th>4042</th>
                            <td>Curd</td>
                            <td>200 Kg</td>
                            <td>Curd Masters</td>
                            <td>2025-03-01</td>
                            <td>High-quality Curd</td>
                        </tr>
                        <tr>
                            <th>4043</th>
                            <td>Paneer</td>
                            <td>150 Kg</td>
                            <td>Golden Paneer</td>
                            <td>2025-03-01</td>
                            <td>New supplier</td>
                        </tr>
                        <tr>
                            <th>4044</th>
                            <td>Yogurt</td>
                            <td>300 Units</td>
                            <td>Yogurt Delight</td>
                            <td>2025-03-01</td>
                            <td>Low-fat yogurt</td>
                        </tr>
                        <tr>
                            <th>4045</th>
                            <td>Buffalo Milk</td>
                            <td>500 Liters</td>
                            <td>Dodla Farms</td>
                            <td>2025-03-01</td>
                            <td>Fresh batch received</td>
                        </tr>
                        <tr>
                            <th>4046</th>
                            <td>Cream Curd</td>
                            <td>200 Kg</td>
                            <td>Dodla Farms</td>
                            <td>2025-03-01</td>
                            <td>High-quality Curd</td>
                        </tr>
                    </tbody>
                    </table>
                   </div>
                 </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="card-header bg-warning-subtle">
                       <h4 class="text-center fw-bold">Stock Outward Details</h4>
                    </div>
                   <div class="card-body">
                     <table class="table">
                       <thead>
                         <tr>
                            <th>Batch ID</th>
                            <th>Product</th>
                            <th>Quantity Sold</th>
                            <th>Customer</th>
                            <th>Date Sold</th>
                            <th>Remarks</th>
                         </tr>
                       </thead>
                       <tbody>
                        <tr>
                            <th>0001</th>
                            <td>Milk</td>
                            <td>200 Liters</td>
                            <td>Rajaram(B)</td>
                            <td>2025-03-02</td>
                            <td>Regular order</td>
                        </tr>
                        <tr>
                            <th>0002</th>
                            <td>Cheese</td>
                            <td>50 Kg</td>
                            <td>Jithendhe(B)</td>
                            <td>2025-03-02</td>
                            <td>Bulk order</td>
                        </tr>
                        <tr>
                            <th>0003</th>
                            <td>Butter</td>
                            <td>30 Kg</td>
                            <td>Bakery C</td>
                            <td>2025-03-02</td>
                            <td>Weekly supply</td>
                        </tr>
                        <tr>
                            <th>0004</th>
                            <td>Yogurt</td>
                            <td>100 Units</td>
                            <td>Café D</td>
                            <td>2025-03-02</td>
                            <td>Special order</td>
                        </tr>
                    </tbody>
                     </table>
                   </div>
                 </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="card-header bg-warning-subtle">
                       <h4 class="text-center fw-bold">Stock Distribution</h4>
                    </div>
                   <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Distributor A</th>
                                <th scope="col">Distributor B</th>
                                <th scope="col">Distributor C</th>
                                <th scope="col">Total Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Milk</td>
                                <td>200 Liters</td>
                                <td>150 Liters</td>
                                <td>150 Liters</td>
                                <td>500 Liters</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Cheese</td>
                                <td>100 Kg</td>
                                <td>50 Kg</td>
                                <td>50 Kg</td>
                                <td>200 Kg</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Butter</td>
                                <td>70 Kg</td>
                                <td>50 Kg</td>
                                <td>30 Kg</td>
                                <td>150 Kg</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Yogurt</td>
                                <td>100 Units</td>
                                <td>100 Units</td>
                                <td>100 Units</td>
                                <td>300 Units</td>
                            </tr>
                        </tbody>
                    </table>
                   </div>
                 </div>
            </div>
        </div>
    </div>
    `;
}