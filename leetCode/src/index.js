window.onload = function(){
    const str = `<div class="foot" >
                    <div class="f_title">欢迎访问主页</div>
                    <div class="f_list">个人github：
                        <a target="_blank" href="https://github.com/zhuangweizhan">https://github.com/zhuangweizhan</a>
                    </div>
                    <div class="f_list">个人掘金：
                        <a target="_blank" href="https://juejin.im/user/5e8fddc9e51d4546be39a558">https://juejin.im/user/5e8fddc9e51d4546be39a558</a>
                    </div>
                </div>`
    document.querySelector('body').innerHTML = document.querySelector("body").innerHTML   + str  ;
}