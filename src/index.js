import { webview } from "@/system"
import { effect$ } from "@auto.pro/core"


// effect$是作业线程，当core的权限全部到位后，effect$才开始运作
effect$.subscribe(() => {
    toastLog('权限已经到位')

    // 监听html的prompt('submit', JSON.stringify(param))
    webview.on('toastLog').subscribe(([str, done]) => {
        toastLog(str);
        done();
    });

    webview.on('randomNum').subscribe(([_param, done]) => {
        done(random(1, 100));
    });
})