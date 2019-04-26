"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_modal_component_1 = require("../day-modal/day-modal.component");
var ui_service_1 = require("~/app/shared/ui/ui.service");
var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(modalDialog, vcRef, uiService) {
        this.modalDialog = modalDialog;
        this.vcRef = vcRef;
        this.uiService = uiService;
        this.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.days = [];
    }
    CurrentChallengeComponent.prototype.ngOnInit = function () {
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();
        var daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        for (var i = 1; i < daysInMonth + 1; i++) {
            var date = new Date(this.currentYear, this.currentMonth, i);
            var dayInWeek = date.getDay();
            this.days.push({ dayInMonth: i, dayInWeek: dayInWeek });
        }
    };
    CurrentChallengeComponent.prototype.getRow = function (index, day) {
        var startRow = 1;
        var weekRow = Math.floor(index / 7);
        var firstWeekDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
        var irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    };
    CurrentChallengeComponent.prototype.onChangeStatus = function () {
        this.modalDialog.showModal(day_modal_component_1.DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVCRef()
                ? this.uiService.getRootVCRef()
                : this.vcRef,
            context: { date: new Date() }
        }).then(function (action) {
            console.log(action);
        });
    };
    CurrentChallengeComponent = __decorate([
        core_1.Component({
            selector: 'ns-current-challenge',
            templateUrl: './current-challenge.component.html',
            styleUrls: [
                './current-challenge.component.common.scss',
                './current-challenge.component.scss'
            ],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            ui_service_1.UIService])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());
exports.CurrentChallengeComponent = CurrentChallengeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLGtFQUF1RTtBQUN2RSx3RUFBcUU7QUFDckUseURBQXVEO0FBWXZEO0lBTUksbUNBQ1ksV0FBK0IsRUFDL0IsS0FBdUIsRUFDdkIsU0FBb0I7UUFGcEIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFSaEMsYUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsU0FBSSxHQUFnRCxFQUFFLENBQUM7SUFRM0MsQ0FBQztJQUViLDRDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLElBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUc7WUFDdkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0lBRUQsMENBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxHQUE4QztRQUNoRSxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEYsSUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakUsT0FBTyxRQUFRLEdBQUcsT0FBTyxHQUFHLFlBQVksQ0FBQztJQUM3QyxDQUFDO0lBRUQsa0RBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHVDQUFpQixFQUFFO1lBQzFDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFO2dCQUMvQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7Z0JBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNaLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFjO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0NRLHlCQUF5QjtRQVJyQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRTtnQkFDUCwyQ0FBMkM7Z0JBQzNDLG9DQUFvQzthQUFDO1lBQ3pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUN0QixDQUFDO3lDQVEyQixpQ0FBa0I7WUFDeEIsdUJBQWdCO1lBQ1osc0JBQVM7T0FUdkIseUJBQXlCLENBOENyQztJQUFELGdDQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IERheU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RheS1tb2RhbC9kYXktbW9kYWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2hhcmVkL3VpL3VpLnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWN1cnJlbnQtY2hhbGxlbmdlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MnLFxuICAgICAgICAnLi9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuc2NzcyddLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgd2Vla0RheXMgPSBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcbiAgICBkYXlzOiB7IGRheUluTW9udGg6IG51bWJlciwgZGF5SW5XZWVrOiBudW1iZXIgfVtdID0gW107XG4gICAgcHJpdmF0ZSBjdXJyZW50TW9udGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGN1cnJlbnRZZWFyOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBtb2RhbERpYWxvZzogTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlXG4gICAgICAgICAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudE1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHRoaXMuY3VycmVudFllYXIsIHRoaXMuY3VycmVudE1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF5c0luTW9udGggKyAxOyBpKysgKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50WWVhciwgdGhpcy5jdXJyZW50TW9udGgsIGkpO1xuICAgICAgICAgICAgY29uc3QgZGF5SW5XZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgICAgIHRoaXMuZGF5cy5wdXNoKHsgZGF5SW5Nb250aDogaSwgZGF5SW5XZWVrOiBkYXlJbldlZWsgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSb3coaW5kZXg6IG51bWJlciwgZGF5OiB7IGRheUluTW9udGg6IG51bWJlciwgZGF5SW5XZWVrOiBudW1iZXIgfSkge1xuICAgICAgICBjb25zdCBzdGFydFJvdyA9IDE7XG4gICAgICAgIGNvbnN0IHdlZWtSb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gNyk7XG4gICAgICAgIGNvbnN0IGZpcnN0V2Vla0RheU9mTW9udGggPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRZZWFyLCB0aGlzLmN1cnJlbnRNb250aCwgMSkuZ2V0RGF5KCk7XG4gICAgICAgIGNvbnN0IGlycmVndWxhclJvdyA9IGRheS5kYXlJbldlZWsgPCBmaXJzdFdlZWtEYXlPZk1vbnRoID8gMSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0Um93ICsgd2Vla1JvdyArIGlycmVndWxhclJvdztcbiAgICB9XG5cbiAgICBvbkNoYW5nZVN0YXR1cygpIHtcbiAgICAgICAgdGhpcy5tb2RhbERpYWxvZy5zaG93TW9kYWwoRGF5TW9kYWxDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKVxuICAgICAgICAgICAgPyB0aGlzLnVpU2VydmljZS5nZXRSb290VkNSZWYoKVxuICAgICAgICAgICAgOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgY29udGV4dDogeyBkYXRlOiBuZXcgRGF0ZSgpIH1cbiAgICAgICAgfSkudGhlbigoYWN0aW9uOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG59XG4iXX0=