function loadleaves(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid leave">
        <div class="">
            <h2 class=" text-center">Leave & Time Off</h2>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mt-2">
                    <div class="card-body">
                        <h5 class="card-title">Request Time Off</h5>
                        <form>
                            <div class="mb-3">
                                <label for="requestType" class="form-label">Request Type:</label>
                                <select class="form-select" id="requestType">
                                    <option value="">Vacation Leave</option>
                                    <option value="">Stick Leave</option>
                                    <option value="">Parental Leave</option>
                                    <option value="">Bereavement Leave</option>
                                </select>
                            </div>
                            <div class="mb-2">
                                <label for="reason" class="form-label">Reason for Request:</label>
                                <textarea class="form-control" id="reason"></textarea>
                            </div>
                            <div class="d-flex justify-content-center mt-3">
                                <button type="submit" class="btn btn-outline-dark">Submit Request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            
        </div>    
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mt-2">
                    <div class="card-body">
                        <h4 class="card-title">Leave History</h4>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Type</th>
                                    <th>Duration</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>18 Dec 2024</td>
                                    <td>Sick Leave</td>
                                    <td>5 days</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>20 Nav 2024</td>
                                    <td>Vacation Leave</td>
                                    <td>5 days</td>
                                    <td>Rejected</td>
                                </tr>
                                <tr>
                                    <td>16 Oct 2024</td>
                                    <td>Bereavement Leave</td>
                                    <td>5 days</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>29 sep 2024</td>
                                    <td>Sick Leave</td>
                                    <td>2 days</td>
                                    <td>Approved</td>
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