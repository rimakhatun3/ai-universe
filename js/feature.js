let fetchData =[]
const loadFeature=()=>{
  document.getElementById('loader').classList.remove("d-none")
    url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      document.getElementById('loader').classList.add("d-none");
      displayFeature(data.data)
      // fetchData = data.data.tools;
      console.log(fetchData);
      
     
    })
  
}

const displayFeature=(data)=>{
    console.log(data)
    const cardContainer= document.getElementById('card-container');
    data = data.tools.slice(0,6)
    cardContainer.textContent =''
    data.forEach(singleFeture => {
        console.log(data);
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col');
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
// sort date

const showDateInfo =()=>{
  document.getElementById('loader').classList.remove("d-none")
    url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      document.getElementById('loader').classList.add("d-none");
      displayDate(data.data);
      fetchData = data.data.tools;
      console.log(fetchData);
  // const fetchData =fetchData.map(tools.published_in)

// console.log(newData)
    })
    
  }

const displayDate=()=>{
  let newData = fetchData.sort(function(a,b) {
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
   
  })

    const cardContainer= document.getElementById('card-container')
    cardContainer.textContent ='';
    newData = newData.slice(0,6);
    newData.forEach(singleDate => {
        console.log(singleDate);
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col');
        cardDiv.innerHTML=`
            <div class="card h-100">
              <img  src="${singleDate.image}" class="card-img-top border-rounded  px-4 py-4" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p>1.${singleDate.features[0]?singleDate.features[0]:'not available'}</p>
                <p>2.${singleDate.features[1]?singleDate.features[1]:'not available'}</p>
                <p>3.${singleDate.features[2]?singleDate.features[2]:'not available'}</p>
              </div>
              <div class="card-footer d-flex justify-content-between align-items-center">
                <div><h5>${singleDate.name}</h5>
                <p><i class="fa-solid fa-calendar-days"></i> ${singleDate.published_in}</p></div>
                <div>
                <i class="fa-solid fa-arrow-right bg-danger rounded-circle text-white p-2" onclick="loadSingleData('${singleDate.id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                </div>
            </div>
          </div>
        `
        
        cardContainer.appendChild(cardDiv);
        });
  // })
}
showDateInfo()
// see all card
const loadAllData=()=>{
  url=`https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      seeAllData(data.data)
    })
}

const seeAllData =(data)=>{
  // console.log(data)
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
// modal open......

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
        <div class="row ">
        <div class="col-12 col-sm-6 mb-3 mb-sm-0">
          <div class="card bg-danger-subtle">
            <div class="card-body">
            <div class="d-flex"><p class="card-detail">${data.description}</p></div>
            <div class="d-flex gap-5 mb-5" >
                <div class="border rounded w-100 h-100 bg-light px-2 py-4  text-success"><p>${data.pricing[0].price?data.pricing[0].price:'Free Of Cost/Basic'}</p></div>
                <div class="border text-warning rounded w-100 h-100 bg-light px-2 py-4"><p>${data.pricing[1].price?data.pricing[1].price:'Free Of Cost/pro'}</p></div>
                <div>
                <p class="text-danger border rounded w-100 h-100 bg-light  px-2 py-4 ">${data.pricing[2].price?data.pricing[2].price:'Fre Of Cost /Enterprise'}</p></div>
                
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
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6">
          <div class="card">
            <div class="card-body">
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
        `
}


loadFeature();