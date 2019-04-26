"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DayModalComponent = /** @class */ (function () {
    function DayModalComponent(modalParams) {
        this.modalParams = modalParams;
    }
    DayModalComponent.prototype.ngOnInit = function () {
        this.loadedDate = this.modalParams.context.date;
    };
    DayModalComponent.prototype.onHandleInput = function (action) {
        this.modalParams.closeCallback(action);
    };
    DayModalComponent = __decorate([
        core_1.Component({
            selector: 'ns-day-modal',
            templateUrl: './day-modal.component.html',
            styleUrls: ['./day-modal.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DayModalComponent);
    return DayModalComponent;
}());
exports.DayModalComponent = DayModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRheS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBUXRFO0lBR0UsMkJBQW9CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFJLENBQUM7SUFFdEQsb0NBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUF3QixDQUFDLElBQUksQ0FBQTtJQUNwRSxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE1BQXNDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFYVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSWdDLGdDQUFpQjtPQUh0QyxpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRheS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXktbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXktbW9kYWwuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBEYXlNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbG9hZGVkRGF0ZTogRGF0ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUGFyYW1zOk1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgdGhpcy5sb2FkZWREYXRlID0gKHRoaXMubW9kYWxQYXJhbXMuY29udGV4dCBhcyB7ZGF0ZTogRGF0ZX0pLmRhdGVcbiAgfVxuXG4gIG9uSGFuZGxlSW5wdXQoYWN0aW9uOiAnY29tcGxldGUnIHwgJ2ZhaWwnIHwgJ2NhbmNlbCcpIHtcbiAgICAgIHRoaXMubW9kYWxQYXJhbXMuY2xvc2VDYWxsYmFjayhhY3Rpb24pO1xuICB9XG59XG4iXX0=