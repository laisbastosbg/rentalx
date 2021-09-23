"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoriesController = void 0;
var ListCategoriesController = /** @class */ (function () {
    function ListCategoriesController(listCategoriesUseCase) {
        this.listCategoriesUseCase = listCategoriesUseCase;
    }
    ListCategoriesController.prototype.handle = function (request, response) {
        var all = this.listCategoriesUseCase.execute();
        return response.json(all);
    };
    return ListCategoriesController;
}());
exports.ListCategoriesController = ListCategoriesController;
