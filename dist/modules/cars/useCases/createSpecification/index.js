"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpecificationController = void 0;
var CategoriesRepository_1 = require("../../repositories/implementations/CategoriesRepository");
var CreateSpecificationController_1 = require("./CreateSpecificationController");
var CreateSpecificationUseCase_1 = require("./CreateSpecificationUseCase");
var categoriesRepository = CategoriesRepository_1.CategoriesRepository.getInstance();
var createSpecificationUseCase = new CreateSpecificationUseCase_1.CreateSpecificationUseCase(categoriesRepository);
var createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController(createSpecificationUseCase);
exports.createSpecificationController = createSpecificationController;
