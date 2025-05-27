
function loadhrmpage(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid hrm-dashboard pb-2">
        <div class="row">
            <!-- Main Content -->
            <main class="col-md-12">
                <div class="row mt-2">
                    <!-- Dashboard Cards -->
                    <div class="col-md-3">
                        <div class="card text-dark bg-grey mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Total Employees</h5>
                                <p class="card-text fs-3">120</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-dark bg-grey mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Active Leaves</h5>
                                <p class="card-text fs-3">8</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-dark bg-grey mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Pending Requests</h5>
                                <p class="card-text fs-3">5</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card text-dark bg-grey mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Payroll Issues</h5>
                                <p class="card-text fs-3">2</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mt-2">
                    
                    <!-- Employee Table -->
                    <div class="col-md-8">
                        <div class="card mt-3">
                            <div class="card-header">Employee List</div>
                            <div class="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Department</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>101</td>
                                            <td>Santhosh</td>
                                            <td>sales & Marketing</td>
                                            <td>Sales Manager</td>
                                            <td><span class="badge bg-success">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td>102</td>
                                            <td>vigneshwar</td>
                                            <td>HR</td>
                                            <td>HR Manager</td>
                                            <td><span class="badge bg-warning">On Leave</span></td>
                                        </tr>
                                        <tr>
                                            <td>103</td>
                                            <td>Sriram</td>
                                            <td>Finance</td>
                                            <td>Accountant</td>
                                            <td><span class="badge bg-danger">Inactive</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Notification Box -->
                    <div class="col-md-4">
                        <div class="card mt-3">
                            <div class="card-header">Notifications</div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">New Employee Joined - Battu Mohan</li>
                                    <li class="list-group-item">Payroll Processed for January</li>
                                    <li class="list-group-item">Pending Leave Approval - Sai Krishna</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        </div>
    </div>

    
    `;

}  