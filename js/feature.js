let fetchData =[]
const loadFeature=()=>{
  document.getElementById('loader').classList.remove("d-none")
    url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      document.getElementById('loader').classList.add("d-none");
      displayFeature(data.data)
      fetchData = data.data;
      console.log(fetchData);
      
     
    })
  
}

const displayFeature=(data)=>{
    console.log(data)
    const cardContainer= document.getElementById('card-container')
    cardContainer.innerHTML ='';
    const seeAll = document.getElementById("see-all")
    // if(data.length>6){
    //  data = data.tools.slice(0,6) 
    //   seeAll.classList.remove('d-none')
    // }
    // else{
    //   seeAll.classList.add('d-none')
    // }
   
    data = data.tools.slice(0,6)
    data.forEach(singleFeture => {
        // console.log(singleFeture);
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        cardDiv.innerHTML=`
            <div class="card h-100">
              <img  src="${singleFeture.image}" class="card-img-top border-rounded  px-4 py-4" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p>1.${singleFeture.features[0]?singleFeture.features[0]:'not available'}</p>
                <p>2.${singleFeture.features[1]?singleFeture.features[1]:'not available'}</p>
                <p>3.${singleFeture.features[2]?singleFeture.features[2]:'not available'}</p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div><h5>${singleFeture.name}</h5>
                <p><i class="fa-solid fa-calendar-days"></i> ${singleFeture.published_in}</p></div>
                <div>
                <i class="fa-solid fa-arrow-right bg-danger rounded-circle text-white p-2" onclick="loadSingleData('${singleFeture.id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                </div>
            </div>
          </div>
        `
        cardContainer.appendChild(cardDiv);
        });
}

const showDateInfo =()=>{
  document.getElementById('loader').classList.remove("d-none")
    url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      document.getElementById('loader').classList.add("d-none");
      displayDate(data.data)
      fetchData = data.data;
      console.log(fetchData);
  // const fetchData =fetchData.map(tools.published_in)
  const sorting = (a,b) =>{
    const dateA = new Date(a.published_in);
    const dateB = new Date(b.published_in);
    if(dateA>dateB){
      return 1
    }
    else if(dateA<dateB){
      return -1
    }
    else {
      return 0
    }
  }
    })
} 

const displayDate=(sortingDate)=>{
  // fetchData = sortingDate.data.tools;
  // sortingDate = sortingDate.tools.slice(0,6)
  console.log(fetchData)
  sortingDate.tools.forEach(datas=>{
  console.log((datas.sort(fetchData)))
    })
}

const loadAllData=()=>{
  url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      seeAllData(data.data)
    })
}

const seeAllData =(data)=>{
  console.log(data)
  data.tools.forEach(singleFeture=>{
    const seAll = document.getElementById('see-all');
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML=`
<div>
<div class="card h-100 mt-5 ">
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
                <div      <i class="fa-solid fa-arrow-right" onclick="loadSingleData('${singleFeture.id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                </div>
            </div>
          </div>

</div>
`
seAll.appendChild(div);

  })
  
  
  
}

const loadSingleData =(id)=>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayData(data.data))
}

const displayData =data=>{
  
  console.log(data)
  const modalBody = document.getElementById('modal-body')
        modalBody.innerHTML=`
           <div class="card h-100">
           <div class="card-body bg-danger-subtle">
           <div class="d-flex flex-column justify-content-center align-items-center gap-5 w-50" >
                <div class="d-flex"><p class="card-detail">${data.description}</p></div>
                <div class="d-flex gap-5 mb-5" >
                <div class="border rounded bg-light px-2 py-4  text-success"><p>${data.pricing[0].price?data.pricing[0].price:'no price'}</p></div>
                <div class="border text-warning rounded bg-light px-2 py-4"><p>${data.pricing[1].price?data.pricing[1].price:'no price'}</p></div>
                
                <p class="text-danger border rounded bg-light px-4 py-2">${data.pricing[2].price?data.pricing[0].price:'no price'}</p></div>
                
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

              <div class="card w-50 min-vh-100 grid grid-cols-1 grid-cols-md-2" >
              
  <div class=" btn btn-danger position-absolute top-0 end-0 mt-2 ">${data.accuracy.score} Accuray</div>
  <img src="${data.image_link[0]}" class="img card-img-top " 
   
  alt="...">
  <div>
  <h5 class="px-4 py-2">Hi, how are you doing today?</h5>
    <p class="card-text px-4 py-2">${data.description}</p>
  </div>
</div>
              </div>
           </div>
           </div>
         
        `
}


loadFeature();