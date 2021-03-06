// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;


class Neighborhood {
  constructor(name){
    this.name = name;
    this.id = ++ neighborhoodId;
    store.neighborhoods.push(this);
  }
  deliveries(){
    return store.deliveries.filter(
      function(delivery){
        return delivery.neighborhoodId === this.id;
      }.bind(this)
    );
  }
  customers(){
    return store.customers.filter(
      function(customer){
        return customers.neighborhoodId === this.id;
      }.bind(this)
    );
  }
}


class Customer {
  constructor(name, neighborhoodId){
    this.id = ++ customerId;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  }
}

class Meal {
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = ++ mealId;
    store.meals.push(this);
  }
  deliveries(){
    return store.deliveries.filter(
      function(delivery){
        return delivery.mealId === this.id;
      }.bind(this)
    );
  }
  customers(){
    let allCust = store.customers.filter(
      function(customer){
        customer.meals.filter(function
          (meal){
            return meal.id === this.mealId;
          }
        )
      }.bind(this)
    );
    return Array.from(new Set(allCust));
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId){
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++ deliveryId;
    store.deliveries.push(this);
  }
  meal(){
    return store.meals.find(
      function(meal) {
        return meal.id === this.mealId;
      }.bind(this)
    )
  }
  customer(){
    return store.customers.find(
      function(customer) {
        return customer.id === this.customerId;
      }.bind(this)
    )
  }
  neighborhood(){
    return store.neighborhoods.find(
      function(neighborhood) {
        return neighborhood.id === this.neighborhoodId;
      }.bind(this)
    )
  }
}