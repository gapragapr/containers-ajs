export default class ErrorRepository{
    constructor(){
        this.errors = new Map();

        this.errors.set(666, 'Вы демон, сэр');
        this.errors.set(998, 'Некорректное значени');
        this.errors.set(404, 'Страница не найдена');
        this.errors.set(712, 'Потеряно соединение');
        this.errors.set(101, 'Отсутсвуют данные запроса');
        this.errors.set(14, 'Тебе 14, какие могут быть ошибки?');
    }

    translate(code){
        if (!this.errors.has(code)){
            return 'Unknown error'
        }
        else{
            return this.errors.get(code);
        }
    }
}