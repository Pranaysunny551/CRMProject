
function loadQualityControl(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid quality-control">
            <div class="header">
                <h2 class="">Quality Control</h2>
                <p class="fs-6"><small>Maintain Compliance with Food Safety Standards</small></p>
            </div>
            <div class="row mt-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card shadow bg-primary-subtle mb-3">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 23px;">Batches Tested</h5>
                            <h5 class="card-text fs-4 fw-medium">150</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card shadow bg-success-subtle mb-3">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 23px;">Batches Passed</h5>
                            <h5 class="card-text fs-4 fw-medium">135</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card shadow bg-danger-subtle mb-3">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 23px;">Batches Failed</h5>
                            <h5 class="card-text fs-4 fw-medium">15</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card shadow bg-warning-subtle mb-3 shadow">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 23px;">Avg. Micro-Count</h5>
                            <h5 class="card-text fs-4 fw-medium">8 CFU/ml</h5>
                        </div>
                    </div>
                </div>
                </div>

                <div class="row">
                <div class="col-md-12">
                    <div class="card shadow">
                        <div class="card-body overflow-y-auto">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="card-title fs-5">Quality Test Results</h5>
                                <div class="mb-3 w-50 form-group">
                                    <input type="text" class="form-control " id="searchInput" placeholder="Search by Batch ID or Product Type...">
                                    <span class="material-icons-outlined icon">search</span>
                                </div>
                            </div>
                            <hr class="m-0 mb-2"/>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Batch ID</th>
                                        <th>Product Type</th>
                                        <th>Fat %</th>
                                        <th>Protein %</th>
                                        <th>Microbial Count</th>
                                        <th>pH Level</th>
                                        <th>Moisture %</th>
                                        <th>Result</th>
                                        <th>Comments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#5037468</td>
                                        <td>Milk</td>
                                        <td>4.5%</td>
                                        <td>3.2%</td>
                                        <td>10 CFU/ml</td>
                                        <td>6.7</td>
                                        <td>87.5%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Within acceptable limits</td>
                                    </tr>
                                    <tr>
                                        <td>#5037469</td>
                                        <td>Milk</td>
                                        <td>4.3%</td>
                                        <td>3.1%</td>
                                        <td>12 CFU/ml</td>
                                        <td>6.6</td>
                                        <td>88.0%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Normal quality</td>
                                    </tr>
                                    <tr>
                                        <td>#5037470</td>
                                        <td>Milk</td>
                                        <td>4.7%</td>
                                        <td>3.3%</td>
                                        <td>8 CFU/ml</td>
                                        <td>6.8</td>
                                        <td>87.0%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>High-quality batch</td>
                                    </tr>
            
                                    <tr>
                                        <td>#5038050</td>
                                        <td>Curd</td>
                                        <td>3.8%</td>
                                        <td>3.5%</td>
                                        <td>15 CFU/ml</td>
                                        <td>4.2</td>
                                        <td>85.0%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Good consistency</td>
                                    </tr>
                                    <tr>
                                        <td>#5038051</td>
                                        <td>Curd</td>
                                        <td>3.9%</td>
                                        <td>3.6%</td>
                                        <td>18 CFU/ml</td>
                                        <td>4.3</td>
                                        <td>84.5%</td>
                                        <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 70px;">Fail</span></td>
                                        <td>High microbial count</td>
                                    </tr>
                                    <tr>
                                        <td>#5038052</td>
                                        <td>Curd</td>
                                        <td>3.7%</td>
                                        <td>3.4%</td>
                                        <td>12 CFU/ml</td>
                                        <td>4.1</td>
                                        <td>85.5%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Excellent taste</td>
                                    </tr>
            
                                    <tr>
                                        <td>#5038056</td>
                                        <td>Ghee</td>
                                        <td>99.8%</td>
                                        <td>0.1%</td>
                                        <td>5 CFU/ml</td>
                                        <td>4.5</td>
                                        <td>0.2%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Excellent quality</td>
                                    </tr>
                                    <tr>
                                        <td>#5038057</td>
                                        <td>Ghee</td>
                                        <td>99.7%</td>
                                        <td>0.2%</td>
                                        <td>6 CFU/ml</td>
                                        <td>4.4</td>
                                        <td>0.3%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Good aroma</td>
                                    </tr>
                                    <tr>
                                        <td>#5038058</td>
                                        <td>Ghee</td>
                                        <td>99.9%</td>
                                        <td>0.1%</td>
                                        <td>4 CFU/ml</td>
                                        <td>4.6</td>
                                        <td>0.1%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Premium quality</td>
                                    </tr>
            
                                    <tr>
                                        <td>#5039001</td>
                                        <td>Paneer</td>
                                        <td>25.0%</td>
                                        <td>18.0%</td>
                                        <td>20 CFU/ml</td>
                                        <td>5.5</td>
                                        <td>50.0%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Soft and fresh</td>
                                    </tr>
                                    <tr>
                                        <td>#5039002</td>
                                        <td>Paneer</td>
                                        <td>24.5%</td>
                                        <td>17.5%</td>
                                        <td>22 CFU/ml</td>
                                        <td>5.6</td>
                                        <td>51.0%</td>
                                        <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 70px;">Fail</span></td>
                                        <td>Slightly high moisture</td>
                                    </tr>
                                    <tr>
                                        <td>#5039003</td>
                                        <td>Paneer</td>
                                        <td>25.5%</td>
                                        <td>18.5%</td>
                                        <td>18 CFU/ml</td>
                                        <td>5.4</td>
                                        <td>49.5%</td>
                                        <td><span class="badge bg-success-subtle text-success fs-6" style="width: 70px;">Pass</span></td>
                                        <td>Excellent texture</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="row mt-3">
                <div class="col-md-5">
                    <div class="card shadow mt-3 h-100">
                    <h3 class="card-header bg-primary-subtle text-center">New Batch Details</h3>
                    <div class="card-body">
                        <dl class="row g-2">
                            <dt class="col-sm-5">Batch ID</dt>
                            <dd class="col-sm-7">: #5037468</dd>
            
                            <dt class="col-sm-5">Product Type</dt>
                            <dd class="col-sm-7">: Milk</dd>
            
                            <dt class="col-sm-5">Production Date</dt>
                            <dd class="col-sm-7">: 2023-10-01</dd>
            
                            <dt class="col-sm-5">Expiry Date</dt>
                            <dd class="col-sm-7">: 2023-10-15</dd>
            
                            <dt class="col-sm-5">Tested By</dt>
                            <dd class="col-sm-7">: Bhasker chary</dd>
            
                            <dt class="col-sm-5">Test Date</dt>
                            <dd class="col-sm-7">: 2023-10-02</dd>
            
                            <dt class="col-sm-5">Additional Notes</dt>
                            <dd class="col-sm-7">: No issues detected during testing.</dd>
                        </dl>
                    </div>
                    </div>
                </div>
        
                <div class="col-md-7">
                    <div class="card shadow mt-3 h-100">
                        <h3 class="card-header text-center bg-primary-subtle">Defects and Issues Log</h3>
                        <div class="card-body overflow-y-hidden">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Batch ID</th>
                                        <th>Issue</th>
                                        <th>Severity</th>
                                        <th>Action Taken</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#5038056</td>
                                        <td>High Moisture</td>
                                        <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 90px;">Medium</span></td>
                                        <td>Retested and approved</td>
                                    </tr>
                                    <tr>
                                        <td>#5037468</td>
                                        <td>Microbial Count High</td>
                                        <td><span class="badge bg-danger-subtle text-danger fs-6" style="width: 90px;">High</span></td>
                                        <td>Batch rejected</td>
                                    </tr>
                                    <tr>
                                        <td>#50380577</td>
                                        <td>High Moisture</td>
                                        <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 90px;">Medium</span></td>
                                        <td>Retested and approved</td>
                                    </tr>
                                    <tr>
                                        <td>#50380577</td>
                                        <td>High Moisture</td>
                                        <td><span class="badge bg-warning-subtle text-warning fs-6" style="width: 90px;">Medium</span></td>
                                        <td>Retested and approved</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="card shadow">
                        <h3 class="card-header text-center bg-dark-subtle">Quality Control Team</h3>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="card shadow mb-2">
                                        <div class="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                            <h6 class="card-title fs-5">Bhasker Rao</h6>
                                            <p class="card-text fw-medium">Quality Manager</p>
                                            </div>
                                                <img src="./images/analyst-1.jpg" class="object-fit-cover" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="card shadow mb-2">
                                        <div class="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                            <h6 class="card-title fs-5">Praveen</h6>
                                            <p class="card-text fw-medium">Lab Technician</p>
                                            </div>
                                            <img src="./images/analyst-2.jpg" class="object-fit-cover" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="card shadow mb-2">
                                        <div class="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                            <h6 class="card-title fs-5">Pravalika</h6>
                                            <p class="card-text fw-medium">Quality Analyst</p>
                                            </div>
                                            
                                            <img src="./images/analyst-4.jpg" class="object-fit-cover" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="card shadow mb-2">
                                        <div class="card-body d-flex justify-content-between align-items-center">
                                            <div>
                                            <h6 class="card-title fs-5">Naveen</h6>
                                            <p class="card-text fw-medium">Quality Inspector</p>
                                            </div>
                                            
                                            <img src="./images/analyst-3.jpg" class="object-fit-cover" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="card shadow">
                        <h3 class="card-header text-center bg-info-subtle">Recent Actions Log</h3>
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Timestamp</th>
                                        <th>Action</th>
                                        <th>Performed By</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2023-10-02 10:00</td>
                                        <td>Batch Tested</td>
                                        <td>Bhaskar Chary</td>
                                        <td>Batch #5037468 tested and passed.</td>
                                    </tr>
                                    <tr>
                                        <td>2023-10-02 11:30</td>
                                        <td>Batch Rejected</td>
                                        <td>Naveen</td>
                                        <td>Batch #5038056 rejected due to high microbial count.</td>
                                    </tr>
                                    <tr>
                                        <td>2023-10-02 10:00</td>
                                        <td>Batch Tested</td>
                                        <td>Naveen</td>
                                        <td>Batch #5037468 tested and passed.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-md-7">
                    <div class="card shadow">
                        <div class="card-body">
                        <h4 class="card-title text-center">Quality Trends</h4>
                        <canvas id="qualityTrendsChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">Quality Control Instructions</h5>
                            <p>Follow these steps to ensure proper quality control for dairy products:</p>

                            <h6>1. <strong>Sampling</strong></h6>
                            <ul>
                                <li>Collect samples from different batches randomly to ensure unbiased testing.</li>
                                <li>Use sterile containers to avoid contamination during sampling.</li>
                                <li>Label each sample with the Batch ID, Product Type, and Date of Sampling.</li>
                            </ul>

                            <h6>2. <strong>Testing Parameters</strong></h6>
                            <ul>
                                <li><strong>Fat %:</strong> Measure fat content using a lactometer or Gerber method.</li>
                                <li><strong>Protein %:</strong> Use Kjeldahl or infrared spectroscopy methods for protein analysis.</li>
                                <li><strong>Microbial Count:</strong> Perform microbial testing using agar plates or automated counters.</li>
                                <li><strong>pH Level:</strong> Measure pH using a calibrated pH meter.</li>
                                <li><strong>Moisture %:</strong> Use a moisture analyzer or oven-drying method.</li>
                            </ul>

                            <h6>3. <strong>Acceptance Criteria</strong></h6>
                            <ul>
                                <li><strong>Milk:</strong>
                                    <ul>
                                        <li>Fat %: 3.5% - 5.0%</li>
                                        <li>Protein %: 2.8% - 3.5%</li>
                                        <li>Microbial Count: ≤ 10 CFU/ml</li>
                                        <li>pH Level: 6.5 - 6.7</li>
                                    </ul>
                                </li>
                                <li><strong>Curd:</strong>
                                    <ul>
                                        <li>Fat %: 3.5% - 4.5%</li>
                                        <li>Protein %: 3.0% - 3.8%</li>
                                        <li>Microbial Count: ≤ 15 CFU/ml</li>
                                        <li>pH Level: 4.0 - 4.5</li>
                                    </ul>
                                </li>
                                <li><strong>Ghee:</strong>
                                    <ul>
                                        <li>Fat %: ≥ 99.5%</li>
                                        <li>Protein %: ≤ 0.5%</li>
                                        <li>Microbial Count: ≤ 5 CFU/ml</li>
                                        <li>Moisture %: ≤ 0.3%</li>
                                    </ul>
                                </li>
                                <li><strong>Paneer:</strong>
                                    <ul>
                                        <li>Fat %: 20% - 25%</li>
                                        <li>Protein %: 15% - 20%</li>
                                        <li>Microbial Count: ≤ 20 CFU/ml</li>
                                        <li>Moisture %: ≤ 55%</li>
                                    </ul>
                                </li>
                            </ul>

                            <h6>4. <strong>Testing Procedure</strong></h6>
                            <ol>
                                <li>Prepare the testing equipment and ensure it is calibrated.</li>
                                <li>Conduct tests for each parameter (fat, protein, microbial count, pH, moisture).</li>
                                <li>Record the results accurately in the Quality Test Results table.</li>
                                <li>Compare the results with the acceptance criteria.</li>
                                <li>Mark the batch as <span class="badge bg-success-subtle text-success">Pass</span> or <span class="badge bg-danger-subtle text-danger">Fail</span> based on the results.</li>
                            </ol>

                            <h6>5. <strong>Handling Failed Batches</strong></h6>
                            <ul>
                                <li>If a batch fails, investigate the root cause (e.g., contamination, improper processing).</li>
                                <li>Retest the batch if necessary.</li>
                                <li>Dispose of or reprocess the batch if it cannot meet the quality standards.</li>
                            </ul>

                            <h6>6. <strong>Documentation</strong></h6>
                            <ul>
                                <li>Maintain detailed records of all tests, including Batch ID, Test Date, and Tester Name.</li>
                                <li>Add comments for any observations or issues during testing.</li>
                                <li>Store records securely for future reference and audits.</li>
                            </ul>

                            <h6>7. <strong>Team Responsibilities</strong></h6>
                            <ul>
                                <li><strong>Quality Manager:</strong> Oversee the entire quality control process.</li>
                                <li><strong>Lab Technician:</strong> Conduct tests and record results.</li>
                                <li><strong>Quality Analyst:</strong> Analyze data and identify trends.</li>
                                <li><strong>Quality Inspector:</strong> Verify compliance with standards.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const qualityTrendsChart = new Chart(document.getElementById('qualityTrendsChart'), {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Fat %',
            data: [4.5, 4.6, 4.7, 4.8, 4.9],
            borderColor: 'blue',
            fill: false,
          }, {
            label: 'Protein %',
            data: [3.2, 3.3, 3.4, 3.5, 3.6],
            borderColor: 'green',
            fill: false,
          }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
      });

      document.getElementById('searchInput').addEventListener('input', function () {
        const searchValue = this.value.toLowerCase();
        const rows = document.querySelectorAll('table tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchValue) ? '' : 'none';
        });
    });
}