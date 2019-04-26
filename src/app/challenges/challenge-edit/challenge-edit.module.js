"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var challenge_edit_component_1 = require("./challenge-edit.component");
var common_1 = require("nativescript-angular/common");
var shared_module_1 = require("~/app/shared/shared.module");
var router_1 = require("nativescript-angular/router");
var ChallengeEditModule = /** @class */ (function () {
    function ChallengeEditModule() {
    }
    ChallengeEditModule = __decorate([
        core_1.NgModule({
            declarations: [challenge_edit_component_1.ChallengeEditComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                //NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: '', component: challenge_edit_component_1.ChallengeEditComponent }
                ]),
                shared_module_1.SharedModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ChallengeEditModule);
    return ChallengeEditModule;
}());
exports.ChallengeEditModule = ChallengeEditModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHVFQUFvRTtBQUNwRSxzREFBdUU7QUFDdkUsNERBQTBEO0FBQzFELHNEQUF1RTtBQWF2RTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsbUJBQW1CO1FBWC9CLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxDQUFDLGlEQUFzQixDQUFDO1lBQ3RDLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJCQUEyQjtnQkFDM0IsaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUM5QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGlEQUFzQixFQUFDO2lCQUFDLENBQUM7Z0JBQ3BELDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csbUJBQW1CLENBQUc7SUFBRCwwQkFBQztDQUFBLEFBQW5DLElBQW1DO0FBQXRCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtZWRpdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0NoYWxsZW5nZUVkaXRDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICAvL05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogQ2hhbGxlbmdlRWRpdENvbXBvbmVudH1dKSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdE1vZHVsZSB7fVxuIl19