"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var categories_routes_1 = require("./categories.routes");
var specifications_routes_1 = require("./specifications.routes");
var router = (0, express_1.default)();
exports.router = router;
router.use("/categories", categories_routes_1.categoriesRoutes);
router.use("/specifications", specifications_routes_1.specificationsRoutes);
