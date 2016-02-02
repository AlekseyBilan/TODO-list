var todoModel = (function () {

    var _data = [];

    function _addItem(name, duedate, description, completed) {
        console.log(name, 'duedate = ', duedate, description, completed);
        console.log(getCurrentId());
        if(!completed){
            completed = 'false';
        }
        _data.push({
            id: getCurrentId(),
            name: name,
            duedate: duedate,
            description: description,
            completed: completed
        });
    }

    function _removeItem(id) {
        _data.forEach(function (e, index) {
            if (e.id == id) {
                _data.splice(index, 1);
            }
        })
    }

    function _updateItem(id, value) {
        _data.forEach(function (e, index) {
            if (e.id == id) {
                _data[index] = value;
            }
        })
    }

    function _save() {
        // второй параметр - функция, которая удаляет специальное свойство добавляемое angularJS для отслеживания дубликатов 
        // http://mutablethought.com/2013/04/25/angular-js-ng-repeat-no-longer-allowing-duplicates/
        window.localStorage["tasks"] = JSON.stringify(_data, function (key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val
        });
    }

    function _read() {
        var temp = window.localStorage["tasks"]
        //{"id":1, "name":"adsvsdsvsdv", "description":"wdafawdfaf", "completed":true}

        if (!temp) _data = [];
        else _data = JSON.parse(temp);

        return _data;
    }

    function getCurrentId() {
        if (!_data || _data.length == 0) return 0;
        else return _data[_data.length - 1].id++;
    }

    return {
        data: _data,
        addItem: _addItem,
        updateItem: _updateItem,
        removeItem: _removeItem,
        save: _save,
        read: _read
    };

})();
/*


    Задание 2
Реализуйте SPA приложение, в котором пользователю представляется пройти тест из 5 вопросов, в каждом вопросе
 по 4 варианта ответа. Вопросы должны выбираться с помощью radio-button и когда выбран, например, вопрос №1,
 то на странице должны появится варианты ответа только для этого вопроса. В конце тестирования отобразите результат теста.
 При решении данной задачи используйте директиву ng-switch.

  */
