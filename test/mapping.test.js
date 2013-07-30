var util=require('util'),
    assert=require('assert'),
    transliteration=require('../lib/transliteration.cyr');


exports['test Аa']=function(test){
    test.equal('Alushta',transliteration.transliterate('Алушта'));
    test.equal('Andrii',transliteration.transliterate('Андрій'));
    test.done();
};

exports['test Бб']=function(test){
    test.equal('Borshchagivka',transliteration.transliterate('Борщагівка'));
    test.equal('Borysenko',transliteration.transliterate('Борисенко'));
    test.done();
};

exports['test Вв']=function(test){
    test.equal('Vinnytsia',transliteration.transliterate('Вінниця'));
    test.equal('Volodymyr',transliteration.transliterate('Володимир'));
    test.done();
};

exports['test Гг']=function(test){
    test.equal('Gadiach',transliteration.transliterate('Гадяч'));
    test.equal('Bogdan',transliteration.transliterate('Богдан'));
    test.equal('Zghurskyi',transliteration.transliterate('Згурський'));
    test.done();
};

exports['test Ґґ']=function(test){
    test.equal('Galagan',transliteration.transliterate('Ґалаґан'));
    test.equal('Gorgany',transliteration.transliterate('Ґорґани'));
    test.done();
};

exports['test Дд']=function(test){
    test.equal('Donetsk',transliteration.transliterate('Донецьк'));
    test.equal('Dmytro',transliteration.transliterate('Дмитро'));
    test.done();
};

exports['test Ее']=function(test){
    test.equal('Rivne',transliteration.transliterate('Рівне'));
    test.equal('Oleg',transliteration.transliterate('Олег'));
    test.equal('Esman',transliteration.transliterate('Есмань'));
    test.done();
};

exports['test Ёё']=function(test){
    test.equal('Ezh',transliteration.transliterate('Ёж'));
    test.equal('Techet',transliteration.transliterate('Течёт'));
    test.done();
};

exports['test Єє']=function(test){
    test.equal('Yenakiieve',transliteration.transliterate('Єнакієве'));
    test.equal('Gaievych',transliteration.transliterate('Гаєвич'));
    test.equal('Koropie',transliteration.transliterate("Короп'є"));
    test.done();
};

exports['test Жж']=function(test){
    test.equal('Zhytomyr',transliteration.transliterate('Житомир'));
    test.equal('Zhanna',transliteration.transliterate('Жанна'));
    test.equal('Zhezheliv',transliteration.transliterate('Жежелів'));
    test.done();
};

exports['test Зз']=function(test){
    test.equal('Zakarpattia',transliteration.transliterate('Закарпаття'));
    test.equal('Kazymyrchuk',transliteration.transliterate('Казимирчук'));
    test.done();
};

exports['test Ии']=function(test){
    test.equal('Medvyn',transliteration.transliterate('Медвин'));
    test.equal('Mykhailenko',transliteration.transliterate('Михайленко'));
    test.done();
};

exports['test Іі']=function(test){
    test.equal('Ivankiv',transliteration.transliterate('Іванків'));
    test.equal('Ivashchenko',transliteration.transliterate('Іващенко'));
    test.done();
};

exports['test Її']=function(test){
    test.equal('Yizhakevych',transliteration.transliterate('Їжакевич'));
    test.equal('Kadyivka',transliteration.transliterate('Кадиївка'));
    test.equal('Marine',transliteration.transliterate("Мар'їне"));
    test.done();
};

exports['test Йй']=function(test){
    test.equal('Yosypivka',transliteration.transliterate('Йосипівка'));
    test.equal('Stryi',transliteration.transliterate('Стрий'));
    test.equal('Oleksii',transliteration.transliterate("Олексій"));
    test.done();
};

exports['test Кк']=function(test){
    test.equal('Kyiv',transliteration.transliterate('Київ'));
    test.equal('Kovalenko',transliteration.transliterate('Коваленко'));
    test.done();
};

exports['test Лл']=function(test){
    test.equal('Lebedyn',transliteration.transliterate('Лебедин'));
    test.equal('Leonid',transliteration.transliterate('Леонід'));
    test.done();
};

exports['test Мм']=function(test){
    test.equal('Mykolaiv',transliteration.transliterate('Миколаїв'));
    test.equal('Marynych',transliteration.transliterate('Маринич'));
    test.done();
};

exports['test Нн']=function(test){
    test.equal('Nizhyn',transliteration.transliterate('Ніжин'));
    test.equal('Nataliia',transliteration.transliterate('Наталія'));
    test.done();
};

