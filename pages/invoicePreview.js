
function loadInvoicePreview(){
    document.getElementById("main-content").innerHTML = `
    <div class="container-fluid invoice-preview mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card shadow p-5">
                    <div class="d-flex justify-content-between align-items-center p-4 bg-secondary-subtle">
                        <div>
                            <img src="./images/ATS-BG.png" alt="">
                            <h6>ATS - Shanthi Nagar Medchal,</h6>
                            <h6>Uppal, 500039, Hyderabad</h6>
                            <h6>+1 123456789, +91 987654321</h6>
                        </div>
                        <div>
                            <h4 class="mb-5">Invoice #5037</h4>
                            <p>Date issues : <strong>09 NOV 2024</strong></p>
                            <p>Date Due : <strong>16 DEC 2024</strong></p>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div class="">
                            <h5 class="mb-3 text-dark">Invoice Address:</h5>
                            <h6 class="fw-bold text-dark">Green Valley Dairy</h6>
                            <h6 class="fw-medium">Dairy Farm Distributor</h6>
                            <h6 class="fw-medium">Boduppal, 500041,Hyd</h6>
                            <h6 class="fw-medium">+91 987654321</h6>
                            <h6 class="fw-medium">greenvalleydairy@gamil.com</h6>
                        </div>

                        <div class="me-5">
                            <h5 class="mb-3 text-dark">Bill Address:</h5>
                            <h6 class="fw-medium"><strong>Total Due :</strong> 60,650.00</h6>
                            <h6 class="fw-medium"><strong>Bank Name :</strong> HDFC Bank</h6>
                            <h6 class="fw-medium"><strong>City :</strong> 500041,Hyd</h6>
                            <h6 class="fw-medium"><strong>A/C No :</strong> 2003567004455</h6>
                            <h6 class="fw-medium"><strong>IFSC :</strong> HDFC0345</h6>
                        </div>
                    </div>

                    <div class="mt-3 mb-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Categoty</th>
                                    <th>Cost(₹)</th>
                                    <th>Gst(8%)</th>
                                    <th>QTY</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HG Toned (500ml)</td>
                                    <td>Milk</td>
                                    <td>34.00</td>
                                    <td>2.72</td>
                                    <td>700(packs)</td>
                                    <td>25,704</td>
                                </tr>
                                <tr>
                                    <td>HG Cow (500ml)</td>
                                    <td>Milk</td>
                                    <td>36.00</td>
                                    <td>2.88</td>
                                    <td>400(packs)</td>
                                    <td>15,552</td>
                                </tr>
                                <tr>
                                    <td>HG Toned (1000ml)</td>
                                    <td>Milk</td>
                                    <td>68.00</td>
                                    <td>5.44</td>
                                    <td>600(packs)</td>
                                    <td>44,064</td>
                                </tr>
                                <tr>
                                    <td>HG Ghee (500gm)</td>
                                    <td>Ghee</td>
                                    <td>600.00</td>
                                    <td>48.00</td>
                                    <td>30(packs)</td>
                                    <td>19,440</td>
                                </tr>
                                <tr>
                                    <td>HG Ghee (1KG)</td>
                                    <td>Ghee</td>
                                    <td>1150.00</td>
                                    <td>92</td>
                                    <td>30(packs)</td>
                                    <td>37,260</td>
                                </tr>
                                <tr>
                                    <td>HG Curd (500ml)</td>
                                    <td>Curd</td>
                                    <td>35.00</td>
                                    <td>2.80</td>
                                    <td>900(packs)</td>
                                    <td>34,020</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="d-flex justify-content-between mt-2 mb-5">
                            <div>
                                <h6><strong>salesperson: </strong>Rajaram</h6>
                                <h6>Thanks for your business</h6>
                            </div>
                            <div>
                                <h5>Subtotal: <strong>₹1,62,995</strong></h5>
                                <h5>Discount: <strong>₹8,040</strong></h5>
                                <h5>Tax: <strong>₹13,045</strong></h5>
                                <hr/>
                                <h5>Total: <strong>₹1,76,040</strong></h5>
                            </div>
                        </div>
                        <hr/>
                        <p class="p-4"><strong>Note:</strong> It was a pleasure working with you and your Team. We hope you will 
                            keep us in mind for future freelance projects. Thank You!</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="col-md-12">
                <div class="card shadow p-3 d-flex flex-row justify-content-center">
                    <button class="btn btn-primary mx-2">Send Invoice</button>
                    <button id="showDownloaded" class="btn btn-secondary  d-flex align-items-center flex-row mx-2" onclick="showDownloaded()">
                        <span class="material-icons-outlined m-0">download</span>Download
                    </button>
                    <button class="btn btn-secondary  d-flex align-items-center flex-row mx-2"><span class="material-icons-outlined m-0">print</span>Print</button>
                    <button class="btn btn-secondary  d-flex align-items-center flex-row mx-2"><span class="material-icons-outlined m-0">edit</span>Edit</button>

                </div>
            </div>
    </div>
    
    `;

    $("#showDownloaded").click(function (){
        alert('Invoice is Downloaded');
    });
    
}