function loadMessages(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid messages">
            <div class="row chat-container">
                <div class="col-md-12 shadow chat-container">
                    <div class="col-md-3 sidebar mt-3">
                        <h5>Customers</h5>
                        <div class="customer d-flex fle" onclick="startChat('Sriram')">
                            <img src="./images/profile3.jpg" alt=""/>
                            <div>
                                <h5>Sriram</h5>
                                <p>And tell me What ...
                            </div>
                        </div>
                        <div class="customer d-flex fle" onclick="startChat('Ramesh')">
                            <img src="./images/profile4.jpg" alt=""/>
                            <div>
                                <h5>Ramesh</h5>
                                <p>And tell me What ...
                            </div>
                        </div>
                        <div class="customer d-flex fle" onclick="startChat('Narender')">
                            <img src="./images/profile5.jpg" alt=""/>
                            <div>
                                <h5>Narender</h5>
                                <p>And tell me What ...
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card chatbox">
                            <div class="card-header chatbox-header">
                                <span id="chatbox-header">Sriram</span>
                                <span>Online</span>
                            </div>
                            <div class="card-body chatbox-body" id="chatbox-body">
                                <div class='message received'>Hello, I need help with my order.</div>
                                <div class='message sent'>yes, How can i help you</div>
                                <div class='message received'>Am received somthing other what was Ordered.</div>
                                <div class='message sent'>Ok, Send me your order details</div>
                                <div class='message sent'>And tell me what did you Ordered </div>
                            </div>
                            <div class="card-footer chatbox-footer">
                                <input type="text" id="chat-input" placeholder="Type your message...">
                                <button onclick="sendMessage()">➤</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}