exports['test Нн']=function(test){
    test.equal('Nizhyn',transliteration.transliterate('Ніжин'));
    test.equal('Nataliia',transliteration.transliterate('Наталія'));
    test.done();
};

exports['test Оо']=function(test){
    test.equal('Odesa',transliteration.transliterate('Одеса'));
    test.equal('Onyshchenko',transliteration.transliterate('Онищенко'));
    test.done();
};

exports['test Пп']=function(test){
    test.equal('Poltava',transliteration.transliterate('Полтава'));
    test.equal('Petro',transliteration.transliterate('Петро'));
    test.done();
};

exports['test Рр']=function(test){
    test.equal('Reshetylivka',transliteration.transliterate('Решетилівка'));
    test.equal('Rybchynskyi',transliteration.transliterate('Рибчинський'));
    test.done();
};

exports['test Сс']=function(test){
    test.equal('Sumy',transliteration.transliterate('Суми'));
    test.equal('Solomiia',transliteration.transliterate('Соломія'));
    test.done();
};

exports['test Тт']=function(test){
    test.equal('Ternopil',transliteration.transliterate('Тернопіль'));
    test.equal('Trots',transliteration.transliterate('Троць'));
    test.done();
};

exports['test Уу']=function(test){
    test.equal('Uzhgorod',transliteration.transliterate('Ужгород'));
    test.equal('Uliana',transliteration.transliterate('Уляна'));
    test.done();
};

exports['test Фф']=function(test){
    test.equal('Fastiv',transliteration.transliterate('Фастів'));
    test.equal('Filipchuk',transliteration.transliterate('Філіпчук'));
    test.done();
};

exports['test Хх']=function(test){
    test.equal('Kharkiv',transliteration.transliterate('Харків'));
    test.equal('Khrystyna',transliteration.transliterate('Христина'));
    test.done();
};

exports['test Цц']=function(test){
    test.equal('Bila Tserkva',transliteration.transliterate('Біла Церква'));
    test.equal('Stetsenko',transliteration.transliterate('Стеценко'));
    test.done();
};

exports['test Чч']=function(test){
    test.equal('Chernivtsi',transliteration.transliterate('Чернівці'));
    test.equal('Shevchenko',transliteration.transliterate('Шевченко'));
    test.done();
};

exports['test Шш']=function(test){
    test.equal('Shostka',transliteration.transliterate('Шостка'));
    test.equal('Kyshenky',transliteration.transliterate('Кишеньки'));
    test.done();
};

exports['test Щщ']=function(test){
    test.equal('Shcherbukhy',transliteration.transliterate('Щербухи'));
    test.equal('Goshcha',transliteration.transliterate('Гоща'));
    test.equal('Garashchenko',transliteration.transliterate('Гаращенко'));
    test.done();
};

exports['test Ыы']=function(test){
    test.equal('Ynkha',transliteration.transliterate('Ынха'));
    test.equal('Ryba',transliteration.transliterate('Рыба'));
    test.done();
};

exports['test Ээ']=function(test){
    test.equal('Emulsyia',transliteration.transliterate('Эмульсия'));
    test.equal('eto',transliteration.transliterate('это'));
    test.done();
};

exports['test Юю']=function(test){
    test.equal('Yurii',transliteration.transliterate('Юрій'));
    test.equal('Koriukivka',transliteration.transliterate('Корюківка'));
    test.done();
};

exports['test Яя']=function(test){
    test.equal('Yagotyn',transliteration.transliterate('Яготин'));
    test.equal('Yaroshenko',transliteration.transliterate('Ярошенко'));
    test.equal('Kostiantyn',transliteration.transliterate('Костянтин'));
    test.equal('Znamianka',transliteration.transliterate("Знам'янка"));
    test.equal('Feodosiia',transliteration.transliterate('Феодосія'));
    test.done();
};

exports['test minus']=function(test){
    test.equal('Volodymyr-Volynskyi',transliteration.transliterate('Володимир-Волинський'));
    test.done();
};

exports['test underscore']=function(test){
    test.equal('Volodymyr_Volynskyi',transliteration.transliterate('Володимир_Волинський'));
    test.done();
};

exports['test empty and null string']=function(test){
    test.equal('',transliteration.transliterate(''));
    test.equal('',transliteration.transliterate());
    test.done();
};

exports['test multiple zg']=function(test){
    test.equal('zghazgh',transliteration.transliterate('згaзг'));
    test.done();
};
