
import { BaseControlComponent } from './baseControl/BaseControlComponent.js'
import { DrawerControlComponent } from './controlComponent/DrawerControlComponent.js'


// 修改2
// 控件的数据
let data = {}
// 控件的样式
let controlComponents = [
    {
        "name": "DrawerControlComponent",
        
        "baseParm": {
            "labelId":"drawerControlComponent",
            "dimension": {
                "width": "35vw",
                "height": "80vh"
            },
            "backgrounds": {
                "backgroundsColor": "rgba(0,0,0,0   )"
            },
            "layout":{
                "display":{
                    "display":"flex",
                    "flexDirection":"row"
                }
            }
        },
        "handleParm": {
            "baseParm": {
                "labelId":"handleControlComponent",
                "dimension": {
                    "width": "5vw",
                    "height": "10vh"
                },
                "backgrounds": {
                    "backgroundsColor": "#444444"
                },
                "event":{
                    
                }
            }
        },
        "boxParm": {
            "baseParm": {
                "labelId":"boxControlComponent",
                "dimension": {
                    "width": "30vw",
                    "height": "80vh"
                },
                "backgrounds": {
                    "backgroundsColor": "blue"
                }
            }
        }
    }
];
// 父div
let app = document.getElementById("app");


let main = function () {
    // 1. 清除默认样式
    clearDefaultStyle();

    // 2. 渲染
    controlComponents.forEach(element => {
        renderControls(element)
    });

}

/**
 * 渲染控件
 * 返回控件对象
 */
let renderControls = function (controlStyle) {
    let drawerControlComponent = new DrawerControlComponent(controlStyle);
    drawerControlComponent.render(app);
    
}
let clearDefaultStyle = function () {
    let body = document.getElementsByTagName("body");
    body[0].style.margin = "0px";
}

main();











