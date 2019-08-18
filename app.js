(function  () {
   'use strict'; 

    angular.module('ShoppingListCheckOff', [])

    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);

    ToBuyController.$inject = ['ShoppingListService'];

    function ToBuyController (ShoppingListService) {

        this.buyList = ShoppingListService.getToBuyList();

        this.everythingIsBought = this.buyList.length == 0;

        this.onBought = function (index) {
            ShoppingListService.boughtItem(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    
    function AlreadyBoughtController (ShoppingListService) {
        this.boughtList = ShoppingListService.getBoughtList();

        this.nothingBought = this.boughtList.length == 0;
    }

    function ShoppingListService () {
        
        var toBuyList = [{
            name: 'Chips',
            quantity: 7
        }, {
            name: 'cookies',
            quantity: 10
        }, {
            name: 'Water',
            quantity: 15
        }];

        var boughtList = [];

        this.boughtItem = function (index) {
            var item = toBuyList[index];
            boughtList.push(item);
            toBuyList.splice(index, 1);
        };

        this.getToBuyList = function () {
            return toBuyList;
        };

        this.getBoughtList = function () {
            return boughtList;
        };
    }
    
}) ();