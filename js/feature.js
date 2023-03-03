const loadFeature=(datalimit)=>{
    url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayFeature(data.data,datalimit))
  
}

const displayFeature=(data,datalimit)=>{
    console.log(data)
    const cardContainer= document.getElementById('card-container')
    cardContainer.innerHTML ='';
    const seeAll = document.getElementById("see-all")
    if(data.length>6){
     data = data.tools.slice(0,6) 
      seeAll.classList.remove('d-none')
    }
    else{
      seeAll.classList.add('d-none')
    }
    
    data.tools.forEach(singleFeture => {
        console.log(singleFeture);
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML=`
            <div class="card h-100">
              <img  src="${singleFeture.image}" class="card-img-top border-rounded  px-4 py-4" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p>1.${singleFeture.features[0]}</p>
                <p>2.${singleFeture.features[1]}</p>
                <p>3.${singleFeture.features[2]}</p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div><h5>${singleFeture.name}</h5>
                <p><i class="fa-solid fa-calendar-days"></i> ${singleFeture.published_in}</p></div>
                <div>
                <i class="fa-solid fa-arrow-right" onclick="loadSingleData('${singleFeture.id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                </div>
            </div>
          </div>
        `
        
        cardContainer.appendChild(cardDiv);
    }); 
    
    // toggleSpiner(false) 
}

const processSearch = datalimit =>{
  toggleSpiner(true);
  loadFeature(datalimit);
}


const toggleSpiner = isLoading =>{
  const loader = document.getElementById('loader')
  if(isLoading){
loader.classList.remove('d-none')
  }
  else{
    loader.classList.add('d-none')
  }
}

document.getElementById('btn-see-all').addEventListener('click',function(){
processSearch()
})

const loadSingleData =(id)=>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayData(data.data))
}

const displayData =data=>{
  console.log(data)
  const modalBody = document.getElementById('modal-body')
  const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML=`
           <div class="card h-100">
           <div class="card-body bg-danger-subtle">
           <div class="d-flex flex-column justify-content-center align-items-center gap-5 w-50" >
                <div class="d-flex"><p class="card-detail">${data.description}</p></div>
                <div class="d-flex gap-5" >
                <div class="border rounded bg-light px-2 py-4 text-success"><p>${data.pricing[0].price}</p></div>
                <div class="border text-warning rounded bg-light px-2 py-4"><p>${data.pricing[1].price}</p></div>
                
                <p class="text-danger border rounded bg-light px-4 py-2">${data.pricing[2].price}</p></div>
                
              </div>
              <div class="d-flex justify-content-between me-4">
              <div>
              <h5 class="card-title">Features</h5>
              <li>${data.features['1'].feature_name}</li>
              <li>${data.features['2'].feature_name}</li>
              <li>${data.features['3'].feature_name}</li></div>
              <div>
              <h5 class="card-title">Integrations</h5> 
              <li>${data.integrations[0]}</li>
              <li>${data.integrations[1]}</li>
              <li>${data.integrations[2]}}</li>

              </div>

              <div class="card w-50 min-vh-100" >
              
  <img src="${data.image_link[0]}" class="card-img-top position-absolute" 
   
  alt="...">
 <button class="btn btn-danger position-relative ms-5 my-2" >Accuray</button>
  <div class="card-body">
  
  <h5>Hi, how are you doing today?</h5>
    <p class="card-text">${data.accuracy.description}</p>
  </div>
</div>
              </div>
           </div>
           </div>
         
        `
        modalBody.appendChild(cardDiv)
}


loadFeature();