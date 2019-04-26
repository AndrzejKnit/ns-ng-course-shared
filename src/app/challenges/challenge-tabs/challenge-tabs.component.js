"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var ChallengeTabsComponent = /** @class */ (function () {
    function ChallengeTabsComponent(router, active, page) {
        this.router = router;
        this.active = active;
        this.page = page;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        this.router.navigate([
            {
                outlets: { currentChallenge: ['current-challenge'], today: ['today'] }
            }
        ], {
            relativeTo: this.active
        });
        this.page.actionBarHidden = true;
    };
    ChallengeTabsComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-tabs',
            templateUrl: './challenge-tabs.component.html',
            styleUrls: ['./challenge-tabs.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            page_1.Page])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());
exports.ChallengeTabsComponent = ChallengeTabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCwwQ0FBaUQ7QUFDakQsc0RBQXFEO0FBUXJEO0lBRUUsZ0NBQ1UsTUFBd0IsRUFDeEIsTUFBc0IsRUFDdEIsSUFBVTtRQUZWLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQU07SUFDZCxDQUFDO0lBRVAseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNoQjtZQUNJO2dCQUNJLE9BQU8sRUFBRSxFQUFDLGdCQUFnQixFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBQzthQUN2RTtTQUNKLEVBQ0w7WUFDSSxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDMUIsQ0FDQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFwQlUsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7WUFDN0MsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSWtCLHlCQUFnQjtZQUNoQix1QkFBYztZQUNoQixXQUFJO09BTFQsc0JBQXNCLENBc0JsQztJQUFELDZCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtY2hhbGxlbmdlLXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgYWN0aXZlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFxuICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3V0bGV0czoge2N1cnJlbnRDaGFsbGVuZ2U6IFsnY3VycmVudC1jaGFsbGVuZ2UnXSwgdG9kYXk6IFsndG9kYXknXX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICB7XG4gICAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlXG4gICAgfVxuICAgICk7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxufVxuIl19