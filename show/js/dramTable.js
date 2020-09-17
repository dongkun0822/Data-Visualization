// 指定图表的配置项和数据
function createRandomItemStyle() {
    return {
        normal: {
            color: 'rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')'
        }
    };
}

function DrawTable() {
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title: {
            text: 'Google Trends',
            link: 'http://www.google.com/trends/hottrends'
        },
        tooltip: {
            show: true
        },
        series: [{
            name: 'Google Trends',
            type: 'wordCloud',
            size: ['80%', '80%'],
            textRotation : [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
                enable: true,
                minSize: 14
            },
            data: [
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[1],
                    value: data2[1],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },
                {
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },{
                    name: data1[0],
                    value: data2[0],
                    itemStyle: createRandomItemStyle()
                },








            ]
        }]
    };
    myChart.setOption(option);
    window.onresize = myChart.resize;
}