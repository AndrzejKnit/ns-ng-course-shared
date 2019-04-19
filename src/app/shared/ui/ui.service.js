"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UIService = /** @class */ (function () {
    function UIService() {
        this._drawerState = new rxjs_1.BehaviorSubject(null);
    }
    Object.defineProperty(UIService.prototype, "drawerState", {
        get: function () {
            return this._drawerState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UIService.prototype.toggleDrawer = function () {
        this._drawerState.next(null);
    };
    UIService.prototype.setRootVCRef = function (vcRef) {
        this._rootVCRef = vcRef;
    };
    UIService.prototype.getRootVCRef = function () {
        return this._rootVCRef;
    };
    UIService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UIService);
    return UIService;
}());
exports.UIService = UIService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkJBQXVDO0FBR3ZDO0lBREE7UUFFWSxpQkFBWSxHQUFHLElBQUksc0JBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztJQWtCM0QsQ0FBQztJQWZHLHNCQUFJLGtDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVMLGdDQUFZLEdBQVosVUFBYSxLQUF1QjtRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBbEJRLFNBQVM7UUFEckIsaUJBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixTQUFTLENBbUJyQjtJQUFELGdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVUlTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9kcmF3ZXJTdGF0ZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dm9pZD4obnVsbCk7XG4gICAgcHJpdmF0ZSBfcm9vdFZDUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gICAgZ2V0IGRyYXdlclN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZHJhd2VyU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICB0aGlzLl9kcmF3ZXJTdGF0ZS5uZXh0KG51bGwpO1xuICAgICAgICB9XG5cbiAgICBzZXRSb290VkNSZWYodmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5fcm9vdFZDUmVmID0gdmNSZWY7XG4gICAgfVxuXG4gICAgZ2V0Um9vdFZDUmVmKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvb3RWQ1JlZjtcbiAgICB9XG59XG4iXX0=