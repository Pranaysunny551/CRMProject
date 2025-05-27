function loadSalaryComp(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid salary-comp mt-2">
             <div class="">
                <h2 class=" text-center bg-primary-subtle">Salary and Compensation</h2>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card shadow mt-2">
                        <div class="card-body">
                            <div class="d-flex justify-content-start align-items-center">
                                <img src="./images/profile2.png" alt="">
                                <div class="mx-2 mt-2">
                                    <h5>Srikanth Nalla</h5>
                                    <p class="fw-bold">Administrator</p>
                                </div>
                            </div>
                            <div class="p-2">
                                <h5 class="card-title mb-3">Current Salary Details :</h5>
                                <p><strong>Base Salary:</strong> ₹60,000 per year</p>
                                <p><strong>Bonuse:</strong> ₹10,000 annually</p>
                                <p><strong>Last Raise:</strong> January 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="card shadow mt-2">
                        <div class="card-body">
                            <h5 class="card-title">Request Salary Adjustment</h5>
                            <form>
                                <div class="mb-3">
                                    <label for="requestType" class="form-label">Request Type:</label>
                                    <select class="form-select" id="requestType">
                                        <option value="">Salary Increase</option>
                                        <option value="">Bonus Request</option>
                                        <option value="">Other Compensation</option>
                                    </select>
                                </div>
                                <div class="mb-2">
                                    <label for="reason" class="form-label">Reason for Request:</label>
                                    <textarea class="form-control h-25"id="reason" rows="3"></textarea>
                                </div>
                                <div class="d-flex justify-content-center mt-3">
                                    <button type="submit" class="btn btn-outline-primary bg-primary-subtle text-center text-dark fw-medium">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card shadow mt-3">
                        <div class="card-body">
                            <h4 class="card-title">Compensation History</h4>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jan 2024</td>
                                        <td>Salary Raise</td>
                                        <td>₹6,000</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <td>Dec 2023</td>
                                        <td>Bonus</td>
                                        <td>₹5,000</td>
                                        <td>Approved</td>
                                    </tr>
                                    <tr>
                                        <td>sep 2023</td>
                                        <td>Bonus</td>
                                        <td>₹2,500</td>
                                        <td>Rejected</td>
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