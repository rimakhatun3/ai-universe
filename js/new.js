<div>
<div class="d-flex">
    <p class="card-detail">${data.description}</p>
    </div>
<div class="d-flex gap-5 mb-5" >
<div class="border rounded bg-light px-2 py-4  text-success"><p>${data.pricing[0].price?data.pricing[0].price:'no price'}</p></div>
<div class="border text-warning rounded bg-light px-2 py-4"><p>${data.pricing[1].price?data.pricing[1].price:'no price'}</p></div>
<div>
<p class="text-danger border rounded bg-light px-4 py-2">${data.pricing[2].price?data.pricing[0].price:'no price'}</p></div>

</div>
<div class="d-flex justify-content-between me-4">

<h5 class="card-title">Features</h5>
<li>${data.features['1'].feature_name}</li>
<li>${data.features['2'].feature_name}</li>
<li>${data.features['3'].feature_name}</li></div>
<div>
<h5 class="card-title">Integrations</h5> 
<li>${data.integrations[0]}</li>
<li>${data.integrations[1]}</li>
<li>${data.integrations[2]}</li>

</div>
</div>
