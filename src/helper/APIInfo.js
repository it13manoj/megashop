const SERVER_LINK = "http://api.mega-shop.co.in/api";
const SERVER_IMAGES = "http://api.mega-shop.co.in";
export const REQUEST_TYPE = {
  GET: "GET",
  POST: "POST",
};
export const IMAGES={
  imgs : SERVER_IMAGES+'/uploads/'
}

export const PRODUCTS_API= {
  list : SERVER_LINK +"/product/v1/list"
}

export const CATEGORY_APIS= {
  list : SERVER_LINK +"/categories/v1/find"
}

export const HOME_APIS = {
  getHomepages: SERVER_LINK + "/home/v1/find",
  findById: SERVER_LINK + "/home/v1/findById",
};
export const ABOUTS_APIS = {
  find: SERVER_LINK + "/about/v1/find",
  findById: SERVER_LINK + "/about/v1/findById",
};

export const SERVICES_APIS = {
  find: SERVER_LINK + "/service/v1/find",
  findById: SERVER_LINK + "/service/v1/findById",
};

export const PORTFOLIOS_APIS = {
  find: SERVER_LINK + "/portfolio/v1/find",
  findbytype: SERVER_LINK + "/portfolio/v1/findByType",
  groupbytype: SERVER_LINK + "/portfolio/v1/groupByType",
  findById: SERVER_LINK + "/portfolio/v1/findById",
};

export const TEAMS_APIS = {
  find: SERVER_LINK + "/team/v1/find",
  findById: SERVER_LINK + "/team/v1/findById",
};