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
    // if(datalimit && data.length>6){
    // //  data = data.slice(0,6) 
    //   seeAll.classList.remove('d-none')
    // }
    // else{
    //   seeAll.classList.add('d-none')
    // }
    data.tools.slice(0,6).forEach(singleFeture => {
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
                <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
          </div>
        `
        
        cardContainer.appendChild(cardDiv);
    }); 
    
    toggleSpiner(false) 
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



loadFeature();