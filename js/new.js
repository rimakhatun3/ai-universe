<div class="card h-100">
           <div class="card-body bg-danger-subtle">
           <div class="d-flex flex-column justify-content-center align-items-center gap-5 w-50" >
                <div class="d-flex"><p class="card-detail">${data.description}</p></div>
                <div class="d-flex gap-5 mb-5" >
                <div class="border rounded bg-light px-2 py-4  text-success"><p>${data.pricing[0].price?data.pricing[0].price:'Free Of Cost/Basic'}</p></div>
                <div class="border text-warning rounded bg-light px-2 py-4"><p>${data.pricing[1].price?data.pricing[1].price:'Free Of Cost/pro'}</p></div>
                <div>
                <p class="text-danger border rounded w-50 h-50 bg-light  px-2 py-4 ">${data.pricing[2].price?data.pricing[2].price:'Fre Of Cost /Enterprise'}</p></div>
                
              </div>
              <div class="d-flex justify-content-between me-4">
              <div>
              <h5 class="card-title">Features</h5>
              <li>${data.features['1'].feature_name?data.features['1'].feature_name:'not available'}</li>
              <li>${data.features['2'].feature_name?data.features['2'].feature_name:'not available'}</li>
              <li>${data.features['3'].feature_name?data.features['3'].feature_name:'not available'}</li></div>
              <div>
              <h5 class="card-title">Integrations</h5> 
              <li>${data.integrations[0]?data.integrations[0]:'not available'}</li>
              <li>${data.integrations[1]?data.integrations[1]:'not available'}</li>
              <li>${data.integrations[2]?data.integrations[2]:'not available'}</li>
              </div>
              </div>

              <div class="card w-50 min-vh-100 grid grid-cols-1 grid-cols-md-2" >
              
  <div class=" btn btn-danger position-absolute top-0 end-0 mt-2 me-2 ">${data.accuracy.score?data.accuracy.score*100:''} Accuray</div>
  <img src="${data.image_link[0]?data.image_link[0]:'no image'}" class="img card-img-top " 
   
  alt="...">
  <div>
  <h5 class="px-4 py-2">Hi, how are you doing today?</h5>
    <p class="card-text px-4 py-2">${data.description}</p>
  </div>
</div>
              </div>
           </div>
           </div>
         