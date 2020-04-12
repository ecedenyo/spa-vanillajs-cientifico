// identificar si se trata de un ID o de una pagina a la que se esta navegando
const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }

  return `/${route}`;
};

export default resolveRoutes;
