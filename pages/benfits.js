function loadBenfits(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid benfits mt-3">
            <h2 class="text-center">Benefits and Insurance Requests</h2>
            <div class="row">
              <div class="col-md-12">
                <div class="card shadow-lg p-3">
                    <div id="benfitsForm mt-2">
                        <div class="mb-3">
                            <label for="employeeName" class="form-label">Employee Name</label>
                            <input type="text" class="form-control" id="employeeName" placeholder="Enter your name" required>
                        </div>
                        <div class="mb-3">
                            <label for="employeeID" class="form-label">Employee ID</label>
                            <input type="text" class="form-control" id="employeeID" placeholder="Enter your employee ID" required>
                        </div>
                        <div class="mb-3">
                            <label for="benfitType" class="form-label">Select Benefit Type</label>
                            <select  class="form-select" id="benfitType" required>
                                <option value="">Select Type</option>
                                <option value="">Health Insurence Coverage</option>
                                <option value="">Retirement Plans</option>
                                <option value="">Flexible Spending Accounts</option>
                                <option value="">Disability Benefits</option>
                                <option value="">Life Insurance</option>
                                <option value="">Dental & vision Plans</option>
                                <option value="">Other Employee Benefits</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="startDate" class="form-label">Coverage Start Date</label>
                            <input type="date" class="form-control" id="startDate" required>
                        </div>
                        <div class="mb-3">
                            <label for="documentUpload" class="form-label">Upload Supporting Documents</label>
                            <input type="file" class="form-control" id="documentUpload">
                        </div>
                        <div class="mb-3">
                            <label for="comments" class="form-label">Select End Month(Optional)</label>
                            <textarea class="form-control h-25" id="comments" placeholder="Enter any additional Requests"></textarea>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn bg-success-subtle text-center fw-medium" onclick="showPayslips()">Submit Request</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>    
        </div>
    `;

}