function loadPayslips() {
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid payslips mt-3">
            <h2 class="text-center">Payslip Request</h2>
            <div class="row">
              <div class="col-md-12">
                <div class="card shadow-lg p-3">
                    <div id="payslipForm">
                        <div class="mb-3">
                            <label for="employeeName" class="form-label">Employee Name</label>
                            <input type="text" class="form-control" id="employeeName" placeholder="Enter your name" required>
                            <div class="invalid-feedback" id="employeeNameError"></div>
                        </div>
                        <div class="mb-3">
                            <label for="employeeID" class="form-label">Employee ID</label>
                            <input type="text" class="form-control" id="employeeID" placeholder="Enter your employee ID" required>
                            <div class="invalid-feedback" id="employeeIDError"></div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                            <div class="invalid-feedback" id="emailError"></div>
                        </div>
                        <div class="mb-3">
                            <label for="startMonth" class="form-label">Select Start Month</label>
                            <input type="month" class="form-control" id="startMonth" required>
                            <div class="invalid-feedback" id="startMonthError"></div>
                        </div>
                        <div class="mb-3">
                            <label for="endMonth" class="form-label">Select End Month (Optional)</label>
                            <input type="month" class="form-control h-25" id="endMonth">
                            <div class="invalid-feedback" id="endMonthError"></div>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-outline-success bg-success-subtle text-center text-dark fw-medium" onclick="validateForm()">Get Payslips</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>    
        </div>    
    `;

}


function validateForm() {
    let isValid = true;

    clearErrors();
    const validName = "Srikanth";
    const validID = "468009";

    const employeeName = document.getElementById('employeeName').value.trim();
    if (employeeName === "") {
        showError('employeeNameError', 'Please enter your name.');
        isValid = false;
    }
    if (employeeName === " Srikanth") {
        showError('employeeNameError', 'Please enter Valid name.');
        isValid = false;
    }
    if (employeeName != validName ) {
        showError('employeeNameError', 'Please enter Valid name.');
        isValid = false;
    }

    const employeeID = document.getElementById('employeeID').value.trim();
    if (employeeID === "") {
        showError('employeeIDError', 'Please enter your employee ID.');
        isValid = false;
    }
    if (employeeID != validID) {
        showError('employeeIDError', 'Please enter Valid employee ID.');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    const startMonth = document.getElementById('startMonth').value;
    if (startMonth === "") {
        showError('startMonthError', 'Please select a start month.');
        isValid = false;
    }

    const endMonth = document.getElementById('endMonth').value;
    if (endMonth !== "" && new Date(endMonth) < new Date(startMonth)) {
        showError('endMonthError', 'End month must be after or equal to the start month.');
        isValid = false;
    }

    if (isValid) {
        showPayslips();
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.invalid-feedback');
    errorElements.forEach((element) => {
        element.textContent = '';
        element.style.display = 'none';
    });
}

function showPayslips() {
    alert("Form submitted successfully!");
}

loadPayslips();