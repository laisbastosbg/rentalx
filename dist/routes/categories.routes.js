"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var listCategories_1 = require("../modules/cars/useCases/listCategories");
var createCategory_1 = require("../modules/cars/useCases/createCategory");
var importCategory_1 = require("../modules/cars/useCases/importCategory");
var categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
var upload = (0, multer_1.default)({
    dest: "./tmp"
});
categoriesRoutes.post("/", function (request, response) {
    return createCategory_1.createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", function (request, response) {
    return listCategories_1.listCategoriesController.handle(request, response);
});
categoriesRoutes.post("/import", upload.single("file"), function (request, response) {
    return importCategory_1.importCategoryController.handle(request, response);
});
