"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var challenges_routing_module_1 = require("./challenges-routing.module");
//import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
var challenge_tabs_component_1 = require("./challenge-tabs/challenge-tabs.component");
var current_challenge_component_1 = require("./current-challenge/current-challenge.component");
var today_component_1 = require("./today/today.component");
var shared_module_1 = require("../shared/shared.module");
//import { ChallengeActionsComponent } from './challenge-actions/challenge-actions.component';
var challenge_actions_module_1 = require("./challenge-actions/challenge-actions.module");
var ChallengesModule = /** @class */ (function () {
    function ChallengesModule() {
    }
    ChallengesModule = __decorate([
        core_1.NgModule({
            declarations: [
                challenge_tabs_component_1.ChallengeTabsComponent,
                current_challenge_component_1.CurrentChallengeComponent,
                today_component_1.TodayComponent,
            ],
            imports: [
                common_1.NativeScriptCommonModule,
                challenges_routing_module_1.ChallengesRoutingModule,
                shared_module_1.SharedModule,
                challenge_actions_module_1.ChallengeActionsModule
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ChallengesModule);
    return ChallengesModule;
}());
exports.ChallengesModule = ChallengesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFsbGVuZ2VzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUseUVBQXNFO0FBQ3RFLHFGQUFxRjtBQUNyRixzRkFBbUY7QUFDbkYsK0ZBQTRGO0FBQzVGLDJEQUF5RDtBQUN6RCx5REFBdUQ7QUFDdkQsOEZBQThGO0FBQzlGLHlGQUFzRjtBQWlCdEY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQWY1QixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsaURBQXNCO2dCQUN0Qix1REFBeUI7Z0JBQ3pCLGdDQUFjO2FBRWpCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsbURBQXVCO2dCQUN2Qiw0QkFBWTtnQkFDWixpREFBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM5QixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2NoYWxsZW5nZXMtcm91dGluZy5tb2R1bGVcIjtcbi8vaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tIFwiLi90b2RheS90b2RheS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuLy9pbXBvcnQgeyBDaGFsbGVuZ2VBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlQWN0aW9uc01vZHVsZSB9IGZyb20gXCIuL2NoYWxsZW5nZS1hY3Rpb25zL2NoYWxsZW5nZS1hY3Rpb25zLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxuICAgICAgICBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgICAgICBUb2RheUNvbXBvbmVudCxcblxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIENoYWxsZW5nZUFjdGlvbnNNb2R1bGVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VzTW9kdWxlIHsgfVxuIl19