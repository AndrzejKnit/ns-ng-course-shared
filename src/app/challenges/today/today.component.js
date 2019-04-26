"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var TodayComponent = /** @class */ (function () {
    function TodayComponent(router) {
        this.router = router;
    }
    TodayComponent.prototype.ngOnInit = function () {
    };
    TodayComponent.prototype.onActionSelected = function (action) {
        console.log(action);
    };
    TodayComponent.prototype.onCurrentChallenge = function () {
        this.router.navigate(['/current-challenge'], { transition: { name: 'slideLeft' } });
    };
    TodayComponent = __decorate([
        core_1.Component({
            selector: 'ns-today',
            templateUrl: './today.component.html',
            styleUrls: ['./today.component.scss'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], TodayComponent);
    return TodayComponent;
}());
exports.TodayComponent = TodayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9kYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQVEvRDtJQUVFLHdCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFLLENBQUM7SUFFbEQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsTUFBc0M7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsMkNBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUMsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBYlUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FHNEIseUJBQWdCO09BRmpDLGNBQWMsQ0FlMUI7SUFBRCxxQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy10b2RheScsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2RheS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZGF5LmNvbXBvbmVudC5zY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIFRvZGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25BY3Rpb25TZWxlY3RlZChhY3Rpb246ICdjb21wbGV0ZScgfCAnZmFpbCcgfCAnY2FuY2VsJykge1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgfVxuXG4gIG9uQ3VycmVudENoYWxsZW5nZSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9jdXJyZW50LWNoYWxsZW5nZSddLCB7dHJhbnNpdGlvbjoge25hbWU6J3NsaWRlTGVmdCd9fSk7XG4gIH1cblxufVxuIl19