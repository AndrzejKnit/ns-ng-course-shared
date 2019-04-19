"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var ui_service_1 = require("../ui.service");
var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(page, router, uiService) {
        this.page = page;
        this.router = router;
        this.uiService = uiService;
        this.showBackButton = true;
        this.hasMenu = true;
    }
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ActionBarComponent.prototype, "android", {
        get: function () {
            return platform_1.isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarComponent.prototype, "canGoBack", {
        get: function () {
            return this.router.canGoBack() && this.showBackButton;
            ;
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype.onGoBack = function () {
        this.router.backToPreviousPage();
    };
    ActionBarComponent.prototype.onLoadedActionBar = function () {
        if (platform_1.isAndroid) {
            var androidToolbar = this.page.actionBar.nativeView;
            var backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor('#171717'), android.graphics.PorterDuff.Mode.SRC_ATOP);
            }
        }
    };
    ActionBarComponent.prototype.onToggleMenu = function () {
        this.uiService.toggleDrawer();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "showBackButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "hasMenu", void 0);
    ActionBarComponent = __decorate([
        core_1.Component({
            selector: 'ns-action-bar',
            templateUrl: './action-bar.component.html',
            styleUrls: ['./action-bar.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions,
            ui_service_1.UIService])
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBc0Q7QUFDdEQsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUMvRCw0Q0FBMEM7QUFVMUM7SUFNRSw0QkFDWSxJQUFVLEVBQ1YsTUFBd0IsRUFDeEIsU0FBb0I7UUFGcEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFQckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBTyxHQUFHLElBQUksQ0FBQztJQU9sQixDQUFDO0lBRVQscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFDRCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0ksT0FBTyxvQkFBUyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQUEsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELDhDQUFpQixHQUFqQjtRQUNFLElBQUksb0JBQVMsRUFBRTtZQUNaLElBQU0sY0FBYyxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN2RCxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN0RCxJQUFJLFVBQVUsRUFBRTtnQkFDWixVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFDaEUsT0FBTyxDQUFDLFFBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0g7SUFDTCxDQUFDO0lBRUcseUNBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQXRDUTtRQUFSLFlBQUssRUFBRTs7cURBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7OERBQXVCO0lBQ3RCO1FBQVIsWUFBSyxFQUFFOzt1REFBZ0I7SUFIZixrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUWtCLFdBQUk7WUFDRix5QkFBZ0I7WUFDYixzQkFBUztPQVRyQixrQkFBa0IsQ0F5QzlCO0lBQUQseUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVUlTZXJ2aWNlIH0gZnJvbSAnLi4vdWkuc2VydmljZSc7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtYWN0aW9uLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLWJhci5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNob3dCYWNrQnV0dG9uID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBoYXNNZW51ID0gdHJ1ZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICAgICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIGdldCBhbmRyb2lkKCkge1xuICAgICAgcmV0dXJuIGlzQW5kcm9pZDtcbiAgfVxuXG4gIGdldCBjYW5Hb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmNhbkdvQmFjaygpICYmIHRoaXMuc2hvd0JhY2tCdXR0b247O1xuICB9XG5cbiAgb25Hb0JhY2soKSB7XG4gICAgICB0aGlzLnJvdXRlci5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgfVxuXG4gIG9uTG9hZGVkQWN0aW9uQmFyKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICBjb25zdCBhbmRyb2lkVG9vbGJhciA9ICB0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdGl2ZVZpZXc7XG4gICAgICAgY29uc3QgYmFja0J1dHRvbiA9IGFuZHJvaWRUb29sYmFyLmdldE5hdmlnYXRpb25JY29uKCk7XG4gICAgICAgaWYgKGJhY2tCdXR0b24pIHtcbiAgICAgICAgICAgYmFja0J1dHRvbi5zZXRDb2xvckZpbHRlcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoJyMxNzE3MTcnKSxcbiAgICAgICAgICAgKDxhbnk+YW5kcm9pZC5ncmFwaGljcykuUG9ydGVyRHVmZi5Nb2RlLlNSQ19BVE9QKTtcbiAgICAgICB9XG4gICAgfVxufVxuXG4gICAgb25Ub2dnbGVNZW51KCkge1xuICAgICAgICB0aGlzLnVpU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcbiAgICB9XG5cbn1cbiJdfQ==