(function(){
    function hourCtrl(){
        var vm=this;
        
       
        vm.newWorkWeek = {
            name: "???",
            workWeek: new Date(),
            mondayStart: "00:00",
            mondayEnd: "00:00",
            mondayTotal: "00:00",
            tuesdayStart: "00:00",
            tuesdayEnd: "00:00",
            wednesdayStart: "00:00",
            wednesdayEnd: "00:00",
            thursdayStart: "00:00",
            thursdayEnd: "00:00",
            fridayStart: "00:00",
            fridayEnd: "00:00",
            saturdayStart: "00:00",
            saturdayEnd: "00:00",
            sundayStart: "00:00",
            sundayEnd: "00:00",
            totalWeek: "00:00"
        };
        vm.workWeeks = [];
        vm.saveWorkWeek = function(){
            var auxCopyWeek = angular.copy(vm.newWorkWeek);
            vm.workWeeks.push(auxCopyWeek);
        }
        vm.totalWeek=function(){
            return ( vm.mondayTotal()+ vm.tuesdayTotal()+vm.wednesdayTotal()+
                    vm.thursdayTotal()+vm.fridayTotal()+ vm.saturdayTotal()+ vm.sundayTotal())-64800000;
           /*return (vm.newWorkWeek.mondayTotal+vm.newWorkWeek.tuesdayTotal+
               vm.newWorkWeek.wednesdayTotal+vm.newWorkWeek.thursdayTotal+
               vm.newWorkWeek.fridayTotal+vm.newWorkWeek.saturdayTotal+
               vm.newWorkWeek.sundayTotal);*/
        }
        vm.mondayTotal=function(){
            if(vm.newWorkWeek.mondayEnd==null || vm.newWorkWeek.mondayStart==null){
                return "00:00";
            }else{
                return (vm.newWorkWeek.mondayEnd-vm.newWorkWeek.mondayStart)-3600000;
            }
            
        }
        vm.tuesdayTotal=function(){
            if(vm.newWorkWeek.tuesdayEnd==null || vm.newWorkWeek.tuesdayStart==null){
                return "00:00";
            }else{
                return (vm.newWorkWeek.tuesdayEnd-vm.newWorkWeek.tuesdayStart)-3600000;
            }
        }
        vm.wednesdayTotal=function(){
            if(vm.newWorkWeek.wednesdayEnd==null || vm.newWorkWeek.wednesdayStart==null){
                return "00:00";
            }else{
                return (vm.newWorkWeek.wednesdayEnd-vm.newWorkWeek.wednesdayStart)-3600000;
            } 
        }
        vm.thursdayTotal=function(){
            if(vm.newWorkWeek.thursdayEnd==null || vm.newWorkWeek.thursdayStart==null){
                return "00:00";
            }else{
                return (vm.newWorkWeek.thursdayEnd-vm.newWorkWeek.thursdayStart)-3600000;
            } 
        }
        vm.fridayTotal=function(){
            if(vm.newWorkWeek.fridayEnd==null || vm.newWorkWeek.fridayStart==null){
                return "00:00";
            }else{
                return (vm.newWorkWeek.fridayEnd-vm.newWorkWeek.fridayStart)-3600000;
            }
        }
        vm.saturdayTotal=function(){
            if(vm.newWorkWeek.saturdayEnd==null || vm.newWorkWeek.saturdayStart==null){
                return "00:00";
            }else{
                return (vm.newWorkWeek.saturdayEnd-vm.newWorkWeek.saturdayStart)-3600000;
            } 
        }
        vm.sundayTotal=function(){
                if(vm.newWorkWeek.sundayEnd==null || vm.newWorkWeek.sundayStart==null){
                    return "00:00";
                }else{
                    return (vm.newWorkWeek.sundayEnd-vm.newWorkWeek.sundayStart)-3600000;
                }   
            }
        vm.semana=function(week){
            return week;
        }
    }
    
    angular.module('adminHours').controller('HourCtrl', hourCtrl);
}());