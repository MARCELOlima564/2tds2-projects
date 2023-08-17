//Categoria possui vários produtos => 1:n
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = []
    }
}

//Produto pertence a uma categoria => 1:1
class Product{
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService{
    constructor(){
        this.products = [];
        this.nextCategoryId = 0;
    }

    addProduct(name, price, category){
        const id = this.nextCategoryId++;
        const product = new Product(id, name, price, category);
    }
}

const categoryList = new CategoryService();

function createCategory(){
    const categoryName = "Doce";

    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);
}

