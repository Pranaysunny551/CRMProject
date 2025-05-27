function loadInvoiceList(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid invoice-list mt-2">
        <div class="row">
            <div class="col-md-3">
                <div class="card shadow p-3 mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="text-secondary fw-bold">Distributors</h4>
                            <h4>25</h4>
                        </div>
                        <span class="material-icons-outlined icon fs-1 text-secondary">people</span>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card shadow p-3 mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="text-secondary fw-bold">Invoices</h4>
                            <h4>265</h4>
                        </div>
                        <span class="material-icons-outlined icon fs-1 text-secondary">description</span>
                    </div>
                </div>
            </div>    
            <div class="col-md-3">    
                <div class="card shadow p-3 mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="text-secondary fw-bold">Paid</h4>
                            <h4>₹12,56,450</h4>
                        </div>
                        <span class="material-icons-outlined icon fs-1 text-secondary">currency_rupee</span>
                    </div>
                </div>
            </div>    
            <div class="col-md-3">
                <div class="card shadow p-3 mt-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="text-secondary fw-bold">Unpaid</h4>
                            <h4>₹5,43,650</h4>
                        </div>
                        <span class="material-icons-outlined icon fs-1 text-secondary">error_outline</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card shadow mt-3">
                    <div class="d-flex justify-content-between align-items-center p-3">
                        <div class="d-flex align-items-center">
                            <label id="invoiceCount" class="form-label mx-2">Show </label>
                            <select class="form-select" id="invoiceCount" style="width: 80px;">
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">50</option>
                                <option value="">100</option>
                            </select>
                            <button class="btn btn-outline-primary mx-2 fw-medium">+ Create Invoice</button>
                        </div>

                        <div class="d-flex align-items-center">
                            <form class="mx-2 mt-1" role="search" style="width: 180px;">
                                <input class="form-control me-2" type="search" placeholder="Search Invoice" aria-label="Search">
                            </form>
                            <select class="form-select mx-2 mt-1" id="invoiceStatus" style="width: 160px;">
                                <option value="">Invoice Status</option>
                                <option value="">Downloaded</option>
                                <option value="">Draft</option>
                                <option value="">Paid</option>
                                <option value="">Partial Payment</option>
                                <option value="">Past Due</option>
                                <option value="">Sent</option>
                            </select>
                        </div>

                    </div>
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Distributors</th>
                                    <th>Total</th>
                                    <th>Issued Date</th>
                                    <th>Balance</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5037</td>
                                    <td>Green Valley Dairy</td>
                                    <td>₹1,22,000</td>
                                    <td>09 NOV 2024</td>
                                    <td><span class="badge bg-warning-subtle text-dark fs-6" style="width: 80px">₹60,650</span></td>
                                    <td>
                                        <a href="#" onclick="loadPage('' , this)"><span class="material-icons-outlined text-dark">delete</span></a>
                                        <a href="#" onclick="loadPage('invoice-preview' , this)"><span class="material-icons-outlined text-dark">visibility</span></a>
                                        <a href="#" onclick="loadPage('c-orders' , this)"><span class="material-icons-outlined text-dark">edit</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5038</td>
                                    <td>Fresh Milk</td>
                                    <td>₹80,000</td>
                                    <td>23 NOV 2024</td>
                                    <td><span class="badge bg-success-subtle px-3 fs-6 text-dark" style="width: 80px">Paid</span></td>
                                    <td>
                                        <a href="#" onclick="loadPage('' , this)"><span class="material-icons-outlined text-dark">delete</span></a>
                                        <a href="#" onclick="loadPage('invoice-preview' , this)"><span class="material-icons-outlined text-dark">visibility</span></a>
                                        <a href="#" onclick="loadPage('c-orders' , this)"><span class="material-icons-outlined text-dark">edit</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5039</td>
                                    <td>Organic Dairy</td>
                                    <td>₹1,22,000</td>
                                    <td>29 NOV 2024</td>
                                    <td><span class="badge bg-success-subtle px-3 fs-6 text-dark" style="width: 80px">Paid</span></td>
                                    <td>
                                        <a href="#" onclick="loadPage('' , this)"><span class="material-icons-outlined text-dark">delete</span></a>
                                        <a href="#" onclick="loadPage('invoice-preview' , this)"><span class="material-icons-outlined text-dark">visibility</span></a>
                                        <a href="#" onclick="loadPage('c-orders' , this)"><span class="material-icons-outlined text-dark">edit</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5040</td>
                                    <td>Golden Milk</td>
                                    <td>₹1,52,400</td>
                                    <td>01 DEC 2024</td>
                                    <td><span class="badge bg-warning-subtle text-dark fs-6" style="width: 80px">₹30,650</span></td>
                                    <td>
                                        <a href="#" onclick="loadPage('' , this)"><span class="material-icons-outlined text-dark">delete</span></a>
                                        <a href="#" onclick="loadPage('invoice-preview' , this)"><span class="material-icons-outlined text-dark">visibility</span></a>
                                        <a href="#" onclick="loadPage('c-orders' , this)"><span class="material-icons-outlined text-dark">edit</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5041</td>
                                    <td>Pure Dairy</td>
                                    <td>₹1,37,500</td>
                                    <td>05 DEC 2024</td>
                                    <td><span class="badge bg-success-subtle px-3 fs-6 text-dark" style="width: 80px">Paid</span></td>
                                    <td>
                                        <a href="#" onclick="loadPage('' , this)"><span class="material-icons-outlined text-dark">delete</span></a>
                                        <a href="#" onclick="loadPage('invoice-preview' , this)"><span class="material-icons-outlined text-dark">visibility</span></a>
                                        <a href="#" onclick="loadPage('c-orders' , this)"><span class="material-icons-outlined text-dark">edit</span></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5042</td>
                                    <td>Healthy Farms</td>
                                    <td>₹2,10,000</td>
                                    <td>16 DEC 2024</td>
                                    <td><span class="badge bg-warning-subtle text-dark fs-6" style="width: 80px">₹70,650</span></td>
                                    <td>
                                        <a href="#" onclick="loadPage('' , this)"><span class="material-icons-outlined text-dark">delete</span></a>
                                        <a href="#" onclick="loadPage('invoice-preview' , this)"><span class="material-icons-outlined text-dark">visibility</span></a>
                                        <a href="#" onclick="loadPage('c-orders' , this)"><span class="material-icons-outlined text-dark">edit</span></a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                       <div class="d-flex pb-3 justify-content-end align-items-center position-sticky">
                            <div class="btn-group me-4" role="group" aria-label="Basic outlined example">
                                <button type="button" class="btn btn-sm btn-outline-primary"><span class="material-icons-outlined">keyboard_double_arrow_left</span></button>
                                <button type="button" class="btn btn-sm btn-outline-primary">1</button>
                                <button type="button" class="btn btn-sm btn-outline-primary">2</button>
                                <button type="button" class="btn btn-sm btn-outline-primary">3</button>
                                <button type="button" class="btn btn-sm btn-outline-primary"><span class="material-icons-outlined">keyboard_double_arrow_right</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}