import { Router } from 'express';
const specificationsRoutes = Router();

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
