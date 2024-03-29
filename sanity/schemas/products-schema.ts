const products = {
    name: "products",
    title: "Products",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        options:{
          list:["Women","Men","Kids"]
        }
      },
      {
        name: "subcategory",
        title: "SubCategory",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "currency",
        title: "Currency",
        type: "string",
        options:{
          list:["Rs","$"]
        }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
       
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default products;