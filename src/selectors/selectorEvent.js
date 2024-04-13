/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
export const selectFilterEvents = (events, filter) => {
  if (!events || events.length === 0) return [];

  const keyword = filter.keyword.toLowerCase();

  return events.filter((event) => {
    const matchKeyword = event.keywords ? event.keywords.includes(keyword) : true;
    // const matchName = product.name ? product.name.toLowerCase().includes(keyword) : true;
    const matchDescription = event.description
      ? event.description.toLowerCase().includes(keyword)
      : true;
    const matchBrand = event.brand ? event.brand.toLowerCase().includes(filter.brand) : true;

    return ((matchKeyword || matchDescription) && matchBrand);
  }).sort((a, b) => {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } 
  });
};

