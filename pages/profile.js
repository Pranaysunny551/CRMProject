function loadProfile(){
    document.getElementById("main-content").innerHTML = `
      <div class="container-fluid mt-5 vh-100">
        <div class="row">
          <div class="col-md-4">
            <div class="card shadow text-center p-3">
                <div class="profile-card pt-2">
                  <img src="images/Admin.jpg" alt="Admin Avatar" id="profileImage" class="profile-img">
                  <h3 class="mt-4" id="profileName">Srikanth Nalla</h3>
                  <p class="text-muted">Admin</p>
                  <button class="btn btn-primary">Edit Profile</button>
              </div>
            </div>
          </div>
          
          <div class="col-md-8">
              <div class="card shadow p-3">
                  <h4 class="mb-0">Srikanth Nalla</h4>
                  <div class="d-flex justify-content-between">
                        <div class="card-body d-flex flex-column justify-content-sm-around">
                            <p><strong>Employee ID:</strong> ATS0005</p>
                            <h6><strong>Role:</strong> Administrator</h6>
                            <h6><strong>Date Of Birth:</strong> 06/05/1988</h6>
                            <h6><strong>Gender:</strong> Male</h6>
                            <h6><strong>Location:</strong> Hyderabad</h6>
                            <h6><strong>Email:</strong> <span id="email">srikanthnalla@example.com</span></h6>
                            <h6><strong>Phone:</strong> <span id="phone">+1 234 567 890</span></h6>
                            <h6><strong>Address:</strong> <span id="address">123, Main Street, Madhapur, Hyd</span></h6>
                        </div>
                        <div class="card-body d-flex flex-column justify-content-around">
                            <h5>More Details</h5>
                            <h6><strong>Experience :</strong> 12 Years</h6>
                            <h6><strong>Project :</strong> CRMS</h6>
                            <h6><strong>Languages :</strong> English, Telugu, Kannada</h6>
                        </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    `;
}