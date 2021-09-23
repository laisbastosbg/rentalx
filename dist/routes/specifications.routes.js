"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationsRoutes = void 0;
var express_1 = require("express");
var specificationsRoutes = (0, express_1.Router)();
exports.specificationsRoutes = specificationsRoutes;
var createSpecification_1 = require("../modules/cars/useCases/createSpecification");
specificationsRoutes.post("/", function (request, response) {
    return createSpecification_1.createSpecificationController.handle(request, response);
});
