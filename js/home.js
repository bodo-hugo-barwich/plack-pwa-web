/**
 * @version 2021-05-23
 * @package PWA Content Loader
 * @subpackage home.js
 */

/**
 * This Script registers the Service Worker and loads the Content from the API
 */


function showCoffees()
{
  let output = "Coffes: showing ...";

  if(typeof coffees !== 'undefined')
  {
    output = "";

    coffees.forEach(
      ({ name, image, link_name }) =>
        (output += `
                <div class="card-list">
                  <img class="card-image" src=${image} />
                  <h3 class="card--title">${name}</h3>
				  <!-- ${svmainpath}coffee/${link_name} -->
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    );
  }
  else
  {
    console.log("Coffes: No Data");
  } //if(typeof coffees !== 'undefined')

  container.innerHTML = output;
};


function initPage()
{
  showCoffees();

  //console.log("Coffees: fetch do ...");

  //fetchCoffees();

  //console.log("Coffees: update queued.");
}
