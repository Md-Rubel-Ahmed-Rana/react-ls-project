
const addToCart = (name) => {
    let quantity = localStorage.getItem(name);
    if (quantity){
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(name, newQuantity)
    }else{
        localStorage.setItem(name, 1)
    }
};

const remove = (name) => {
    localStorage.removeItem(name)
}

export  {
    addToCart,
    remove
};