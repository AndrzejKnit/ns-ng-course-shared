"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var today_component_1 = require("./today/today.component");
var current_challenge_component_1 = require("./current-challenge/current-challenge.component");
var challenge_tabs_component_1 = require("./challenge-tabs/challenge-tabs.component");
var routes = [
    {
        path: 'tabs',
        component: challenge_tabs_component_1.ChallengeTabsComponent,
        children: [
            { path: 'today', component: today_component_1.TodayComponent, outlet: 'today' },
            {
                path: 'current-challenge',
                component: current_challenge_component_1.CurrentChallengeComponent,
                outlet: 'currentChallenge'
            }
        ]
    },
    { path: ':mode', loadChildren: '~/app/challenges/challenge-edit/challenge-edit.module#ChallengeEditModule' },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' }
];
var ChallengesRoutingModule = /** @class */ (function () {
    function ChallengesRoutingModule() {
    }
    ChallengesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ChallengesRoutingModule);
    return ChallengesRoutingModule;
}());
exports.ChallengesRoutingModule = ChallengesRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlcy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYWxsZW5nZXMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBRXZFLDJEQUF5RDtBQUN6RCwrRkFBNEY7QUFFNUYsc0ZBQW1GO0FBRW5GLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsaURBQXNCO1FBQ2pDLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDO1lBQzNEO2dCQUNJLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFNBQVMsRUFBRSx1REFBeUI7Z0JBQ3BDLE1BQU0sRUFBRSxrQkFBa0I7YUFDakM7U0FDSjtLQUNKO0lBQ0csRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSwyRUFBMkUsRUFBQztJQUMzRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7Q0FDakUsQ0FBQTtBQU1EO0lBQUE7SUFFQSxDQUFDO0lBRlksdUJBQXVCO1FBSm5DLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBRW5DO0lBQUQsOEJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBUb2RheUNvbXBvbmVudCB9IGZyb20gXCIuL3RvZGF5L3RvZGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCB9IGZyb20gXCIuL2N1cnJlbnQtY2hhbGxlbmdlL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhbGxlbmdlRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhbGxlbmdlVGFic0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYWxsZW5nZS10YWJzL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICd0YWJzJyxcbiAgICAgICAgY29tcG9uZW50OiBDaGFsbGVuZ2VUYWJzQ29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgeyBwYXRoOid0b2RheScsIGNvbXBvbmVudDogVG9kYXlDb21wb25lbnQsIG91dGxldDogJ3RvZGF5J30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ2N1cnJlbnQtY2hhbGxlbmdlJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgb3V0bGV0OiAnY3VycmVudENoYWxsZW5nZSdcbiAgICAgICAgfVxuICAgIF1cbn0sXG4gICAgeyBwYXRoOiAnOm1vZGUnLCBsb2FkQ2hpbGRyZW46ICd+L2FwcC9jaGFsbGVuZ2VzL2NoYWxsZW5nZS1lZGl0L2NoYWxsZW5nZS1lZGl0Lm1vZHVsZSNDaGFsbGVuZ2VFZGl0TW9kdWxlJ30sXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9jaGFsbGVuZ2VzL3RhYnMnLCBwYXRoTWF0Y2g6ICdmdWxsJ31cbl1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZXNSb3V0aW5nTW9kdWxlIHtcblxufVxuIl19