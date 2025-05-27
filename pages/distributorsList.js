
function loadDistributorsList(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid distributors-list mb-2">
            <div class="header">
                <h2 class="">Distributors List</h2>
                <p class="fs-6"><small>Manage Distributors and Supply Chain Partners</small></p>
            </div>
            <div class="card shadow p-3 mt-3">
                <div class="d-flex justify-content-between mb-2">
                    <div>
                        <h3>Green Valley Dairy Distributors</h3>
                        <h6><strong>Location:</strong> Boduppal, Hyd</h6>
                    </div>
                    <p class="me=4"><strong>Status:</strong> <span class="fw-bold text-success">Active</span></p>
                </div>
                
                <div class="card shadow p-3 mb-3 distributors-l-cards">
                    <h6 class="text-decoration-underline">MAY 2023- JAN 2024</h6>
                    <div class="d-flex justify-content-start  mb-2 mt-2">
                        <div>
                            <h4 class="text-success fw-semibold">Total Revenue Generated</h4>
                            <h4>₹1,27,500</h4>
                            <p><strong>Target:</strong> ₹1,80,000</p>
                        </div>
                        <div class="mx-5">
                            <h4 class="text-success fw-semibold">Total Business Generated</h4>
                            <dl class="row g-2">
                                <dt class="col-sm-4 mb-0">Litters</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 1100</dd>
                                <dt class="col-sm-4 mb-0">Kgs(Curd)</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 1250</dd>
                                <dt class="col-sm-4 mb-0">Kgs(Ghee)</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 144</dd>
                            </dl>    
                            
                        </div>
                    </div>
                    <h5 class="text-info">Performance Bar</h5>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 70.8%;" aria-valuenow="70.8" aria-valuemin="0" aria-valuemax="100">70.8%</div>
                    </div>
                </div>
                    
                    

                <h4><strong>History</strong></h4>
                <table class="table">
                    <thead class="bg-primary-subtle">
                    <tr>
                        <th>Month</th>
                        <th>Milk (Liters)</th>
                        <th>Revenue(₹)</th>
                        <th>Curd (Kg)</th>
                        <th>Revenue(₹)</th>
                        <th>Ghee (Kg)</th>
                        <th>Revenue(₹)</th>
                        <th>Paneer (Kg)</th>
                        <th>Revenue(₹)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>January 2024</td>
                        <td>200</td>
                        <td>16,000</td>
                        <td>100</td>
                        <td>8,500</td>
                        <td>20</td>
                        <td>12,000</td>
                        <td>25</td>
                        <td>11,800</td>
                    </tr>
                    <tr>
                        <td>February 2023</td>
                        <td>100</td>
                        <td>8,500</td>
                        <td>120</td>
                        <td>11,600</td>
                        <td>29</td>
                        <td>21,200</td>
                        <td>30</td>
                        <td>16,100</td>
                    </tr>
                    <tr>
                        <td>March 2023</td>
                        <td>180</td>
                        <td>14,400</td>
                        <td>150</td>
                        <td>16,780</td>
                        <td>35</td>
                        <td>22,050</td>
                        <td>40</td>
                        <td>34,000</td>
                    </tr>
                    <tr>
                        <td>April 2023</td>
                        <td>120</td>
                        <td>10,500</td>
                        <td>160</td>
                        <td>15,500</td>
                        <td>40</td>
                        <td>30,200</td>
                        <td>30</td>
                        <td>25,000</td>
                    </tr>
                    <tr>
                        <td>May 2023</td>
                        <td>200</td>
                        <td>18,000</td>
                        <td>180</td>
                        <td>19,000</td>
                        <td>20</td>
                        <td>11,350</td>
                        <td>20</td>
                        <td>17,200</td>
                    </tr>
                    </tbody>
                </table> 
            </div>

            <div class="card shadow p-3 mt-3">
                <h3>Fresh Milk Distributors</h3>
                <p><strong>Location:</strong> Ramanthapur, Hyd</p>
                <p><strong>Status:</strong> <span class="fw-bold text-success">Active</span></p>

                <div class="card shadow p-3 mb-3  distributors-l-cards">
                    <h6 class="text-decoration-underline">MAY 2023- JAN 2024</h6>
                    <div class="d-flex justify-content-start  mb-2 mt-2">
                        <div>
                            <h4 class="text-success fw-semibold">Total Revenue Generated</h4>
                            <h4>₹97,500</h4>
                            <p><strong>Target:</strong> ₹1,80,000</p>
                        </div>
                        <div class="mx-5">
                            <h4 class="text-success fw-semibold">Total Business Generated</h4>
                            <dl class="row g-2">
                                <dt class="col-sm-4 mb-0">Litters</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 1100</dd>
                                <dt class="col-sm-4 mb-0">Kgs(Curd)</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 1250</dd>
                                <dt class="col-sm-4 mb-0">Kgs(Ghee)</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 144</dd>
                            </dl>    
                            
                        </div>
                    </div>
                    <h5 class="text-info">Performance Bar</h5>
                    <div class="progress">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: 55.7%;" aria-valuenow="55.7" aria-valuemin="0" aria-valuemax="100">57.7%</div>
                    </div>
                </div>

                <h4><strong>History</strong></h4>
                <table class="table">
                    <thead class="bg-primary-subtle">
                    <tr>
                        <th>Month</th>
                        <th>Milk (Liters)</th>
                        <th>Revenue(₹)</th>
                        <th>Curd (Kg)</th>
                        <th>Revenue(₹)</th>
                        <th>Ghee (Kg)</th>
                        <th>Revenue(₹)</th>
                        <th>Paneer (Kg)</th>
                        <th>Revenue(₹)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>January 2024</td>
                        <td>200</td>
                        <td>16,000</td>
                        <td>100</td>
                        <td>8,500</td>
                        <td>20</td>
                        <td>12,000</td>
                        <td>25</td>
                        <td>11,800</td>
                    </tr>
                    <tr>
                        <td>February 2023</td>
                        <td>100</td>
                        <td>8,500</td>
                        <td>120</td>
                        <td>11,600</td>
                        <td>29</td>
                        <td>21,200</td>
                        <td>30</td>
                        <td>16,100</td>
                    </tr>
                    <tr>
                        <td>March 2023</td>
                        <td>180</td>
                        <td>14,400</td>
                        <td>150</td>
                        <td>16,780</td>
                        <td>35</td>
                        <td>22,050</td>
                        <td>40</td>
                        <td>34,000</td>
                    </tr>
                    <tr>
                        <td>April 2023</td>
                        <td>120</td>
                        <td>10,500</td>
                        <td>160</td>
                        <td>15,500</td>
                        <td>40</td>
                        <td>30,200</td>
                        <td>30</td>
                        <td>25,000</td>
                    </tr>
                    <tr>
                        <td>May 2023</td>
                        <td>200</td>
                        <td>18,000</td>
                        <td>180</td>
                        <td>19,000</td>
                        <td>20</td>
                        <td>11,350</td>
                        <td>20</td>
                        <td>17,200</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="card shadow p-3 mt-3">
                <h3>Organic Dairy Distributors</h3>
                <p><strong>Location:</strong> Tharnaka, Hyd</p>
                <p><strong>Status:</strong> <span class="fw-bold text-success">Active</span></p>

               <div class="card shadow p-3 mb-3  distributors-l-cards">
                    <h6 class="text-decoration-underline">MAY 2023- JAN 2024</h6>
                    <div class="d-flex justify-content-start  mb-2 mt-2">
                        <div>
                            <h4 class="text-success fw-semibold">Total Revenue Generated</h4>
                            <h4>₹1,45,500</h4>
                            <p><strong>Target:</strong> ₹1,80,000</p>
                        </div>
                        <div class="mx-5">
                            <h4 class="text-success fw-semibold">Total Business Generated</h4>
                            <dl class="row g-2">
                                <dt class="col-sm-4 mb-0">Litters</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 1100</dd>
                                <dt class="col-sm-4 mb-0">Kgs(Curd)</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 1250</dd>
                                <dt class="col-sm-4 mb-0">Kgs(Ghee)</dt>
                                <dd class="col-sm-8 mb-0 fs-6 fw-medium">: 144</dd>
                            </dl>    
                            
                        </div>
                    </div>
                    <h5 class="text-info">Performance Bar</h5>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 61.8%;" aria-valuenow="61.8" aria-valuemin="0" aria-valuemax="100">61.8%</div>
                    </div>
                </div>

                <h4><strong>History</strong></h4>
                <table class="table">
                    <thead class="bg-primary-subtle">
                    <tr>
                        <th>Month</th>
                        <th>Milk (Liters)</th>
                        <th>Revenue(₹)</th>
                        <th>Curd (Kg)</th>
                        <th>Revenue(₹)</th>
                        <th>Ghee (Kg)</th>
                        <th>Revenue(₹)</th>
                        <th>Paneer (Kg)</th>
                        <th>Revenue(₹)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>January 2024</td>
                        <td>200</td>
                        <td>16,000</td>
                        <td>100</td>
                        <td>8,500</td>
                        <td>20</td>
                        <td>12,000</td>
                        <td>25</td>
                        <td>11,800</td>
                    </tr>
                    <tr>
                        <td>February 2023</td>
                        <td>100</td>
                        <td>8,500</td>
                        <td>120</td>
                        <td>11,600</td>
                        <td>29</td>
                        <td>21,200</td>
                        <td>30</td>
                        <td>16,100</td>
                    </tr>
                    <tr>
                        <td>March 2023</td>
                        <td>180</td>
                        <td>14,400</td>
                        <td>150</td>
                        <td>16,780</td>
                        <td>35</td>
                        <td>22,050</td>
                        <td>40</td>
                        <td>34,000</td>
                    </tr>
                    <tr>
                        <td>April 2023</td>
                        <td>120</td>
                        <td>10,500</td>
                        <td>160</td>
                        <td>15,500</td>
                        <td>40</td>
                        <td>30,200</td>
                        <td>30</td>
                        <td>25,000</td>
                    </tr>
                    <tr>
                        <td>May 2023</td>
                        <td>200</td>
                        <td>18,000</td>
                        <td>180</td>
                        <td>19,000</td>
                        <td>20</td>
                        <td>11,350</td>
                        <td>20</td>
                        <td>17,200</td>
                    </tr>
                    </tbody>
                </table>
        
            </div>   
        </div>
    `;
}
