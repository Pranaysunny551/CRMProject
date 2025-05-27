function loadAttendance(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid attendance">
            <div class="">
                <h2 class=" text-center bg-success-subtle">Attendance</h2>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card shadow p-3 d-flex flex-row mt-2">
                        <img src="./images/Admin.jpg" alt="">
                        <div class="mx-2">
                            <h6><strong>Srikanth Nalla</strong></h6>
                            <h6><strong>ID :</strong> ATS0005</h6>
                            <h6><strong>Email :</strong> admin@astrolitetech.com</h4>
                            <h6><strong>Login Date :</strong> 13/2/2025</h6>
                            <h6><strong>Login Time :</strong> 10:02:27 AM</h6>
                        </div>
                    </div>

                    <div class="card shadow p-3 mt-3 gap-2">
                        <label for="employeeId" class="form-label">Employee ID</label>
                        <input type="text" id="employeeId" class="form-control" placeholder="Enter your ID">

                        <label for="employeeEmail" class="form-label">Employee Email</label>
                        <input type="text" id="employeeEmail" class="form-control" placeholder="Enter your Email">

                        <div class="d-flex justify-content-between mt-3">
                            <button class="btn btn-success me-2">Punch In</button>
                            <button class="btn btn-danger">Punch Out</button>
                        </div>

                        <table class="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Employee ID</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Punch-In Time</th>
                                    <th>Punch-Out Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>ATS0005</td>
                                    <td>admin@astrolitetech.com</td>
                                    <td>10/02/2025</td>
                                    <td>10:02:27 AM</td>
                                    <td>07:30:11 PM</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>ATS0005</td>
                                    <td>admin@astrolitetech.com</td>
                                    <td>11/02/2025</td>
                                    <td>10:02:27 AM</td>
                                    <td>08:20:11 PM</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>ATS0005</td>
                                    <td>admin@astrolitetech.com</td>
                                    <td>12/02/2025</td>
                                    <td>10:02:27 AM</td>
                                    <td>09:30:18 PM</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>ATS0005</td>
                                    <td>admin@astrolitetech.com</td>
                                    <td>13/02/2025</td>
                                    <td>10:02:27 AM</td>
                                    <td>08:50:21 PM</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    `;
}