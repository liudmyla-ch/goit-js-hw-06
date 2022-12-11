const categoriesItemsRef = document.querySelectorAll(".item");
console.log("Number of categories: ",categoriesItemsRef.length);


categoriesItemsRef.forEach((category)=> {
    const titleOfCategory = category.firstElementChild;
    console.log("Category:", titleOfCategory.textContent);

    const categoryItems = titleOfCategory.nextElementSibling.children;
    console.log("Elements:", categoryItems.length);
})