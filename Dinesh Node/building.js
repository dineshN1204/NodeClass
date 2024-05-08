class Building {
  constructor(name) {
    this.name = name;
}
    getName = ()=>{
        return this.name
    }
    setName = (name) => {
      this.name = name;
    }
  
}

// const building1 = new Building('House')
// const a = building1.getName();
// console.log(a);
// building1.setName('Dinesh')
// console.log(building1.getName());

// const building2 = new Building('House')
// console.log(building2.getName());

// with caching
module.exports = new Building('Home')

// without caching
// module.exports = Building



