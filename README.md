# charts-visualization-libs


### [**Apache ECharts**](https://www.npmjs.com/package/echarts) 
Size: 41.7 MB
### [**D3**](https://www.npmjs.com/package/d3)
Size: 873 kB

Отказываемся от **Apache ECharts** из-за большого размера и отсутствия нативной поддержки реакта.   
Также отказываемся от **D3**, т.к. есть популярный **recharts** основанный на **D3** и заточенный под реакт.
#
### [**frappe-charts**](https://www.npmjs.com/package/frappe-charts)
React: Wrapper  
TypeScript: TS  
Size: 1.03 MB  
Dependecies: **0**  
Used by: [2](https://github.com/frappe/charts/network/dependents)  
Documentation: [Yes](https://frappe.io/charts/docs)  
Customization: **No**  
Drawing Method: SVG

Отказываемся, т.к. нет глубокой кастомизации, api взаимодействия с библиотекой не очень удобное (только пропсы), можно установить только строковые метки по X, что означает невозможность отображения баров с разными интервалами. Враппер, не работает! (даже первый пример с [гитхаба](https://github.com/sheshbabu/react-frappe-charts) не воспроизводится и враппер просто выдает ошибку). В целом, либа простая предлагает набор готовых типов графиков и не предназначена для кастомизации их отрисовки (кроме цвета) или создания собственных. Поэтому она не подходит.

#
### [**apexcharts**](https://www.npmjs.com/package/apexcharts)
React: Wrapper  
TypeScript: TS  
Size: 4.37 MB  
Dependecies: [6](https://www.npmjs.com/package/apexcharts?activeTab=dependencies)  
Used by: [1](https://github.com/apexcharts/apexcharts.js/network/dependents)  
Documentation: [Yes](https://apexcharts.com/docs/installation/)  
Customization: **No**  
Drawing Method: SVG

Библиотека предоставляет большой набор готовых графиков, которые могут подойти. Однако все взаимодействие с компонентом библы ограничено пропсами, нет возможности создать свои графики или как либо настроить стили готовых, помимо цвета.  
Думаю не стоит использовать эту библиотеку, т.к. даже если сейчас можно будет ее, как-то адаптировать под нас, то в будущем если мы захотим добавить тултип или зум, эти вещи будут выглядеть и работать так как задано библиотекой, а не так как захотим мы.

#

### [**recharts**](https://www.npmjs.com/package/recharts)
React: Native  
TypeScript: TS  
Size: 4.7 MB  
Dependecies: [9](https://www.npmjs.com/package/recharts?activeTab=dependencies)  
Used by: [123k](https://github.com/recharts/recharts/network/dependents)  
Documentation: [Yes](https://recharts.org/en-US/)  
Customization: **Yes**  
Drawing Method: SVG

### [**victory**](https://www.npmjs.com/package/victory)
React: Native  
TypeScript: TS  
Size: 2.96 MB  
Dependecies: [27](https://www.npmjs.com/package/victory?activeTab=dependencies)  
Used by: [20.5k](https://github.com/FormidableLabs/victory/network/dependents)  
Documentation: [Yes](https://formidable.com/open-source/victory/)  
Customization: **Yes**  
Drawing Method: SVG

### [**react-vis**](https://www.npmjs.com/package/react-vis)
React: Native  
TypeScript: DTS  
Size: 2.18 MB  
Dependecies: [17](https://www.npmjs.com/package/react-vis?activeTab=dependencies)  
Used by: [11.6k](https://github.com/uber/react-vis/network/dependents)  
Documentation: [Yes](http://uber.github.io/react-vis/documentation/getting-started/creating-a-new-react-vis-project)  
Customization: **Yes**  
Drawing Method: SVG / Canvas

При помощи каждой из 3х библиотек удалось реализовать кастомную диаграмму. Лучшая реализация удалась с использованием **recharts**, т.к. все элементы необходимого вида столбца, являются частями самого столбца. В случае реализации на **victory** и **react-vis**, нужный столбец отрисован через комбинацию двух компонентов и манипуляции с исходнымии данными.  
У всех библиотек хорошие показатели используемости, по сравнению с **apexcharts** и **frappe-charts**. Но на практике, при разработке кастомных диаграмм на каждой из либ, лучше всего гуглятся проблемы и вопросы для **recharts** (ответы помогают).
В процессе использования документаций библиотек, самой неудобной оказалась дока **react-vis**. У **recharts** и **victory**, хорошие доки. Но у доки **recharts** есть раздел с примера, где показан и код и итоговый результат.  
У **react-vis** есть преимущество в виде возможности отрисовки через Canvas (что быстрее SVG), однако проект не предполагает больших и сложных графиков, а также большого их количества. Также через Canvas не удастся рисовать кастомные графики.

Отдаю свое предпочтение библиотеке **recharts**, исходя из выше сказанного и результатов работы.
