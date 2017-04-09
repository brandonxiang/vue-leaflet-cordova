<template>
    <div>
        <!--<blur :blur-amount=40 :url="headImg">
          <p class="center headpart"><img :src="headImg"></p>
        </blur>-->
        <f7-list>
            <f7-list-item :title="$t('Language')" smart-select smart-select-open-in="picker">
                <!-- Select with values inside -->
                <select name="language" :onchange="onChange">
                <option value="zh-CN" select>中文</option>
                <option value="en">English</option>
                </select>
            </f7-list-item>
            <f7-list-item :title="$t('About')" link="/"></f7-list-item>
        </f7-list>
    </div>
</template>

<script>

export default {
    computed: {
        currentLang: {
            get: function () {
                const locale = this.$store.state.i18n.locale;
                if (locale === 'zh-CN') {
                    return ['中文']
                } else if (locale === 'en') {
                    return ['English']
                }
                return null
            }
        }
    },
    data() {
        return {
            //   headImg:require("../assets/headpart.jpg"),
            langs: [['中文', 'English']],
        }
    },
    methods: {
        onChange(val) {
            console.log(val)
            if (val[0] === '中文') {
                this.$i18n.set('zh-CN')
            } else if (val[0] === 'English') {
                this.$i18n.set('en')
            }
        },
    },
}
</script>

<style>
.center {
    text-align: center;
}

.headpart {
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
}

.headpart img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
}

.picker-buttons {
    margin: 0 15px;
}
</style>