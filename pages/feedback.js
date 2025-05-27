function loadFeedBack(){
    document.getElementById("main-content").innerHTML = `
        <div class="container-fluid feedback">
        <div class="header text-center">
            <h2 class="w-100">Customers Feedback</h2>
            <p class="fs-6 text-white"><small>Dairy Farms Customer Feedback Analyze</small></p>
        </div>
        <div class="row" id="feedBack">

        </div>   
    </div>
    `;

    const object = [
        {
            name : "Narender",
            url : "https://res.cloudinary.com/dyjc34n85/image/upload/v1742476418/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa_ljkp1d.jpg",
            product : "HG Toned Milk(2L)",
            rating : "⭐⭐⭐⭐",
            feedback : "Very fresh and good quality milk"
        },

        {
            name : "Rana Goud",
            url : "https://res.cloudinary.com/dyjc34n85/image/upload/v1740483627/download_ddrlyj.jpg",
            product : "HG Curd(3kg)",
            rating : "⭐⭐⭐⭐⭐",
            feedback : "Good quality and Very fresh Curd"
        },

        {
            name : "Prashanth",
            url : "https://res.cloudinary.com/dyjc34n85/image/upload/v1735819010/images_cugmt4.jpg",
            product : "Dodla Milk(5kg)",
            rating : "⭐⭐⭐",
            feedback : "it'k ok, but it different to other Milks"
        },

        {
            name : "Santhosh",
            url : "https://res.cloudinary.com/dyjc34n85/image/upload/v1735818913/images_ivflh4.jpg",
            product : "HG Ghee(500gm)",
            rating : "⭐⭐⭐⭐",
            feedback : "Very fresh and good quality Ghee"
        },

        {
            name : "Rajesh",
            url : "https://res.cloudinary.com/dyjc34n85/image/upload/v1731063612/samples/smile.jpg",
            product : "Fresh Paneer(500gms)",
            rating : "⭐⭐⭐⭐⭐",
            feedback : "Fresh and good quality Paneer"
        },

        {
            name : "Shiva Kumar",
            url : "https://res.cloudinary.com/dyjc34n85/image/upload/v1742476504/images_fxcgrz.jpg",
            product : "Dodla Cow Milk(4L)",
            rating : "⭐⭐⭐⭐",
            feedback : "Its good but package is damaged"
        },
    ]

    function feedBackCards(){
        var data_return = "";

        for (let index = 0; index < object.length; index++) {
            const element = object[index];

            data_return += `
                <div class="col-md-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="profile d-flex align-items-center">
                                    <img src=`+element.url+` alt="">
                                    <h4 class="fw-semibold mx-2">`+element.name+`</h4>
                                </div>
                                <img src="./images/rating.gif" alt="">
                            </div>
                            <p class="fs-6 fw-medium">`+element.product+`</p>
                            <p class=""><strong>Rating: </strong>`+element.rating+`</p>
                            <p class="fw-medium"><strong>Feedback: </strong>`+element.feedback+`</p>
                        </div>
                    </div>
                </div>
            `;
            
        }

        document.getElementById("feedBack").innerHTML = data_return;
    }

    feedBackCards();
}