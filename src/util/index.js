
export const getUniqueTypes = (items, value) => {
    
    const ut = [...new Set(items.map((i) => i[value]))]
    return ut;
  };
  

  export const formatData = (data) => {
    let tempItems = data.map((item) => {
        let id = item.sys.id;
        let images = item.fields.images.map((i) => i.fields.file.url);
        let room = {
            ...item.fields,
            images,
            id
        };
        return room;
    });
    return tempItems;
};


