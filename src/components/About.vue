<template>
    <div>
        <!--<blur :blur-amount=40 :url="headImg">
            <p class="center headpart"><img :src="headImg"></p>
        </blur>-->
        <f7-list>
            <f7-list-item :title="$t('Name')" value="项伟平"></f7-list-item>
            <f7-list-item :title="$t('Jianshu')" value="brandonxiang" link="http://www.jianshu.com/u/64467c788eb7" is-link></f7-list-item>
            <f7-list-item :title="$t('Weibo')" value="一久肆叁" link="http://weibo.com/xwpisme" is-link></f7-list-item>
            <f7-list-item :title="$t('Zhihu')" value="项伟平" link="https://www.zhihu.com/people/xiang-wei-ping" is-link></f7-list-item>
            <f7-list-item title="QQ" value="1542453460"></f7-list-item>
            <f7-list-item :title="$t('Wechat')" value="brandonxiang"></f7-list-item>
            <f7-list-item title="Github" value="brandonxiang" link="https://github.com/brandonxiang" is-link></f7-list-item>
            <f7-list-item :title="$t('WOA')">
                <img class="center padding" :src="QrImg">
            </f7-list-item>
        </f7-list>
    </div>
</template>

<script>
// import {Qrcode,Blur,Group,Cell} from 'vux'

export default {
    data() {
        return {
            headImg: require("../assets/headpart.jpg"),
            QrImg: require("../assets/qrcode.jpg"),
        }
    }
}
</script>

<style>

</style>