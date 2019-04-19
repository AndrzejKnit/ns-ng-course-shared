"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var action_bar_component_1 = require("./ui/action-bar/action-bar.component");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, router_1.NativeScriptRouterModule],
            declarations: [action_bar_component_1.ActionBarComponent],
            exports: [action_bar_component_1.ActionBarComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsNkVBQTBFO0FBQzFFLHNEQUF1RTtBQUN2RSxzREFBdUU7QUFPdkU7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQUx4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSxpQ0FBd0IsQ0FBQztZQUM3RCxZQUFZLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztZQUNsQyxPQUFPLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztTQUNoQyxDQUFDO09BQ1csWUFBWSxDQUFHO0lBQUQsbUJBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vdWkvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbQWN0aW9uQmFyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge31cbiJdfQ==